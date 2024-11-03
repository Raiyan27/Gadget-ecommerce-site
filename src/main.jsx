import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Banner from "./components/Banner.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import GadgetDetail from "./components/GadgetDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "gadget/:id",
        element: <GadgetDetail />,
        loader: () => fetch("gadgets.json"),
      },
      {
        path: "dashboard",
        element: <DashBoard />,
        loader: () => fetch("gadgets.json"),
      },
      {
        path: "statistics",
        element: <div>NOTHING HERE</div>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
