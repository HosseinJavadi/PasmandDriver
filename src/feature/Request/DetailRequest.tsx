import { Table } from "../../components/Table";
import { GarbageType } from "../../interfaces/RequestDriverInterface";
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "../../components/Button";
import { RequestStatusEnum } from "../../interfaces/RequestInterface";
import { IconsType } from "../../asset/icons/svg";
import { RequestDriverCardInterface } from "../../components/Card";

// [STATUS COMPONENT]
const StatusRequest = ({
  status,
}: {
  status: keyof typeof RequestStatusEnum;
}) => {
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

  return (
    <Button
      btnType="Icon"
      className={{
        className: "text-[10px] bg-secondary !text-black gap-2",
        iconClassName: ` ${requestMode[RequestStatusEnum[status]].color}`,
      }}
      icon={requestMode[RequestStatusEnum[status]].icon}
      title={RequestStatusEnum[status]}
    />
  );
};

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

  const FAKE_GARBAGES: RequestDriverCardInterface = {
    address: "قم مملی بغلی پلاک 599 ",
    dateTime: new Date(),
    price: 200526,
    status: "Done",
    className: "",
    garbages: [...garbageList],
  };

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
    <div className="p-2 space-y-6">
      <div className="border-[1px] flex flex-col gap-5 border-secondary rounded-lg shadow-md p-3 max-w-6xl mx-auto ">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">جزئیات درخواست</h2>
          <StatusRequest status={FAKE_GARBAGES.status} />
        </div>
        <div>
          <address>{FAKE_GARBAGES.address}</address>
        </div>
        <div>
          <span> {`قیمت کل : ${FAKE_GARBAGES.price.toPersion()} تومان`}</span>
        </div>
        <div>
          <time>{FAKE_GARBAGES.dateTime.toShamsi()}</time>
        </div>
      </div>
      <Table<GarbageType> columns={columns} data={FAKE_GARBAGES.garbages} />
    </div>
  );
};
