import { IconsType } from "../../asset/icons/svg";
import { RequestDriverInterface } from "../../interfaces/RequestDriverInterface";
import {
  RequestInterface,
  RequestStatusEnum,
} from "../../interfaces/RequestInterface";

export * from "./RequestCard";
export * from "./RequestDriverCard";
export * from "./LearnPostCard";

export type RequestMode = {
  color: string;
  icon: IconsType;
};
export let requestMode: { [id: string]: RequestMode } = {};
requestMode[RequestStatusEnum.DriverCanceled] = {
  color: "text-danger",
  icon: "xCircle",
};
requestMode[RequestStatusEnum.UserCanceled] = {
  color: "text-danger",
  icon: "xCircle",
};
requestMode[RequestStatusEnum.Done] = {
  color: "text-success",
  icon: "Tik",
};

export interface RequestCardInterface extends RequestInterface {}

export interface RequestDriverCardInterface extends RequestDriverInterface {
  className?: string;
  isShowStatus?: boolean;
}

export interface LearnPostCardInterface {
  id: number;
  imgSrc: string;
  title: string;
  text: string;
}
