import { useState, Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

import { Typography, Checkbox, Spin } from "antd";
import LocationInput from "@/components/LocationInput";

import "./Home.css";

import JobsList from "@/components/JobsList";
import { LoaderResponse } from "./types";
import { Job } from "@/components/JobsList/types";

const { Title } = Typography;

async function fetchJobs() {
  const params = new URLSearchParams({
    page: "1",
    query: "Frontend in Brazil",
    num_pages: "1",
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

export async function HomeLoader() {
  const jobsDataPromise = fetchJobs();

  return defer({
    jobsData: jobsDataPromise,
  });
}

const Home = () => {
  const [location, setLocation] = useState<string>();

  const data = useLoaderData() as LoaderResponse;

  return (
    <Suspense
      fallback={
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
      }
    >
      <Await resolve={data.jobsData}>
        {(data) => {
          const jobs = data.data as Job[];
          return (
            <div className="wrapper__home">
              <div style={{ backgroundColor: "green", gridArea: "input" }}>
                input here
              </div>

              <div style={{ gridArea: "aside" }} className="aside">
                <Checkbox>Full time</Checkbox>
                <Title level={5}>Location</Title>
                <LocationInput onPlaceSet={setLocation} />
              </div>

              <div style={{ gridArea: "list", marginTop: "10px" }}>
                <JobsList jobsList={jobs} />
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Home;
