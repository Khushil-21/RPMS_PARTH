import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Jobs from "../components/Jobs";
import Candidates from "../components/Candidates";
import Events from "../components/Events";
import JobDetails from "../components/JobDetails";
import RecruitmentStatus from "../components/RecruitmentStatus";
import CreateJob from "../components/CreateJob";
import Interviews from "../components/Interviews";
import InterviewMeeting from "../components/InterviewMeeting";
import Reports from "../components/Reports";

export default function Dashboard() {
  const navigate = useNavigate();
  const userType = localStorage.getItem('userType') || 'candidate';

  const handleLogout = () => {
    localStorage.removeItem('userType');
    navigate("/login");
  };

  return (
    <>
      <Routes>
        <Route path="interviews/meeting/:id" element={<InterviewMeeting />} />
        <Route
          path="*"
          element={
            <div className="flex h-screen bg-gray-100">
              <Sidebar userType={userType} onLogout={handleLogout} />
              <div className="flex-1 overflow-auto">
                <Routes>
                  {userType === 'admin' ? (
                    <>
                      <Route path="jobs" element={<Jobs />} />
                      <Route path="jobs/:id" element={<JobDetails />} />
                      <Route path="candidates" element={<Candidates />} />
                      <Route path="events" element={<Events />} />
                      <Route path="interviews" element={<Interviews />} />
                      <Route path="reports" element={<Reports />} />
                      <Route path="create-job" element={<CreateJob />} />
                      {/* <Route path="*" element={<Navigate to="jobs" replace />} /> */}
                    </>
                  ) : (
                    <>
                      <Route path="recruitment-status" element={<RecruitmentStatus />} />
                      {/* <Route path="*" element={<Navigate to="recruitment-status" replace />} /> */}
                    </>
                  )}
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
} 