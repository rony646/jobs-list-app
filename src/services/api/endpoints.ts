const BASE_URL = "https://jsearch.p.rapidapi.com";

export const fetchJobs = async (
  onlyRemote: boolean,
  fullTimeJobs: boolean,
  location: string,
  searchQuery: string,
  currentPage: number
) => {
  const params = new URLSearchParams({
    page: `${currentPage}`,
    query: `${searchQuery} in ${location}`,
    num_pages: "5",
    remote_jobs_only: String(onlyRemote),
    employment_types: fullTimeJobs ? "FULLTIME" : "",
  });

  const response = await fetch(`${BASE_URL}/search?${params.toString()}`, {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  return data;
};
