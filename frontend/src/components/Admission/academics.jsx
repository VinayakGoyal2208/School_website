import { BookOpen, FileText, Trophy } from "lucide-react";

export default function Academics() {
  return (
    <section id="excellence" className="bg-gray-100 py-20 sm:py-24 md:py-28 px-[6%] sm:px-[8%]">
      
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
        
        {/* LEFT HEADING */}
        <h2 className="text-2xl sm:text-3xl font-serif leading-snug text-black">
          Academically <br /> Excellent
        </h2>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* TIMELINE (DESKTOP ONLY) */}
          <div className="relative mb-16 hidden md:block">
            
            <div className="absolute top-20 left-0 w-full h-[2px] bg-yellow-500"></div>

            <div className="absolute top-9 left-0 w-full flex justify-between px-[16%] text-yellow-500 text-7xl">
              <span>›</span>
              <span>›</span>
              <span>›</span>
            </div>

            <div className="grid grid-cols-3 text-yellow-600 relative z-10">
              <div className="flex justify-center">
                <BookOpen size={56} strokeWidth={1.5} />
              </div>

              <div className="flex justify-center">
                <FileText size={56} strokeWidth={1.5} />
              </div>

              <div className="flex justify-center">
                <Trophy size={56} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="flex flex-col gap-8 md:hidden text-gray-700">
            
            <div className="flex items-start gap-4">
              <BookOpen size={40} className="text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                Our school offers a wide range of subjects and electives, allowing
                students to explore their interests and build a strong academic
                foundation for the future.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FileText size={40} className="text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                We are a recognized institution following a structured and
                quality-driven curriculum that ensures consistent academic
                excellence and student development.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Trophy size={40} className="text-yellow-500 shrink-0" />
              <p className="text-sm leading-6">
                Students get opportunities to participate in advanced learning
                programs, competitions, and skill-based activities that prepare
                them for higher education and real-world challenges.
              </p>
            </div>

          </div>

          {/* DESKTOP TEXT */}
          <div className="hidden md:grid md:grid-cols-3 gap-16 text-[15px] leading-7 text-gray-700">
            
            <p className="max-w-[320px]">
              Our school offers a wide range of subjects and electives, allowing
              students to explore their interests and build a strong academic
              foundation for the future.
            </p>

            <p className="max-w-[320px]">
              We are a recognized institution following a structured and
              quality-driven curriculum that ensures consistent academic
              excellence and student development.
            </p>

            <p className="max-w-[320px]">
              Students get opportunities to participate in advanced learning
              programs, competitions, and skill-based activities that prepare
              them for higher education and real-world challenges.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}