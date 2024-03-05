import { Typography } from "antd";

import * as S from "./styles";
import HeaderAvatar from "../HeaderAvatar";

const { Text } = Typography;

const Header = () => {
  return (
    <S.Header>
      <S.Content>
        <Text className="title" strong>
          Jobs
        </Text>
        <Text className="title" style={{ fontWeight: "lighter" }}>
          List
        </Text>
      </S.Content>

      <HeaderAvatar />
    </S.Header>
  );
};

export default Header;
