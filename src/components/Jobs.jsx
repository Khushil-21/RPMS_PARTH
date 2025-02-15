import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://localhost:7206/api/v1/jobCRUD/jobsWithRoleName');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error.response ? error.response.data : error.message);
      }
    };

    fetchJobs();
  }, [refresh]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <Link
            key={job.job_id}
            to={`/dashboard/jobs/${job.job_id}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.job_title}</h3>
            <p className="text-gray-600 mt-2">{job.role_name}</p>
            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Description:</strong> {job.job_description}</p>
              <p><strong>Status:</strong> {job.status}</p>
              <p><strong>Openings:</strong> {job.no_of_openings}</p>
              <p><strong>Reason For Hold and Close:</strong> {job.reason_for_hold_close}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
