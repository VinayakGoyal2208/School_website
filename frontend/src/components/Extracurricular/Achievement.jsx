export default function Achievement() {
  const data = [
    {
      title: "98% Board Results",
      desc: "Our students achieved outstanding academic excellence.",
      icon: "🎓",
    },
    {
      title: "District Football Winners",
      desc: "Won inter-school football championship.",
      icon: "⚽",
    },
    {
      title: "Science Olympiad Gold",
      desc: "Students secured top ranks nationally.",
      icon: "🥇",
    },
  ];

  return (
    <section id="achieve" className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-[6%]">
      
      {/* HEADING */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-8 sm:mb-10 text-center">
        Achievements
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center sm:text-left"
          >
            {/* ICON */}
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}