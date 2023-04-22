import JobCard from "@/components/JobCard";
import { Job } from "./types";

import "./JobsList.css";

interface JobsListProps {
  jobsList: Job[];
}

const defaultLogo =
  "https://images.squarespace-cdn.com/content/v1/568981602399a3a3e507fff4/1548253334574-W4OFLUFUXJKJBXNW2UDK/Asset+2%40300x.png";

// eslint-disable-next-line no-empty-pattern
const JobsList = ({ jobsList }: JobsListProps) => {
  return (
    <div className="list__wrapper">
      {jobsList.map((job) => (
        <div className="list__item">
          <JobCard
            key={job.job_id}
            jobId={job.job_id}
            companyLogo={job.employer_logo || defaultLogo}
            companyName={job.employer_name}
            city={job.job_city}
            isRemote={job.job_is_remote}
            jobTitle={job.job_title}
            publishedAt={new Date(job.job_posted_at_datetime_utc)}

          />
        </div>
      ))}
    </div>
  );
};

export default JobsList;
