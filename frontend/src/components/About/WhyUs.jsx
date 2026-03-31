import { Users, Building2, Sparkles, Trophy } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      title: "Experienced Faculty",
      icon: <Users size={28} />,
      desc: "Highly qualified and dedicated teachers guiding students towards success.",
    },
    {
      title: "Modern Infrastructure",
      icon: <Building2 size={28} />,
      desc: "State-of-the-art facilities that enhance learning and development.",
    },
    {
      title: "Holistic Growth",
      icon: <Sparkles size={28} />,
      desc: "Focus on academics, sports, and extracurricular activities.",
    },
    {
      title: "Excellent Results",
      icon: <Trophy size={28} />,
      desc: "Consistent academic achievements and outstanding student performance.",
    },
  ];

  return (
    <section id="why" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">

      {/* HEADING */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Why Choose Us
        </h1>
        <p className="text-gray-600 max-w-xl">
          We provide an environment that nurtures excellence, creativity, and leadership.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {points.map((item, i) => (
          <div
            key={i}
            className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* ICON */}
            <div className="mb-4 text-yellow-500">
              {item.icon}
            </div>

            {/* TITLE */}
            <h2 className="text-lg font-semibold mb-2">
              {item.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>

            {/* HOVER LINE */}
            <div className="mt-4 w-0 h-[2px] bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}

      </div>
    </section>
  );
}