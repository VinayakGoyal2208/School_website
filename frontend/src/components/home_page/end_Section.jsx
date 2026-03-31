import { Link } from "react-router-dom";

export default function Endsection() {
  return (
    <section className="relative w-full bg-gray-100 ">


      {/* Center Vertical Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] md:h-32 h-24 bg-yellow-500"></div>

      {/* Heading */}
      <h1 className="text-center font-serif font-bold text-black [-webkit-text-stroke:1.5px_#eab308] tracking-wide pt-32 md:pt-40">
        <span className="md:text-7xl text-5xl">Y</span>
        <span className="md:text-5xl text-3xl">our </span>

        <span className="md:text-7xl text-5xl">F</span>
        <span className="md:text-5xl text-3xl">uture </span>

        <span className="md:text-5xl text-3xl">is bright with our </span>

        <span className="md:text-7xl text-5xl">S</span>
        <span className="md:text-5xl text-3xl">chool</span>
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        <Link
          to="/apply"
          className="rounded-full bg-yellow-500 hover:bg-black text-white px-6 py-3 transition"
        >
          APPLY NOW
        </Link>

        <Link
          to="/academics"
          className="rounded-full bg-yellow-500 hover:bg-black text-white px-6 py-3 transition"
        >
          ACADEMICS
        </Link>
      </div>

      {/* Image */}
      <div className="mt-12">
        <img
          src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=2069&auto=format&fit=crop"
          alt="students"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </div>

    </section>
  );
}