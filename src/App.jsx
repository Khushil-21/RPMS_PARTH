import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
	return (
		<Router>
			<Toaster />
			<Routes>
				<Route path="/" element={<Navigate to="/login" replace />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
			</Routes>
		</Router>
	);
}
