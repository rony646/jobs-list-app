import { Routes, Route } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import paths from "@/paths";
import JobDetails from "./pages/JobDetails";

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
        <Routes>
          <Route path={paths.Root} element={<Home />} />
          <Route path={`${paths.Detail}/:jobId`} element={<JobDetails />} />
        </Routes>
      </Layout>
    </ConfigProvider>
  );
};

export default Root;
