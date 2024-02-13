import { ReactNode } from "react";
import { TimesheetRequestInterface } from "../../interfaces/Timesheet";

export * from "./Modal";
export * from "./showDetailRequestModal";

export interface ModalInterface {
  isOpen: boolean;
  title: string;
  className?: string;
  onAfterClose?: () => void;
  onAfterOpen?: () => void;
  children?: ReactNode;
  onRequestHide?: () => void;
}
export interface SaveRequestModalInterface
  extends Omit<ModalInterface, "title"> {
  title?: string;
  timeSheetRequest?: TimesheetRequestInterface;
}
