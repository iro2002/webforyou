import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Personal Portfolio Website",
    description:
      "A simple static website to showcase projects, skills, profile information, and contact details.",
    capabilities: ["React", "UI Design", "Responsive"],
  },
  {
    id: "02",
    title: "Startup E-Commerce",
    description:
      "Clean and conversion-focused storefronts with modern layouts, product showcases, and smooth customer journeys.",
    capabilities: ["Shop UI", "Payments", "Optimization"],
  },
  {
    id: "03",
    title: "Business Landing Page",
    description:
      "A single or multi-section static landing page focused on presenting services and generating enquiries.",
    capabilities: ["Lead Gen", "SEO", "Fast Loading"],
  },
  {
    id: "04",
    title: "Tourism & Travel Websites",
    description:
      "High-impact websites crafted to present tours, travel experiences, and packages with clear calls to action.",
    capabilities: ["Booking UI", "Gallery", "Maps"],
  },
  {
    id: "05",
    title: "Hotel & Resort Websites",
    description:
      "Elegant websites to showcase rooms, amenities, galleries, and your brand’s unique atmosphere.",
    capabilities: ["Luxury UI", "Booking System", "Gallery"],
  },
  {
    id: "06",
    title: "SEO & Performance",
    description:
      "Websites optimized for speed, structure, and search visibility to help you rank better and reach more customers.",
    capabilities: ["Speed", "SEO", "Analytics"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-white text-black overflow-hidden">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center max-w-4xl mx-auto px-6"
      >
        <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
          <span className="font-light">Our</span>{" "}
          <span className="text-[#c22924] font-light">
            Services
          </span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg md:text-xl font-light">
          We deliver modern digital solutions with design, engineering and strategy.
        </p>
      </motion.div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true }}
            className="
              relative
              p-8
              bg-white
              border border-black/5
              rounded-2xl
              shadow-[6px_6px_0px_#c22924]
              transition-all duration-300
              hover:-translate-y-3
              hover:scale-[1.04]
              hover:shadow-[12px_12px_0px_#c22924]
            "
          >

            {/* ID */}
            <span className="text-gray-400 font-mono text-sm">
              {item.id}
            </span>

            {/* TITLE */}
            <h3 className="text-2xl sm:text-3xl font-light mt-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base font-light">
              {item.description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-6">
              {item.capabilities.map((cap, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-xs border border-black/10 text-gray-500 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ServicesSection;