export interface ErrorResponseInterface {
  error: Array<ErrorType>;
  message: string;
}
type ErrorType = {
  field: string;
  message: string;
};
