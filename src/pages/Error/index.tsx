import { Image } from "antd";
import errorSvg from "../../assets/error.svg";
import * as S from "./styles";

const ErrorPage = () => {
  return (
    <S.Container>
      <Image width={120} src={errorSvg} style={{ marginBottom: "35px" }} />
      <S.Error>Oh no! Something went wrong :(</S.Error>
    </S.Container>
  );
};

export default ErrorPage;
