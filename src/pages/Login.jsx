import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		userType: "candidate", // default value
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Login attempt with:", formData);
		// Store user type in localStorage for persistence
		localStorage.setItem("userType", formData.userType);
		if (formData.userType === "candidate") {
			navigate("/dashboard/jobs"); // Navigate to dashboard after login
		} else {
			navigate("/dashboard/recruitment-status"); // Navigate to dashboard after login
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm space-y-4">
						<div>
							<label htmlFor="email" className="sr-only">
								Email address
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Email address"
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Password"
								value={formData.password}
								onChange={handleChange}
							/>
						</div>
						<div className="flex space-x-4">
							<div className="flex items-center">
								<input
									type="radio"
									id="candidate"
									name="userType"
									value="candidate"
									checked={formData.userType === "candidate"}
									onChange={handleChange}
									className="h-4 w-4 text-blue-600"
								/>
								<label
									htmlFor="candidate"
									className="ml-2 text-sm text-gray-900"
								>
									Candidate
								</label>
							</div>
							<div className="flex items-center">
								<input
									type="radio"
									id="admin"
									name="userType"
									value="admin"
									checked={formData.userType === "admin"}
									onChange={handleChange}
									className="h-4 w-4 text-blue-600"
								/>
								<label htmlFor="admin" className="ml-2 text-sm text-gray-900">
									Admin
								</label>
							</div>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
