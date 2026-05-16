import React from "react";
import { motion } from "framer-motion";

const PremiumSeparator = () => {
  return (
    <section className="relative overflow-hidden bg-[#c22924] min-h-[700px] flex items-center">

      {/* SAFE BACKGROUND LAYER */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* GLOW */}
        <div className="absolute -top-40 -left-40 w-[360px] md:w-[500px] h-[360px] md:h-[500px] bg-white/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 right-0 w-[360px] md:w-[500px] h-[360px] md:h-[500px] bg-black/20 blur-[160px] rounded-full" />

        {/* BIG BACKGROUND TEXT (kept subtle but larger) */}
        <h1 className="absolute inset-0 flex items-center justify-center
          text-[34vw] sm:text-[26vw] md:text-[20vw]
          font-thin tracking-tighter text-white/[0.04]
          select-none">
          DESIGN
        </h1>

        <h1 className="absolute inset-0 flex items-center justify-center
          text-[34vw] sm:text-[26vw] md:text-[20vw]
          font-thin tracking-tighter text-black/[0.05]
          select-none translate-x-2 translate-y-2">
          DESIGN
        </h1>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-14 py-24 md:py-0">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.35em] text-white/70 text-xs mb-6"
        >
          Next Generation Experience
        </motion.p>

<motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl
  leading-[0.95] font-thin text-white"
>
  We build digital{" "}
  <span className="block mt-3 text-black/80">
    experiences that convert
  </span>
</motion.h2>

        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "240px" }}
          className="h-[2px] bg-white/70 mt-10"
        />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 max-w-2xl text-white/90 text-lg md:text-xl leading-relaxed"
        >
          We focus on UI clarity, performance, and brand-driven systems that
          create clean, modern and conversion-focused digital experiences.
        </motion.p>

        {/* STATS */}
        <div className="flex flex-col sm:flex-row gap-10 mt-12">

          <div>
            <h3 className="text-4xl md:text-6xl text-white font-thin">10+</h3>
            <p className="text-white/60 text-xs uppercase mt-2">Projects</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-white/30" />

          <div>
            <h3 className="text-4xl md:text-6xl text-white font-thin">100%</h3>
            <p className="text-white/60 text-xs uppercase mt-2">Satisfaction</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-white/30" />

          <div>
            <h3 className="text-4xl md:text-6xl text-white font-thin">24/7</h3>
            <p className="text-white/60 text-xs uppercase mt-2">Support</p>
          </div>

        </div>
      </div>

      {/* TOP WAVE */}
      <svg
        className="absolute top-0 left-0 w-full h-[90px] md:h-[110px] pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255,255,255,0.08)"
          d="M0,96L80,106.7C160,117,320,139,480,149.3C640,160,800,160,960,138.7C1120,117,1280,75,1360,53.3L1440,32L1440,0L0,0Z"
        />
      </svg>

      {/* BOTTOM WAVE */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[100px] md:h-[140px] pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255,255,255,0.08)"
          d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,261.3C1120,267,1280,213,1360,186.7L1440,160L1440,320L0,320Z"
        />
      </svg>

    </section>
  );
};

export default PremiumSeparator;