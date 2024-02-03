import React from "react";

export * from "./Form";

export interface FormInterface<T> {
  children?: Array<React.ReactElement> | React.ReactElement;
  onSubmit?: (e: T) => void;
  className?: string;
}
