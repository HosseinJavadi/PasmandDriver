import { ButtonInterface } from ".";
import { Icon } from "../../asset/icons";

export const Button: React.FC<ButtonInterface> = ({
  title,
  icon,
  className,
  children,
  type = "Normal",
  letter,
  onClick,
}) => {
  var element: React.ReactNode;
  var classNameObj: typeof className | undefined = className;

  switch (type) {
    case "Icon":
      element = (
        <>
          {title}
          <div className="flex justify-center items-center">
            <Icon iconType={icon!} className={classNameObj?.iconClassName} />
            {letter}
          </div>
        </>
      );
      className = {
        className:
          classNameObj?.className +
          " flex justify-between items-center bg-primaryLight border-primary p-2 rounded-md text-white  shadow-inner",
      };
      break;
    case "Normal":
      element = <>{title}</>;
      className = {
        ...className,
        className:
          classNameObj?.className +
          " flex justify-center items-center bg-primaryLight border-primary p-2 rounded-md  text-white shadow-inner",
      };
      break;
    default:
      element = children!;
      className = {
        ...className,
        className:
          classNameObj?.className +
          " flex justify-center items-center bg-primaryLight border-primary p-2 rounded-md  text-white shadow-inner",
      };
  }
  return (
    <>
      <button className={className.className} onClick={() => onClick?.()}>
        {element}
      </button>
    </>
  );
};