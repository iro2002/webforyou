import React from "react";
import { motion } from "framer-motion";
import heroImg from "../images/hero.png";

const HeroSection = () => {
  const reveal = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" }
    })
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 flex items-center bg-white"
    >

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* White floating block */}
        <div className="absolute top-20 right-[-120px] w-[500px] h-[500px] bg-white rotate-45 shadow-2xl rounded-[80px] opacity-70" />

        {/* Bottom red shape */}
        <div className="absolute bottom-[-200px] left-1/3 w-[600px] h-[600px] bg-[#c22924] -rotate-12 opacity-10 rounded-[140px]" />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#c22924_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* ================= HERO IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1, x: 50 }}
        animate={{ opacity: 0.85, scale: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 bottom-0 w-full h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* ================= CONTENT ================= */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 w-full"
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl text-left">

          <motion.h1
            custom={1}
            variants={reveal}
            className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05]"
          >
            <span className="block">We design</span>

            <span className="block mt-3 text-[#c22924]">
              modern digital products
            </span>

            that convert better.
          </motion.h1>

          <motion.p
            custom={2}
            variants={reveal}
            className="mt-7 text-base md:text-xl text-gray-700 leading-relaxed max-w-2xl"
          >
            High-quality websites and systems built with precision,
            performance, and clean modern aesthetics.
          </motion.p>

          <motion.div
            custom={3}
            variants={reveal}
            className="mt-10 flex items-center gap-6"
          >
            <button className="px-9 py-3.5 text-sm font-medium text-white rounded-full shadow-md transition bg-[#c22924] hover:bg-black">
              Start Project
            </button>

            <button className="text-sm font-medium text-gray-700 hover:text-[#c22924] transition">
              View Work →
            </button>
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default HeroSection;