import React from "react";
import { Avatar } from "../../components/Avatar";
import { useAppSelector } from "../../hooks";

export const Profile = () => {
  const user = useAppSelector((state) => state.userReducer);
  return (
    <div className="p-2">
      <div className="grid grid-cols-1 justify-items-center items-center gap-2">
        <Avatar />
        <h4 className="text-sm text-primaryLight font-bold">{`${user.firstName} ${user.lastName}`}</h4>
        <h3 className=" text-primaryDark">{user.nationalCode.toPersion()}</h3>
      </div>
      <div className="w-full"></div>
    </div>
  );
};
