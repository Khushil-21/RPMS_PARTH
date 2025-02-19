import { MdEdit, MdVideoCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const dummyInterviews = [
  {
    id: 1,
    candidateName: "John Doe",
    jobTitle: "Senior React Developer",
    email: "john@example.com",
    scheduledDate: "2024-03-20",
    scheduledTime: "10:00 AM",
    status: "Scheduled",
    interviewType: "Technical",
  },
  {
    id: 2,
    candidateName: "Jane Smith",
    jobTitle: "Full Stack Developer",
    email: "jane@example.com",
    scheduledDate: "2024-03-21",
    scheduledTime: "2:30 PM",
    status: "Completed",
    interviewType: "HR",
  },
  {
    id: 3,
    candidateName: "Mike Johnson",
    jobTitle: "Frontend Engineer",
    email: "mike@example.com",
    scheduledDate: "2024-03-22",
    scheduledTime: "11:00 AM",
    status: "Pending",
    interviewType: "Technical",
  },
];

export default function Interviews() {
  const navigate = useNavigate();

  const handleJoinMeeting = (interviewId) => {
    navigate(`/dashboard/interviews/meeting/${interviewId}`);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Interview Schedule</h2>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700">Candidate</th>
                  <th className="text-left py-3 px-4 text-gray-700">Job Position</th>
                  <th className="text-left py-3 px-4 text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 text-gray-700">Time</th>
                  <th className="text-left py-3 px-4 text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummyInterviews.map((interview) => (
                  <tr 
                    key={interview.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-gray-800">{interview.candidateName}</div>
                        <div className="text-sm text-gray-500">{interview.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{interview.jobTitle}</td>
                    <td className="py-3 px-4">{interview.scheduledDate}</td>
                    <td className="py-3 px-4">{interview.scheduledTime}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                        {interview.interviewType}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        interview.status === "Scheduled"
                          ? "bg-yellow-100 text-yellow-800"
                          : interview.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {interview.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          title="Edit Schedule"
                          className="p-1 text-primary-600 hover:bg-primary-50 rounded-full"
                        >
                          <MdEdit className="w-5 h-5" />
                        </button>
                        <button
                          title="Join Meeting"
                          className="p-1 text-green-600 hover:bg-green-50 rounded-full"
                          onClick={() => handleJoinMeeting(interview.id)}
                        >
                          <MdVideoCall className="w-5 h-5" />
                        </button>
                      </div>
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