import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 }
};

const About = () => {
  return (
    <section className="relative w-full bg-[#c22924] overflow-hidden py-28">

      {/* BACKGROUND GLOW (GPU optimized) */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-white/10 blur-[160px] rounded-full will-change-transform" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-black/20 blur-[180px] rounded-full will-change-transform" />

      {/* BIG BACK TEXT */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[18vw] font-thin tracking-tighter text-white/5 pointer-events-none select-none">
        ABOUT
      </h1>

      <div className="relative z-10 max-w-[120rem] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.45em] text-white/70 text-sm mb-8"
          >
            Who We Are
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] tracking-tight font-thin"
          >
            We build digital
            <span className="block mt-2 md:mt-4 text-black font-thin">
              experiences that convert
            </span>
          </motion.h2>

          <div className="w-[180px] h-[3px] bg-white/70 mt-10" />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-white/90 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            We design and develop high-performance websites with modern UI,
            smooth interactions, and conversion-focused strategy to help brands
            grow in the digital world.
          </motion.p>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-end">

          {/* vertical line */}
          <div className="absolute right-10 top-0 h-full w-[1px] bg-white/20" />

          <div className="flex flex-col gap-14 pr-16">

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-6xl md:text-7xl font-thin text-white leading-none">
                10+
              </h3>
              <p className="text-white/60 uppercase tracking-[0.35em] text-sm mt-3">
                Completed Projects
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-6xl md:text-7xl font-thin text-black leading-none">
                100%
              </h3>
              <p className="text-white/60 uppercase tracking-[0.35em] text-sm mt-3">
                Customer Satisfaction
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-6xl md:text-7xl font-thin text-white leading-none">
                24/7
              </h3>
              <p className="text-white/60 uppercase tracking-[0.35em] text-sm mt-3">
                Support Available
              </p>
            </motion.div>

            <p className="text-white/30 text-sm tracking-[0.2em] max-w-xs mt-10">
              WE FOCUS ON CLEAN DESIGN · PERFORMANCE · MODERN INTERACTIONS
            </p>

          </div>
        </div>
      </div>

      {/* BOTTOM WAVE (GPU hint added) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-[120px] will-change-transform"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40
               C240,120 480,0 720,60
               C960,120 1200,40 1440,80
               L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
};

export default About;