import "./App.css";
import { Outlet } from "react-router-dom";
import { AppLayoutPrimary } from "../components/Layout/AppLayout";
import {
  DeviceContext,
  DeviceEnum,
  DrawerContext,
  ToggleHandlerInterface,
} from "../context";
import { DeviceManager } from "../components/DeviceManager";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const queryClient = new QueryClient();

  const [mode, setMode] = useState<DeviceEnum>();
  const [optionDrawer, setOptionDrawer] = useState<ToggleHandlerInterface>({
    isOpen: false,
    onHideCallbacks: [],
    onShowCallbacks: [],
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DrawerContext.Provider
          value={{
            ...optionDrawer,
            toggle() {
              setOptionDrawer({
                ...optionDrawer,
                isOpen: !optionDrawer.isOpen,
              });
              optionDrawer.isOpen
                ? optionDrawer.onHideCallbacks.forEach((n) => n())
                : optionDrawer.onShowCallbacks.forEach((n) => n());
            },
            onHide(callback) {
              setOptionDrawer((state) => {
                return {
                  ...state,
                  onHideCallbacks: [...state.onHideCallbacks, callback],
                };
              });
            },
            onShow(callback) {
              setOptionDrawer((state) => {
                return {
                  ...state,
                  onShowCallbacks: [...state.onShowCallbacks, callback],
                };
              });
            },
          }}
        >
          <DeviceContext.Provider
            value={{ mode: mode, setMode: (param) => setMode(param) }}
          >
            <AppLayoutPrimary>
              <Outlet />
              <DeviceManager />
            </AppLayoutPrimary>
          </DeviceContext.Provider>
        </DrawerContext.Provider>
      </QueryClientProvider>
      <ToastContainer
        rtl={true}
        draggable={true}
        theme="dark"
        bodyStyle={{ fontFamily: "IRANSans" }}
      />
    </>
  );
}
