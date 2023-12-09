import { styled } from "styled-components";
import { Input, Button } from "antd";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url(../../assets/background.jpeg);
  background-size: cover;
  border-radius: 8px;

  @media (max-width: 992px) {
    padding: 20px 0;
  }
`;

export const InputBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: 65%;
  background-color: #fff;
  border-radius: 4px;

  @media (max-width: 992px) {
    width: 90%;
  }
`;

export const SearchInput = styled(Input)`
  width: 85%;
  border: none;
  outline: none;
  height: 90%;

  @media (max-width: 992px) {
    width: 75%;
  }
`;

export const SearchButton = styled(Button)`
  height: 75%;
  width: 10%;

  @media (max-width: 992px) {
    width: 20%;
  }
`;
