import { RequestInterface } from "./RequestInterface";

export type GarbageType = {
  wieght: number;
  priceUnit: number;
  totoalPrice: number;
  title: string;
};
export interface RequestDriverInterface extends RequestInterface {
  garbages: Array<GarbageType>;
}
