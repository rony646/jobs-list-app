import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import Header from "@/components/Header";
import paths from "@/paths";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(paths.Home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Outlet />
      </Layout>
    </ConfigProvider>
  );
};

export default Root;
