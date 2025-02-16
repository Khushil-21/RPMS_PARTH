import { useParams, Link, useNavigate } from "react-router-dom";
import { MdArrowBack, MdLocationOn, MdAttachMoney, MdBusinessCenter, MdTimer } from "react-icons/md";

const dummyJobDetails = {
  1: {
    title: "Senior React Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$120k - $150k",
    type: "Full-time",
    postedDate: "2 days ago",
    description: "We are looking for an experienced React developer to join our dynamic team. The ideal candidate will have a strong foundation in frontend development and a passion for creating exceptional user experiences.",
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
    ]
  },
  2: {
    title: "Full Stack Developer",
    company: "StartUp Inc",
    location: "New York",
    salary: "$100k - $130k",
    type: "Part-time",
    postedDate: "3 days ago",
    description: "Join our growing startup as a Full Stack Developer. You'll work on exciting projects using modern technologies and help shape our technical direction.",
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
    ]
  },
  3: {
    title: "Frontend Engineer",
    company: "Innovation Labs",
    location: "San Francisco",
    salary: "$110k - $140k",
    type: "Full-time",
    postedDate: "1 day ago",
    description: "Innovation Labs is seeking a talented Frontend Engineer to create beautiful and responsive web applications.",
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
    ]
  },
  4: {
    title: "React Native Developer",
    company: "Mobile Tech",
    location: "Remote",
    salary: "$95k - $125k",
    type: "Contract",
    postedDate: "4 days ago",
    description: "Join our mobile development team to create cross-platform applications using React Native.",
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
    ]
  },
  5: {
    title: "Senior UI/UX Developer",
    company: "Design Studio",
    location: "London",
    salary: "£70k - £90k",
    type: "Full-time",
    postedDate: "2 days ago",
    description: "Design Studio is looking for a Senior UI/UX Developer to create beautiful and intuitive user interfaces.",
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
    ]
  }
};

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = dummyJobDetails[id];

  if (!job) return <div className="p-6">Job not found</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 
                   transition-all duration-300 group"
        >
          <MdArrowBack className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Jobs
        </button>
        <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
          {job.type}
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <MdBusinessCenter className="mr-2 text-primary-500" />
              {job.company}
            </div>
            <div className="flex items-center text-gray-600">
              <MdLocationOn className="mr-2 text-primary-500" />
              {job.location}
            </div>
            <div className="flex items-center text-gray-600">
              <MdAttachMoney className="mr-2 text-primary-500" />
              {job.salary}
            </div>
            <div className="flex items-center text-gray-600">
              <MdTimer className="mr-2 text-primary-500" />
              {job.postedDate}
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="mr-2 text-primary-500">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Responsibilities</h2>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="mr-2 text-primary-500">•</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <button className="w-full sm:w-auto bg-primary-600 text-white px-8 py-3 rounded-lg
                           hover:bg-primary-700 transition-all duration-300 hover:shadow-lg
                           transform hover:-translate-y-0.5">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 