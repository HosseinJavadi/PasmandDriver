import { IconsType } from "../../asset/icons/svg";

enum ButtonEnum {
  Normal,
  Icon,
  None,
}
export interface ButtonInterface {
  btnType?: keyof typeof ButtonEnum;
  type?: "submit" | "button";
  title?: string;
  className?: { className?: string; iconClassName?: string };
  icon?: IconsType;
  letter?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
export * from "./Button";
