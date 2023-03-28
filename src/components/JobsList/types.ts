export interface Job {
  job_title: string;
  job_city: string;
  job_country: string;
  job_is_remote: boolean;
  job_posted_at_datetime_utc: string;
  employer_name: string;
  employer_logo: string | null;
}
