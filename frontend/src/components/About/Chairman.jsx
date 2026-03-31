export default function Chairman() {
  return (
    <section id="chairman" className="max-w-6xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-xl shadow">

      {/* HEADING */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        Chairman's Message
      </h1>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

        {/* IMAGE + INFO */}
        <div className="flex flex-col items-center text-center md:text-left">
          <img
            src="https://media.istockphoto.com/id/2256749929/photo/portrait-of-a-young-stylish-male-model-in-black-coat-pant-suit-full-length-studio-shot.jpg?s=1024x1024&w=is&k=20&c=PXMsqn2DW1INou2ApnGhM5ZD0DasGqyv2SYNRWwFS4w="
            alt="Chairman"
            className="w-40 sm:w-48 md:w-56 rounded-lg object-cover shadow-md"
          />

          <h2 className="mt-4 text-lg font-semibold">Mr. Rajesh Sharma</h2>
          <p className="text-sm text-gray-500">Chairman</p>
        </div>

        {/* MESSAGE */}
        <div className="flex-1 text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">

          <p>
            Welcome to our institution. It gives me immense pleasure to share our
            vision of creating a learning environment where students are inspired
            to achieve excellence in academics as well as personal growth.
          </p>

          <p>
            Education is not just about books and examinations; it is about
            building character, confidence, and compassion. Our aim is to nurture
            young minds to become responsible citizens and future leaders.
          </p>

          <p>
            With dedicated faculty, modern infrastructure, and a strong value
            system, we strive to provide the best opportunities for our students
            to explore their potential and achieve their dreams.
          </p>

          {/* QUOTE */}
          <div className="border-l-4 border-yellow-500 pl-4 italic text-gray-600">
            "Education is the most powerful weapon which you can use to change the world."
          </div>

          <p>
            I invite you to be a part of our journey towards excellence and
            innovation in education.
          </p>

          {/* SIGNATURE */}
          <div className="mt-6">
            <p className="font-semibold">Mr. Rajesh Sharma</p>
            <p className="text-sm text-gray-500">Chairman</p>
          </div>

        </div>
      </div>
    </section>
  );
}