import { createColumnHelper } from "@tanstack/react-table";
import {
  RequestCardInterface,
  RequestDriverCardInterface,
  requestMode,
} from ".";
import { GarbageType } from "../../interfaces/RequestDriverInterface";
import { RequestStatusEnum } from "../../interfaces/RequestInterface";
import { Button } from "../Button";
import { Table } from "../Table";

export const RequestDriverCard: React.FC<RequestDriverCardInterface> = ({
  address,
  dateTime,
  price,
  status,
  garbages,
  isShowStatus,
  className = "",
}) => {
  const columnHelper = createColumnHelper<GarbageType>();
  const columns = [
    columnHelper.accessor("title", {
      cell: (info) => info.getValue(),
      header: "نوع",
    }),
    columnHelper.accessor("wieght", {
      cell: (info) => info.getValue(),
      header: "وزن",
    }),
    columnHelper.accessor("priceUnit", {
      cell: (info) => info.getValue(),
      header: "قیمت واحد",
    }),

    columnHelper.accessor("totoalPrice", {
      cell: (info) => info.getValue(),
      header: "قیمت کل",
    }),
  ];
  return (
    <div
      className={`flex justify-center items-center flex-col w-full shadow-inner p-3 border
     border-disable rounded-md gap-3 ${className}`}
    >
      <div className="flex justify-between items-center w-full">
        <p>{address}</p>
        {isShowStatus && (
          <Button
            btnType="Icon"
            className={{
              className: "text-[10px] bg-secondary !text-black gap-2",
              iconClassName: ` ${requestMode[RequestStatusEnum[status]].color}`,
            }}
            icon={requestMode[RequestStatusEnum[status]].icon}
            title={RequestStatusEnum[status]}
          />
        )}
      </div>
      <div className="flex justify-start items-center w-full">
        {`قیمت کل : ${price.toPersion()} تومان`}
      </div>
      <div className="flex justify-start items-center w-full">
        {`تاریخ و زمان : ${dateTime.toShamsi()}`}
      </div>
      <Table<GarbageType> columns={columns} data={garbages} />
      <div className="flex justify-center items-center mt-2 gap-3">
        <Button title="پذیرفتن" className={{ className: "px-10" }} />
      </div>
    </div>
  );
};
