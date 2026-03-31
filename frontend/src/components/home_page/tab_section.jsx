import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 20;
    const step = end / (duration / incrementTime);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        setDisplay(end);
        clearInterval(counter);
      } else {
        setDisplay(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Statsection() {
  const [activeTab, setActiveTab] = useState("academics");

  const tabs = [
    { id: "academics", label: "Academics" },
    { id: "athletics", label: "Athletics" },
    { id: "extra", label: "Extracurricular" },
  ];

  const data = {
    academics: [
      {
        value: 99,
        suffix: "%",
        text: "99% of Foley graduates go on to attend college at nearly 150 institutions.",
      },
      {
        value: 17,
        suffix: ":1",
        text: "The average student-to-teacher ratio is 17:1 with an average class size of 18.",
      },
      {
        value: 110,
        suffix: "+",
        text: "Over 110 unique courses — plus Advanced Placement and Honors courses.",
      },
    ],

    athletics: [
      {
        value: 25,
        suffix: "+",
        text: "Over 25 sports teams across multiple disciplines.",
      },
      {
        value: 80,
        suffix: "%",
        text: "80% of students participate in athletics.",
      },
      {
        value: 10,
        suffix: "+",
        text: "Multiple championship-winning teams.",
      },
    ],

    extra: [
      {
        value: 50,
        suffix: "+",
        text: "Clubs and extracurricular programs available.",
      },
      {
        value: 90,
        suffix: "%",
        text: "90% student participation in activities.",
      },
      {
        value: 15,
        suffix: "+",
        text: "Leadership and community programs.",
      },
    ],
  };

  return (
<section className="w-full bg-[#f5f1ea]">

  {/* ================= TABS ================= */}
  <div className="grid md:grid-cols-12 bg-[#efefef] border-b">

    {/* LEFT LABEL */}
    <div className="hidden md:flex md:col-span-3 items-center justify-center text-gray-500">
      Select a tab →
    </div>

    {/* TABS */}
    <div className="md:col-span-9 flex overflow-hidden overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            relative flex-1 min-w-[120px] py-3 md:py-4 text-sm md:text-lg font-semibold border-l
            transition-all duration-300
            ${
              activeTab === tab.id
                ? "bg-[#f5f1ea] text-yellow-600"
                : "bg-[#efefef] text-gray-700"
            }
          `}
        >
          {tab.label}

          {activeTab === tab.id && (
            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rotate-45"></div>
          )}
        </button>
      ))}
    </div>
  </div>

  {/* ================= MAIN ================= */}
  <div className="grid md:grid-cols-12">

    {/* LEFT PANEL */}
    <div className="md:col-span-3 bg-yellow-700 text-white flex items-center justify-center px-6 md:px-10 py-12 md:py-24 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
        Stats That <br /> Set Us Apart
      </h1>
    </div>

    {/* RIGHT CONTENT */}
    <div className="md:col-span-9 flex items-center justify-center">

      <div className="w-full max-w-5xl px-6 md:px-10 py-12 md:py-20">

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          
          {data[activeTab].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-700">
                <Counter value={item.value} suffix={item.suffix} />
              </h1>

              <p className="mt-3 text-gray-700 leading-relaxed text-base md:text-lg max-w-xs">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  </div>
</section>
  );
}
