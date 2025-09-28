import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentication logic here
    console.log({ name, email, password, confirmPassword });
    // redirect to login after signup
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign up to access your hostel dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
         
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="input input-bordered w-full pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered w-full pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            required
          />

         
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered w-full pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg"
            required
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="input input-bordered w-full pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg"
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-full py-2 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500">Already have an account?</p>
          <Link
            to="/"
            className="btn btn-outline btn-sm mt-2 hover:bg-blue-50 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
