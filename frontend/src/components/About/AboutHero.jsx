import academics from "../../assets/academic_page/hero.jpg";

export default function AboutHero() {
  return (
    <section id="hero" className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] w-full">

      {/* Background */}
      <img
        src={academics}
        alt="About Hero"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end md:justify-end px-[6%] pb-10 md:pb-20">
        
        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-yellow-500 mb-3">
          ABOUT
        </h1>

      </div>

      {/* CENTER LINE */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] md:bottom-[-60px] z-20">
        <div className="w-[2px] h-[80px] md:h-[120px] bg-yellow-500"></div>
      </div>

    </section>
  );
}