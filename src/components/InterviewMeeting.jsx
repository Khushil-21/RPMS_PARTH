import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
	MdMic,
	MdMicOff,
	MdVideocam,
	MdVideocamOff,
	MdCallEnd,
	MdChat,
	MdPeople,
	MdStar,
	MdStarBorder,
	MdStarHalf,
	MdPerson,
	MdArrowBack,
} from "react-icons/md";
import LandscapeModal from "./LandscapeModal";
import PropTypes from "prop-types";

const dummyInterviewData = {
	1: {
		candidateName: "John Doe",
		jobTitle: "Senior React Developer",
		interviewType: "Technical",
		interviewer: "Alice Johnson",
		requiredSkills: [
			"React",
			"TypeScript",
			"Node.js",
			"System Design",
			"Problem Solving",
		],
	},
	2: {
		candidateName: "Jane Smith",
		jobTitle: "Full Stack Developer",
		interviewType: "HR",
		interviewer: "Bob Wilson",
		requiredSkills: [
			"Communication",
			"Team Work",
			"Leadership",
			"Problem Solving",
		],
	},
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
				className={`text-2xl focus:outline-none ${
					disabled ? "cursor-default" : "cursor-pointer"
				}`}
			>
				{value >= starValue ? (
					<MdStar className="text-blue-500" />
				) : isHalfStar ? (
					<MdStarHalf className="text-blue-500" />
				) : (
					<MdStarBorder className="text-blue-500" />
				)}
			</button>
		);
	}
	return (
		<div className="flex items-center gap-4">
			<div className="flex gap-1">{stars}</div>
			<input
				type="number"
				value={value}
				onChange={(e) => {
					const val = parseFloat(e.target.value);
					if (val >= 0 && val <= 5) {
						onChange(val);
					}
				}}
				step="0.5"
				min="0"
				max="5"
				className="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm"
			/>
		</div>
	);
};

Rating.propTypes = {
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

Rating.defaultProps = {
	disabled: false,
};

export default function InterviewMeeting() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [showFeedbackModal, setShowFeedbackModal] = useState(false);
	const [isMicOn, setIsMicOn] = useState(true);
	const [isVideoOn, setIsVideoOn] = useState(true);
	const [interviewData] = useState(dummyInterviewData[id]);
	const [feedback, setFeedback] = useState({
		skillRatings: Object.fromEntries(
			interviewData.requiredSkills.map((skill) => [skill, 0])
		),
		comments: "",
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
		console.log("Feedback submitted:", feedback);
		navigate("/dashboard/interviews");
	};

	if (!interviewData) {
		return <div className="p-6">Interview not found</div>;
	}

	return (
		<div className="min-h-screen bg-white">
			{/* Breadcrumb */}
			<div className="bg-gray-50 border-b">
				<div className="max-w-screen-2xl mx-auto px-4">
					<div className="py-3 flex items-center gap-2 text-sm">
						<Link
							to="/dashboard/interviews"
							className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
						>
							<MdArrowBack className="w-4 h-4" />
							Back to Interviews
						</Link>
						<span className="text-gray-400">/</span>
						<span className="text-gray-600">
							Meeting with {interviewData.candidateName}
						</span>
					</div>
				</div>
			</div>

			{/* Header */}
			<div className="bg-white border-b p-4">
				<div className="max-w-screen-2xl mx-auto">
					<div className="flex justify-between items-center">
						<div>
							<h1 className="text-xl font-semibold text-gray-800">
								{interviewData.jobTitle}
							</h1>
							<p className="text-sm text-gray-500">
								{interviewData.candidateName} • {interviewData.interviewType}{" "}
								Interview
							</p>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2 text-gray-600">
								<MdPeople className="w-5 h-5" />
								<span className="text-sm">2 Participants</span>
							</div>
							<button className="text-gray-600 hover:text-gray-800">
								<MdChat className="w-6 h-6" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-screen-2xl mx-auto px-4">
				<div className="py-6">
					<div className="grid grid-cols-2 gap-6 h-[calc(100vh-280px)]">
						{/* Video Feeds */}
						<div className="bg-gray-50 rounded-xl overflow-hidden relative border shadow-sm">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center">
									<div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
										<MdPerson className="w-20 h-20 text-gray-400" />
									</div>
									<p className="text-sm bg-white bg-opacity-90 px-3 py-1 rounded-full inline-block">
										{interviewData.interviewer} (You)
									</p>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 rounded-xl overflow-hidden relative border shadow-sm">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center">
									<div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
										<MdPerson className="w-20 h-20 text-gray-400" />
									</div>
									<p className="text-sm bg-white bg-opacity-90 px-3 py-1 rounded-full inline-block">
										{interviewData.candidateName}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Controls */}
			<div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
				<div className="max-w-screen-2xl mx-auto">
					<div className="flex justify-center items-center gap-4">
						<button
							onClick={() => setIsMicOn(!isMicOn)}
							className={`p-3 rounded-full ${
								isMicOn
									? "bg-gray-100 hover:bg-gray-200"
									: "bg-red-100 text-red-600 hover:bg-red-200"
							}`}
						>
							{isMicOn ? (
								<MdMic className="w-6 h-6" />
							) : (
								<MdMicOff className="w-6 h-6" />
							)}
						</button>
						<button
							onClick={() => setIsVideoOn(!isVideoOn)}
							className={`p-3 rounded-full ${
								isVideoOn
									? "bg-gray-100 hover:bg-gray-200"
									: "bg-red-100 text-red-600 hover:bg-red-200"
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
							className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center gap-2"
						>
							<MdCallEnd className="w-6 h-6" />
							End Interview
						</button>
					</div>
				</div>
			</div>

			{/* Feedback Modal */}
			<LandscapeModal
				isOpen={showFeedbackModal}
				onClose={() => setShowFeedbackModal(false)}
				title={`Interview Feedback - ${interviewData.candidateName}`}
			>
				<div className="grid grid-cols-12 gap-6">
					{/* Left Column - Interview Details & Feedback */}
					<div className="col-span-5">
						{/* Interview Details */}
						<div className="bg-gray-50 p-4 rounded-lg mb-6">
							<h3 className="text-lg font-medium mb-4">Interview Details</h3>
							<div className="space-y-3 text-sm">
								<p className="flex">
									<span className="font-medium w-32">Candidate:</span>
									<span className="text-gray-600">{interviewData.candidateName}</span>
								</p>
								<p className="flex">
									<span className="font-medium w-32">Position:</span>
									<span className="text-gray-600">{interviewData.jobTitle}</span>
								</p>
								<p className="flex">
									<span className="font-medium w-32">Interview Type:</span>
									<span className="text-gray-600">{interviewData.interviewType}</span>
								</p>
								<p className="flex">
									<span className="font-medium w-32">Interviewer:</span>
									<span className="text-gray-600">{interviewData.interviewer}</span>
								</p>
							</div>
						</div>

						{/* Detailed Feedback */}
						<div>
							<h3 className="text-lg font-medium mb-4">Detailed Feedback</h3>
							<textarea
								value={feedback.comments}
								onChange={(e) =>
									setFeedback({ ...feedback, comments: e.target.value })
								}
								className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 
									 focus:ring-blue-500 focus:border-blue-500 h-[400px] resize-none"
								placeholder="Please provide detailed feedback about:

• Technical knowledge and expertise
• Problem-solving approach
• Communication skills
• Areas of strength
• Areas for improvement
• Overall recommendations"
							/>
						</div>
					</div>

					{/* Right Column - Skills Assessment */}
					<div className="col-span-7">
						<div>
							<h3 className="text-lg font-medium mb-4">Skills Assessment</h3>
							<div className="bg-gray-50 rounded-lg">
								{interviewData.requiredSkills.map((skill, index) => (
									<div 
										key={skill} 
										className={`p-6 flex items-center justify-between ${
											index !== interviewData.requiredSkills.length - 1 ? 'border-b border-gray-200' : ''
										}`}
									>
										<div className="space-y-1">
											<h4 className="font-medium text-gray-800">{skill}</h4>
											<p className="text-sm text-gray-500">Rate the candidate's proficiency in {skill}</p>
										</div>
										<div className="flex flex-col items-end gap-1">
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
											<span className="text-sm text-gray-500">
												{feedback.skillRatings[skill]} out of 5
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Actions - Full Width */}
					<div className="col-span-12 flex justify-end gap-3 pt-6 border-t">
						<button
							onClick={() => setShowFeedbackModal(false)}
							className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
						>
							Cancel
						</button>
						<button
							onClick={handleSubmitFeedback}
							className="px-6 py-2 bg-blue-600 text-white rounded-lg 
								 hover:bg-blue-700"
						>
							Submit Feedback
						</button>
					</div>
				</div>
			</LandscapeModal>
		</div>
	);
}
