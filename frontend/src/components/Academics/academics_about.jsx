import {Link} from "react-router-dom";

export default function academicsAbout() {
  return (
    <>
      {/* BFC DIFFERENCE SECTION */}
      <section id="about" className="bg-gray-100 py-28 px-[6%]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl mb-6">OUR SCHOOL DIFFERENCE</h2>

            <p className="text-gray-700 mb-4">
              Our School offers a college preparatory academic
              program with more than 100 courses and AP and honors classes.
            </p>

            <p className="text-gray-700 mb-4">
              The curriculum prepares students with real-world applications,
              career planning, and hands-on experiences.
            </p>

            <Link to="/apply#hero" className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition">
              VIEW COURSE CATALOG
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
      </section>
    </>
  );
}
