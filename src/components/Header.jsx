import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Services", "Projects", "About", "Contact"];

  // The wrapper uses pointer-events-none so clicks pass through the transparent middle gap
  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">

      {/* TOP BAR */}
      <div className="pointer-events-auto hidden lg:flex justify-end items-center h-10 bg-[#c22924] text-white text-[11px] font-medium tracking-[0.12em] border-b border-white/10 w-full">
        <div className="flex items-center space-x-4 px-6">
          <a href="#careers" className="hover:opacity-80 uppercase transition">
            Careers
          </a>
          <span className="text-white/40">|</span>

          <a href="#newsletter" className="hover:opacity-80 uppercase transition">
            Newsletter
          </a>
          <span className="text-white/40">|</span>

          <a
            href="mailto:hello@webforyou.com"
            className="flex items-center gap-2 hover:opacity-80 uppercase transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            hello@webforyou.com
          </a>
        </div>

        <button className="h-full px-8 bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
          Let’s Talk
        </button>
      </div>

      {/* MAIN NAV AREA (Transparent background wrapper) */}
      <div className="w-full flex items-start justify-between">

        {/* LOGO LEFT (No Background, completely separate) */}
        <div 
          className={`pointer-events-auto flex items-center gap-2 cursor-pointer transition-all duration-300 pl-6 md:pl-12 ${
            scrolled ? "mt-4" : "mt-6"
          }`}
        >
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#c22924] flex items-center justify-center text-white text-sm font-bold">
            W
          </div>

          <div className="text-2xl md:text-3xl font-semibold tracking-tight shadow-white drop-shadow-md">
            <span className="text-black">WEB</span>
            <span className="text-[#c22924]">FORYOU</span>
          </div>
        </div>

        {/* DESKTOP NAV (Right Half Only, White Background) */}
        <nav
          className={`pointer-events-auto hidden lg:flex items-center gap-10 transition-all duration-300 rounded-bl-3xl ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-md py-4 px-12"
              : "bg-white py-6 px-16 shadow-sm"
          }`}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveLink(item)}
              className={`text-sm font-medium transition ${
                activeLink === item
                  ? "text-[#c22924]"
                  : "text-gray-900 hover:text-[#c22924]"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON (Given a white background block so it's visible) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`pointer-events-auto lg:hidden flex flex-col gap-1.5 p-3 mr-6 bg-white rounded-bl-xl shadow-sm transition-all duration-300 ${
            scrolled ? "mt-0 rounded-none rounded-b-xl" : "mt-0"
          }`}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-10 lg:hidden pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-2xl font-semibold">
                WEB<span className="text-[#c22924]">FORYOU</span>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveLink(item);
                    setMenuOpen(false);
                  }}
                  className={`text-4xl font-light ${
                    activeLink === item ? "text-[#c22924]" : "text-black"
                  }`}
                >
                  {item}
                </a>
              ))}

              <button className="mt-10 bg-[#c22924] text-white py-5 rounded-full font-bold uppercase w-full text-xs hover:bg-black transition">
                Let’s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );AC
};

export default Header;