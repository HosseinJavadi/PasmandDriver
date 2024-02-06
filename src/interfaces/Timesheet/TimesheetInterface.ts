export type CategoryType = {
  title: string;
  id: string;
};
export enum ShiftEnum {
  morning,
  afternoon,
  night,
}
export type TimesheetRequestCategoryUserType = {
  categoryId: CategoryType;
  weight: number;
  previous_price: number;
  totalPrice: number;
  _id: string;
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

export interface TimesheetRequestInterface {
  category_user: Array<TimesheetRequestCategoryUserType>;
  accept_request_date_user: string;
  lat: string;
  total_category_user: number;
  lang: string;
  id: string;
  address: string;
}
