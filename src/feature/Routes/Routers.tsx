import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { ErrorBoundary } from "../ErrorBoundary/Index";
import { Home } from "../Home";
import { FAQ } from "../FAQ";
import {
  Request,
  DoneRequests,
  RequestConfirm,
  DetailRequest,
} from "../Request";
import { Learn, LearnDetails } from "../Learn";
import { Profile } from "../User";

export const routers = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
      {
        path: "/Request",
        element: <Request />,
      },
      {
        path: "/Request/DoneRequests",
        element: <DoneRequests />,
      },
      { path: "/Request/Detail/:detailId", element: <DetailRequest /> },
      {
        path: "/Learn",
        element: <Learn />,
      },
      {
        path: "/Learn/Detail/:learnId",
        element: <LearnDetails />,
      },
      {
        path: "/User/Profile",
        element: <Profile />,
      },
      {
        path: "/Request/RequestConfirm",
        element: <RequestConfirm />,
      },
    ],
  },
]);
