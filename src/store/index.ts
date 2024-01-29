import { RootState, DispatchFunc } from "./store";
interface UserInterface {
  name: string;
  family: string;
}

export type { UserInterface };

export * from "./store";
