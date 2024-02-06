import { Table } from "../../components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "../../components/Button";
import { RequestStatusEnum } from "../../interfaces/RequestInterface";
import { IconsType } from "../../asset/icons/svg";
import { TimesheetRequestCategoryUserType } from "../../interfaces/Timesheet";

export const DetailRequest = () => {
  //   const params = useParams();
  //   console.log(params.detailId);

  // [FAKE DATA]
  const garbageList = Array(20)
    .fill("")
    .map((_i, index) => {
      return {
        wieght: 20,
        priceUnit: 2000,
        totoalPrice: 40000,
        title: index % 2 === 0 ? "آهن" : "پلاستیک",
      };
    });

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
    <div className="p-2 space-y-6">
      <div className="border-[1px] flex flex-col gap-5 border-secondary rounded-lg shadow-md p-3 max-w-6xl mx-auto ">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">جزئیات درخواست</h2>
          {/* <StatusRequest status={FAKE_GARBAGES.status} /> */}
        </div>
        {/* <div>
          <address>{FAKE_GARBAGES.address}</address>
        </div>
        <div>
          <span> {`قیمت کل : ${FAKE_GARBAGES.price.toPersion()} تومان`}</span>
        </div>
        <div>
          <time>{FAKE_GARBAGES.dateTime.toShamsi()}</time>
        </div> */}
      </div>
      {/* <Table<GarbageType> columns={columns} data={FAKE_GARBAGES.garbages} /> */}
    </div>
  );
};
