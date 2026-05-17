import React, { useMemo, useState, useCallback } from "react";
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
      "What impressed me the most was how quickly he understood exactly what I wanted. I shared a few rough references and explained the overall vibe I was looking for. He delivered beyond expectations.",
  },
  {
    id: 3,
    name: "Sulash De Silva",
    role: "Owner",
    comment:
      "Working with him was super easy and smooth. He turned our ideas into a clean and modern website. The final result looked even better than expected.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const CustomerFeedback = () => {
  const cards = useMemo(() => feedbacks, []);
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? cards.length - 1 : i - 1));
  }, [cards.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === cards.length - 1 ? 0 : i + 1));
  }, [cards.length]);

  const active = cards[index];

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
      {/* overlay */}
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05]">
            What our{" "}
            <span className="text-[#c22924]">clients say</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg md:text-xl">
            Real feedback from clients who trusted us to build their digital presence.
          </p>
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden relative flex items-center justify-center">

          {/* LEFT WHITE ARROW */}
          <button
            onClick={prev}
            className="
              absolute left-2 z-10
              w-11 h-11
              bg-white text-black
              rounded-full flex items-center justify-center
              shadow-md
              active:scale-95 transition-transform
            "
          >
            ‹
          </button>

          {/* CARD */}
          <motion.div
            key={active.id}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="
              w-[85%]
              p-7 bg-white/80 backdrop-blur-md
              border border-black/10 rounded-2xl
              shadow-[6px_6px_0px_#c22924]
              will-change-transform
            "
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              “{active.comment}”
            </p>

            <div className="mt-6">
              <h4 className="text-lg font-medium">{active.name}</h4>
              <span className="text-sm text-gray-500">{active.role}</span>
            </div>
          </motion.div>

          {/* RIGHT WHITE ARROW */}
          <button
            onClick={next}
            className="
              absolute right-2 z-10
              w-11 h-11
              bg-white text-black
              rounded-full flex items-center justify-center
              shadow-md
              active:scale-95 transition-transform
            "
          >
            ›
          </button>
        </div>

        {/* DESKTOP GRID (UNCHANGED) */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {cards.map((item) => (
            <div
              key={item.id}
              className="
                p-8 bg-white/80 backdrop-blur-md
                border border-black/10 rounded-2xl
                shadow-[6px_6px_0px_#c22924]
                hover:-translate-y-2 transition-transform duration-300
              "
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                “{item.comment}”
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-medium">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerFeedback;