import { Layout, Typography, Image } from "antd";
import errorSvg from "../../assets/error.svg";
import "./Error.css";

const { Title } = Typography;

const ErrorPage = () => {
  return (
    <Layout className="wrapper">
      <Image width={120} src={errorSvg} style={{ marginBottom: "35px" }} />
      <Title className="title">Oh no! Something went wrong :(</Title>
    </Layout>
  );
};

export default ErrorPage;
