import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, ClipboardList, Bell, LogOut } from "lucide-react";

export default function ERPPage() {
  const { className } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/loginpage");
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* 🔵 Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-5 hidden md:flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8">School ERP</h1>

          <ul className="space-y-4">
            <li className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <ClipboardList size={18} /> Attendance
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <BookOpen size={18} /> Marks
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <Bell size={18} /> Notices
            </li>
          </ul>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* 🟢 Main Content */}
      <div className="flex-1 p-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-sm text-gray-500">
            <span className="font-medium">{user?.classApplyingFor}</span>
          </p>
        </div>

        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow mb-6"
        >
          <h3 className="text-xl font-semibold">
            Welcome, {user?.studentName} 👋
          </h3>
          <p className="text-gray-500 mt-1">
            Here’s your academic overview
          </p>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {/* Attendance */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-xl shadow cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <ClipboardList className="text-blue-600" />
              <h4 className="font-semibold text-lg">Attendance</h4>
            </div>
            <p className="text-sm text-gray-500">
              View your attendance records
            </p>
          </motion.div>

          {/* Marks */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-xl shadow cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-green-600" />
              <h4 className="font-semibold text-lg">Marks</h4>
            </div>
            <p className="text-sm text-gray-500">
              Check your exam results
            </p>
          </motion.div>

          {/* Notices */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-xl shadow cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <Bell className="text-yellow-500" />
              <h4 className="font-semibold text-lg">Notices</h4>
            </div>
            <p className="text-sm text-gray-500">
              Latest announcements
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}