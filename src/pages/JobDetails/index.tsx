import { useParams } from 'react-router-dom';

import './JobDetails.css';

const JobDetails = () => {

  const { jobId } = useParams();
  
  return (
    <div>
      Fetching data for: {jobId}
    </div>
  );
};

export default JobDetails;
