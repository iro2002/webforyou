import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Personal Portfolio Website",
    description:
      "A simple static website to showcase projects, skills, profile information, and contact details.",
  },
  {
    id: "02",
    title: "Startup E-Commerce",
    description:
      "Clean and conversion-focused storefronts with modern layouts, product showcases, and smooth customer journeys.",
  },
  {
    id: "03",
    title: "Business Landing Page",
    description:
      "A single or multi-section static landing page focused on presenting services and generating enquiries.",
  },
  {
    id: "04",
    title: "Tourism & Travel Websites",
    description:
      "High-impact websites crafted to present tours, travel experiences, and packages with clear calls to action.",
  },
  {
    id: "05",
    title: "Hotel & Resort Websites",
    description:
      "Elegant websites to showcase rooms, amenities, galleries, and your brand’s unique atmosphere.",
  },
  {
    id: "06",
    title: "SEO & Performance",
    description:
      "Websites optimized for speed, structure, and search visibility to help you rank better and reach more customers.",
  },
];

// shared animation (reduces re-renders)
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-10 bg-white text-black overflow-hidden">

      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 text-center max-w-4xl mx-auto px-6"
      >
        <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
          <span>Modern</span>{" "}
          <span className="text-[#c22924]">Web Solutions</span>
        </h2>

        <p className="mt-6 text-gray-600 text-xl md:text-2xl font-light">
          We create fast, responsive, and professional websites that help your business grow and stand out online.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((item, i) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="
              relative p-10 bg-white border border-black/10 rounded-2xl
              shadow-[6px_6px_0px_#c22924]
              transition-transform duration-300 ease-out
              will-change-transform
              hover:-translate-y-2
              hover:shadow-[10px_10px_0px_#c22924]
            "
          >
            <span className="text-gray-400 font-mono text-base block mb-2">
              {item.id}
            </span>

            <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-gray-900 mt-2">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-5 leading-relaxed text-base sm:text-lg font-light">
              {item.description}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ServicesSection;