export * from "./TextBox";

export interface TextBoxInterface<T> {
  className?: string;
  name: keyof T & string;
  placeholder?: string;
  type?: "password" | "text";
  onChange?: (param: string) => void;
}
