import React, { useContext } from "react";
import { DrawerInterface } from ".";
import { DrawerContext } from "../../context";
import { Backdrop } from "../Backdrop";

const Drawer: React.FC<DrawerInterface> = ({ className = "" }) => {
  const drawerContext = useContext(DrawerContext);

  return (
    <>
      <div
        className={`w-96 h-full  fixed bg-primaryLight z-4 right-0 transition-all duration-200 ${
          drawerContext.isOpen ? "translate-x-0" : "translate-x-[100%] "
        } ${className}`}
      ></div>
      <Backdrop
        isOpen={drawerContext.isOpen}
        onClick={() => drawerContext.toggle?.()}
      />
    </>
  );
};

export default Drawer;
