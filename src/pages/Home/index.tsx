import { useState, useEffect } from "react";

import { Typography, Checkbox, Spin, Pagination } from "antd";
import LocationInput from "@/components/LocationInput";

import JobsList from "@/components/JobsList";
import { Job } from "@/components/JobsList/types";
import SearchInput from "@/components/SearchInput";
import { useLoaderData, useSearchParams } from "react-router-dom";

import * as S from "./styles";
import { fetchJobs } from "@/services/api/endpoints";

const { Title } = Typography;

const Home = () => {
  const [location, setLocation] = useState<string>("");
  const [params, setParams] = useSearchParams({ search: "" });
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [jobsList, setJobsList] = useState<Job[]>([]);

  const [filterRemoteJobs, setFilterRemoteJobs] = useState(false);
  const [filterFullTimeJobs, setFilterFullTimeJobs] = useState(false);

  const loaderData = useLoaderData() as { data: Job[] };

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
    if (!jobsList.length) {
      setJobsList(loaderData.data);
    }
  }, [loaderData, jobsList.length]);

  useEffect(() => {
    if (jobsList.length) {
      getJobs();
    }
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
