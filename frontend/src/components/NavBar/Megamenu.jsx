import { HashLink } from "react-router-hash-link";

export default function MegaMenu({ title, links, description, image ,buttonLink }) {
  return (
    <div className="w-full bg-white shadow-xl border-t">
      <div className="max-w-[1200px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* LEFT LINKS */}
        <div className="md:col-span-3 space-y-3 text-gray-700 border-r pr-6">
          {links.map((item, index) => (
            <HashLink
              smooth
              to={item.path}
              key={index}
              className="block hover:text-yellow-600 transition"
            >
              {item.label}
            </HashLink>
          ))}
        </div>

        {/* CENTER CONTENT */}
        <div className="md:col-span-6">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">{title}</h2>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          <HashLink
            smooth
            to={buttonLink}
            className="inline-block mt-6 border border-yellow-600 text-yellow-600 px-6 py-2 rounded-full hover:bg-yellow-600 hover:text-white transition"
          >
            LEARN MORE
          </HashLink>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:col-span-3 flex items-center">
          <img
            src={image}
            alt="menu"
            className="rounded-lg w-full h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
