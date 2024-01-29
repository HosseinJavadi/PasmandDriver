export enum RequestStatusEnum {
  Canceled = "لغو شده",
  Wating = "در انتظار تایید",
}
export interface RequestInterface {
  address: string;
  status: keyof typeof RequestStatusEnum;
  price: number;
  dateTime: Date;
}
