import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
	MdArrowBack,
	MdLocationOn,
	MdAttachMoney,
	MdBusinessCenter,
	MdTimer,
	MdEdit,
	MdDelete,
	MdClose,
	MdSave,
	MdPeople,
	MdChevronRight
} from "react-icons/md";
import Modal from "./Modal";
import CandidatesTable from "./CandidatesTable";
import UploadCandidatesModal from "./UploadCandidatesModal";

const dummyJobDetails = {
	1: {
		title: "Senior React Developer",
		company: "Tech Corp",
		location: "Remote",
		salary: "$120k - $150k",
		type: "Full-time",
		postedDate: "2 days ago",
		description:
			"We are looking for an experienced React developer to join our dynamic team. The ideal candidate will have a strong foundation in frontend development and a passion for creating exceptional user experiences.",
		requirements: [
			"5+ years of React experience",
			"Strong TypeScript skills",
			"Experience with state management (Redux, Context)",
			"Experience with REST APIs and GraphQL",
			"Excellent problem-solving skills",
		],
		responsibilities: [
			"Develop and maintain complex React applications",
			"Collaborate with cross-functional teams",
			"Optimize application performance",
			"Write clean, maintainable code",
			"Mentor junior developers",
		],
	},
	2: {
		title: "Full Stack Developer",
		company: "StartUp Inc",
		location: "New York",
		salary: "$100k - $130k",
		type: "Part-time",
		postedDate: "3 days ago",
		description:
			"Join our growing startup as a Full Stack Developer. You'll work on exciting projects using modern technologies and help shape our technical direction.",
		requirements: [
			"3+ years of full-stack development",
			"Experience with Node.js and React",
			"Database design and optimization",
			"AWS or similar cloud platforms",
		],
		responsibilities: [
			"Build scalable web applications",
			"Design and implement APIs",
			"Database management",
			"Deploy and maintain applications",
		],
	},
	3: {
		title: "Frontend Engineer",
		company: "Innovation Labs",
		location: "San Francisco",
		salary: "$110k - $140k",
		type: "Full-time",
		postedDate: "1 day ago",
		description:
			"Innovation Labs is seeking a talented Frontend Engineer to create beautiful and responsive web applications.",
		requirements: [
			"4+ years of frontend development",
			"Expert in HTML, CSS, and JavaScript",
			"Experience with modern frontend frameworks",
			"Strong UI/UX sensibilities",
		],
		responsibilities: [
			"Build responsive web applications",
			"Implement pixel-perfect designs",
			"Optimize frontend performance",
			"Work closely with designers",
		],
	},
	4: {
		title: "React Native Developer",
		company: "Mobile Tech",
		location: "Remote",
		salary: "$95k - $125k",
		type: "Contract",
		postedDate: "4 days ago",
		description:
			"Join our mobile development team to create cross-platform applications using React Native.",
		requirements: [
			"3+ years of React Native experience",
			"iOS and Android development understanding",
			"Experience with mobile app deployment",
			"Knowledge of mobile UI/UX principles",
		],
		responsibilities: [
			"Develop mobile applications",
			"Implement new features",
			"Optimize app performance",
			"Troubleshoot and debug issues",
		],
	},
	5: {
		title: "Senior UI/UX Developer",
		company: "Design Studio",
		location: "London",
		salary: "£70k - £90k",
		type: "Full-time",
		postedDate: "2 days ago",
		description:
			"Design Studio is looking for a Senior UI/UX Developer to create beautiful and intuitive user interfaces.",
		requirements: [
			"5+ years of UI/UX development",
			"Strong design skills",
			"Experience with design systems",
			"Prototyping tools expertise",
		],
		responsibilities: [
			"Create user interfaces",
			"Develop design systems",
			"Conduct user research",
			"Lead design initiatives",
		],
	},
};

export default function JobDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [job, setJob] = useState(dummyJobDetails[id]);
	const [isEditing, setIsEditing] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showCandidates, setShowCandidates] = useState(false);
	const [deleteReason, setDeleteReason] = useState("");
	const [deleteType, setDeleteType] = useState("");
	const [editedJob, setEditedJob] = useState(job);

	if (!job) return <div className="p-6">Job not found</div>;

	const handleSave = () => {
		setJob(editedJob);
		setIsEditing(false);
		// API call to save changes
	};

	const handleDelete = () => {
		if (deleteType === 'close' && !deleteReason) {
			return; // Don't close if reason is required but not provided
		}
		console.log(`Job ${deleteType}d`, deleteType === 'close' ? `with reason: ${deleteReason}` : '');
		setShowDeleteModal(false);
		// API call to update job status
	};

	return (
		<div className="p-6 max-w-5xl mx-auto">
			{/* Breadcrumbs */}
			<nav className="mb-6 flex items-center text-gray-500 text-sm">
				<Link to="/dashboard/jobs" className="hover:text-primary-600">Jobs</Link>
				<MdChevronRight className="mx-2" />
				<span className="text-gray-800">{job.title}</span>
			</nav>

			{!showCandidates ? (
				<div className="space-y-6">
					<div className="bg-white rounded-xl shadow-lg overflow-hidden">
						<div className="p-8 border-b border-gray-100">
							<div className="flex justify-between items-start">
								<div className="space-y-4">
									{isEditing ? (
										<input
											type="text"
											value={editedJob.title}
											onChange={(e) => setEditedJob({...editedJob, title: e.target.value})}
											className="text-3xl font-bold text-gray-800 w-full border-b border-gray-300 
																 focus:outline-none focus:border-primary-500"
										/>
									) : (
										<h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
									)}
									
									<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
										<div className="flex items-center text-gray-600">
											<MdBusinessCenter className="mr-2 text-primary-500" />
											{isEditing ? (
												<input
													type="text"
													value={editedJob.company}
													onChange={(e) => setEditedJob({...editedJob, company: e.target.value})}
													className="w-full border-b border-gray-300 focus:outline-none focus:border-primary-500"
												/>
											) : (
												job.company
											)}
										</div>
										<div className="flex items-center text-gray-600">
											<MdLocationOn className="mr-2 text-primary-500" />
											{isEditing ? (
												<input
													type="text"
													value={editedJob.location}
													onChange={(e) => setEditedJob({...editedJob, location: e.target.value})}
													className="w-full border-b border-gray-300 focus:outline-none focus:border-primary-500"
												/>
											) : (
												job.location
											)}
										</div>
										<div className="flex items-center text-gray-600">
											<MdAttachMoney className="mr-2 text-primary-500" />
											{isEditing ? (
												<input
													type="text"
													value={editedJob.salary}
													onChange={(e) => setEditedJob({...editedJob, salary: e.target.value})}
													className="w-full border-b border-gray-300 focus:outline-none focus:border-primary-500"
												/>
											) : (
												job.salary
											)}
										</div>
										<div className="flex items-center text-gray-600">
											<MdTimer className="mr-2 text-primary-500" />
											{job.postedDate}
										</div>
									</div>
								</div>

								<div className="flex items-center gap-3">
									{!isEditing ? (
										<>
											<button
												onClick={() => setIsEditing(true)}
												className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:bg-primary-50 
																	 rounded-lg transition-all duration-300"
											>
												<MdEdit /> Edit
											</button>
											<button
												onClick={() => setShowDeleteModal(true)}
												className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 
																	 rounded-lg transition-all duration-300"
											>
												<MdDelete /> Delete
											</button>
										</>
									) : (
										<button
											onClick={handleSave}
											className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white 
																 rounded-lg hover:bg-primary-700 transition-all duration-300"
										>
											<MdSave /> Save Changes
										</button>
									)}
								</div>
							</div>
						</div>

						<div className="p-8 space-y-6">
							<div>
								<h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
								{isEditing ? (
									<textarea
										value={editedJob.description}
										onChange={(e) => setEditedJob({...editedJob, description: e.target.value})}
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 
															 focus:ring-primary-500 focus:border-primary-500"
										rows={4}
									/>
								) : (
									<p className="text-gray-600 leading-relaxed">{job.description}</p>
								)}
							</div>

							<div>
								<h2 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h2>
								<ul className="space-y-2">
									{(isEditing ? editedJob.requirements : job.requirements).map((req, index) => (
										<li key={index} className="flex items-start text-gray-600">
											<span className="mr-2 text-primary-500">•</span>
											{isEditing ? (
												<input
													type="text"
													value={req}
													onChange={(e) => {
														const newReqs = [...editedJob.requirements];
														newReqs[index] = e.target.value;
														setEditedJob({...editedJob, requirements: newReqs});
													}}
													className="w-full border-b border-gray-300 focus:outline-none focus:border-primary-500"
												/>
											) : (
												req
											)}
										</li>
									))}
								</ul>
							</div>

							<div>
								<h2 className="text-xl font-semibold text-gray-800 mb-4">Responsibilities</h2>
								<ul className="space-y-2">
									{(isEditing ? editedJob.responsibilities : job.responsibilities).map((resp, index) => (
										<li key={index} className="flex items-start text-gray-600">
											<span className="mr-2 text-primary-500">•</span>
											{isEditing ? (
												<input
													type="text"
													value={resp}
													onChange={(e) => {
														const newResps = [...editedJob.responsibilities];
														newResps[index] = e.target.value;
														setEditedJob({...editedJob, responsibilities: newResps});
													}}
													className="w-full border-b border-gray-300 focus:outline-none focus:border-primary-500"
												/>
											) : (
												resp
											)}
										</li>
									))}
								</ul>
							</div>

							<div className="pt-6">
								<button
									onClick={() => setShowCandidates(true)}
									className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white 
														 rounded-lg hover:bg-primary-700 transition-all duration-300 
														 hover:shadow-lg transform hover:-translate-y-0.5"
								>
									<MdPeople /> View All Candidates
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<CandidatesTable 
					jobId={id} 
					onBack={() => setShowCandidates(false)}
				/>
			)}

			{/* Delete Modal */}
			<Modal
				isOpen={showDeleteModal}
				onClose={() => setShowDeleteModal(false)}
				title="Update Job Status"
			>
				<div className="space-y-6">
					<p className="text-gray-600">What would you like to do with this job?</p>
					
					<div className="space-y-3">
						<label className={`flex items-center p-3 rounded-lg border cursor-pointer
									   transition-all duration-300 ${
										 deleteType === 'hold' 
										   ? 'border-primary-600 bg-primary-50' 
										   : 'border-gray-300 hover:border-primary-300'
									   }`}>
							<input
								type="radio"
								name="deleteType"
								value="hold"
								checked={deleteType === 'hold'}
								onChange={(e) => setDeleteType(e.target.value)}
								className="w-4 h-4 text-primary-600 focus:ring-primary-500"
							/>
							<span className="ml-3">Hold Applications</span>
						</label>

						<label className={`flex items-center p-3 rounded-lg border cursor-pointer
									   transition-all duration-300 ${
										 deleteType === 'close' 
										   ? 'border-primary-600 bg-primary-50' 
										   : 'border-gray-300 hover:border-primary-300'
									   }`}>
							<input
								type="radio"
								name="deleteType"
								value="close"
								checked={deleteType === 'close'}
								onChange={(e) => setDeleteType(e.target.value)}
								className="w-4 h-4 text-primary-600 focus:ring-primary-500"
							/>
							<span className="ml-3">Close Position</span>
						</label>
					</div>

					{deleteType === 'close' && (
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Please provide a reason for closing this position
							</label>
							<textarea
								placeholder="Enter reason here..."
								value={deleteReason}
								onChange={(e) => setDeleteReason(e.target.value)}
								className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 
										     focus:ring-primary-500 focus:border-primary-500 
										     placeholder-gray-400"
								rows={4}
							/>
						</div>
					)}

					<div className="flex justify-end gap-3 pt-4">
						<button
							onClick={handleDelete}
							className="px-4 py-2 bg-primary-600 text-white rounded-lg 
									     hover:bg-primary-700 disabled:opacity-50 
									     disabled:cursor-not-allowed"
							disabled={!deleteType || (deleteType === 'close' && !deleteReason)}
						>
							Confirm
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}
