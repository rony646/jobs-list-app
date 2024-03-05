import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { ImportOutlined, SaveOutlined } from "@ant-design/icons";

import * as S from "./styles";

const items: MenuProps["items"] = [
  {
    label: <a href="/">Exit</a>,
    icon: <ImportOutlined />,
    key: "0",
  },
  {
    label: <a href="/">Saved jobs</a>,
    icon: <SaveOutlined />,
    key: "1",
  },
];

const HeaderAvatar = () => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <S.CustomAvatar>R</S.CustomAvatar>
    </Dropdown>
  );
};

export default HeaderAvatar;
