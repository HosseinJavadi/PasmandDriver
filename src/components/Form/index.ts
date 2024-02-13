import { ReactNode } from "react";

export * from "./Form";

export interface FormInterface<T> {
  children?: ReactNode;
  onSubmit?: (e: T) => void;
  className?: string;
}
