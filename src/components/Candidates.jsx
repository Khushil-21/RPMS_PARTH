import { useEffect, useState } from "react";
import axios from "axios";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('https://localhost:7206/api/v1/candidate/candidate_with_Skill');
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error.response ? error.response.data : error.message);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Candidates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map((candidate) => (
          <div
            key={candidate.candidate_id}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {candidate.first_name} {candidate.last_name}
            </h3>
            <p className="text-gray-600 mt-2">{candidate.email}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {candidate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-500 mt-4">
              <strong>Resume:</strong> {candidate.resume_file_path}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
