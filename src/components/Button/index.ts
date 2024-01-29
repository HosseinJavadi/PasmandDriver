import { IconsType } from "../../asset/icons/svg";

enum ButtonEnum {
  Normal,
  Icon,
  None,
}
export interface ButtonInterface {
  type?: keyof typeof ButtonEnum;
  title?: string;
  className?: { className?: string; iconClassName?: string };
  icon?: IconsType;
  letter?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
export * from "./Button";
