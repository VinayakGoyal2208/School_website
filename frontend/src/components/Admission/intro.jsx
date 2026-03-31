import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 md:py-24 px-[6%] sm:px-[8%]">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        
        {/* LEFT HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug text-black">
          OUR SCHOOL IS SO MUCH <br />
          MORE THAN A <br />
          TRADITIONAL <br />
          EDUCATIONAL <br />
          INSTITUTION
        </h2>

        {/* RIGHT CONTENT */}
        <div className="space-y-5 sm:space-y-6">
          <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed">
            Our institution is more than just a school. We provide students with a 
            holistic education in a value-driven environment that emphasizes 
            academic excellence, personal growth, and strong cultural roots. 
            Students are encouraged to become{" "}
            <span className="text-yellow-600 font-medium">
              confident individuals and responsible citizens
            </span>, 
            while also getting opportunities to excel{" "}
            <span className="text-yellow-600 font-medium">
              beyond the classroom
            </span>.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4">
            
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center border border-yellow-600 text-yellow-700 px-6 py-3 rounded-full text-sm tracking-wide hover:bg-yellow-50 transition"
            >
              SUBMIT AN INQUIRY
            </Link>

            <Link
              to="/apply"
              className="w-full sm:w-auto text-center bg-yellow-600 text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-yellow-700 transition"
            >
              APPLY FOR ADMISSION
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}