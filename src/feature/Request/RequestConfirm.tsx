import { useParams } from "react-router-dom";
import { RequestConfirmImage } from "../../asset/images";
import { Image } from "../../components/Image";
import { useAppSelector, useFetch, useForm } from "../../hooks";
import { RequestApi } from "../../apis";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  BaseResponseInterface,
  RequestInformationInterface,
} from "../../interfaces";
import { createColumnHelper } from "@tanstack/react-table";
import {
  CategoryUserType,
  TimesheetRequestCategoryUserType,
} from "../../interfaces/Timesheet";
import { Table } from "../../components/Table";
import { Loading } from "../../components/Loading";
import { SaveGategoriesDriver } from ".";
import { Button } from "../../components/Button";
import { Icon } from "../../asset/icons";
import { TextBox } from "../../components/TextBox";
export const RequestConfirm = () => {
  const params = useParams<{ id: string }>();
  const user = useAppSelector((state) => state.userReducer);
  const Form = useForm<{ tarkingCode: string }>({
    validations: {},
  });
  const { data, reFetch, isLoading } = useFetch<
    BaseResponseInterface<RequestInformationInterface>
  >({
    request: RequestApi.getRequestInformation(
      user.accessToken!,
      user.refreshToken!
    ),
  });
  const [categoriesDriver, setCategoriesDriver] = useState<
    Array<SaveGategoriesDriver>
  >([]);
  const categories = useFetch<BaseResponseInterface<Array<CategoryUserType>>>({
    request: RequestApi.getCategories(user.accessToken!, user.refreshToken!),
    onSuccess(data) {
      setCategoriesDriver(
        data.data.map((n) => {
          return { ...n, weight: 0 };
        })
      );
    },
    fetchInitial: true,
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

  useEffect(() => {
    if (params.id) reFetch(null, { id: params.id });
    else toast.error("کاربری وجود ندارد");
  }, []);
  return (
    <>
      <Loading isLoading={categories.isLoading || isLoading} />
      <div className="p-2">
        <div className="flex justify-center items-center flex-col">
          <Image src={RequestConfirmImage} className="h-80 w-80" />
          <h1 className="text-sm text-primaryDark mt-3 font-bold">
            اطلاعات کاربر
          </h1>
          <div className="w-full grid grid-cols-2 px-2 justify-items-start items-center mt-5 gap-3 font-bold">
            <div className="flex justify-between w-full col-span-2">
              <span>
                نام :
                {` ${data?.data?.data.userId.firstName} ${data?.data?.data.userId.lastName}`}
              </span>
              <p>
                شماره تماس :
                <a
                  className="underline underline-offset-4 decoration-dotted  decoration-primary text-info"
                  href={`tel:${data?.data?.data.userId.mobile}`}
                >
                  {" "}
                  {data?.data?.data.userId.mobile.toPersion()}
                </a>
              </p>
            </div>
            <p className="col-span-2">آدرس : {data?.data?.data.address}</p>
            <span>
              قیمت کل مشتری :{" "}
              {data?.data?.data.total_category_user.toCurrency().toPersion()}
            </span>
            <hr className="w-full col-span-2 text-primaryLight border-dashed" />
            <div className="col-span-2 w-full">
              <h4 className="text-successDark">لیست پسماند های کاربر</h4>
              <Table<TimesheetRequestCategoryUserType>
                columns={columns}
                data={
                  data?.data?.data.category_user.map((n) => {
                    return {
                      ...n,
                      previous_price: n.previous_price.toCurrency().toPersion(),
                      totalPrice: n.totalPrice.toCurrency().toPersion(),
                    };
                  }) ?? []
                }
                className="*:h-12"
              />
            </div>
          </div>
        </div>
        <hr className="w-full col-span-2 text-primaryLight border-dashed mt-4" />
        <Form className="flex justify-center flex-col items-center gap-5 mt-5">
          <h1 className="text-sm text-primaryDark font-bold">
            فرم ثبت درخواست
          </h1>
          {categoriesDriver.map((n, i) => (
            <div
              key={i}
              className="grid justify-items-center items-center grid-cols-6 w-full border-b-[1px]
               border-solid py-2 border-successDark rounded-lg px-2"
            >
              <div className="font-bold  w-full col-span-3 break-all">
                <div className="flex gap-2 justify-start items-center">
                  <Image
                    src={`${process.env.REACT_APP_BASE_URL}${n.image.small}`}
                    className="rounded-full !h-10 !w-10"
                  />
                  <span>{n.title}</span>
                </div>
                <span>قیمت : {n.price.toCurrency().toPersion()}</span> ریال
              </div>
              <Icon
                iconType="Minus"
                className="text-danger h-11 w-11"
                onClick={() => {
                  if (categoriesDriver[i].weight < 1) {
                    toast.error("وزن نمیتواند کمتر از صفر باشد");
                    return;
                  }
                  const arr = [...categoriesDriver];
                  arr[i].weight--;
                  setCategoriesDriver(arr);
                }}
              />
              <TextBox
                value={n.weight.toString()}
                placeholder="مقدار"
                type="number"
                className="w-16 text-center"
              />
              <Icon
                iconType="Plus"
                className="text-success h-11 w-11"
                onClick={() => {
                  const arr = [...categoriesDriver];
                  arr[i].weight++;
                  setCategoriesDriver(arr);
                }}
              />
            </div>
          ))}
          <h2 className="w-full text-md font-bold">
            قیمت کل :{" "}
            {categoriesDriver
              .map((n) => n.weight * parseInt(n.price))
              .reduce((partialSum, a) => partialSum + a, 0)
              .toCurrency()
              .toPersion()}{" "}
            ریال
          </h2>

          <p className="w-full mt-3">
            <span className="text-danger text-md">*</span> لطفا کدرهگیری درخواست
            را وارد کنید <b>کد رهگیری برای کاربر ارسال شده است</b>
          </p>
          <Form.TextBox
            className="w-52"
            name="tarkingCode"
            placeholder="کد پیگیری"
          ></Form.TextBox>
          <Form.Submit className={{ className: "!px-3" }}>
            ثبت درخواست
          </Form.Submit>
        </Form>
      </div>
    </>
  );
};
