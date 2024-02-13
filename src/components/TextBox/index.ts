export * from "./TextBox";

export interface TextBoxInterface<T> {
  className?: string;
  name?: keyof T & string;
  placeholder?: string;
  type?: "password" | "text" | "number";
  value?: string;
  min?: number;
  max?: number;
  onChange?: (param: string) => void;
}
