import { Typography } from "antd";
import * as S from "./styles";

const { Text } = Typography;

const Header = () => {
  return (
    <S.Header>
      <Text className="title" strong>
        Jobs
      </Text>
      <Text className="title" style={{ fontWeight: "lighter" }}>
        List
      </Text>
    </S.Header>
  );
};

export default Header;
