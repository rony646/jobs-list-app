import { useState, useEffect } from "react";

import { Typography, Checkbox, Spin } from "antd";
import LocationInput from "@/components/LocationInput";

import "./Home.css";

import JobsList from "@/components/JobsList";
import { Job } from "@/components/JobsList/types";

const { Title } = Typography;

async function fetchJobs(
  onlyRemote: boolean,
  fullTimeJobs: boolean,
  location: string
) {
  const params = new URLSearchParams({
    page: "1",
    query: `Frontend in ${location}`,
    num_pages: "1",
    remote_jobs_only: String(onlyRemote),
    employment_types: fullTimeJobs ? "FULLTIME" : "",
  });

  const response = await fetch(
    `https://jsearch.p.rapidapi.com/search?${params.toString()}`,
    {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
    }
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  return data;
}

const Home = () => {
  const [location, setLocation] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const [jobsList, setJobsList] = useState<Job[]>([]);

  const [filterRemoteJobs, setFilterRemoteJobs] = useState(false);
  const [filterFullTimeJobs, setFilterFullTimeJobs] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const jobsPromise = fetchJobs(
      filterRemoteJobs,
      filterFullTimeJobs,
      location
    );

    jobsPromise
      .then((data) => {
        setIsLoading(false);
        setJobsList(data.data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [filterFullTimeJobs, filterRemoteJobs, location]);

  return (
    <div>
      {isLoading ? (
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
        <div className="wrapper__home">
          <div style={{ backgroundColor: "green", gridArea: "input" }}>
            input here
          </div>

          <div style={{ gridArea: "aside", minWidth: "60%" }} className="aside">
            <div>
              <Checkbox
                checked={filterFullTimeJobs}
                onChange={() =>
                  setFilterFullTimeJobs((prevState) => !prevState)
                }
              >
                Full time
              </Checkbox>
              <Checkbox
                checked={filterRemoteJobs}
                onChange={() => setFilterRemoteJobs((prevState) => !prevState)}
              >
                Remote
              </Checkbox>
            </div>
            <Title level={5}>Location</Title>
            <LocationInput onPlaceSet={setLocation} value={location} />
          </div>

          <div style={{ gridArea: "list", marginTop: "10px" }}>
            <JobsList jobsList={jobsList} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
