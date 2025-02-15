import { Link } from "react-router-dom";

const dummyJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$120k - $150k",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartUp Inc",
    location: "New York",
    salary: "$100k - $130k",
  },
  // Add more dummy jobs as needed
];

export default function Jobs() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyJobs.map((job) => (
          <Link
            key={job.id}
            to={`/dashboard/jobs/${job.id}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600 mt-2">{job.company}</p>
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>{job.location}</span>
              <span>{job.salary}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 