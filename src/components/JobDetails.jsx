import { useParams } from "react-router-dom";

const dummyJobDetails = {
  1: {
    title: "Senior React Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$120k - $150k",
    description: "We are looking for an experienced React developer...",
    requirements: [
      "5+ years of React experience",
      "Strong TypeScript skills",
      "Experience with state management",
    ],
  },
  // Add more dummy job details as needed
};

export default function JobDetails() {
  const { id } = useParams();
  const job = dummyJobDetails[id];

  if (!job) return <div>Job not found</div>;

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
        <div className="mt-4 flex items-center text-gray-600">
          <span className="mr-4">{job.company}</span>
          <span className="mr-4">•</span>
          <span className="mr-4">{job.location}</span>
          <span className="mr-4">•</span>
          <span>{job.salary}</span>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
          <p className="text-gray-600">{job.description}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 