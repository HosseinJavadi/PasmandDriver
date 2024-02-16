import { ReactNode } from "react";

export * from "./RequestCard";
export * from "./RequestDriverCard";
export * from "./LearnPostCard";

export interface LearnPostCardInterface {
  id: number;
  imgSrc: string;
  title: string;
  text: string;
}
export type RequestDriverCardType = {
  onClick: (id: string) => void;
  buttonName?: string;
  footerElemet?: ReactNode;
};
