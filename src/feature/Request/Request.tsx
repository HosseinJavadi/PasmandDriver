import { useState } from "react";
import { RequestApi } from "../../apis";
import { DarkhastImage } from "../../asset/images";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import { Loading } from "../../components/Loading";
import { RequestSwiper } from "../../components/Swiper";
import { useAppSelector, useFetch } from "../../hooks";
import { BaseResponseInterface } from "../../interfaces";
import {
  ShiftEnum,
  TimesheetInterface,
  TimesheetRequestInterface,
} from "../../interfaces/Timesheet";

export const Request = () => {
  const user = useAppSelector((state) => state.userReducer);
  const [timeSheetRequests, setTimeSheetRequests] = useState<{
    shift: ShiftEnum;
    requests: Array<TimesheetRequestInterface>;
  }>({ shift: ShiftEnum.morning, requests: [] });
  const timesheetRequest = useFetch<
    BaseResponseInterface<Array<TimesheetInterface>>,
    unknown,
    unknown
  >({
    request: RequestApi.getTimeSheets(user.accessToken!, user.refreshToken!),
    onSuccess(data) {
      setTimeSheetRequests({
        ...timeSheetRequests,
        requests:
          data?.data.find((n) => n.shift === ShiftEnum[timeSheetRequests.shift])
            ?.request ?? [],
      });
    },
    fetchInitial: true,
  });
  const setRequest = useFetch<unknown, { timeSheetRequest: string }, unknown>({
    request: RequestApi.setTimeSheetRequest(
      user.accessToken!,
      user.refreshToken!
    ),
    onSuccess(data) {
      timesheetRequest.reFetch();
    },
  });
  return (
    <>
      <Loading isLoading={timesheetRequest.isLoading || setRequest.isLoading} />
      <div className="p-2">
        <Image src={DarkhastImage} />
        <div className="grid grid-cols-3  gap-3 mt-5">
          <Button
            title="صبح"
            className={{
              className: `${
                timeSheetRequests.shift === ShiftEnum.morning && "!bg-danger"
              }`,
            }}
            onClick={() => {
              setTimeSheetRequests({
                requests:
                  timesheetRequest.data?.data?.data.find(
                    (n) => n.shift === "morning"
                  )?.request ?? [],
                shift: ShiftEnum["morning"],
              });
            }}
          />
          <Button
            title="ظهر"
            className={{
              className: `${
                timeSheetRequests.shift === ShiftEnum.afternoon && "!bg-danger"
              }`,
            }}
            onClick={() => {
              setTimeSheetRequests({
                requests:
                  timesheetRequest.data?.data?.data.find(
                    (n) => n.shift === "afternoon"
                  )?.request ?? [],
                shift: ShiftEnum["afternoon"],
              });
            }}
          />
          <Button
            title="شب"
            className={{
              className: `${
                timeSheetRequests.shift === ShiftEnum.night && "!bg-danger"
              }`,
            }}
            onClick={() => {
              setTimeSheetRequests({
                requests:
                  timesheetRequest.data?.data?.data.find(
                    (n) => n.shift === "night"
                  )?.request ?? [],
                shift: ShiftEnum["night"],
              });
            }}
          />
        </div>
        <RequestSwiper
          className="mt-10"
          items={timeSheetRequests.requests}
          onClick={(id) => setRequest.reFetch({ timeSheetRequest: id })}
        />
      </div>
    </>
  );
};
