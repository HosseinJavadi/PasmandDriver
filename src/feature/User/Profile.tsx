import React, { useState } from "react";
import { Avatar } from "../../components/Avatar";
import { useAppDispatch, useAppSelector, useFetch } from "../../hooks";
import { Icon } from "../../asset/icons";
import { Button } from "../../components/Button";
import { BaseResponseObjectInterface } from "../../interfaces";
import { RequestApi } from "../../apis";
import { Loading } from "../../components/Loading";
import { saveAvatar } from "../../store/reducers/userReducer";

export const Profile = () => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const uploadFileRequest = useFetch<
    BaseResponseObjectInterface<string>,
    FormData,
    unknown
  >({
    request: RequestApi.uploadAvatar(user.accessToken!, user.refreshToken!),
    onSuccess(data) {
      dispatch(saveAvatar(data.data.data));
    },
  });
  const deleteFileRequest = useFetch<unknown, unknown, unknown>({
    request: RequestApi.deleteAvatar(user.accessToken!, user.refreshToken!),
    onSuccess(data) {
      dispatch(saveAvatar(null));
    },
  });
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file: any = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      uploadFileRequest.reFetch(formData);
    }
  };
  const openFile = () => {
    document.getElementById("file")?.click();
  };
  return (
    <>
      <Loading
        isLoading={uploadFileRequest.isLoading || deleteFileRequest.isLoading}
      />
      <div className="p-2">
        <div className="mr-1 mt-3 flex gap-3 justify-start items-center">
          <Icon iconType="Identification" className="text-info !h-12 !w-12" />
          <h1 className="text-sm">پروفایل</h1>
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center gap-2">
          <div className="relative">
            <Avatar
              url={
                user.avatar
                  ? `${process.env.REACT_APP_BASE_URL}${user.avatar}`
                  : ""
              }
            />
            <Icon
              iconType="Plus"
              className="text-primary absolute  bottom-0 -right-1 bg-secondary  rounded-full"
              onClick={() => openFile()}
            />
            <Icon
              iconType="Delete"
              className="text-danger absolute  bottom-0 -left-1 bg-secondary  rounded-full"
              onClick={() => deleteFileRequest.reFetch()}
            />
            <input
              id="file"
              type="file"
              accept=".png,.jpg,.jpeg"
              className="sr-only"
              onChange={handleFileChange}
            />
          </div>
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
