import { ColumnDef } from "@tanstack/react-table";

export * from "./Table";

export interface TableInterface<T> {
  columns: ColumnDef<T, any>[];
  data: T[];
}
