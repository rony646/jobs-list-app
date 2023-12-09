import { useState, useEffect } from "react";

import { Typography, Checkbox, Spin, Pagination } from "antd";
import LocationInput from "@/components/LocationInput";

import JobsList from "@/components/JobsList";
import { Job } from "@/components/JobsList/types";
import SearchInput from "@/components/SearchInput";
import { useSearchParams } from "react-router-dom";

import * as S from "./styles";

const { Title } = Typography;

async function fetchJobs(
  onlyRemote: boolean,
  fullTimeJobs: boolean,
  location: string,
  searchQuery: string,
  currentPage: number
) {
  const params = new URLSearchParams({
    page: `${currentPage}`,
    query: `${searchQuery} in ${location}`,
    num_pages: "5",
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
  const [params, setParams] = useSearchParams({ search: "Frontend" });
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [jobsList, setJobsList] = useState<Job[]>([]);

  const [filterRemoteJobs, setFilterRemoteJobs] = useState(false);
  const [filterFullTimeJobs, setFilterFullTimeJobs] = useState(false);

  const getJobs = () => {
    setIsLoading(true);

    const jobsPromise = fetchJobs(
      filterRemoteJobs,
      filterFullTimeJobs,
      location,
      params.get("search") as string,
      page
    );

    jobsPromise
      .then((data) => {
        setIsLoading(false);
        setJobsList(data.data);
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterFullTimeJobs, filterRemoteJobs, location, page]);

  return (
    <div>
      {isLoading ? (
        <S.SpinContainer>
          <Spin tip="Loading..." size="large" />
        </S.SpinContainer>
      ) : (
        <S.HomeContainer>
          <div style={{ gridArea: "input" }}>
            <SearchInput
              value={params.get("search") as string}
              onChangeValue={(value) => setParams({ search: value })}
              onSearchValue={() => getJobs()}
            />
          </div>

          <S.Aside>
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
          </S.Aside>

          <S.List>
            <JobsList jobsList={jobsList} />

            <S.PaginationWrapper>
              <Pagination
                defaultCurrent={1}
                current={page}
                total={50}
                onChange={(page) => setPage(page)}
              />
            </S.PaginationWrapper>
          </S.List>
        </S.HomeContainer>
      )}
    </div>
  );
};

export default Home;
