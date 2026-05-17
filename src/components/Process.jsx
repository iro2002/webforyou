import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const processSteps = [
  {
    number: "01",
    title: "Get Requirements",
    description:
      "We understand what you need and plan the project step by step.",
  },
  {
    number: "02",
    title: "Build Basic Version",
    description:
      "We create a simple working version of your website so you can see the idea.",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "We put your website online so it can be accessed from anywhere.",
  },
  {
    number: "04",
    title: "Get Feedback",
    description:
      "You review the website and tell us what to improve or change.",
  },
  {
    number: "05",
    title: "Final Update",
    description:
      "We fix everything based on feedback and deliver the final version.",
  },
];

const Process = () => {
  return (
    <section className="relative w-full bg-white py-12 overflow-hidden">

      {/* BACKGROUND TEXT */}
      <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-[15vw] font-thin text-black/[0.03] pointer-events-none select-none">
        PROCESS
      </h1>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.45em] text-black/50 text-sm mb-6"
          >
            How We Work
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight text-black"
          >
            Simple steps
            <span className="block mt-3 text-[#c22924]">
              from idea to reality
            </span>
          </motion.h2>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-black/10 ml-6 md:ml-10">

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-10 pb-16 group"
            >

              {/* DOT */}
              <span className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#c22924] group-hover:scale-125 transition-transform duration-300" />

              {/* CONTENT */}
              <div className="flex flex-col gap-3">

                <span className="text-sm tracking-[0.3em] text-black/30">
                  STEP {step.number}
                </span>

                <h3 className="text-3xl md:text-4xl font-thin text-black">
                  {step.title}
                </h3>

                <p className="text-black/60 text-lg leading-relaxed max-w-2xl">
                  {step.description}
                </p>

                <div className="w-0 h-[2px] bg-[#c22924] group-hover:w-40 transition-all duration-500" />
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Process;