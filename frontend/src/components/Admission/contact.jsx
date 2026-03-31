export default function Contact() {
  return (
    <section className="bg-gray-200 py-16 sm:py-20 px-[6%]">
      
      <div className="max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10">
        
        {/* IMAGE */}
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Admissions Director"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 object-cover rounded-full"
        />

        {/* TEXT */}
        <div className="text-center md:text-left">
          
          {/* NAME */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wide text-black mb-3 sm:mb-4">
            Dear 
          </h2>

          {/* ROLE */}
          <p className="italic text-gray-700 text-base sm:text-lg mb-2">
            Director of Admissions and Enrollment
          </p>

          {/* PHONE */}
          <p className="text-yellow-600 text-base sm:text-lg tracking-wide">
            +91 98765 43210
          </p>

          {/* EMAIL */}
          <p className="text-yellow-600 text-base sm:text-lg break-all">
            admissions@indianschool.edu
          </p>

        </div>
      </div>

    </section>
  );
}