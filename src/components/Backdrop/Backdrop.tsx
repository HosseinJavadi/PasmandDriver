import React from "react";
import { BackdropInterface } from ".";

export const Backdrop: React.FC<BackdropInterface> = ({ onClick, isOpen }) => {
  return (
    <>
      <div
        onClick={() => onClick?.()}
        className={`fixed w-full h-full z-3 backdrop-blur-md ${
          isOpen || "hidden"
        }`}
      ></div>
    </>
  );
};
