import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import paths from "@/paths";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(paths.Home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
