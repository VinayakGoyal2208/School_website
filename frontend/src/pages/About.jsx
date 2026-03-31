import Hero from "../components/About/AboutHero";
import Chairman from "../components/About/Chairman";
import Facilities from "../components/About/Facilities";
import Staff from "../components/About/Staff";
import OurSchool from "../components/About/OurSchool";
import VisMis from "../components/About/VisMis";
import WhyUs from "../components/About/WhyUs";
import Sidebar from "../components/About/SideBar";
import { useState } from "react";

export default function About() {
  const [active, setActive] = useState("Chairman");

  const sections = [
    "Chairman",
    "Facilities",
    "Our School",
    "Staff",
    "Vision & Mission",
    "Why Us",
  ];

  const components = {
    Chairman: <Chairman />,
    Facilities: <Facilities />,
    "Our School": <OurSchool />,
    Staff: <Staff />,
    "Vision & Mission": <VisMis />,
    "Why Us": <WhyUs />,
  };

  return (
    <div>
      <div>
        <Hero/>
      </div>
      {/* 🔹 MOBILE DROPDOWN */}
      <div className="md:hidden p-4 bg-white shadow mt-7">
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {sections.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="flex md:my-16 mb-7">
        {/* 🔹 DESKTOP SIDEBAR */}
        <div className="hidden md:block">
          <Sidebar active={active} setActive={setActive} />
        </div>

        {/* 🔹 CONTENT */}
        <div className="flex-1 bg-gray-100 p-4 md:p-8 md:ml-0">
          {components[active]}
        </div>
      </div>
    </div>
  );
}