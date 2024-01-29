export interface ToggleInterface {
  readonly onHide?: (callback: () => void) => void;
  readonly onShow?: (callback: () => void) => void;
  toggle?: () => void;
  isOpen: boolean;
}
export interface ToggleHandlerInterface {
  isOpen: boolean;
  onHideCallbacks: Array<() => void>;
  onShowCallbacks: Array<() => void>;
}
export enum DeviceEnum {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}
export interface DeviceInterface {
  mode?: DeviceEnum;
  setMode?: (param: DeviceEnum) => void;
}
export * from "./context";
