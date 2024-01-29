import React, { ReactElement } from "react";
import { Header } from "../Header/Header";

export const AppLayoutPrimary: React.FC<{
  children: ReactElement | Array<ReactElement>;
}> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
