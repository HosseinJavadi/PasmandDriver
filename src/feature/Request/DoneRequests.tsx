import { useEffect } from "react";
import { RequestApi } from "../../apis";
import { Icon } from "../../asset/icons";
import { RequestDriverCard } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { useAppSelector, useFetch } from "../../hooks";
import { BaseResponseInterface } from "../../interfaces";
import {
  ShiftEnum,
  ShiftResource,
  TimesheetRequestInterface,
  conditionShift,
} from "../../interfaces/Timesheet";

export const DoneRequests = () => {
  const user = useAppSelector((state) => state.userReducer);
  const requestDone = useFetch<
    BaseResponseInterface<Array<TimesheetRequestInterface>>
  >({
    request: RequestApi.getTimeSheetsDone(
      user.accessToken!,
      user.refreshToken!
    ),
  });
  useEffect(() => {
    requestDone.reFetch();
  }, []);
  return (
    <>
      <Loading isLoading={requestDone.isLoading} />
      <div className="p-2 py-3">
        <h3 className="text-center text-sm">درخواست های انجام شده</h3>
        <div className="grid grid-cols-1 gap-4 mt-10">
          {requestDone.data?.data?.data.map((n, i) => (
            <RequestDriverCard key={i} {...n} onClick={() => {}} />
          ))}
        </div>
      </div>
    </>
  );
};
