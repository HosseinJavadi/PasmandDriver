export interface BaseResponseInterface<T> {
  data: T;
  message?: string;
  success?: boolean;
}
