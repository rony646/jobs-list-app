import { differenceInDays } from "date-fns";

import { GlobalOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";

import "./JobCard.css";
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
    <div
      className="jobcard__wrapper"
      style={{ ...style }}
      onClick={() => goToDetailsPage()}
    >
      <div className="jobcard__img_wrapper">
        <img src={companyLogo} alt="company logo" width="100%" height="100%" />
      </div>
      <div className="jobcard__content_wrapper">
        <Text className="jobcard__content_company_name">{companyName}</Text>
        <Text className="jobcard__content_job_title">{jobTitle}</Text>
        {isRemote && (
          <div className="jobcard__content_job_tag">
            <Text className="jobcard__content_job_tag__text">Remote</Text>
          </div>
        )}
      </div>
      <div className="jobcard__location_info">
        {city && (
          <div
            className="jobcard__location_info__tag"
            style={{ marginRight: "10px" }}
          >
            <GlobalOutlined style={{ color: "#B9BDCF" }} />
            <Text style={{ color: "#B9BDCF", marginLeft: "7px" }}>{city}</Text>
          </div>
        )}

        <div className="jobcard__location_info__tag">
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
      </div>
    </div>
  );
};

export default JobCard;
