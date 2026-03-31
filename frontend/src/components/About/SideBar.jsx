import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Building2,
  School,
  Users,
  Target,
  Star,
} from "lucide-react";

export default function Sidebar({ active, setActive }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ SECTION CONFIG (WITH ID MAPPING)
  const sections = [
    { name: "Chairman", id: "chairman", icon: <User size={18} /> },
    { name: "Facilities", id: "facilities", icon: <Building2 size={18} /> },
    { name: "Our School", id: "school", icon: <School size={18} /> },
    { name: "Staff", id: "staff", icon: <Users size={18} /> },
    { name: "Vision & Mission", id: "vision", icon: <Target size={18} /> },
    { name: "Why Us", id: "why", icon: <Star size={18} /> },
  ];

  // ✅ SYNC ACTIVE SECTION FROM URL
  useEffect(() => {
    if (location.hash) {
      const currentId = location.hash.replace("#", "");
      const match = sections.find((sec) => sec.id === currentId);

      if (match) {
        setActive(match.name);
      }
    }
  }, [location, setActive]);

  return (
    <>
      {/* 🔹 MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between bg-[#1e1e1e] text-white px-4 py-3">
        <h2 className="text-sm font-medium">About</h2>
        <Menu
          size={22}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      </div>

      {/* 🔹 OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-[80]"
        />
      )}

      {/* 🔹 SIDEBAR */}
      <div
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 bg-[#1e1e1e] text-gray-300 p-4 z-[90]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* CLOSE BUTTON (MOBILE) */}
        <div className="md:hidden flex justify-end mb-4">
          <X
            size={22}
            onClick={() => setOpen(false)}
            className="cursor-pointer text-white"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-4 mt-4">
          About
        </h2>

        {/* MENU */}
        <div className="space-y-1">
          {sections.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                navigate(`/about#${item.id}`); // ✅ update URL
                setActive(item.name);         // ✅ update sidebar state
                setOpen(false);
              }}
              className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer text-sm transition-all duration-200
                ${
                  active === item.name
                    ? "bg-[#2a2d2e] text-white border-l-4 border-yellow-500"
                    : "hover:bg-[#2a2d2e]"
                }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}