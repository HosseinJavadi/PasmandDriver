import React from "react";

export * from "./Form";

export interface FormInterface<T> {
  children?: React.ReactElement;
  onSubmit?: () => void;
  className?: string;
}
