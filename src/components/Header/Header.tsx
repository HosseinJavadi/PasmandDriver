import { useContext } from "react";
import { Icon } from "../../asset/icons";
import Drawer from "../Drawer/Drawer";
import { AppLogo } from "../Logo";
import { DrawerContext } from "../../context";

export const Header = () => {
  const drawerContext = useContext(DrawerContext);
  return (
    <>
      <Drawer />
      <header className="flex  h-12  justify-between items-center px-3 py-6 z-2">
        <Icon
          className=""
          iconType="Menu"
          onClick={() => drawerContext.toggle?.()}
        />
        <AppLogo />
      </header>
    </>
  );
};
