import React, { useEffect, useId, useState } from "react";
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
  return (
    <Form<T> className={className} onSubmit={onSubmit}>
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
      />
      <p id={id} className={`text-danger w-full ${classNameError} mt-2`}></p>
    </div>
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
