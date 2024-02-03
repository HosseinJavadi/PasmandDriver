import React from "react";
import { Avatar } from "../../components/Avatar";
import { useAppSelector } from "../../hooks";
import { Icon } from "../../asset/icons";
import { Button } from "../../components/Button";

export const Profile = () => {
  const user = useAppSelector((state) => state.userReducer);
  return (
    <>
      <div className="p-2">
        <div className="mr-1 mt-3 flex gap-3 justify-start items-center">
          <Icon iconType="Identification" className="text-info !h-12 !w-12" />
          <h1 className="text-sm">پروفایل</h1>
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center gap-2">
          <Avatar url={user.avatar} />
          <h4 className="text-sm text-primaryLight font-bold">{`${user.firstName} ${user.lastName}`}</h4>
          <h3 className=" text-primaryDark">
            {user.nationalCode?.toPersion()}
          </h3>
        </div>

        <div className="w-full grid grid-cols-2  gap-4 justify-items-center  font-bold">
          {user.birthDate ? (
            <>
              <span>{user.mobile}</span>
              <span>{user.birthDate}</span>
            </>
          ) : (
            <span className="col-span-2">{user.mobile}</span>
          )}
          <p className="col-span-2">{user.address}</p>
        </div>
      </div>
      <div className="fixed bottom-2 w-full flex justify-between items-center px-3">
        <p className="w-[60%]">
          برای تغییرات پروفایل خود لطفا{" "}
          <span className="font-bold">درخواست تغییرات</span> را کلیک کنید
        </p>
        <Button
          title="درخواست تغییرات"
          className={{ className: "!bg-primaryDark" }}
        />
      </div>
    </>
  );
};
