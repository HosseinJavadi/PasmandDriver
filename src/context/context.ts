import { createContext } from "react";
import { DeviceInterface, ToggleInterface } from ".";

export const DrawerContext = createContext<ToggleInterface>({
  isOpen: false,
});
export const DeviceContext = createContext<DeviceInterface>({
  setMode(param) {},
});
