import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" replace />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
			</Routes>
		</Router>
	);
}
