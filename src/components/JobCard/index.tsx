import { differenceInDays } from "date-fns";

import { GlobalOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";

import * as S from "./styles";

import paths from "@/paths";

const { Text } = Typography;

interface JobCardProps {
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  isRemote: boolean;
  city: string;
  publishedAt: Date;
  jobId: string;
  style?: React.CSSProperties;
}

const JobCard = ({
  companyLogo,
  companyName,
  jobTitle,
  city,
  isRemote,
  publishedAt,
  style,
  jobId,
}: JobCardProps) => {
  const daysDifference = differenceInDays(new Date(), publishedAt);

  const goToDetailsPage = () => {
    window.open(`${window.location.origin}${paths.Detail}/${jobId}`);
  };

  return (
    <S.Container style={{ ...style }} onClick={() => goToDetailsPage()}>
      <S.ImageWrapper>
        <img src={companyLogo} alt="company logo" width="100%" height="100%" />
      </S.ImageWrapper>

      <S.ContentWrapper>
        <Text className="jobcard__content_company_name">{companyName}</Text>
        <Text className="jobcard__content_job_title">{jobTitle}</Text>
        {isRemote && (
          <S.JobTag>
            <Text className="jobcard__content_job_tag__text">Remote</Text>
          </S.JobTag>
        )}
      </S.ContentWrapper>

      <S.LocationInfo>
        {city && (
          <div style={{ marginRight: "10px" }}>
            <GlobalOutlined style={{ color: "#B9BDCF" }} />
            <Text style={{ color: "#B9BDCF", marginLeft: "7px" }}>{city}</Text>
          </div>
        )}

        <div>
          <ClockCircleOutlined style={{ color: "#B9BDCF" }} />
          <Text
            style={{
              color: "#B9BDCF",
              marginLeft: "7px",
            }}
          >
            {daysDifference !== 0 ? `${daysDifference} days ago` : "Today"}
          </Text>
        </div>
      </S.LocationInfo>
    </S.Container>
  );
};

export default JobCard;
