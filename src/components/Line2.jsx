import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/75/Spotify_logo_without_text.svg",
];

const LogoSection = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* TOP TEXT */}
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">
          Trusted by modern brands
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
          Building digital experiences
          <span className="block text-[#c22924] mt-2">
            for ambitious companies
          </span>
        </h2>
      </div>

      {/* LOGO MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-20 w-max"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px] opacity-70 hover:opacity-100 transition duration-300"
            >
              <img
                src={logo}
                alt="brand logo"
                className="h-10 md:h-12 lg:h-14 object-contain brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
};

export default LogoSection;