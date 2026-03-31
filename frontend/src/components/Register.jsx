import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    classApplyingFor: "",
    password: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Single handler for all inputs
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, ""); // only numbers
    }

    setForm({ ...form, [name]: value });
  };

  // ✅ Only phone validation
  const validate = () => {
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(form.phone)) {
      setPhoneError("Phone must be exactly 10 digits");
      return false;
    }

    setPhoneError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("https://school-website-yrmq.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful ✅");
        navigate("/loginpage");
      } else {
        alert(data.message || data.msg || "Registration failed ❌");
      }
    } catch (error) {
      alert("Server error ❌");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          School Registration
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Fill the form to apply for admission
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Student Name */}
          <div>
            <label className="text-sm font-medium">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={form.studentName}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Parent Name */}
          <div>
            <label className="text-sm font-medium">Parent Name</label>
            <input
              type="text"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Class */}
          <div className="md:col-span-1">
            <label className="text-sm font-medium">Class Applying For</label>
            <select
              name="classApplyingFor"
              value={form.classApplyingFor}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Class</option>
              <option>Class 1</option>
              <option>Class 2</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              maxLength={10}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                phoneError ? "border-red-500" : ""
              }`}
              required
            />
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sm text-gray-500"
              ></button>
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Register
            </button>
          </div>
        </form>

        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/loginpage" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
