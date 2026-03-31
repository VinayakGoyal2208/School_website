export default function hero() {
  return (
    <section id="hero" className="relative h-[80vh] sm:h-[80vh] md:h-[90vh] lg:h-[85vh] w-full">
      
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1649008726820-d90aeb70c32e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end px-[6%] pb-8 sm:pb-12 md:pb-20">
        
        <h1 className="font-serif font-bold text-xl sm:text-2xl md:text-5xl text-yellow-500 mb-2 sm:mb-3 leading-tight">
          EXTRACURRICCULAR
        </h1>

        <p className="text-white text-xs sm:text-sm md:text-lg w-full md:max-full leading-relaxed">
          We offers a diverse mix of clubs and extracurricular activities that
          appeal to a variety of interests. Students can participate in clubs
          that explore music, performing arts, visual arts, community service,
          faith, science, technology, and much more. Club involvement expands a
          student's background, builds communication and interpersonal skills,
          develops leadership skills, and provides an opportunity to make new
          friends. It could even lead to an interest in a future career path.
        </p>

      </div>

      {/* CENTER LINE */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] sm:bottom-[-45px] md:bottom-[-60px] z-20">
        <div className="w-[2px] h-[70px] sm:h-[90px] md:h-[120px] bg-yellow-500"></div>
      </div>

    </section>
  );
}