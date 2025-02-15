import { NavLink } from "react-router-dom";

export default function Sidebar({ userType, onLogout }) {
  const adminMenuItems = [
    { path: "jobs", label: "Jobs", icon: "📋" },
    { path: "candidates", label: "Candidates", icon: "👥" },
    { path: "events", label: "Events", icon: "🎉" },
  ];

  const candidateMenuItems = [
    { path: "recruitment-status", label: "Recruitment Status", icon: "📊" },
  ];

  const menuItems = userType === 'admin' ? adminMenuItems : candidateMenuItems;

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-sm text-gray-600 mt-1 capitalize">{userType} View</p>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={`/dashboard/${item.path}`}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? "bg-blue-50 text-blue-600" : ""
              }`
            }
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <span className="mr-2">🚪</span>
          Logout
        </button>
      </nav>
    </div>
  );
} 