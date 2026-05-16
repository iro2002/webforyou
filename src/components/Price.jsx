import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: "$199",
    desc: "Perfect for small businesses or personal websites.",
    features: [
      "1 Landing Page",
      "Basic UI/UX Design",
      "Responsive Design",
      "3 Revisions",
    ],
  },
  {
    id: 2,
    name: "Professional",
    price: "$499",
    desc: "Best for growing startups and business websites.",
    features: [
      "Up to 5 Pages",
      "Advanced UI/UX Design",
      "SEO Optimization",
      "Performance Optimization",
      "5 Revisions",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$999",
    desc: "Full-scale solution for large businesses.",
    features: [
      "Unlimited Pages",
      "Custom UI/UX System",
      "Full Stack Development",
      "API Integration",
      "Priority Support",
    ],
  },
];

const PricingStrategy = () => {
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
      y: 60,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative py-32 text-black overflow-hidden bg-white">

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-28 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
            Pricing{" "}
            <span className="text-[#c22924]">
              Strategy
            </span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Transparent pricing built for startups, businesses, and enterprise-level solutions.
            No hidden costs. Just value-driven results.
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
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`
                relative p-10 bg-white/90 backdrop-blur-md
                border border-black/10 rounded-2xl
                transition-all duration-300
                hover:-translate-y-3 hover:scale-[1.04]
                shadow-[6px_6px_0px_#c22924]
                hover:shadow-[12px_12px_0px_#c22924]
                ${i === 1 ? "border-[#c22924]/40" : ""}
              `}
            >
              {/* PLAN NAME */}
              <h3 className="text-2xl font-light tracking-tight">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-5xl font-light mt-4 text-[#c22924]">
                {plan.price}
              </p>

              {/* DESC */}
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {plan.desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-8 space-y-3 text-sm text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#c22924] mt-[2px]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button className="mt-10 w-full py-3 rounded-full bg-black text-white text-xs uppercase tracking-widest hover:bg-[#c22924] transition">
                Get Started
              </button>

              {/* RED ACCENT LINE */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#c22924] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PricingStrategy;