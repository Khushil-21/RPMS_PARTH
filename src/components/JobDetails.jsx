import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`https://localhost:7206/api/v1/jobCRUD/jobWithSkillsandRoles/${id}`);
        setJob(response.data[0]);
      } catch (error) {
        console.error('Error fetching job details:', error.response ? error.response.data : error.message);
      }
    };

    fetchJobDetails();
  }, [id]);
  console.log(job);

  if (!job) return <div>Job not found</div>;

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800">{job.job_title}</h1>
        <div className="mt-4 text-gray-600">
          <p><strong>Role:</strong> {job.role_name}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Openings:</strong> {job.no_of_openings}</p>
          <p><strong>Reason For Hold and Close:</strong> {job.reason_for_hold_close}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
          <p className="text-gray-600">{job.job_description}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Required Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            {job.req_skills && job.req_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Preferred Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            {job.pref_skills && job.pref_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
