import academic from "../../assets/hero_card/academic.png";
import athletic from "../../assets/hero_card/athletics.png";
import extrac from "../../assets/hero_card/extracurricular.png";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <section className="pt-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-30">
        {/* Title Card */}
        <div className="bg-yellow-500 text-white p-8 font-bold text-2xl md:text-3xl font-serif flex items-center">
          WHERE WILL YOU VENTURE TO?
        </div>

        {/* Academics */}
        <Link
          to="/Academics"
          className="bg-white px-6 pt-6 text-center shadow hover:shadow-lg transition"
        >
          <img
            src={academic}
            alt="Academics"
            className="w-20 h-20 object-contain mx-auto"
          />

          <h3 className="text-xl md:text-2xl font-serif mt-4 text-yellow-500">
            ACADEMICS
          </h3>

          <div className="hover:bg-yellow-500 hover:text-white text-3xl text-yellow-500 border border-b-0 rounded-t-[40px] mt-6 border-yellow-600 w-12 h-12 flex items-center justify-center mx-auto transition">
            +
          </div>
        </Link>
        {/* CENTER LINE (EXTENDING OUTSIDE) */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[80px] md:z-20">
          <div className="md:w-[2px] md:h-[100px] md:bg-yellow-500"></div>
        </div>

        {/* Admission */}
        <Link
          to="/admission"
          className="bg-white px-6 pt-6 text-center shadow hover:shadow-lg transition"
        >
          <img
            src={extrac}
            alt="Admission"
            className="w-20 h-20 object-contain mx-auto"
          />

          <h3 className="text-xl md:text-2xl font-serif mt-4 text-yellow-500">
            ADMISSION
          </h3>

          <div className="hover:bg-yellow-500 hover:text-white text-3xl text-yellow-500 border border-b-0 rounded-t-[40px] mt-6 border-yellow-600 w-12 h-12 flex items-center justify-center mx-auto transition">
            +
          </div>
        </Link>

        {/* Extracurricular */}
        <Link
          to="/Extracurricular"
          className="bg-white px-6 pt-6 text-center shadow hover:shadow-lg transition"
        >
          <img
            src={athletic}
            alt="Extracurricular"
            className="w-20 h-20 object-contain mx-auto"
          />

          <h3 className="text-xl md:text-xl font-serif mt-4 text-yellow-500">
            EXTRACURRICULAR
          </h3>

          <div className="hover:bg-yellow-500 hover:text-white text-3xl text-yellow-500 border border-b-0 rounded-t-[40px] mt-6 border-yellow-600 w-12 h-12 flex items-center justify-center mx-auto transition">
            +
          </div>
        </Link>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-100 to-transparent z-20"></div>
    </section>
  );
}
