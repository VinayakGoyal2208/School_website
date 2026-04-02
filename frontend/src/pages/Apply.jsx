import { useState } from "react";

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    className: "",
    dob: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ✅ PHONE VALIDATION HERE
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    try {
      const res = await fetch(
        "https://school-website-yrmq.onrender.com/api/apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("Application submitted successfully!");

        // reset form
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          className: "",
          dob: "",
          address: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };
  return (
    <div className="bg-gray-100">
      {/* ================= HERO ================= */}
      <section id="hero" className="relative h-[60vh] md:h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 h-full flex items-end px-[6%] pb-16">
          <h1 className="text-yellow-500 text-3xl md:text-5xl font-serif font-bold">
            APPLY NOW
          </h1>
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-[6%] py-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Eligibility</h3>
            <p className="text-sm text-gray-600">
              Students must meet academic criteria for the selected class.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Documents Required</h3>
            <p className="text-sm text-gray-600">
              Birth certificate, previous report card, ID proof.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Admission Deadline</h3>
            <p className="text-sm text-gray-600">
              Applications open till March 31.
            </p>
          </div>
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-[6%] pb-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">
          Admission Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Fill Application Form",
            "Submit Documents",
            "Entrance Test / Interview",
            "Fee Payment & Confirmation",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
            >
              <div className="text-yellow-500 text-xl font-bold mb-2">
                {i + 1}
              </div>
              <p className="text-sm text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FORM ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-[6%] pb-12">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center">
            Application Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Student Name"
              name="studentName"
              value={formData.studentName}
              required
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-3 focus:border-yellow-500 outline-none"
            />

            <input
              type="text"
              placeholder="Parent Name"
              name="parentName"
              value={formData.parentName}
              required
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-3 focus:border-yellow-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              name="email"
              required
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-3 focus:border-yellow-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              required
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              maxLength={10}
              className="border border-gray-300 rounded px-4 py-3 focus:border-yellow-500 outline-none"
            />

            {/* CLASS DROPDOWN */}
            <select
              name="className"
              value={formData.className}
              required
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-3 focus:border-yellow-500 outline-none"
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="KG">KG</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
            </select>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              required
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-3 focus:border-yellow-500 outline-none"
            />

            <textarea
              name="address"
              required
              onChange={handleChange}
              value={formData.address}
              placeholder="Address"
              rows="4"
              className="md:col-span-2 border border-gray-300 rounded px-4 py-3 focus:border-yellow-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-yellow-500 text-black py-3 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-[#1e1e1e] text-white text-center py-10 px-6">
        <h3 className="text-xl md:text-2xl font-serif mb-3">
          Need Help with Admission?
        </h3>
        <p className="text-gray-400 mb-4 text-sm md:text-base">
          Contact our admission office for guidance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <div className="flex items-center gap-2 text-yellow-500">
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
              />
            </svg>

            <a
              href="mailto:school@gmail.com"
              className="font-semibold hover:text-yellow-600 transition"
            >
              school@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 text-yellow-500">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3l2 5-2 2a11 11 0 005 5l2-2 5 2v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>

            <a
              href="tel:+1234567890"
              className="font-semibold hover:text-yellow-600 transition"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>

      {/* SPACE */}
      <div className="h-16 md:h-24"></div>
    </div>
  );
}
