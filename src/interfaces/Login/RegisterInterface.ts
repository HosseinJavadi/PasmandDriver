import { UserLoginInterface } from "./UserLoginInterface";

export interface RegisterInterface extends UserLoginInterface {
  code: number;
}
