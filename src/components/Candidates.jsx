const dummyCandidates = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    experience: "5 years",
    skills: ["React", "TypeScript", "Node.js"],
  },
  // Add more dummy candidates
];

export default function Candidates() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Candidates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {candidate.name}
            </h3>
            <p className="text-gray-600 mt-2">{candidate.role}</p>
            <p className="text-gray-500 mt-1">{candidate.experience}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {candidate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 