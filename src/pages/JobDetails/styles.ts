import { styled } from "styled-components";
import { Button, Typography } from "antd";

const { Title } = Typography;

export const Container = styled.div`
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Aside = styled.div`
  width: 30%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const BackLink = styled.a`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: normal;

  span {
    margin-right: 8px;
  }
`;

export const JobDetailWrapper = styled.div`
  width: 70%;

  @media (max-width: 992px) {
    width: 90%;
  }
`;

export const JobTitle = styled(Title)`
  font-size: 25px;
`;

export const PublishedTime = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #b9bdcf;
`;

export const CompanyDetail = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  height: 100%;
  width: 90px;
  overflow: hidden;
  border-radius: 4px;
`;

export const CompanyDetailInfo = styled.div`
  margin-left: 10px;
`;

export const ApplyButton = styled(Button)`
  @media (max-width: 992px) {
    margin-bottom: 10px;
  }
`;

export const SpinContainer = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;
