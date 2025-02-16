import { Link } from "react-router-dom";
import { MdLocationOn, MdAttachMoney, MdArrowForward } from "react-icons/md";

const dummyJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$120k - $150k",
    postedDate: "2 days ago",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartUp Inc",
    location: "New York",
    salary: "$100k - $130k",
    postedDate: "3 days ago",
    type: "Part-time",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    company: "Innovation Labs",
    location: "San Francisco",
    salary: "$110k - $140k",
    postedDate: "1 day ago",
    type: "Full-time",
  },
  {
    id: 4,
    title: "React Native Developer",
    company: "Mobile Tech",
    location: "Remote",
    salary: "$95k - $125k",
    postedDate: "4 days ago",
    type: "Contract",
  },
  {
    id: 5,
    title: "Senior UI/UX Developer",
    company: "Design Studio",
    location: "London",
    salary: "£70k - £90k",
    postedDate: "2 days ago",
    type: "Full-time",
  },
];

export default function Jobs() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Available Jobs</h1>
        <Link
          to="/dashboard/create-job"
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 
                   transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
        >
          Post New Job
          <MdArrowForward />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyJobs.map((job) => (
          <Link
            key={job.id}
            to={`/dashboard/jobs/${job.id}`}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl p-6 
                     transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-600 
                             transition-colors duration-300">
                  {job.title}
                </h3>
                <p className="text-gray-600 mt-1">{job.company}</p>
              </div>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                {job.type}
              </span>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-500">
                <MdLocationOn className="mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MdAttachMoney className="mr-2" />
                <span>{job.salary}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-sm text-gray-500">{job.postedDate}</span>
              <span className="text-primary-600 group-hover:translate-x-2 transition-transform duration-300">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 