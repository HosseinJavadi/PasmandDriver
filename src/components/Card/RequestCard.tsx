import { RequestCardInterface } from ".";
import { RequestStatusEnum } from "../../interfaces/RequestInterface";
import { Button } from "../Button";

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
            iconClassName: `h-6 w-6 ${
              RequestStatusEnum[status] === RequestStatusEnum.Canceled
                ? "text-danger"
                : "text-warn"
            }`,
          }}
          icon={
            RequestStatusEnum[status] === RequestStatusEnum.Canceled
              ? `xCircle`
              : "Stop"
          }
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
        <Button
          title="لغو درخواست"
          className={{ className: "!bg-danger text-white" }}
        />
        <Button
          title="جزئیات درخواست"
          className={{ className: "!bg-info text-white " }}
        />
      </div>
    </div>
  );
};
