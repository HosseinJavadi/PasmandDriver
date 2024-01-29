export enum RequestStatusEnum {
  UserCanceled = "لغو شده توسط کاربر",
  DriverCanceled = "لفو شده توسط راننده",
  Done = "انجام شده",
}
export interface RequestInterface {
  address: string;
  status: keyof typeof RequestStatusEnum;
  price: number;
  dateTime: Date;
}
