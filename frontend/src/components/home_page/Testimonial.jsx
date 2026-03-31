import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1569682535081-3e826bee049b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `“A school that supports you not as a student, but as a person. They put in their time and work for you and the school is filled with welcoming students. It is a warm environment, and any student would feel welcome walking through the doors for the first time.”`,
    author: "– Xyz, Class of '26",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661693838220-e011942a537b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `“This school helped me grow academically and personally. The teachers truly care.”`,
    author: "– ABC, Class of '25",
  },
    {
    image: "https://plus.unsplash.com/premium_photo-1681841967240-72f8dc307521?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `“This school helped me grow academically and personally. The teachers truly care.”`,
    author: "– ABC, Class of '25",
  },
    {
    image: "https://images.unsplash.com/photo-1768299948280-f0f3a0fdc5d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `“This school helped me grow academically and personally. The teachers truly care.”`,
    author: "– ABC, Class of '25",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-gray-100 pt-24 pb-4">
 <h1 className="text-center font-serif font-bold text-black [-webkit-text-stroke:2px_#eab308] tracking-wide pb-8">
  <span className="md:text-7xl text-5xl">S</span>
  <span className="md:text-5xl text-3xl">TUDENT </span>
  <span className="md:text-7xl text-5xl">P</span>
  <span className="md:text-5xl text-3xl">ERSPECTIVES</span>
</h1>  
    
    <div className="bg-[#555555] md:py-20 py-5 relative overflow-hidden">
      
      {/* LEFT QUOTE */}
      <span className="absolute left-10 top-10 text-yellow-500 text-[120px] opacity-80">
        ‘‘
      </span>

      {/* RIGHT QUOTE */}
      <span className="absolute right-10 bottom-10 text-yellow-500 text-[120px] opacity-80">
      ’’
      </span>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* IMAGE */}
        <div className="relative">
          <img
            src={testimonials[index].image}
            alt="student"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* TEXT BOX */}
        <div className="border border-gray-400 p-10 text-white relative">
          <p className="leading-relaxed text-lg">
            {testimonials[index].text}
          </p>

          <p className="mt-10 text-right italic text-gray-300">
            {testimonials[index].author}
          </p>
        </div>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow"
      >
        <FaChevronLeft />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow"
      >
        <FaChevronRight />
      </button>

      {/* BULLETS */}
<div className="flex justify-center mt-8 gap-3">
  {testimonials.map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        i === index ? "bg-yellow-500 scale-125" : "bg-gray-400"
      }`}
    />
  ))}
</div>
</div>
    </section>
  );
}