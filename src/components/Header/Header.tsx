import React, { useContext } from "react";
import { Icon } from "../../asset/icons";
import Drawer from "../Drawer/Drawer";
import { DrawerContext } from "../../context";
import { HeaderInterface } from "./Index";
import { Avatar } from "../Avatar";

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
        <Avatar url={user.avatar} className="!h-full !w-auto" />
      </header>
    </>
  );
};
