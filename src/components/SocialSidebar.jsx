import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/yournumber",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 11.5a8.5 8.5 0 1 1-16-3.8L3 21l5.7-1.9A8.5 8.5 0 0 0 21 11.5z" />
      </svg>
    ),
  },
];

const SocialSidebar = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide only if scrolling down and passed a threshold
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation configuration to handle both entry and scroll toggles perfectly
  const sidebarVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      variants={sidebarVariants}
      transition={{ duration: 0.4, ease: "chassis" }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      {/* MAIN WRAPPER - Reduced opacity to 60% with an elegant glass blur */}
      <div className="bg-black/60 backdrop-blur-md text-white flex flex-col items-center py-7 px-3 rounded-l-2xl shadow-2xl border-l border-y border-white/10">

        {/* TOP LINE */}
        <div className="w-[1px] h-10 bg-white/20 mb-6" />

        {/* ICONS */}
        <div className="flex flex-col gap-7">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center"
            >
              <div className="text-gray-400 group-hover:text-[#c22924] group-hover:-translate-x-1 transition-all duration-300">
                {item.icon}
              </div>

              {/* TOOLTIP */}
              <span className="absolute right-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-2 group-hover:translate-x-0 bg-[#c22924] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md transition-all duration-300 whitespace-nowrap shadow-lg">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div className="w-[1px] h-10 bg-white/20 mt-6" />
      </div>
    </motion.div>
  );
};

export default SocialSidebar;