import React, { useEffect, useRef, useState } from "react";

const LetsTalk = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } 
      // scrolling up
      else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-300 ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <a
        href="#contact"
        className="group h-48 w-10 bg-[#c22924] flex items-center justify-center shadow-lg rounded-l-sm hover:bg-black transition-colors duration-300"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-white rotate-90 whitespace-nowrap group-hover:scale-105 transition-transform duration-300">
          LET’S TALK
        </span>
      </a>
    </div>
  );
};

export default LetsTalk;