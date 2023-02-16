import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Root from "@/Root";
import ErrorPage from "@/pages/Error";
import paths from "@/paths";
import "./index.css";

const router = createBrowserRouter([
  {
    path: paths.Root,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.Home,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
