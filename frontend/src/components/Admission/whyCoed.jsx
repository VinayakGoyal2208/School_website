/* WHY COED */
import { FaBalanceScale, FaUsers } from "react-icons/fa";
import { MdDiversity3 } from "react-icons/md";

export default function WhyCoed() {
  return (
    <section id="why" className="bg-yellow-500 py-20 sm:py-24 md:py-28 px-[6%] sm:px-[8%]">
      
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
        
        {/* LEFT HEADING */}
        <h2 className="text-2xl sm:text-3xl font-serif leading-snug text-white">
          WHY CO-ED?
        </h2>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* TIMELINE (DESKTOP ONLY) */}
          <div className="relative mb-16 hidden md:block">
            
            {/* LINE */}
            <div className="absolute top-20 left-0 w-full h-[2px] bg-white"></div>

            {/* ARROWS */}
            <div className="absolute top-9 left-0 w-full flex justify-between px-[16%] text-white text-7xl">
              <span>›</span>
              <span>›</span>
              <span>›</span>
            </div>

            {/* ICONS */}
            <div className="grid grid-cols-3 text-white relative z-10 mb-10">
              <div className="flex justify-center">
                <MdDiversity3 className="text-7xl" />
              </div>

              <div className="flex justify-center">
                <FaBalanceScale className="text-7xl" />
              </div>

              <div className="flex justify-center">
                <FaUsers className="text-7xl" />
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="flex flex-col gap-8 md:hidden text-white">
            
            <div className="flex items-start gap-4">
              <MdDiversity3 className="text-4xl shrink-0" />
              <p className="text-sm leading-6">
                Co-educational schools reflect the diversity of Indian society.
                Students learn teamwork, respect, and collaboration across
                genders.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaBalanceScale className="text-4xl shrink-0" />
              <p className="text-sm leading-6">
                It promotes values of equality, inclusion, and mutual respect,
                preparing students to become responsible citizens.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaUsers className="text-4xl shrink-0" />
              <p className="text-sm leading-6">
                Students experience real-world social dynamics, building
                confidence and communication skills for the future.
              </p>
            </div>

          </div>

          {/* DESKTOP TEXT */}
          <div className="hidden md:grid md:grid-cols-3 gap-16 text-[15px] leading-7 text-white">
            
            <div>
              <p className="max-w-[320px]">
                Co-educational schools reflect the diversity of Indian society.
                Students learn teamwork, respect, and collaboration across
                genders.
              </p>
            </div>

            <div>
              <p className="max-w-[320px]">
                It promotes values of equality, inclusion, and mutual respect,
                preparing students to become responsible citizens.
              </p>
            </div>

            <div>
              <p className="max-w-[320px]">
                Students experience real-world social dynamics, building
                confidence and communication skills for the future.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}