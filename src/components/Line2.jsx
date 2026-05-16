import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "ACME CORP", logo: "https://via.placeholder.com/120x60?text=ACME" },
  { name: "NEXUS DYNAMICS", logo: "https://via.placeholder.com/120x60?text=NEXUS" },
  { name: "VANGUARD", logo: "https://via.placeholder.com/120x60?text=VG" },
  { name: "ZENITH MEDIA", logo: "https://via.placeholder.com/120x60?text=ZENITH" },
  { name: "AURA GLOBAL", logo: "https://via.placeholder.com/120x60?text=AURA" },
  { name: "LUMINA", logo: "https://via.placeholder.com/120x60?text=LUMINA" },
  { name: "ELEVATE", logo: "https://via.placeholder.com/120x60?text=ELEVATE" },
  { name: "QUANTUM", logo: "https://via.placeholder.com/120x60?text=QUANTUM" },
];

const TrustedBrands = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* SUBTLE BACKGROUND TEXTURE */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.02)_4px,rgba(0,0,0,0.02)_5px)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[95rem] mx-auto flex flex-col items-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-16 px-6 text-center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
            Designing for Brands{" "}
            <span className="text-[#c22924]">That Lead</span>
          </h2>

          <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-xl max-w-2xl mx-auto">
            From startups to established companies, we build interfaces that balance performance, clarity, and strong visual identity.
          </p>
        </motion.div>

        {/* MARQUEE */}
        <div className="relative w-full flex overflow-hidden group py-6">

          {/* FADE LEFT */}
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />

          {/* FADE RIGHT */}
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max gap-6 md:gap-10 px-3"
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-4
                  px-8 py-5 md:px-12 md:py-6
                  bg-[#fdfcf8] 
                  border-[2px] border-[#333] 
                  rounded-xl md:rounded-2xl
                  shadow-[4px_4px_0px_#c22924] md:shadow-[6px_6px_0px_#c22924]
                  transition-all duration-300 ease-[0.16,1,0.3,1]
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:shadow-[8px_8px_0px_#c22924] md:hover:shadow-[12px_12px_0px_#c22924]
                  cursor-default
                  min-w-[260px]
                "
              >
                {/* LOGO */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />

                {/* NAME */}
                <span className="text-lg md:text-2xl font-mono tracking-widest text-[#333] whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBrands;