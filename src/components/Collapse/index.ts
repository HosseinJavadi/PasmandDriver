import { IconsType } from "../../asset/icons/svg";

export interface CollapseInterface {
  title: string | undefined;
  element?: React.ReactElement | undefined;
  icon: IconsType;
  index?: boolean;
  onClick?: (keyItem?: number) => void;
  keyItem?: number;
  className?: {
    iconClass?: string | undefined;
    titleClass?: string | undefined;
    className?: string | undefined;
  };
}
export interface CollapseGroupInterface {
  className?: string;
  removeElementAfterChange?: boolean;
  items: Array<CollapseInterface>;
}
export * from "./Collapse";
export * from "./CollapseGroup";
