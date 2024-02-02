import { FormInterface } from "../components/Form";
import { TextBoxInterface } from "../components/TextBox";

export * from "./useDispatch";
export * from "./useSelector";
export * from "./useForm";

export type ValidationHandlersType = {
  name: string;
  event: (value: string) => boolean | string;
};
export interface CreatorFormInterface extends JSX.Element {}
export interface TextBoxFormInterface<T> extends TextBoxInterface<T> {
  classNameParent?: string;
  classNameError?: string;
}
export type FormHandler<T> = {
  ({ children, className, onSubmit }: FormInterface<T>): CreatorFormInterface;
  TextBox(props: TextBoxFormInterface<T>): JSX.Element;
};

export type MappedValidation<T> = {
  [Prop in keyof T as `RoleFor${Capitalize<Prop & string>}`]+?: (
    param: T[Prop]
  ) => boolean | string;
};

export interface UseFormInterface<T> {
  validations?: MappedValidation<T>;
}
