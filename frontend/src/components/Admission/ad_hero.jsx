export default function adHero() {
  return (
    <section id="hero" className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] w-full">
      
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end px-[6%] pb-10 sm:pb-14 md:pb-20">
        
        <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-5xl text-yellow-500 mb-2 sm:mb-3">
          ADMISSION
        </h1>

        <p className="text-white text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md">
          See why our school is the best choice for your child.
        </p>

      </div>

      {/* CENTER LINE (EXTENDING OUTSIDE) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] sm:bottom-[-50px] md:bottom-[-60px] z-20">
        <div className="w-[2px] h-[80px] sm:h-[100px] md:h-[120px] bg-yellow-500"></div>
      </div>

    </section>
  );
}