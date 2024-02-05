import React, { useContext } from "react";
import { Icon } from "../../asset/icons";
import Drawer from "../Drawer/Drawer";
import { DrawerContext } from "../../context";
import { HeaderInterface } from "./Index";
import { Avatar } from "../Avatar";
import { Link } from "react-router-dom";

export const Header: React.FC<HeaderInterface> = ({ user }) => {
  const drawerContext = useContext(DrawerContext);
  return (
    <>
      <Drawer />
      <header className="flex  h-14  justify-between items-center px-3 py-1  z-2">
        <Icon
          className=""
          iconType="Menu"
          onClick={() => drawerContext.toggle?.()}
        />
        <Link to={"/User/Profile"} className="!h-full !w-auto">
          <Avatar
            url={
              user.avatar
                ? `${process.env.REACT_APP_BASE_URL}/${user.avatar}`
                : ""
            }
            className="!h-full !w-full"
          />
        </Link>
      </header>
    </>
  );
};
