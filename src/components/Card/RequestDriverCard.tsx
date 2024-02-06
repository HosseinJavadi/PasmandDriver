import { createColumnHelper } from "@tanstack/react-table";

import { RequestStatusEnum } from "../../interfaces/RequestInterface";
import { Button } from "../Button";
import { Table } from "../Table";
import {
  TimesheetRequestCategoryUserType,
  TimesheetRequestInterface,
} from "../../interfaces/Timesheet";

export const RequestDriverCard: React.FC<
  TimesheetRequestInterface & { onClick: (id: string) => void }
> = ({
  accept_request_date_user,
  category_user: cateqory_user,
  id,
  lang,
  lat,
  total_category_user,
  address,
  onClick,
}) => {
  const columnHelper = createColumnHelper<TimesheetRequestCategoryUserType>();
  const columns = [
    columnHelper.accessor("categoryId.title", {
      cell: (info) => info.getValue(),
      header: "نوع",
    }),
    columnHelper.accessor("weight", {
      cell: (info) => info.getValue(),
      header: "وزن",
    }),
    columnHelper.accessor("previous_price", {
      cell: (info) => info.getValue(),
      header: "قیمت واحد",
    }),

    columnHelper.accessor("totalPrice", {
      cell: (info) => info.getValue(),
      header: "قیمت کل",
    }),
  ];
  return (
    <div
      className={`flex justify-center items-center flex-col w-full shadow-inner p-3 border
     border-disable rounded-md gap-3`}
    >
      <div className="flex justify-between items-center w-full">
        <p>{address}</p>
      </div>
      <div className="flex justify-start items-center w-full">
        {`قیمت کل : ${total_category_user.toPersion()} تومان`}
      </div>
      <div className="flex justify-start items-center w-full">
        {`تاریخ و زمان : ${new Date(
          parseInt(accept_request_date_user)
        ).toShamsi()}`}
      </div>
      <Table<TimesheetRequestCategoryUserType>
        columns={columns}
        data={cateqory_user}
      />
      <div className="flex justify-center items-center mt-2 gap-3">
        <Button
          title="پذیرفتن"
          className={{ className: "px-10" }}
          onClick={() => {
            onClick(id);
          }}
        />
      </div>
    </div>
  );
};
