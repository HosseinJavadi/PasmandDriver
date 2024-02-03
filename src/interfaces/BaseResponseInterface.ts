export interface BaseResponseInterface<T> {
  data: T;
  message?: string;
  success?: boolean;
}
export interface BaseResponseObjectInterface<T> {
  data: { data: T };
  message?: string;
  success?: boolean;
}
