export * from "./TextBox";

export interface TextBoxInterface<T> {
  className?: string;
  name: keyof T & string;
  onChange?: (param: string) => void;
}
