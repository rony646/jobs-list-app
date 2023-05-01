import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Spin, Button, Typography } from "antd";
import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { JobDetail } from "./types";

import "./JobDetails.css";
import { differenceInDays } from "date-fns";
import { replaceWithBr } from "./functions";

const { Text, Title } = Typography;

const fetchJobDetailData = async (jobId: string) => {
  const response = await fetch(
    `https://jsearch.p.rapidapi.com/job-details?job_id=${jobId}&extended_publisher_details=false'`,
    {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    }
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  return data;
};

export const jobsDetailLoader = async ({ params }: Record<string, any>) => {};

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [jobData, setJobData] = useState<JobDetail>();
  const [loading, setLoading] = useState(false);

  const getJobData = () => {
    setLoading(true);

    fetchJobDetailData(jobId as string)
      .then((data) => {
        setJobData(data.data[0] as JobDetail);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getJobData();
  }, []);

  const daysDifference = jobData
    ? differenceInDays(
        new Date(),
        new Date(jobData?.job_posted_at_datetime_utc)
      )
    : 0;

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            height: "80vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin tip="Loading..." size="large" />
        </div>
      ) : (
        <div className="job_detail__wrapper">
          <div className="job_detail__aside">
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              style={{
                fontWeight: "normal",
              }}
              onClick={() => navigate("/home")}
            >
              Back to search
            </Button>
          </div>

          <div className="job_detail__content">
            <Title style={{ fontSize: "25px" }}>{jobData?.job_job_title}</Title>

            <div className="job_detail__published_time">
              <ClockCircleOutlined style={{ color: "#B9BDCF" }} />
              <Text style={{ marginLeft: "7px", color: "#B9BDCF" }}>
                {daysDifference !== 0 ? `${daysDifference} days ago` : "Today"}
              </Text>
            </div>

            <div className="job_detail__company_info">
              <div className="jobcard__img_wrapper">
                <img
                  src={`${jobData?.employer_logo}`}
                  alt="company logo"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="job_detail__company_info_details">
                <Title level={5}>{jobData?.employer_name}</Title>
                <div>
                  <GlobalOutlined style={{ color: "#B9BDCF" }} />
                  <Text style={{ color: "#B9BDCF", marginLeft: "7px" }}>
                    {jobData?.job_city}
                  </Text>
                </div>
              </div>
            </div>

            <Text>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceWithBr(jobData?.job_description),
                }}
                style={{ margin: "20px 0" }}
              />
            </Text>

            <Button
              icon={<SendOutlined />}
              type="primary"
              href={jobData?.job_apply_link}
              target="_blank"
              className="job_detail__button_apply"
            >
              Apply Here
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
