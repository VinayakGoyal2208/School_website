import { Eye, Target } from "lucide-react";

export default function VisMis() {
  return (
    <section id="vision" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">

      {/* HEADING */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Vision & Mission
        </h1>
        <p className="text-gray-600 max-w-xl">
          Our guiding principles that shape the future of our students and institution.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* VISION */}
        <div className="relative bg-gradient-to-br from-yellow-50 to-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">

          {/* ICON */}
          <div className="mb-4 text-yellow-500">
            <Eye size={30} />
          </div>

          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            To nurture responsible, confident, and compassionate individuals who
            are prepared to face global challenges and contribute positively to society.
          </p>

          {/* POINTS */}
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✔ Develop leadership qualities</li>
            <li>✔ Encourage creativity & innovation</li>
            <li>✔ Promote ethical values</li>
          </ul>
        </div>

        {/* MISSION */}
        <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">

          {/* ICON */}
          <div className="mb-4 text-yellow-500">
            <Target size={30} />
          </div>

          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            To provide a dynamic learning environment that empowers students with
            knowledge, skills, and values required to succeed in life.
          </p>

          {/* POINTS */}
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✔ Deliver quality education</li>
            <li>✔ Foster innovation & critical thinking</li>
            <li>✔ Ensure holistic development</li>
          </ul>
        </div>

      </div>
    </section>
  );
}