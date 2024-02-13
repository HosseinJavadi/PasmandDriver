export type CategoryType = {
  title: string;
  id: string;
};
export enum ShiftEnum {
  morning,
  afternoon,
  night,
}
type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};
export const ShiftResource: EnumDictionary<ShiftEnum, string> = {
  [ShiftEnum.morning]: "صبح",
  [ShiftEnum.afternoon]: "ظهر",
  [ShiftEnum.night]: "شب",
};

export const conditionShift = (
  shift: ShiftEnum,
  whenMorning: any,
  whenAfternoon: any,
  whenNight: any,
  defualt?: any
) => {
  return shift === ShiftEnum.morning
    ? whenMorning
    : shift === ShiftEnum.afternoon
    ? whenAfternoon
    : shift === ShiftEnum.night
    ? whenNight
    : defualt;
};
export type TimesheetRequestCategoryUserType = {
  categoryId: CategoryType;
  weight: number;
  previous_price: string;
  totalPrice: string;
  _id: string;
};
export type CategoryUserType = {
  id: string;
  image: {
    big: string;
    small: string;
  };
  price: string;
  title: string;
  updatedAt: string;
};
export interface TimesheetInterface {
  count: number;
  fromDate: string;
  toDate: string;
  fromTime: string;
  toTime: string;
  request: Array<TimesheetRequestInterface>;
  shift: "morning" | "afternoon" | "night";
  id: "65c0ba3513072269e0d26a38";
}
export enum TimeSheetRequestsEnum {
  pendingUser = "pendingUser", ////در حال برسی درخواست,
  acceptedDriver = "acceptedDriver", ///// قبول شدن درخواست سمت راننده ,
  movingDriver = "movingDriver", ///// راننده در حال حرکت به مقصد شما میباشد ,
  finalRequest = "finalRequest", ///ثبت نهای توسط کاربر
  failedDriver = "failedDriver", //// ردشدن درخواست سمت راننده ,
  failedUser = "failedUser", //// ردشدن درخواست سمت کاربر ,
  waiting = "waiting", ////در انتظار برای قبول شدن  درخواست
}
export const TimeSheetRequestsResource: EnumDictionary<
  TimeSheetRequestsEnum,
  string
> = {
  [TimeSheetRequestsEnum.pendingUser]: "در حال برسی درخواست",
  [TimeSheetRequestsEnum.acceptedDriver]: "قبول شدن درخواست سمت راننده",
  [TimeSheetRequestsEnum.movingDriver]: "راننده در حال حرکت به مقصد",
  [TimeSheetRequestsEnum.finalRequest]: "ثبت نهای توسط کاربر",
  [TimeSheetRequestsEnum.failedDriver]: "ردشدن درخواست سمت راننده",
  [TimeSheetRequestsEnum.failedUser]: "ردشدن درخواست سمت کاربر",
  [TimeSheetRequestsEnum.waiting]: "در انتظار برای قبول شدن  درخواست",
};
export interface TimesheetRequestInterface {
  category_user: Array<TimesheetRequestCategoryUserType>;
  accept_request_date_user: string;
  lat: string;
  total_category_user: number;
  lang: string;
  id: string;
  address: string;
  status: TimeSheetRequestsEnum;
}
