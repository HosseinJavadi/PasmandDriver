import { CollapseInterface } from ".";
import { Icon } from "../../asset/icons";

const Collapse = ({
  onClick,
  keyItem,
  title,
  className,
  element,
  icon,
  index,
}: CollapseInterface) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full select-none ">
        <div
          onClick={() => {
            onClick?.(keyItem);
          }}
          className={`  ${
            className?.className ?? ""
          }  flex justify-between items-center  relative p-2 bg-secondaryDark w-full transition-all border border-b-white
                      cursor-pointer duration-200
                     ${
                       index
                         ? " !bg-primaryLight  !text-white rounded-b-2xl"
                         : ""
                     }`}
        >
          <div className="flex gap-1 justify-center items-center">
            <Icon
              iconType={icon}
              className={` text-xl ${index ? "!text-white" : ""}   ${
                className?.iconClass ?? ""
              }`}
            />
            <span className={`${className?.titleClass ?? ""} !text-white`}>
              {title}
            </span>
          </div>

          <Icon
            iconType="Dwon"
            className={` text-xs  ${
              index ? "duration-300 rotate-180" : "duration-300 rotate-0"
            }`}
          />
        </div>
        <div className={`   w-full ${index ? "block" : "hidden"}`}>
          {element}
        </div>
      </div>
    </>
  );
};

export default Collapse;
