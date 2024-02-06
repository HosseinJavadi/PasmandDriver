import { TimesheetRequestInterface } from "../../interfaces/Timesheet";

export * from "./Slider";
export * from "./RequestSwiper";
export interface SliderInterface {
  className?: string;
}

export interface RequestSwiperInterface {
  className?: string;
  items?: Array<TimesheetRequestInterface>;
}
