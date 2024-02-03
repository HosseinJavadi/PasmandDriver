import { ButtonHTMLAttributes } from "react";
import { FormInterface } from "../components/Form";
import { TextBoxInterface } from "../components/TextBox";
import { ButtonInterface } from "../components/Button";
import { ErrorResponseInterface } from "../interfaces";

export * from "./useDispatch";
export * from "./useSelector";
export * from "./useForm";
export * from "./useFetch";
//useForm
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
  Submit(props: Omit<ButtonInterface, "type">): JSX.Element;
};

export type MappedValidation<T> = {
  [Prop in keyof T as `RoleFor${Capitalize<Prop & string>}`]+?: (
    param: T[Prop]
  ) => boolean | string;
};

export interface UseFormInterface<T> {
  validations?: MappedValidation<T>;
}
//useFetch

export interface RequestInterface<TPayload, TQuery> {
  header?: object;
  body?: TPayload;
  query?: TQuery;
  method: "Post" | "Get";
  url: string;
}
export interface ResponseInterface<T> {
  data?: T;
  status: "error" | "success" | "pending";
  error: Error | null;
  reFetch?: () => void;
}
export interface UseFetchRequest<TData, TPayload, TQuery> {
  request: RequestInterface<TPayload, TQuery>;
  errorHandler?: (error: ErrorResponseInterface | null) => void;
  onSuccess?: (data: TData) => void;
  fetchInitial?: boolean;
}
export interface UseFetchResponse<TData, TPayload, TQuery> {
  data?: ResponseInterface<TData>;
  reFetch: (payload?: TPayload, query?: TQuery) => void;
  requestDetail: RequestInterface<TPayload, TQuery>;
  isLoading: boolean;
}
