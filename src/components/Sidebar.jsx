import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { 
  MdWork, 
  MdPeople, 
  MdEvent, 
  MdLogout, 
  MdAssignment,
  MdAdd,
  MdSchedule
} from "react-icons/md";

export default function Sidebar({ userType, onLogout }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const adminMenuItems = [
    { path: "jobs", label: "Jobs", icon: <MdWork className="w-6 h-6" /> },
    { path: "create-job", label: "Create Job", icon: <MdAdd className="w-6 h-6" /> },
    { path: "candidates", label: "Candidates", icon: <MdPeople className="w-6 h-6" /> },
    { path: "interviews", label: "Interviews", icon: <MdSchedule className="w-6 h-6" /> },
    { path: "events", label: "Events", icon: <MdEvent className="w-6 h-6" /> },
  ];

  const candidateMenuItems = [
    { 
      path: "recruitment-status", 
      label: "Recruitment Status", 
      icon: <MdAssignment className="w-6 h-6" /> 
    },
  ];

  const menuItems = userType === 'admin' ? adminMenuItems : candidateMenuItems;

  return (
    <div 
      className={`bg-white shadow-lg transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <HiMenuAlt2 className="w-6 h-6" />
        </button>
      </div>
      
      {!isCollapsed && (
        <p className="px-4 text-sm text-gray-600 capitalize">{userType} View</p>
      )}

      <nav className="mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={`/dashboard/${item.path}`}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 group relative ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <span className="mr-2">{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
            {isCollapsed && (
              <div className="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 group relative"
        >
          <span className="mr-2">
            <MdLogout className="w-6 h-6" />
          </span>
          {!isCollapsed && <span>Logout</span>}
          {isCollapsed && (
            <div className="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded hidden group-hover:block">
              Logout
            </div>
          )}
        </button>
      </nav>
    </div>
  );
} 