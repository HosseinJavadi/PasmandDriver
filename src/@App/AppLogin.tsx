import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AppLogin = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <ToastContainer
        rtl={true}
        draggable={true}
        theme="dark"
        bodyStyle={{ fontFamily: "IRANSans" }}
      />
    </>
  );
};
