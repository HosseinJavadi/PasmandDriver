import React, { ButtonHTMLAttributes, useEffect, useId, useState } from "react";
import { Form, FormInterface } from "../components/Form";
import {
  CreatorFormInterface,
  FormHandler,
  MappedValidation,
  TextBoxFormInterface,
  UseFormInterface,
  ValidationHandlersType,
} from ".";
import { TextBox } from "../components/TextBox";
import { Button, ButtonInterface } from "../components/Button";
import { toast } from "react-toastify";

const ValidationHandlers: Array<ValidationHandlersType> = [];
const CheckValidation = (
  name: string,
  value: string,
  onIsValid?: (value: string) => void,
  onInValid?: (errorMsg: string) => void
) => {
  const indexValidFunc = ValidationHandlers.findIndex(
    (n) =>
      n.name ===
      `RoleFor${(name as string)[0].toUpperCase() + (name as string).slice(1)}`
  );
  if (indexValidFunc === -1) {
    onIsValid?.(value);
    return;
  }
  const validaiton = ValidationHandlers[indexValidFunc].event(value);
  typeof validaiton === "boolean" && validaiton
    ? onIsValid?.(value)
    : onInValid?.(
        typeof validaiton === "boolean" ? `${name} معتبر نمیباشد` : validaiton
      );
};
const FormCreator = <T extends {}>({
  children,
  className,
  onSubmit,
}: FormInterface<T>): CreatorFormInterface => {
  const submit = (e: any) => {
    var countError = 0;
    const inValid = (message: string) => {
      toast.error(message);
      countError++;
    };

    Object.getOwnPropertyNames(e).forEach((n) => {
      CheckValidation(n, e[n], undefined, inValid);
    });

    countError === 0 && onSubmit?.(e as T);
  };
  return (
    <Form<T> className={className} onSubmit={submit}>
      {children}
    </Form>
  );
};

FormCreator.TextBox = function ({
  name,
  className = "",
  onChange,
  classNameParent = "",
  classNameError = "",
  placeholder,
}: TextBoxFormInterface<unknown>) {
  const id = `${name}_${Math.random()}`;
  const inValid = (message: string) => {
    document.getElementById(id)!.innerText = message;
  };
  const isValid = (value: string) => {
    onChange?.(value);
    document.getElementById(id)!.innerText = "";
  };
  return (
    <div className={`relative ${classNameParent}`}>
      <TextBox
        name={name}
        className={className}
        onChange={(param) => CheckValidation(name, param, isValid, inValid)}
        placeholder={placeholder}
      />
      <p id={id} className={`text-danger w-full ${classNameError} mt-2`}></p>
    </div>
  );
};
FormCreator.Submit = function (
  props: Omit<ButtonInterface, "type">
): React.ReactElement {
  return (
    <>
      <Button {...props} type="submit" />
    </>
  );
};
export const useForm = <T extends {}>({
  validations,
}: UseFormInterface<T>): FormHandler<T> => {
  useEffect(() => {
    validations &&
      Object.getOwnPropertyNames(validations).forEach((n) => {
        ValidationHandlers.push({
          name: n,
          event: validations[n as keyof MappedValidation<unknown>],
        });
      });
  }, []);
  return FormCreator<T>;
};
