import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { differenceInDays } from "date-fns";
import { Spin, Typography } from "antd";
import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { JobDetail } from "./types";

import * as S from "./styles";

import { replaceWithBr } from "./functions";
import paths from "@/paths";

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

  const getJobData = useCallback(() => {
    setLoading(true);

    fetchJobDetailData(jobId as string)
      .then((data) => {
        setJobData(data.data[0] as JobDetail);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [jobId]);

  useEffect(() => {
    getJobData();
  }, [getJobData]);

  const daysDifference = jobData
    ? differenceInDays(
        new Date(),
        new Date(jobData?.job_posted_at_datetime_utc)
      )
    : 0;

  return (
    <>
      {loading ? (
        <S.SpinContainer>
          <Spin tip="Loading..." size="large" />
        </S.SpinContainer>
      ) : (
        <S.Container>
          <S.Aside>
            <S.BackLink as="a" href="/">
              <ArrowLeftOutlined />
              Back to search
            </S.BackLink>
          </S.Aside>

          <S.JobDetailWrapper>
            <S.JobTitle>{jobData?.job_job_title}</S.JobTitle>

            <S.PublishedTime>
              <ClockCircleOutlined />
              <Text style={{ marginLeft: "7px", color: "#B9BDCF" }}>
                {daysDifference !== 0 ? `${daysDifference} days ago` : "Today"}
              </Text>
            </S.PublishedTime>

            <S.CompanyDetail>
              <S.LogoWrapper>
                <img
                  src={`${jobData?.employer_logo}`}
                  alt="company logo"
                  width="100%"
                  height="100%"
                />
              </S.LogoWrapper>

              <S.CompanyDetailInfo>
                <Title level={5}>{jobData?.employer_name}</Title>
                <div>
                  <GlobalOutlined style={{ color: "#B9BDCF" }} />
                  <Text style={{ color: "#B9BDCF", marginLeft: "7px" }}>
                    {jobData?.job_city}
                  </Text>
                </div>
              </S.CompanyDetailInfo>
            </S.CompanyDetail>

            <Text>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceWithBr(jobData?.job_description),
                }}
                style={{ margin: "20px 0" }}
              />
            </Text>

            <S.ApplyButton
              icon={<SendOutlined />}
              type="primary"
              href={jobData?.job_apply_link}
              target="_blank"
            >
              Apply Here
            </S.ApplyButton>
          </S.JobDetailWrapper>
        </S.Container>
      )}
    </>
  );
};

export default JobDetails;
