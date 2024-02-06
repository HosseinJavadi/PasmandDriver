import { IconsType } from "../../asset/icons/svg";
import {
  RequestInterface,
  RequestStatusEnum,
} from "../../interfaces/RequestInterface";

export * from "./RequestCard";
export * from "./RequestDriverCard";
export * from "./LearnPostCard";

export interface LearnPostCardInterface {
  id: number;
  imgSrc: string;
  title: string;
  text: string;
}
