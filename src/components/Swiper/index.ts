import { RequestDriverInterface } from "../../interfaces/RequestDriverInterface";

export * from "./Slider";
export * from "./RequestSwiper";
export interface SliderInterface {
  className?: string;
}

export interface RequestSwiperInterface {
  className?: string;
  items: Array<RequestDriverInterface>;
}
