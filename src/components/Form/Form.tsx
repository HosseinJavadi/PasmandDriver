import React from "react";
import { FormInterface } from ".";

export const Form = <T extends {}>({
  children,
  className = "",
  onSubmit,
}: FormInterface<T>) => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const properties = e.currentTarget.getElementsByTagName("input");
    var obj: any = {};
    Array.from(properties).forEach((n) => {
      obj[n.name] = n.value;
    });
    onSubmit?.(obj as T);
  };
  return (
    <>
      <form onSubmit={submit} className={`p-2 ${className}`}>
        {children}
      </form>
    </>
  );
};
