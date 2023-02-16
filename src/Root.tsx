import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ConfigProvider } from "antd";
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
      <div>
        <Outlet />
      </div>
    </ConfigProvider>
  );
};

export default Root;
