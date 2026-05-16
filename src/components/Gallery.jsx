import React from "react";
import { motion } from "framer-motion";
import bgImage from "../images/bg5.png";

const feedbacks = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    comment:
      "The team delivered beyond expectations. The UI/UX design completely transformed our digital presence and improved conversions significantly.",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Startup Founder",
    comment:
      "Incredible attention to detail and smooth communication. The website performance and design quality are world-class.",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Brand Manager",
    comment:
      "They perfectly understood our brand vision and turned it into a modern, elegant digital experience.",
  },
];

const CustomerFeedback = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 40,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 text-black overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
            What our{" "}
            <span className="text-[#c22924]">
              clients say
            </span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real feedback from clients who trusted us to build their digital presence
            with performance, design, and strategy.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {feedbacks.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="
                relative
                p-8
                bg-white/80
                backdrop-blur-md
                border border-black/10
                rounded-2xl
                shadow-[6px_6px_0px_#c22924]
                transition-all duration-300
                hover:-translate-y-3
                hover:scale-[1.04]
                hover:shadow-[10px_10px_0px_#c22924]
              "
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                “{item.comment}”
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-medium">{item.name}</h4>
                <span className="text-sm text-gray-500">
                  {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CustomerFeedback;