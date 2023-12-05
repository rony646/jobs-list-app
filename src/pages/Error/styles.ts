import { styled } from "styled-components";
import { Layout, Typography } from "antd";

const { Title } = Typography;

export const Container = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Error = styled(Title)`
  color: #45474f !important;
`;
