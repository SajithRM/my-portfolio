import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Projects from "./Projects";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: 1, label: "Home", link: "#home" },
    { id: 2, label: "About", link: "#about" },
    { id: 3, label: "Projects", link: "#projects" },
    { id: 4, label: "Skills", link: "#skills" },
    { id: 5, label: "Contact", link: "#contact" },
    { id: 6, label: "Hireme", link: "#hireme"}
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="text-2xl font-bold text-white tracking-wide drop-shadow-md flex items-center gap-3">
          <span className="w-12 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 text-white font-bold">
            MS
          </span>
          <span>Sajith</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white font-medium items-center">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={nav.link}
                className="relative py-1 px-0 hover:text-blue-300 transition-all duration-250"
              >
                <span className="relative z-10">{nav.label}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

          <li>
            <a
              href="#hireme"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-shadow shadow-sm"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setOpen(!open)}           // <-- FIXED: use => not ->
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl py-6">
          <ul className="flex flex-col items-center gap-6 text-white font-medium">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={nav.link}
                  className="hover:text-blue-300 transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  {nav.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#hireme"
                onClick={() => setOpen(false)}
                className="mt-3 inline-block px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
