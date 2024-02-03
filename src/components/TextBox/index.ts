export * from "./TextBox";

export interface TextBoxInterface<T> {
  className?: string;
  name: keyof T & string;
  placeholder?: string;
  onChange?: (param: string) => void;
}
