import { RequestDriverInterface } from "../../interfaces/RequestDriverInterface";
import { RequestInterface } from "../../interfaces/RequestInterface";

export * from "./RequestCard";
export * from "./RequestDriverCard";

export interface RequestCardInterface extends RequestInterface {}

export interface RequestDriverCardInterface extends RequestDriverInterface {
  className?: string;
}
