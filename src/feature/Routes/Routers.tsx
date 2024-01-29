import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { ErrorBoundary } from "../ErrorBoundary/Index";
import { Home } from "../Home";
import { FAQ } from "../FAQ";
import { ConfirmRequest } from "../ConfirmRequest";
export const routers = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/FAQ",
        index: true,
        element: <FAQ />,
      },
      {
        path: "/ConfirmRequest",
        index: true,
        element: <ConfirmRequest />,
      },
    ],
  },
]);