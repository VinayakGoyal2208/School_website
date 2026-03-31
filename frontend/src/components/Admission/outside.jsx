import { FaFutbol, FaTrophy, FaGlobe } from "react-icons/fa";

export default function Outside() {
  return (
    <section className="bg-gray-700 py-20 sm:py-24 md:py-28 px-[6%] sm:px-[8%]">
      
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
        
        {/* LEFT HEADING */}
        <h2 className="text-2xl sm:text-3xl font-serif leading-snug text-white font-bold">
          OUTSIDE OF THE CLASSROOM
        </h2>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* TIMELINE (DESKTOP ONLY) */}
          <div className="relative mb-16 hidden md:block">
            
            {/* LINE */}
            <div className="absolute top-20 left-0 w-full h-[2px] bg-yellow-500"></div>

            {/* ARROWS */}
            <div className="absolute top-9 left-0 w-full flex justify-between px-[16%] text-yellow-500 text-7xl">
              <span>›</span>
              <span>›</span>
              <span>›</span>
            </div>

            {/* ICONS */}
            <div className="grid grid-cols-3 text-yellow-500 relative z-10">
              <div className="flex justify-center">
                <FaFutbol className="text-6xl" />
              </div>

              <div className="flex justify-center">
                <FaTrophy className="text-6xl" />
              </div>

              <div className="flex justify-center">
                <FaGlobe className="text-6xl" />
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="flex flex-col gap-8 md:hidden text-white">
            
            <div className="flex items-start gap-4">
              <FaFutbol className="text-4xl text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                Students actively participate in sports like cricket, football,
                and athletics, developing discipline and teamwork.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaTrophy className="text-4xl text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                Our school teams have won numerous inter-school competitions,
                showcasing excellence in sports and academics.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaGlobe className="text-4xl text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                Extracurricular activities like robotics, arts, and cultural events
                help students gain national-level recognition.
              </p>
            </div>

          </div>

          {/* DESKTOP TEXT */}
          <div className="hidden md:grid md:grid-cols-3 gap-16 text-[15px] leading-7 text-white">
            
            <div>
              <p className="max-w-[320px]">
                Students actively participate in sports like cricket, football,
                and athletics, developing discipline and teamwork.
              </p>
            </div>

            <div>
              <p className="max-w-[320px]">
                Our school teams have won numerous inter-school competitions,
                showcasing excellence in sports and academics.
              </p>
            </div>

            <div>
              <p className="max-w-[320px]">
                Extracurricular activities like robotics, arts, and cultural events
                help students gain national-level recognition.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}