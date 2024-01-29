import { ReactComponent as Menu } from "./menu.svg";
import { ReactComponent as Back } from "./back.svg";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as User } from "./user.svg";
import { ReactComponent as Question } from "./question.svg";
import { ReactComponent as Letter } from "./letter.svg";
import { ReactComponent as Help } from "./help.svg";
import { ReactComponent as Report } from "./report.svg";
import { ReactComponent as TV } from "./tv.svg";
import { ReactComponent as xCircle } from "./xCircle.svg";
import { ReactComponent as Stop } from "./stop.svg";
import { ReactComponent as Dwon } from "./chevronDown.svg";

const Icons = {
  Menu,
  Back,
  Star,
  User,
  Question,
  Letter,
  Help,
  Report,
  TV,
  xCircle,
  Stop,
  Dwon,
};
export type IconsType = keyof typeof Icons;

export default Icons;