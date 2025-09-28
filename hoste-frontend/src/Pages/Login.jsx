import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);

    // redirect to dashboard
    navigate("/dashboard");
  };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 px-4">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
        ONGC Welcomes you 
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Sign in to access your hostel dashboard
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered w-full pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            required
          />
        </div>

        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered w-full pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full py-2 rounded-lg hover:scale-105 transition-transform duration-200"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-500">Don't have an account?</p>
        <Link
          to="/signup"
          className="btn btn-outline btn-sm mt-2 text-gray-500 hover:bg-blue-50 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </div>
);

}
