import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import Home from "@/pages/Home";
import Error from "@/pages/Error";
import Header from "@/components/Header";
import paths from "@/paths";
import JobDetails from "./pages/JobDetails";
import { fetchJobs } from "./services/api/endpoints";

const homeLoader = () => {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  return fetchJobs(false, true, "", search || "", 1);
};

const router = createBrowserRouter([
  {
    path: paths.Root,
    loader: homeLoader,
    element: <Home />,
    errorElement: <Error />,
    shouldRevalidate: () => {
      return false;
    },
  },
  {
    path: `${paths.Detail}/:jobId`,
    errorElement: <Error />,
    element: <JobDetails />,
  },
]);

const Root = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1D86FF",
          colorText: "#334680",
          colorTextSecondary: "#B7BCCE",
        },
      }}
    >
      <Layout className="container">
        <Header />
        <RouterProvider router={router} />
      </Layout>
    </ConfigProvider>
  );
};

export default Root;
