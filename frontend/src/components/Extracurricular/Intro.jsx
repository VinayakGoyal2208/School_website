
export default function Intro() {
  return (
    <section id="intro" className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-[6%]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* LEFT HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-black text-center md:text-left">
          STUDENT LIFE
        </h2>

        {/* RIGHT CONTENT */}
        <div className="space-y-4 sm:space-y-5 max-w-xl mx-auto md:mx-0">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center md:text-left">
            Students that are interested in pursuing a college education after
            high school may find that getting involved beyond the classroom is
            advantageous to the college application process. Depending on the
            college or university, the admission process can be competitive.
            Besides getting good grades, club involvement can demonstrate that
            you are well-rounded.
          </p>

        </div>
      </div>

    </section>
  );
}