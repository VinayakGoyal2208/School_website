import academics from "../../assets/academic_page/hero.jpg";
export default function academicsHero() {
  return (
    <section id="hero" className="relative h-[75vh] md:h-[85vh] w-full">
      
      {/* Background */}
      <img
        src={academics}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end px-[6%] pb-20">
        
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-yellow-500 mb-3">
          ACADEMICS
        </h1>

      </div>

      {/* CENTER LINE (EXTENDING OUTSIDE) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] z-20">
        <div className="w-[2px] h-[120px] bg-yellow-500"></div>
      </div>

    </section>
  );
}