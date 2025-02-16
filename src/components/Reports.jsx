import { useState } from 'react';
import { MdDownload, MdBarChart, MdPieChart, MdTimeline, MdPeople } from 'react-icons/md';

const reportTypes = [
  {
    id: 'hiring',
    title: 'Hiring Overview',
    icon: <MdBarChart className="w-6 h-6" />,
    description: 'Track recruitment progress and hiring metrics',
  },
  {
    id: 'candidates',
    title: 'Candidate Analytics',
    icon: <MdPeople className="w-6 h-6" />,
    description: 'Analyze candidate sources and demographics',
  },
  {
    id: 'interviews',
    title: 'Interview Statistics',
    icon: <MdTimeline className="w-6 h-6" />,
    description: 'Review interview schedules and outcomes',
  },
  {
    id: 'skills',
    title: 'Skills Distribution',
    icon: <MdPieChart className="w-6 h-6" />,
    description: 'Analyze candidate skill sets and trends',
  },
];

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('hiring');

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Generate Reports</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {reportTypes.map((report) => (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`p-4 rounded-lg border transition-all duration-300 text-left
                         ${selectedReport === report.id
                           ? 'border-primary-600 bg-primary-50'
                           : 'border-gray-200 hover:border-primary-300'
                         }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary-600">{report.icon}</span>
                  <h3 className="font-medium text-gray-800">{report.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{report.description}</p>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Report Parameters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date Range
                  </label>
                  <select className="w-full rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Custom range</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Format
                  </label>
                  <select className="w-full rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500">
                    <option>PDF</option>
                    <option>Excel</option>
                    <option>CSV</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg
                             hover:bg-primary-700 transition-colors duration-300
                             flex items-center justify-center gap-2"
                  >
                    <MdDownload className="w-5 h-5" />
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 