import React, { useState } from "react";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Manthila Balasuriya",
    url: "https://manthilabalasuriya.com/",
    logo: null,
  },
  {
    name: "Craftgrapher",
    url: "https://www.craftgrapher.com/",
    logo: "https://www.craftgrapher.com/assets/logo-CyGBI6yQ.png",
  },
  {
    name: "Tropical Weldlock",
    url: "https://www.tropicalweldlock.com/",
    logo: "https://www.tropicalweldlock.com/assets/app-logo-C676HVHH.png",
  },
];

const BrandItem = ({ brand }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center
        px-14 py-12 md:px-16 md:py-14
        bg-[#fdfcf8]
        border-[2px] border-[#333]
        rounded-2xl
        shadow-[5px_5px_0px_#c22924]
        hover:-translate-y-2 hover:scale-[1.05]
        hover:shadow-[10px_10px_0px_#c22924]
        transition-all duration-300
        min-w-[280px]
      "
    >
      {brand.logo && !imgError ? (
        <img
          src={brand.logo}
          alt={brand.name}
          onError={() => setImgError(true)}
          className="
            w-28 h-28 md:w-32 md:h-32
            object-contain
            grayscale
            contrast-125
            brightness-0
            transition-all duration-300
          "
        />
      ) : (
        <span className="text-xl md:text-2xl font-semibold text-[#c22924] text-center">
          {brand.name}
        </span>
      )}
    </a>
  );
};

const TrustedBrands = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.02)_4px,rgba(0,0,0,0.02)_5px)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[95rem] mx-auto flex flex-col items-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05]">
            Trusted <span className="text-[#c22924]">Brands</span>
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-xl max-w-2xl mx-auto">
            Real brands and websites we’ve collaborated with.
          </p>
        </motion.div>

        {/* MARQUEE */}
        <div className="relative w-full overflow-hidden py-6">

          <div className="absolute left-0 top-0 w-20 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-20" />
          <div className="absolute right-0 top-0 w-20 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-20" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            className="flex w-max gap-10 px-4"
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <BrandItem key={index} brand={brand} />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default TrustedBrands;