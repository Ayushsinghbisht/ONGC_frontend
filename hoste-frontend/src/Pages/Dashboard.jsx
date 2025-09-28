import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    //  logout logic (clear auth token)
    navigate("/");
  };

  return (
<div className="flex h-screen bg-gray-100">
  {/* Sidebar */}
  <div
    className={`bg-white shadow-lg w-64 p-6 flex flex-col transition-transform duration-300 ${
      sidebarOpen ? "translate-x-0" : "-translate-x-64"
    }`}
  >
    <h2 className="text-2xl font-bold mb-8 text-gray-800">Hostel Dashboard</h2>
 <nav className="flex flex-col text-gray-700">
  <button className="btn btn-ghost w-full justify-start bg-gray-50 mb-2 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 hover:shadow-md transition duration-200">
    Home
  </button>
  <button className="btn btn-ghost w-full justify-start bg-gray-50 mb-2 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 hover:shadow-md transition duration-200">
    Rooms
  </button>
  <button className="btn btn-ghost w-full justify-start bg-gray-50 mb-2 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 hover:shadow-md transition duration-200">
    Bookings
  </button>
  <button className="btn btn-ghost w-full justify-start bg-gray-50 mb-2 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 hover:shadow-md transition duration-200">
    Users
  </button>
</nav>

  </div>

  {/* Main Content */}
  <div className="flex-1 flex flex-col">
    {/* Navbar */}
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4">
      <button
        className="btn btn-ghost md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        Toggle Sidebar
      </button>
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      <button
        className="btn btn-outline btn-sm hover:bg-blue-50"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>

    {/* Dashboard Content */}
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto">
      {/* Example Card */}
      <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-lg hover:ring-2 hover:ring-blue-300 transition duration-200 cursor-pointer">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Total Rooms</h2>
        <p className="text-3xl font-extrabold text-blue-500">120</p>
      </div>

      <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-lg hover:ring-2 hover:ring-blue-300 transition duration-200 cursor-pointer">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Active Bookings</h2>
        <p className="text-3xl font-extrabold text-purple-500">45</p>
      </div>

      <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-lg hover:ring-2 hover:ring-blue-300 transition duration-200 cursor-pointer">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Registered Users</h2>
        <p className="text-3xl font-extrabold text-green-500">85</p>
      </div>

      {/* Add more cards or tables as needed */}
    </div>
  </div>
</div>


  );
}
