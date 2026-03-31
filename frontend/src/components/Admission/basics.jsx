import { Backpack, Users, Leaf } from "lucide-react";

export default function Basics() {
  return (
    <section id="basics" className="bg-[#4b545c] py-20 sm:py-24 md:py-28 px-[6%] sm:px-[8%]">
      
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
        
        {/* LEFT HEADING */}
        <h2 className="text-2xl sm:text-3xl font-serif leading-snug text-white">
          The Basics
        </h2>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* TIMELINE (HIDE ON MOBILE) */}
          <div className="relative mb-16 hidden md:block">
            
            <div className="absolute top-20 left-0 w-full h-[2px] bg-yellow-500"></div>

            <div className="absolute top-9 left-0 w-full flex justify-between px-[16%] text-yellow-500 text-7xl">
              <span>›</span>
              <span>›</span>
              <span>›</span>
            </div>

            <div className="grid grid-cols-3 text-yellow-600 relative z-10">
              <div className="flex justify-center">
                <Backpack size={56} strokeWidth={1.5} />
              </div>
              <div className="flex justify-center">
                <Users size={56} strokeWidth={1.5} />
              </div>
              <div className="flex justify-center">
                <Leaf size={56} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT (ICON LEFT - TEXT RIGHT) */}
          <div className="flex flex-col gap-8 md:hidden text-white">
            
            <div className="flex items-start gap-4">
              <Backpack size={40} className="text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                We are a co-educational institution committed to academic excellence 
                and holistic development. Students from diverse backgrounds come 
                together to learn and grow.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Users size={40} className="text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                With a balanced student-teacher ratio, we ensure personalized attention 
                and meaningful interaction for every student.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Leaf size={40} className="text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                Our school prepares students for success by focusing on academic, 
                social, and emotional growth.
              </p>
            </div>

          </div>

          {/* DESKTOP TEXT */}
          <div className="hidden md:grid md:grid-cols-3 gap-16 text-[15px] leading-7 text-white">
            <p className="max-w-[320px]">
              We are a co-educational institution committed to academic excellence 
              and holistic development. Students from diverse backgrounds come 
              together to learn and grow.
            </p>

            <p className="max-w-[320px]">
              With a balanced student-teacher ratio, we ensure personalized attention 
              and meaningful interaction for every student.
            </p>

            <p className="max-w-[320px]">
              Our school prepares students for success by focusing on academic, 
              social, and emotional growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}