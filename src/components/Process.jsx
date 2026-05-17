import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, understanding your goals, audience, and market to craft a blueprint for success.",
  },
  {
    id: "02",
    title: "UX/UI Design",
    description: "Wireframes evolve into stunning, high-fidelity designs. We focus on clean aesthetics and intuitive user journeys.",
  },
  {
    id: "03",
    title: "Development",
    description: "Bringing designs to life with modern, clean code. We ensure blazing fast performance and pixel-perfect execution.",
  },
  {
    id: "04",
    title: "Testing & QA",
    description: "Rigorous testing across all devices and browsers to guarantee a flawless, high-converting digital experience.",
  },
  {
    id: "05",
    title: "Launch & Scale",
    description: "We deploy your project to the world and provide the ongoing support needed to help your digital presence grow.",
  },
];

const Process = () => {
  const containerRef = useRef(null);

  // Track the scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // Grow the vertical line based on scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-white text-black py-32 overflow-hidden"
    >
      {/* BIG BACK TEXT */}
      <h1 className="absolute top-20 left-0 w-full text-center text-[18vw] font-thin tracking-tighter text-black/5 pointer-events-none select-none">
        PROCESS
      </h1>

      <div className="relative z-10 max-w-[120rem] mx-auto px-8">
        
        {/* HEADER SECTION */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.45em] text-black/50 text-sm mb-6"
          >
            How We Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-thin tracking-tight leading-none"
          >
            From concept to <br />
            <span className="text-[#c22924] font-normal italic">digital reality.</span>
          </motion.h2>
        </div>

        {/* STICKY SCROLL LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-20 relative">
          
          {/* LEFT: Sticky Title */}
          <div className="lg:w-1/3 hidden lg:block">
            <div className="sticky top-40">
              <h3 className="text-4xl font-thin tracking-tighter">
                Our Proven <br /> Methodology
              </h3>
              <div className="w-[100px] h-[2px] bg-[#c22924] mt-8" />
              <p className="mt-8 text-black/60 max-w-sm text-lg leading-relaxed">
                A seamless, transparent, and results-driven process designed to eliminate friction and maximize impact.
              </p>
            </div>
          </div>

          {/* RIGHT: Scrolling Steps */}
          <div className="lg:w-2/3 relative">
            
            {/* The Animated Scroll Line */}
            <div className="absolute left-[24px] md:left-[39px] top-0 bottom-0 w-[1px] bg-black/10">
              <motion.div 
                className="w-full bg-[#c22924] origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="flex flex-col gap-24 py-10">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* Individual Step Component for staggered intersection animations */
const ProcessStep = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative pl-20 md:pl-32 group"
    >
      {/* Node on the timeline */}
      <div className="absolute left-[15px] md:left-[30px] top-2 w-[19px] h-[19px] rounded-full bg-white border border-black/20 group-hover:border-[#c22924] group-hover:scale-150 transition-all duration-500 flex items-center justify-center z-10">
        <div className="w-[5px] h-[5px] rounded-full bg-[#c22924] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Step Content */}
      <div className="flex flex-col gap-4">
        <h4 className="text-6xl md:text-8xl font-thin text-black/10 leading-none pointer-events-none transition-colors duration-500 group-hover:text-[#c22924]/20">
          {step.id}
        </h4>
        <h3 className="text-3xl md:text-4xl font-light tracking-tight text-black mt-[-30px] md:mt-[-45px]">
          {step.title}
        </h3>
        <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-xl mt-4">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Process;