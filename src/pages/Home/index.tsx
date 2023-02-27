import { Typography, Checkbox } from "antd";
import AutoComplete from 'react-google-autocomplete';
import './Home.css';

const { Title } = Typography;

const Home = () => {
  return (
    <div className="wrapper__home">
      <div style={{ backgroundColor: 'green', gridArea: 'input' }}>
        input here
      </div>
      <div style={{ gridArea: 'aside' }}>
        <Checkbox>Full time</Checkbox>
        <Title level={5}>
          Location
        </Title>
        <AutoComplete
          apiKey="teste"
          onPlaceSelected={place => console.log(place)}
         />
      </div>
      <div style={{gridArea: 'list', background: 'blue'}}>list</div>
    </div>
  );
};

export default Home;
