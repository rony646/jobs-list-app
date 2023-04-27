import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Spin, Button, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import "./JobDetails.css";

const { Text } = Typography;

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

  const [jobData, setJobData] = useState();
  const [loading, setLoading] = useState(false);

  const getJobData = () => {
    setLoading(true);

    fetchJobDetailData(jobId as string)
      .then((data) => {
        setJobData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // getJobData();
  }, []);

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
                color: "#1D86FF",
                fontWeight: "normal",
              }}
            >
              Back to search
            </Button>
          </div>
          <div className="job_detail__content">Job detail here</div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
