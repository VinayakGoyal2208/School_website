import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/school_logo.png";
import MegaMenu from "./Megamenu";
import { megaMenuData } from "./megaMenuData";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  let timeout;

  const handleEnter = (menu) => {
    clearTimeout(timeout);
    setActiveMenu(menu);
  };

  const handleLeave = () => {
    timeout = setTimeout(() => setActiveMenu(null), 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-[100] ${
          scrolled ? "bg-white shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div
          className={`w-full flex items-center transition-all duration-300 ${
            scrolled ? "h-[90px] px-4" : "h-[120px] px-[1.5rem]"
          }`}
        >
          {/* LOGO */}
          <HashLink
            to="/home#hero"
            className={`absolute left-1/2 -translate-x-1/2 md:static items-center ${menuOpen ? "hidden md:flex" : "flex"}`}
          >
            <img
              src={logo}
              alt="School Logo"
              className={`transition-all duration-300  ${
                scrolled
                  ? "h-16 md:ml-16"
                  : "md:h-[150px] md:mt-[120px] h-[100px] md:ml-40"
              }`}
            />
          </HashLink>

          {/* DESKTOP MENU */}
          <div
            className="hidden lg:flex ml-auto relative"
            onMouseLeave={handleLeave}
          >
            <ul className="flex ml-auto text-[15px] font-medium tracking-wide">
              <li className="px-4 py-2 border-r-2 border-yellow-500">
                <HashLink
                  to="/home#hero"
                  className="hover:text-yellow-500 transition"
                >
                  Home
                </HashLink>
              </li>

              <li
                onMouseEnter={() => handleEnter("about")}
                className="px-4 py-2 border-r-2 border-yellow-500"
              >
                <p className="hover:text-yellow-500 transition cursor-pointer">
                  About School
                </p>
              </li>

              <li
                onMouseEnter={() => handleEnter("admission")}
                className="px-4 py-2 border-r-2 border-yellow-500"
              >
                <p className="hover:text-yellow-500 transition cursor-pointer">
                  Admissions
                </p>
              </li>

              <li
                onMouseEnter={() => handleEnter("academics")}
                className="px-4 py-2 border-r-2 border-yellow-500"
              >
                <p className="hover:text-yellow-500 transition cursor-pointer">
                  Academics
                </p>
              </li>

              <li
                onMouseEnter={() => handleEnter("studentLife")}
                className="px-4 py-2"
              >
                <p className="hover:text-yellow-500 transition cursor-pointer">
                  Student Life
                </p>
              </li>
            </ul>

            {/* MEGA MENU */}
            {activeMenu && (
              <div
                onMouseEnter={() => handleEnter(activeMenu)}
                onMouseLeave={handleLeave}
                className="absolute left-0 top-full w-full bg-white shadow-xl z-50"
              >
                <div className="max-w-[1200px] mx-auto">
                  <MegaMenu {...megaMenuData[activeMenu]} />
                </div>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex">
              <HashLink
                to="/apply#hero"
                className="bg-yellow-500 px-4 py-2 text-white font-semibold rounded-l-full hover:bg-yellow-600 transition"
              >
                APPLY NOW
              </HashLink>

              <HashLink
                to="/loginpage"
                className="bg-gray-800 px-4 py-2 text-white font-semibold rounded-r-full hover:bg-black transition"
              >
                Sign In / Up
              </HashLink>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden ml-auto z-50">
            {!menuOpen ? (
              <button onClick={() => setMenuOpen(true)} className="text-2xl">
                <FaBars />
              </button>
            ) : (
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-[#1e1e1e] text-gray-300 z-50
          transform transition-transform duration-300 shadow-xl
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <img src={logo} alt="logo" className="h-20" />
        </div>

        {/* MENU ITEMS */}
        <ul className="mt-4 text-sm">
          {[
            { name: "Home", path: "/home#hero" },
            { name: "About School", path: "/about#hero" },
            { name: "Admissions", path: "/admission#hero" },
            { name: "Academics", path: "/academics#hero" },
            { name: "Student Life", path: "/extracurricular#hero" },
          ].map((item) => (
            <li
              key={item.name}
              className="px-6 py-3 hover:bg-[#2a2d2e] transition-all hover:pl-8"
            >
              <HashLink to={item.path} onClick={() => setMenuOpen(false)}>
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="mt-6 px-6 flex flex-col gap-3">
          <HashLink
            to="/apply#hero"
            onClick={() => setMenuOpen(false)}
            className="bg-yellow-500 text-black font-semibold py-2 rounded text-center hover:bg-yellow-600"
          >
            Apply Now
          </HashLink>

          <HashLink
            to="/loginpage"
            onClick={() => setMenuOpen(false)}
            className="bg-gray-700 text-white py-2 rounded text-center hover:bg-gray-800"
          >
            Sign In / Up
          </HashLink>
        </div>
      </div>
    </>
  );
}
