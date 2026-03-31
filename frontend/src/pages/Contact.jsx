export default function Contact() {
  return (
    <div className="bg-gray-100">
      {/* ================= HERO ================= */}
      <section id="hero" className="relative h-[60vh] md:h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 h-full flex items-end px-[6%] pb-16">
          <h1 className="text-yellow-500 text-3xl md:text-5xl font-serif font-bold">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-[6%] py-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* ADDRESS */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold mb-2">Our Address</h3>
            <p className="text-gray-600 text-sm">
              123 School Street, Dehradun,Uttarakhand, India
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">+91 98765 43210</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-sm">school@email.com</p>
          </div>
        </div>
      </div>

      {/* ================= FORM + MAP ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-[6%] pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FORM */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow">
            <h2 className="text-2xl md:text-3xl font-serif mb-6">
              Get in Touch
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-yellow-500 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-yellow-500 transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-yellow-500 transition"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-yellow-500 transition"
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow h-[350px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.7544356829!2d77.93473310889038!3d30.32540262562486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1774082525957!5m2!1sen!2sin"
              className="w-full h-full border-0"
              
            ></iframe>
          </div>
        </div>
      </div>

      {/* ================= EXTRA SPACE ================= */}
      <div className="h-16 md:h-24"></div>
    </div>
  );
}
