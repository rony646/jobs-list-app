import { Typography, Checkbox } from "antd";
import LocationInput from "@/components/LocationInput";

import "./Home.css";

const { Title } = Typography;

const Home = () => {
  return (
    <div className="wrapper__home">
      <div style={{ backgroundColor: "green", gridArea: "input" }}>
        input here
      </div>
      <div style={{ gridArea: "aside" }} className="aside">
        <Checkbox>Full time</Checkbox>
        <Title level={5}>Location</Title>
        <LocationInput
          onPlaceSet={(location) => console.log(`Loc: ${location}`)}
        />
      </div>
      <div style={{ gridArea: "list", background: "blue" }}>list</div>
    </div>
  );
};

export default Home;
