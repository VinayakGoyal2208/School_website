import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
  {
    title: "Esports",
    image:
      "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=600&q=80",
  },
  {
    title: "Cathletes",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
  },
  {
    title: "Drama",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
  },
  {
    title: "Music",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
  },
];

export default function Activity() {
  const [current, setCurrent] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, activities.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="bg-[#c69214] py-10 md:py-16 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* TITLE */}
      <h2 className="text-white text-2xl md:text-4xl font-serif md:ml-10 mb-8 text-center md:text-left">
        Extracurricular Activities
      </h2>

      {/* SLIDER */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-0 z-10 bg-black text-white p-2 md:p-3 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        {/* CARDS */}
        <div className="flex gap-4 md:gap-6 items-center justify-center w-full overflow-hidden">
          {[-1, 0, 1].map((offset) => {
            const index =
              (current + offset + activities.length) % activities.length;
            const item = activities[index];

            const isActive = offset === 0;

            return (
              <div
                key={index}
                className={`
        relative transition-all duration-300 ease-out flex-shrink-0
        ${
          isActive
            ? "w-[80%] sm:w-[60%] md:w-[420px] h-[220px] md:h-[300px] scale-100 z-10"
            : "hidden sm:block w-[40%] md:w-[320px] h-[180px] md:h-[240px] scale-90 opacity-70"
        }
      `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-0"
                  onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                />

                {/* Overlay */}
                {!isActive && (
                  <div className="absolute inset-0 bg-[#c69214]/80"></div>
                )}

                {/* Text */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <h3 className="text-lg md:text-2xl font-serif">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-0 z-10 bg-black text-white p-2 md:p-3 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-6 md:mt-10 gap-2 md:gap-4 text-black text-sm md:text-base flex-wrap">
        {activities.map((_, i) => (
          <span
            key={i}
            className={`cursor-pointer ${
              i === current ? "font-bold underline" : ""
            }`}
            onClick={() => setCurrent(i)}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </section>
  );
}
