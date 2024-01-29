import { IconsType } from "./svg";

export interface IconInterface {
  className?: string;
  onClick?: () => void;
  iconType: IconsType;
}
