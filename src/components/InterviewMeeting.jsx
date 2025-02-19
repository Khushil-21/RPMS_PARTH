import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdMic, MdMicOff, MdVideocam, MdVideocamOff, MdCallEnd, MdChat, MdPeople, MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';
import Modal from './Modal';

const dummyInterviewData = {
  1: {
    candidateName: "John Doe",
    jobTitle: "Senior React Developer",
    interviewType: "Technical",
    interviewer: "Alice Johnson",
    requiredSkills: ["React", "TypeScript", "Node.js", "System Design", "Problem Solving"]
  },
  2: {
    candidateName: "Jane Smith",
    jobTitle: "Full Stack Developer",
    interviewType: "HR",
    interviewer: "Bob Wilson",
    requiredSkills: ["Communication", "Team Work", "Leadership", "Problem Solving"]
  }
};

const Rating = ({ value, onChange, disabled }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starValue = i;
    const isHalfStar = value === i - 0.5;
    stars.push(
      <button
        key={i}
        disabled={disabled}
        onClick={() => onChange(starValue)}
        onMouseEnter={() => !disabled && onChange(starValue)}
        className={`text-2xl focus:outline-none ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
      >
        {value >= starValue ? (
          <MdStar className="text-yellow-400" />
        ) : isHalfStar ? (
          <MdStarHalf className="text-yellow-400" />
        ) : (
          <MdStarBorder className="text-yellow-400" />
        )}
      </button>
    );
  }
  return <div className="flex gap-1">{stars}</div>;
};

export default function InterviewMeeting() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [interviewData] = useState(dummyInterviewData[id]);
  const [feedback, setFeedback] = useState({
    overallRating: 0,
    skillRatings: Object.fromEntries(
      interviewData.requiredSkills.map(skill => [skill, 0])
    ),
    comments: ""
  });

  useEffect(() => {
    // Cleanup function to handle unmounting
    return () => {
      // Cleanup video/audio streams if needed
    };
  }, []);

  const handleEndCall = () => {
    setShowFeedbackModal(true);
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', feedback);
    navigate('/dashboard/interviews');
  };

  if (!interviewData) {
    return <div className="p-6">Interview not found</div>;
  }

  return (
    <div className="h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">{interviewData.jobTitle}</h1>
          <p className="text-sm text-gray-400">
            {interviewData.candidateName} • {interviewData.interviewType} Interview
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <MdPeople className="w-5 h-5" />
            <span className="text-sm">2 Participants</span>
          </div>
          <button className="text-gray-400 hover:text-white">
            <MdChat className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 h-[calc(100vh-180px)]">
        <div className="grid grid-cols-2 gap-6 h-full">
          {/* Video Feeds */}
          <div className="bg-gray-800 rounded-xl overflow-hidden relative">
            <video
              className="w-full h-full object-cover"
              poster="https://placekitten.com/800/600"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                {interviewData.interviewer} (You)
              </p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl overflow-hidden relative">
            <video
              className="w-full h-full object-cover"
              poster="https://placekitten.com/801/600"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                {interviewData.candidateName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800 p-4 absolute bottom-0 w-full">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setIsMicOn(!isMicOn)}
            className={`p-3 rounded-full ${
              isMicOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            {isMicOn ? <MdMic className="w-6 h-6" /> : <MdMicOff className="w-6 h-6" />}
          </button>
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-3 rounded-full ${
              isVideoOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            {isVideoOn ? (
              <MdVideocam className="w-6 h-6" />
            ) : (
              <MdVideocamOff className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={handleEndCall}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full flex items-center gap-2"
          >
            <MdCallEnd className="w-6 h-6" />
            End Interview
          </button>
        </div>
      </div>

      {/* Feedback Modal */}
      <Modal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        title="Interview Feedback"
      >
        <div className="space-y-6 text-gray-800">
          <div>
            <label className="block text-sm font-medium mb-2">
              Overall Rating
            </label>
            <Rating
              value={feedback.overallRating}
              onChange={(value) =>
                setFeedback({ ...feedback, overallRating: value })
              }
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Skill-wise Rating
            </label>
            {interviewData.requiredSkills.map((skill) => (
              <div key={skill} className="flex justify-between items-center">
                <span className="text-sm">{skill}</span>
                <Rating
                  value={feedback.skillRatings[skill]}
                  onChange={(value) =>
                    setFeedback({
                      ...feedback,
                      skillRatings: {
                        ...feedback.skillRatings,
                        [skill]: value,
                      },
                    })
                  }
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Additional Comments
            </label>
            <textarea
              value={feedback.comments}
              onChange={(e) =>
                setFeedback({ ...feedback, comments: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-primary-500 focus:border-primary-500"
              rows={4}
              placeholder="Enter your feedback here..."
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowFeedbackModal(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitFeedback}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg 
                       hover:bg-primary-700"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
} 