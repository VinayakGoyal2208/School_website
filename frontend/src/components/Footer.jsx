import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-[#555555] text-white pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* SCHOOL INFO */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            School Name
          </h1>

          <p className="text-gray-200 leading-relaxed text-sm">
            Our school is a place where students learn, grow, and prepare for a
            bright future. We focus on both academic excellence and personal
            development, encouraging curiosity, creativity, and strong values.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li className="border-b border-t border-gray-400 pt-3 pb-2 hover:text-yellow-500">
              <HashLink to="/home#hero">Home</HashLink>
            </li>

            <li className="border-b border-gray-400 pb-2 hover:text-yellow-500">
              <HashLink to="/about#hero">About</HashLink>
            </li>

            <li className="border-b border-gray-400 pb-2 hover:text-yellow-500">
              <HashLink to="/admission#hero">Admission</HashLink>
            </li>

            <li className="border-b border-gray-400 pb-2 hover:text-yellow-500">
              <HashLink to="/academics#hero">Academics</HashLink>
            </li>

            <li className="border-b border-gray-400 pb-2 hover:text-yellow-500">
              <HashLink to="/extracurricular#hero">Extracurricular</HashLink>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-sm space-y-4">

          <p>
            Phone: +91 9876543210 <br />
            Email: xyz@gmail.com
          </p>

          <div className="flex gap-5 text-lg">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaYoutube />
            </a>
          </div>

          <div className="pt-6 border-t border-gray-400">
            <p className="uppercase text-gray-300 text-xs mb-2">
              A CBSE School
            </p>

            <img
              src="https://cdn.pnggallery.com/wp-content/uploads/cbse-logo-03.png"
              alt="CBSE Logo"
              className="w-24 opacity-80"
            />
          </div>

        </div>

        {/* LOCATION */}
        <div className="text-sm space-y-4">

          <p>
            XYZ Street <br />
            Dehradun
          </p>

          <iframe
            className="w-full h-[200px] rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.7544356829!2d77.93473310889038!3d30.32540262562486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1773476832428!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-300">
        © Copyright 2026 Your School. All Rights Reserved.
      </div>

    </footer>
  );
}