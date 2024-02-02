import React from "react";
import { FormInterface } from ".";

export const Form = <T extends {}>({
  children,
  className = "",
  onSubmit,
}: FormInterface<T>) => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.();
  };
  return (
    <>
      <form onSubmit={submit} className={`p-2 ${className}`}>
        {children}
      </form>
    </>
  );
};
