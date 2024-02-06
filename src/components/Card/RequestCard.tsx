import { IconsType } from "../../asset/icons/svg";
import { RequestStatusEnum } from "../../interfaces/RequestInterface";
import { TimesheetRequestInterface } from "../../interfaces/Timesheet";
import { Button } from "../Button";

export const RequestCard: React.FC<TimesheetRequestInterface> = ({
  address,
  accept_request_date_user,
  category_user: cateqory_user,
  id,
  lang,
  lat,
  total_category_user,
}) => {
  return (
    <div
      className="flex justify-center items-center flex-col w-full shadow-inner p-4 border
     border-disable rounded-md gap-3"
    >
      <div className="flex justify-between items-center w-full">
        <p>{address}</p>
      </div>
      <div className="flex justify-start items-center w-full">
        {`قیمت کل : ${total_category_user.toPersion()} تومان`}
      </div>
      <div className="flex justify-start items-center w-full">
        {`تاریخ و زمان : ${new Date(accept_request_date_user).toShamsi()}`}
      </div>
      <div className="flex justify-center items-center gap-3">
        {/* {!(status === "DriverCanceled" || status === "UserCanceled") && (
          <Button
            title="لغو درخواست"
            className={{ className: "!bg-danger text-white" }}
          />
        )} */}

        <Button
          title="جزئیات درخواست"
          href="/Request/Detail/684"
          className={{ className: "!bg-info text-white " }}
        />
      </div>
    </div>
  );
};
