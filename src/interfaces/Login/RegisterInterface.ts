import { UserLoginInterface } from "./UserLoginInterface";

export interface RegisterInterface extends UserLoginInterface {
  newPassword: string;
  codeVerify: number;
}
