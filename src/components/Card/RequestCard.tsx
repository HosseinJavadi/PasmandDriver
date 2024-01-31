import { RequestCardInterface } from ".";
import { IconsType } from "../../asset/icons/svg";
import { RequestStatusEnum } from "../../interfaces/RequestInterface";
import { Button } from "../Button";

type RequestMode = {
  color: string;
  icon: IconsType;
};
let requestMode: { [id: string]: RequestMode } = {};
requestMode[RequestStatusEnum.DriverCanceled] = {
  color: "text-danger",
  icon: "xCircle",
};
requestMode[RequestStatusEnum.UserCanceled] = {
  color: "text-danger",
  icon: "xCircle",
};
requestMode[RequestStatusEnum.Done] = {
  color: "text-success",
  icon: "Tik",
};
export const RequestCard: React.FC<RequestCardInterface> = ({
  address,
  dateTime,
  price,
  status,
}) => {
  return (
    <div
      className="flex justify-center items-center flex-col w-full shadow-inner p-4 border
     border-disable rounded-md gap-3"
    >
      <div className="flex justify-between items-center w-full">
        <p>{address}</p>
        <Button
          type="Icon"
          className={{
            className: "text-[10px] bg-secondary !text-black gap-2",
            iconClassName: ` ${requestMode[RequestStatusEnum[status]].color}`,
          }}
          icon={requestMode[RequestStatusEnum[status]].icon}
          title={RequestStatusEnum[status]}
        />
      </div>
      <div className="flex justify-start items-center w-full">
        {`قیمت کل : ${price.toPersion()} تومان`}
      </div>
      <div className="flex justify-start items-center w-full">
        {`تاریخ و زمان : ${dateTime.toShamsi()}`}
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
