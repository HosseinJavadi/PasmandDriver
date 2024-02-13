import { useState } from "react";
import { Icon } from "../../asset/icons";
import { Button } from "../../components/Button";
import { Slider } from "../../components/Swiper";
import { useAppSelector, useFetch } from "../../hooks";
import { BaseResponseInterface } from "../../interfaces";
import {
  ShiftEnum,
  ShiftResource,
  TimeSheetRequestsEnum,
  TimesheetInterface,
  TimesheetRequestInterface,
  conditionShift,
} from "../../interfaces/Timesheet";
import { RequestApi } from "../../apis";
import { RequestDriverCard } from "../../components/Card";
import { Loading } from "../../components/Loading";
import ShowRequestDetailModal from "../../components/Modal/showDetailRequestModal";

export const Home = () => {
  const user = useAppSelector((state) => state.userReducer);
  const [showDetail, setShowDetail] = useState<{
    show: boolean;
    timeSheetRequest?: TimesheetRequestInterface;
  }>({
    show: false,
  });

  const activeTimeSheetRequest = useFetch<
    BaseResponseInterface<Array<TimesheetInterface>>,
    unknown,
    unknown
  >({
    request: RequestApi.activeTimeSheetRequest(
      user.accessToken!,
      user.refreshToken!
    ),
    fetchInitial: true,
  });

  return (
    <>
      <Loading isLoading={activeTimeSheetRequest.isLoading} />
      <div className="xs:p-3 md:p-1">
        <Slider className="rounded-xl" />
        {/* <Button
          title={`امتیاز شما (4.9)`}
          className={{
            className: "mx-auto mt-5 gap-5 px-3",
            iconClassName: "text-warn",
          }}
          btnType="Icon"
          icon="Star"
          href=""
        /> */}
        <div className="grid xs:grid-cols-2 gap-5 mt-10">
          {/* <Button
          className={{
            className:
              "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
          }}
          type="None"
          href=""
        >
          <Icon iconType="Help" className="text-warnDark h-7 w-7" />
          راهنما
        </Button> */}
          <Button
            className={{
              className:
                "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
            }}
            btnType="None"
            href="Request"
          >
            <Icon iconType="Letter" className="text-primary h-7 w-7" />
            شروع کار
          </Button>
          <Button
            className={{
              className:
                "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
            }}
            btnType="None"
            href="Request/DoneRequests"
          >
            <Icon iconType="Report" className="text-primaryLight h-7 w-7" />
            گزارش درخواست ها
          </Button>

          <Button
            className={{
              className:
                "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
            }}
            btnType="None"
            href="User/Profile"
          >
            <Icon iconType="User" className="text-black h-7 w-7" />
            کاربری
          </Button>
          <Button
            className={{
              className:
                "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
            }}
            btnType="None"
            href="Learn"
          >
            <Icon iconType="TV" className="text-successDark h-7 w-7" />
            آموزش
          </Button>
          <Button
            className={{
              className:
                "bg-secondary !text-black border !border-primaryDark gap-2 !justify-start",
            }}
            btnType="None"
            href="FAQ"
          >
            <Icon iconType="Question" className="text-info h-7 w-7 " />
            سوالات متداول
          </Button>
        </div>
        {activeTimeSheetRequest.data?.data?.data.map((n, i) => (
          <div key={i} className="w-full mt-4">
            <div
              className={`flex justify-between sticky top-14 w-full bg-secondaryLight/80
               backdrop-blur-sm text-sm px-2 my-2
               py-1 shadow-lg rounded-md ring-1`}
            >
              <p className="flex justify-between items-center gap-2">
                <span>شیفت : </span>
                <b
                  className={`${conditionShift(
                    ShiftEnum[n.shift],
                    "text-info",
                    "text-warnDark",
                    "text-black"
                  )}`}
                >
                  {ShiftResource[ShiftEnum[n.shift]]}
                </b>
              </p>
              {conditionShift(
                ShiftEnum[n.shift],
                <Icon
                  iconType="Cloud"
                  className="text-info !h-10 !w-10  animate-pulse"
                />,
                <Icon
                  iconType="Sun"
                  className="text-warnDark !h-10 !w-10 animate-pulse"
                />,
                <Icon
                  iconType="Moon"
                  className="text-black  !h-10 !w-10 animate-pulse"
                />
              )}
            </div>
            <div className="grid grid-cols-1 gap-3">
              {n.request.map((x, b) => (
                <RequestDriverCard
                  key={b}
                  {...x}
                  onClick={() => {
                    setShowDetail({ show: true, timeSheetRequest: x });
                  }}
                  buttonName="مسیریابی"
                  footerElemet={
                    x.status === TimeSheetRequestsEnum.movingDriver ? (
                      <Button
                        title="نهایی کردن درخواست"
                        href={`/Request/RequestConfirm/${x.id}`}
                      />
                    ) : (
                      ""
                    )
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <ShowRequestDetailModal
        isOpen={showDetail.show}
        timeSheetRequest={showDetail.timeSheetRequest}
        onRequestHide={() => {
          setShowDetail({ show: false });
        }}
      />
    </>
  );
};
