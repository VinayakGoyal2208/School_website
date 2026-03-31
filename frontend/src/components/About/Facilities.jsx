import { Monitor, BookOpen, Trophy, School } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Modern Classrooms",
      icon: <School size={26} />,
      img: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Smart classrooms with digital boards and interactive learning tools.",
    },
    {
      title: "Computer Labs",
      icon: <Monitor size={26} />,
      img: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Advanced labs with high-speed internet and modern systems.",
    },
    {
      title: "Library",
      icon: <BookOpen size={26} />,
      img: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Extensive collection of books and digital learning resources.",
    },
    {
      title: "Sports Complex",
      icon: <Trophy size={26} />,
      img: "https://images.unsplash.com/photo-1635842939844-1fbf6bea8e78?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Indoor & outdoor sports facilities for overall development.",
    },
  ];

  return (
    <section id="facilities" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">

      {/* HEADING */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Our Facilities
        </h1>
        <p className="text-gray-600 max-w-xl">
          We provide world-class infrastructure and resources to ensure a holistic
          learning experience for our students.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {facilities.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-4 text-white">
              
              {/* ICON */}
              <div className="mb-2 text-yellow-400">
                {item.icon}
              </div>

              {/* TITLE */}
              <h2 className="text-lg font-semibold">
                {item.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}