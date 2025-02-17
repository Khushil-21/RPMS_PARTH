import { useState } from "react";
import { MdArrowBack, MdCheckCircle, MdCancel, MdSchedule, MdUpload } from "react-icons/md";
import UploadCandidatesModal from "./UploadCandidatesModal";
import Modal from "./Modal";

const dummyCandidates = [
  {
    id: 1,
    name: "John Doe", 
    email: "john@example.com",
    experience: "5 years",
    appliedDate: "2024-03-15",
    status: "Under Review",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    experience: "3 years",
    appliedDate: "2024-03-14",
    status: "Shortlisted",
  },
  // Add more dummy candidates
];

const dummyRounds = [
  { id: 1, name: "Technical Round 1" },
  { id: 2, name: "Technical Round 2" },
  { id: 3, name: "HR Round" }
];

const dummyInterviewers = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Wilson" },
  { id: 3, name: "Carol Smith" }
];

export default function CandidatesTable({ jobId, onBack }) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [showInterviewModal, setShowInterviewModal] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [actionComment, setActionComment] = useState("");
  const [interviewForm, setInterviewForm] = useState({
    applicationId: "",
    roundId: "",
    scheduledAt: "",
    interviewerId: "",
    status: "",
    link: ""
  });

  const handleAction = (candidate, type) => {
    setSelectedCandidate(candidate);
    setActionType(type);
    setActionComment("");
    setShowActionModal(true);
  };

  const handleSubmitAction = () => {
    // Handle the action submission with the comment
    console.log({
      candidateId: selectedCandidate.id,
      actionType,
      comment: actionComment
    });
    setShowActionModal(false);
  };

  const handleScheduleInterview = (candidate) => {
    setSelectedCandidate(candidate);
    setInterviewForm({
      ...interviewForm,
      applicationId: candidate.id.toString()
    });
    setShowInterviewModal(true);
  };

  const handleInterviewFormChange = (e) => {
    setInterviewForm({
      ...interviewForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitInterview = () => {
    console.log("Interview scheduled:", interviewForm);
    setShowInterviewModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 
                       transition-all duration-300 group"
            >
              <MdArrowBack className="group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Job Details
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Candidates</h2>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 
                     transition-all duration-300 flex items-center gap-2"
          >
            <MdUpload className="w-5 h-5" />
            Upload Candidates
          </button>
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
                      <div className="flex items-center gap-2">
                        <button
                          title="Accept"
                          className="p-1 text-green-600 hover:bg-green-50 rounded-full"
                          onClick={() => handleAction(candidate, 'accept')}
                        >
                          <MdCheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          title="Reject"
                          className="p-1 text-red-600 hover:bg-red-50 rounded-full"
                          onClick={() => handleAction(candidate, 'reject')}
                        >
                          <MdCancel className="w-5 h-5" />
                        </button>
                        <button
                          title="Schedule Interview"
                          className="p-1 text-primary-600 hover:bg-primary-50 rounded-full"
                          onClick={() => handleScheduleInterview(candidate)}
                        >
                          <MdSchedule className="w-5 h-5" />
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

      <UploadCandidatesModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        jobId={jobId}
      />

      <Modal 
        isOpen={showActionModal} 
        onClose={() => setShowActionModal(false)}
        title={actionType === 'accept' ? 'Accept Application' : 'Reject Application'}
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            {selectedCandidate?.name} - {selectedCandidate?.email}
          </p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="4"
            placeholder={`Enter your comments for ${actionType === 'accept' ? 'accepting' : 'rejecting'} this application`}
            value={actionComment}
            onChange={(e) => setActionComment(e.target.value)}
          />
          <div className="flex justify-end gap-3">
            <button
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={() => setShowActionModal(false)}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 text-white rounded-lg ${
                actionType === 'accept' 
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
              onClick={handleSubmitAction}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showInterviewModal}
        onClose={() => setShowInterviewModal(false)}
        title="Schedule Interview"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Application ID
            </label>
            <select
              name="applicationId"
              value={interviewForm.applicationId}
              onChange={handleInterviewFormChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Application</option>
              {dummyCandidates.map(candidate => (
                <option key={candidate.id} value={candidate.id}>
                  {candidate.id} - {candidate.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Round
            </label>
            <select
              name="roundId"
              value={interviewForm.roundId}
              onChange={handleInterviewFormChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Round</option>
              {dummyRounds.map(round => (
                <option key={round.id} value={round.id}>
                  {round.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Scheduled At
            </label>
            <input
              type="date"
              name="scheduledAt"
              value={interviewForm.scheduledAt}
              onChange={handleInterviewFormChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interviewer
            </label>
            <select
              name="interviewerId"
              value={interviewForm.interviewerId}
              onChange={handleInterviewFormChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Interviewer</option>
              {dummyInterviewers.map(interviewer => (
                <option key={interviewer.id} value={interviewer.id}>
                  {interviewer.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <input
              type="text"
              name="status"
              value={interviewForm.status}
              onChange={handleInterviewFormChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter status"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meeting Link
            </label>
            <input
              type="url"
              name="link"
              value={interviewForm.link}
              onChange={handleInterviewFormChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter meeting link"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={() => setShowInterviewModal(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-lg"
              onClick={handleSubmitInterview}
            >
              Assign Interview
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}