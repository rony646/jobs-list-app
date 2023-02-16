import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Root from "@/Root";
import paths from "@/paths";

const router = createBrowserRouter([
  {
    path: paths.Root,
    element: <Root />,
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
