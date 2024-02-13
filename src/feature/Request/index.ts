import { CategoryUserType } from "../../interfaces/Timesheet";

export * from "./Request";
export * from "./DoneRequests";
export * from "./RequestConfirm";
export * from "./DetailRequest";

export type SaveGategoriesDriver = CategoryUserType & {
  weight: number;
};
