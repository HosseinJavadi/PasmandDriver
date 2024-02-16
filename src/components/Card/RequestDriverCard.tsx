import { createColumnHelper } from "@tanstack/react-table";

import { Button } from "../Button";
import { Table } from "../Table";
import {
  TimeSheetRequestsEnum,
  TimeSheetRequestsResource,
  TimesheetRequestCategoryUserType,
  TimesheetRequestInterface,
} from "../../interfaces/Timesheet";
import { RequestDriverCardType } from ".";
import { Icon } from "../../asset/icons";

export const RequestDriverCard: React.FC<
  TimesheetRequestInterface & RequestDriverCardType
> = ({
  accept_request_date_user,
  category_user: cateqory_user,
  id,
  lang,
  lat,
  total_category_user,
  address,
  buttonName,
  status,
  footerElemet,
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
  const getIconStatus = (status: TimeSheetRequestsEnum) => {
    switch (status) {
      case TimeSheetRequestsEnum.movingDriver:
        return (
          <Icon iconType="Moving" title={TimeSheetRequestsResource[status]} />
        );
      case TimeSheetRequestsEnum.waiting:
        return (
          <Icon iconType="Wait" title={TimeSheetRequestsResource[status]} />
        );
      case TimeSheetRequestsEnum.pendingUser:
        return (
          <Icon iconType="Pending" title={TimeSheetRequestsResource[status]} />
        );
      case TimeSheetRequestsEnum.finalRequest:
        return (
          <Icon iconType="Done" title={TimeSheetRequestsResource[status]} />
        );
      case TimeSheetRequestsEnum.failedUser:
        return (
          <Icon iconType="Cancel" title={TimeSheetRequestsResource[status]} />
        );
      case TimeSheetRequestsEnum.failedDriver:
        return (
          <Icon iconType="Cancel" title={TimeSheetRequestsResource[status]} />
        );
      case TimeSheetRequestsEnum.acceptedDriver:
        return (
          <Icon iconType="Accept" title={TimeSheetRequestsResource[status]} />
        );
    }
  };
  return (
    <div
      className={`flex justify-center items-center flex-col w-full shadow-inner p-3 border font-bold
     border-disable rounded-md gap-3`}
    >
      <div className="flex justify-between items-center w-full">
        <p>{address}</p>
        <p className="text-warnDark ">{getIconStatus(status)}</p>
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
      {buttonName ? (
        <div className="flex justify-center items-center mt-2 gap-3">
          <Button
            title={buttonName}
            className={{ className: "px-10 !bg-primaryDark " }}
            onClick={() => {
              onClick(id);
            }}
          />
          {footerElemet ? footerElemet : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
