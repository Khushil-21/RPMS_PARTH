const dummyApplications = [
  {
    id: 1,
    jobTitle: "Senior React Developer",
    company: "Tech Corp",
    status: "Under Review",
    appliedDate: "2024-03-15",
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    company: "StartUp Inc",
    status: "Interview Scheduled",
    appliedDate: "2024-03-10",
  },
];

export default function RecruitmentStatus() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Applications</h1>
      <div className="space-y-4">
        {dummyApplications.map((application) => (
          <div
            key={application.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {application.jobTitle}
                </h3>
                <p className="text-gray-600 mt-1">{application.company}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                application.status === "Under Review" 
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}>
                {application.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Applied on: {application.appliedDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 