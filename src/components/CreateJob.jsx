import { useState } from "react";
import toast from "react-hot-toast";

// Dummy skills for dropdown
const availableSkills = [
  "React", "JavaScript", "TypeScript", "Node.js", "Python", "Java", 
  "AWS", "Docker", "SQL", "MongoDB", "GraphQL", "REST API"
];

export default function CreateJob() {
  const [jobData, setJobData] = useState({
    roleId: "",
    title: "",
    description: "",
    status: "active", // active, draft, closed
    openings: "",
    requiredSkills: [],
    preferredSkills: []
  });

  const [skillInput, setSkillInput] = useState({
    required: "",
    preferred: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating job:", jobData);
    toast.success("Job created successfully!");
    // Reset form
    setJobData({
      roleId: "",
      title: "",
      description: "",
      status: "active",
      openings: "",
      requiredSkills: [],
      preferredSkills: []
    });
  };

  const handleSkillAdd = (type) => {
    const skill = skillInput[type];
    if (skill && !jobData[type === 'required' ? 'requiredSkills' : 'preferredSkills'].includes(skill)) {
      setJobData(prev => ({
        ...prev,
        [type === 'required' ? 'requiredSkills' : 'preferredSkills']: [...prev[type === 'required' ? 'requiredSkills' : 'preferredSkills'], skill]
      }));
      setSkillInput(prev => ({ ...prev, [type]: "" }));
    }
  };

  const handleSkillRemove = (type, skillToRemove) => {
    setJobData(prev => ({
      ...prev,
      [type === 'required' ? 'requiredSkills' : 'preferredSkills']: 
        prev[type === 'required' ? 'requiredSkills' : 'preferredSkills'].filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Job</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Role ID</label>
              <input
                type="text"
                value={jobData.roleId}
                onChange={(e) => setJobData({ ...jobData, roleId: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                         transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                value={jobData.title}
                onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                         transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Status</label>
              <select
                value={jobData.status}
                onChange={(e) => setJobData({ ...jobData, status: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                         transition-all duration-300"
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Number of Openings</label>
              <input
                type="number"
                value={jobData.openings}
                onChange={(e) => setJobData({ ...jobData, openings: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                         transition-all duration-300"
                required
                min="1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              value={jobData.description}
              onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300
                       focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                       transition-all duration-300"
              required
            />
          </div>

          {/* Required Skills */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Required Skills</label>
            <div className="flex gap-2">
              <select
                value={skillInput.required}
                onChange={(e) => setSkillInput({ ...skillInput, required: e.target.value })}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select a skill</option>
                {availableSkills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => handleSkillAdd('required')}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg
                         hover:bg-primary-700 transition-all duration-300"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {jobData.requiredSkills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full
                           flex items-center gap-1"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleSkillRemove('required', skill)}
                    className="hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Preferred Skills */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Preferred Skills</label>
            <div className="flex gap-2">
              <select
                value={skillInput.preferred}
                onChange={(e) => setSkillInput({ ...skillInput, preferred: e.target.value })}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select a skill</option>
                {availableSkills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => handleSkillAdd('preferred')}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg
                         hover:bg-primary-700 transition-all duration-300"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {jobData.preferredSkills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full
                           flex items-center gap-1"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleSkillRemove('preferred', skill)}
                    className="hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg
                       hover:bg-primary-700 focus:outline-none focus:ring-2
                       focus:ring-primary-500 focus:ring-offset-2
                       transition-all duration-300 hover:shadow-lg
                       transform hover:-translate-y-0.5"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 