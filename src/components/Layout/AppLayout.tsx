import React, { ReactElement } from "react";
import { Header } from "../Header/Header";
import { useAppSelector } from "../../hooks";

export const AppLayoutPrimary: React.FC<{
  children: ReactElement | Array<ReactElement>;
}> = ({ children }) => {
  const user = useAppSelector((state) => state.userReducer);
  return (
    <>
      <Header user={user} />
      {children}
    </>
  );
};
