import React, { useMemo } from "react";
import { motion } from "framer-motion";
import bgImage from "../images/bg5.png";

const feedbacks = [
  {
    id: 1,
    name: "Asela Nishshanka",
    role: "Photographer",
    comment:
      "Excellent work! The website design is clean, modern, and very user-friendly. Everything was delivered on time and exactly as discussed. Highly recommended for anyone looking for a professional website designer.",
  },
  {
    id: 2,
    name: "Manthila Balasuriya",
    role: "Director",
    comment:
      "What impressed me the most was how quickly he understood exactly what I wanted...",
  },
  {
    id: 3,
    name: "Sulash De Silva",
    role: "Owner",
    comment:
      "They perfectly understood our brand vision and turned it into a modern, elegant digital experience.",
  },
];

// ✅ move variants OUTSIDE render (prevents recreation)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const CustomerFeedback = () => {
  // optional memo (prevents rerenders if parent updates)
  const cards = useMemo(() => feedbacks, []);

  return (
    <section
      id="about"
      className="relative py-20 text-black overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay (unchanged UI) */}
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
            What our{" "}
            <span className="text-[#c22924]">clients say</span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Real feedback from clients who trusted us to build their digital presence
            with performance, design, and strategy.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {cards.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="
                relative p-8 bg-white/80 backdrop-blur-md
                border border-black/10 rounded-2xl
                shadow-[6px_6px_0px_#c22924]
                transition-transform duration-300
                will-change-transform
                hover:-translate-y-2
                hover:shadow-[10px_10px_0px_#c22924]
              "
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                “{item.comment}”
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-medium">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CustomerFeedback;