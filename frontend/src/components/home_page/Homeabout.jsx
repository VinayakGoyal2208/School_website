import { motion } from "framer-motion";
import "../../index.css";
import about_pic from "../../assets/home_about/home_about.jpg";
import { Link } from "react-router-dom";

export default function Homeabout() {
  return (
    <section className="relative bg-gray-100 pt-24 pb-24 z-20 overflow-hidden">

      {/* LINE 1 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-12 right-0 z-10"
      >
        <div className="bg-yellow-500 h-12 md:w-[350px] w-32 arrow-left"></div>
      </motion.div>

      {/* LINE 2 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute top-28 right-0 z-10"
      >
        <div className="bg-yellow-500 h-12 md:w-[550px] w-48 arrow-left"></div>
      </motion.div>

      {/* LINE 3 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
        className="absolute top-44 left-0 z-10"
      >
        <div className="bg-yellow-500 h-12 md:w-[1000px] w-64 arrow-right"></div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 items-center gap-10 mt-44">

        {/* IMAGE */}
        <motion.img
          src={about_pic}
                   alt="School"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[300px] md:h-[80vh] object-cover rounded-lg"
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-black font-serif
          [-webkit-text-stroke:2px_#eab308]"
        >
          Your School <br /> Name Here
        </motion.h1>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 font-serif"
        >
          <p>
            Welcome to our school! We are committed to providing a nurturing
            and inclusive environment where students can thrive academically,
            socially, and emotionally.
          </p><br></br>

          <Link to="/About" className="bg-yellow-500 rounded-full text-white px-6 py-2 hover:bg-yellow-600 transition">
            About Us
          </Link>
        </motion.div>

      </div>

    </section>
  );
}