import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ServicesSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const designOpacity = useTransform(smooth, [0, 0.3], [1, 0]);
  const designY = useTransform(smooth, [0, 0.3], ["0%", "-60%"]);

  const devOpacity = useTransform(smooth, [0.25, 0.55, 0.8], [0, 1, 0]);
  const devY = useTransform(smooth, [0.25, 0.55, 0.8], ["60%", "0%", "-60%"]);

  const deliverOpacity = useTransform(smooth, [0.7, 1], [0, 1]);
  const deliverY = useTransform(smooth, [0.7, 1], ["60%", "0%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] bg-white"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center relative z-10">
        <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">

          {/* LEFT TEXT */}
          <div className="w-full flex-1 relative h-[220px] sm:h-[240px] md:h-[260px] flex items-center justify-center md:justify-end md:pr-12">

            <motion.h1
              style={{ opacity: designOpacity, y: designY }}
              className="absolute w-full left-0 text-center md:text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#c22924]"
            >
              Creative UI Experiences
            </motion.h1>

            <motion.h1
              style={{ opacity: devOpacity, y: devY }}
              className="absolute w-full left-0 text-center md:text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#c22924]"
            >
              Scalable Web Development
            </motion.h1>

            <motion.h1
              style={{ opacity: deliverOpacity, y: deliverY }}
              className="absolute w-full left-0 text-center md:text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#c22924]"
            >
              SEO & Growth Optimization
            </motion.h1>

          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px h-[200px] bg-gray-300 mx-10" />

          {/* RIGHT DESCRIPTION */}
          <div className="w-full flex-1 md:pl-12 text-center md:text-left mt-10 md:mt-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight md:leading-[1.05]">
              We craft high-performance digital solutions
              <span className="block font-light tracking-tight mt-2 text-[#c22924]">
                designed to elevate your brand impact
              </span>
              through clean design, solid engineering, and measurable growth.
            </h2>

            <div className="mt-8 md:mt-6 text-xs tracking-[0.25em] uppercase text-gray-400">
              Core expertise areas
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;