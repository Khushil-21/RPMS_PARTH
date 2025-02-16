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
      className={`bg-white shadow-lg transition-all duration-300 ease-in-out 
                  border-r border-gray-100 ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      <div className="sticky top-0 bg-white z-10">
        <div className="p-4 flex items-center justify-between border-b border-gray-100">
          {!isCollapsed && (
            <h2 className="text-2xl font-bold text-primary-600">Dashboard</h2>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-primary-50 text-primary-600
                     transition-all duration-300"
          >
            <HiMenuAlt2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      <nav className="mt-4 px-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={`/dashboard/${item.path}`}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg transition-all duration-300
               hover:bg-primary-50 group relative ${
                isActive 
                  ? 'bg-primary-100 text-primary-600 shadow-sm' 
                  : 'text-gray-700'
              }`
            }
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            {!isCollapsed && (
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
            )}
            {isCollapsed && (
              <div className="absolute left-16 bg-gray-800 text-white px-3 py-2 
                            rounded-lg hidden group-hover:block whitespace-nowrap
                            shadow-lg z-50">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
        
        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-3 mt-4 rounded-lg
                   text-red-600 hover:bg-red-50 transition-all duration-300
                   group relative"
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            <MdLogout className="w-6 h-6" />
          </span>
          {!isCollapsed && (
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              Logout
            </span>
          )}
        </button>
      </nav>
    </div>
  );
} 