import { IconInterface } from "./@type";
import Icons from "./svg";
export const Icon = ({ className = "", onClick, iconType }: IconInterface) => {
  const SVG = Icons[iconType];
  return <SVG className={`h-8 w-8 ${className}`} onClick={() => onClick?.()} />;
};
