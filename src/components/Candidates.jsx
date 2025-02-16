import { MdSchedule } from "react-icons/md";

const dummyCandidates = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    experience: "5 years",
    appliedDate: "2024-03-15",
    status: "Under Review",
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    experience: "3 years",
    appliedDate: "2024-03-14",
    status: "Interview Scheduled",
    skills: ["Python", "Django", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    experience: "4 years",
    appliedDate: "2024-03-13",
    status: "Under Review",
    skills: ["Java", "Spring", "MySQL"],
  },
  // Add more dummy candidates as needed
];

export default function Candidates() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">All Candidates</h2>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 text-gray-700">Email</th>
                  <th className="text-left py-3 px-4 text-gray-700">Experience</th>
                  <th className="text-left py-3 px-4 text-gray-700">Applied Date</th>
                  <th className="text-left py-3 px-4 text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-gray-700">Skills</th>
                  <th className="text-left py-3 px-4 text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummyCandidates.map((candidate) => (
                  <tr 
                    key={candidate.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{candidate.name}</td>
                    <td className="py-3 px-4">{candidate.email}</td>
                    <td className="py-3 px-4">{candidate.experience}</td>
                    <td className="py-3 px-4">{candidate.appliedDate}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        candidate.status === "Under Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary-50 text-primary-700 
                                     rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        title="Schedule Interview"
                        className="p-1 text-primary-600 hover:bg-primary-50 
                                 rounded-full transition-colors duration-300"
                      >
                        <MdSchedule className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 