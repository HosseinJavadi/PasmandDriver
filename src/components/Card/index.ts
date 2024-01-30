import { RequestDriverInterface } from "../../interfaces/RequestDriverInterface";
import { RequestInterface } from "../../interfaces/RequestInterface";

export * from "./RequestCard";
export * from "./RequestDriverCard";
export * from "./LearnPostCard";

export interface RequestCardInterface extends RequestInterface {}

export interface RequestDriverCardInterface extends RequestDriverInterface {
  className?: string;
}

export interface LearnPostCardInterface {
  id: number;
  imgSrc: string;
  title: string;
  text: string;
}
