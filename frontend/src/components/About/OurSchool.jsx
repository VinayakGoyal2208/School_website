export default function OurSchool() {
  return (
    <section id="school" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">

      {/* CONTAINER */}
      <div className="bg-white rounded-xl shadow p-6 md:p-10">

        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Our School
        </h1>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row gap-8 items-center">

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1351416161/photo/female-teachers-teaching-students-in-library-at-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=c58Dl8WhTT3XDGlVsYBz0j9MXQfLCGDv0cpEZr40Lz4="
              alt="Our School"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-gray-700 space-y-4 text-sm sm:text-base leading-relaxed">

            <p>
              Our school is committed to providing a nurturing environment where
              students can grow academically, socially, and emotionally. We aim
              to build a strong foundation for lifelong learning.
            </p>

            <p>
              With a focus on innovation and creativity, we encourage students to
              explore their talents and develop leadership skills through various
              academic and extracurricular programs.
            </p>

            <p>
              Our experienced faculty, modern infrastructure, and student-centric
              approach ensure that every learner receives the best opportunities
              to succeed and excel.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">

              <div className="bg-gray-100 p-3 rounded-lg">
                ✔ Academic Excellence
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                ✔ Holistic Development
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                ✔ Modern Infrastructure
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                ✔ Experienced Faculty
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}