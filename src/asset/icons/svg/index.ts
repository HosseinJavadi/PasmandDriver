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
import { ReactComponent as Tik } from "./tik.svg";
import { ReactComponent as Identification } from "./identification.svg";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Plus } from "./plusCircle.svg";
import { ReactComponent as Delete } from "./delete.svg";
import { ReactComponent as Moon } from "./moon.svg";
import { ReactComponent as Sun } from "./sun.svg";
import { ReactComponent as Cloud } from "./cloud.svg";
import { ReactComponent as Moving } from "./moving.svg";
import { ReactComponent as Wait } from "./wait.svg";
import { ReactComponent as Pending } from "./pending.svg";
import { ReactComponent as Done } from "./done.svg";
import { ReactComponent as Cancel } from "./cancel.svg";
import { ReactComponent as Accept } from "./accept.svg";
import { ReactComponent as Minus } from "./minus.svg";

const Icons = {
  Minus,
  Accept,
  Pending,
  Cancel,
  Done,
  Wait,
  Delete,
  Menu,
  Moving,
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
  Tik,
  Identification,
  Edit,
  Plus,
  Moon,
  Sun,
  Cloud,
};
export type IconsType = keyof typeof Icons;

export default Icons;
