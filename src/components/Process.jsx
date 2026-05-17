import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your brand, goals, and audience to build a strong foundation.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Clean, modern UI/UX design focused on clarity, usability, and aesthetics.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "High-performance websites built with modern technologies and smooth interactions.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Testing, optimization, and deployment to ensure everything runs perfectly.",
  },
];

const Process = () => {
  return (
    <section className="relative w-full bg-white py-32 overflow-hidden">

      {/* BACKGROUND TEXT */}
      <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-[15vw] font-thin text-black/[0.03] pointer-events-none select-none">
        PROCESS
      </h1>

      <div className="relative z-10 max-w-[130rem] mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="max-w-4xl mb-24">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.45em] text-black/50 text-sm mb-6"
          >
            Our Process
          </motion.p>

<motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-thin leading-[0.9] text-black"
>
  Simple steps
  <span className="block mt-3 text-[#c22924]">
    that deliver results
  </span>
</motion.h2>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-black/10 p-10 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* NUMBER */}
              <span className="text-6xl font-thin text-black/10 group-hover:text-[#c22924] transition-colors duration-500">
                {step.number}
              </span>

              {/* TITLE */}
              <h3 className="mt-10 text-3xl font-thin text-black">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-black/60 leading-relaxed text-lg">
                {step.description}
              </p>

              {/* LINE */}
              <div className="mt-10 w-0 h-[2px] bg-[#c22924] group-hover:w-full transition-all duration-500" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;