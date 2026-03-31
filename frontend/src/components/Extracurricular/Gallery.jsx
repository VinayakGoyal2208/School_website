import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&q=80",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=600&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&q=80",
  ];

  const [index, setIndex] = useState(0);

  // number of images per slide
  const itemsPerSlide = 4;

  // create chunks (grid pages)
  const slides = [];
  for (let i = 0; i < images.length; i += itemsPerSlide) {
    slides.push(images.slice(i, i + itemsPerSlide));
  }

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <section id="gallery" className="bg-gray-100 py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-[6%]">
      
      {/* HEADING */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-8 text-center">
        Gallery
      </h2>

      <div className="relative max-w-7xl mx-auto">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {slides.map((group, i) => (
              <div
                key={i}
                className="min-w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
              >
                {group.map((img, j) => (
                  <div key={j} className="overflow-hidden rounded-lg">
                    <img
                      src={img}
                      loading="lazy"
                      alt="gallery"
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}