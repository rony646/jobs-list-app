import { Typography } from "antd";
import "./Header.css";

const { Text } = Typography;

const Header  = () => {
  return(
    <header>
       <Text className="title" strong>
          Jobs
       </Text>
       <Text className="title" style={{ fontWeight: 'lighter' }}>
          List
       </Text>
    </header>
  )
};

export default Header;