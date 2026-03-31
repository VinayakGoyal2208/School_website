import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Clubs() {
  const clubs = [
    {
      title: "Music Club",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    },
    {
      title: "Drama Club",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
    },
    {
      title: "Coding Club",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    },
    {
      title: "Sports Club",
      image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=600&q=80",
    },
    {
      title: "Dance Club",
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&q=80",
    },
    {
      title: "Art Club",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getItemsPerView = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

useEffect(() => {
  let timeout;

  const handleResize = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setItemsPerView(getItemsPerView());
    }, 200);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev >= clubs.length - itemsPerView ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, itemsPerView, clubs.length]);

  const prevSlide = () => {
    setIndex(index === 0 ? clubs.length - itemsPerView : index - 1);
  };

  const nextSlide = () => {
    setIndex(index >= clubs.length - itemsPerView ? 0 : index + 1);
  };

  return (
    <>
      {/* SECTION */}
      <section id="clubs"
        className="bg-[#c69214] py-10 sm:py-14 md:py-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* SAME CONTAINER FOR ALIGNMENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
          
          {/* HEADING */}
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-serif mb-8">
            Clubs & Programs
          </h2>

          {/* SLIDER */}
          <div className="relative">

            {/* LEFT */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${(index * 100) / itemsPerView}%)`,
                }}
              >
                {clubs.map((club, i) => (
                  <div
                    key={i}
                    className="px-2"
                    style={{
                      minWidth: `${100 / itemsPerView}%`,
                    }}
                  >
                    <div className="relative group overflow-hidden rounded-lg">
                      <img
                        src={club.image}
                        alt={club.title}
                        loading="lazy"
                        className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-110 transition duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                      {/* Title */}
                      <div className="absolute bottom-3 left-3 text-white text-sm sm:text-base font-semibold">
                        {club.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <button
              onClick={nextSlide}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ✅ WHITE SPACE AFTER SECTION */}
      <div className="bg-white h-16 md:h-24"></div>
    </>
  );
}