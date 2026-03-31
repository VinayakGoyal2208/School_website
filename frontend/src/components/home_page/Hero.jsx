import heroVideo from "../../assets/videos/school_hero.mp4";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden">

      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white font-serif px-6">

        <p className="tracking-widest uppercase text-lg sm:text-xl md:text-3xl">
          READY TO START YOUR NEXT
        </p>

        <h1 className="mt-4 font-bold text-4xl sm:text-6xl md:text-8xl text-black [-webkit-text-stroke:2px_#eab308]">
          Adventure?
        </h1>

      </div>
            {/* CENTER LINE (EXTENDING OUTSIDE) */}
      <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[-60px] md:z-20">
        <div className="md:w-[3px] md:h-[120px] md:bg-yellow-500"></div>
      </div>

    </section>
  );
}