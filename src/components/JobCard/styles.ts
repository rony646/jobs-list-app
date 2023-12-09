import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 114px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px #0000000d;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background: #e3e3e3e5;
    transition: background 0.3s;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  height: 100%;
  width: 90px;
  overflow: hidden;
  border-radius: 4px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 63%;

  .jobcard__content_company_name {
    font-size: 12px;
    font-weight: 700;
  }

  .jobcard__content_job_title {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const JobTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 63px;
  height: 26px;
  border: 1px solid #334680;
  border-radius: 4px;

  .jobcard__content_job_tag__text {
    font-size: 12px;
    font-weight: 700;
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  flex: 1;

  @media (max-width: 992px) {
    display: none;
  }
`;
