import { useState } from "react";
import toast from "react-hot-toast";

export default function CreateJob() {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    requirements: "",
    status: "open"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    toast.success("Job created successfully!");
    setJobData({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
      requirements: "",
      status: "open"
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Job</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                name="title"
                value={jobData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                         transition-all duration-300"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={jobData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                         transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={jobData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                         transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Salary Range</label>
              <input
                type="text"
                name="salary"
                value={jobData.salary}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                         transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300
                       focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                       transition-all duration-300 resize-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Requirements</label>
            <textarea
              name="requirements"
              value={jobData.requirements}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300
                       focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                       transition-all duration-300 resize-none"
              required
            />
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