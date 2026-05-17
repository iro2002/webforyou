import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: "LKR 15,900",
    desc: "Perfect for personal brands, portfolios, and small business websites.",
    features: [
      "1 High-Quality Landing Page",
      "Modern Design",
      "Fully Responsive Layout",
      "Basic SEO Setup",
      "Hosting Setup (1 Year Free)",
      "Up to 3 Revisions",
    ],
  },
  {
    id: 2,
    name: "Professional",
    price: "LKR 29,900",
    desc: "Ideal for growing startups and service-based businesses.",
    features: [
      "Up to 5 Custom Pages",
      "Modern Design",
      "SEO Optimization (On-page)",
      "Speed & Performance Optimization",
      "Free Domain (1 Year)",
      "SSL Certificate Included",
      "Hosting Setup (3 Months Free)",
      "Mobile-first Responsive Design",
      "Up to 5 Revisions",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "LKR 69,000",
    desc: "Complete digital solution for large-scale businesses and platforms.",
    features: [
      "Modern Design",
      "Full Stack Development",
      "Free Domain (1 Year)",
      "SSL Certificate Included",
      "Hosting Setup (1 Months Free/For 1 Year additional LKR 25,000)",
      "Priority Support",
      "Payment Gateway Integration",
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
            Fair{" "}
            <span className="text-[#c22924]">Pricing</span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Transparent, value-driven pricing including domain, SSL, and hosting setup.
            No hidden costs — everything you need to launch.
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

                flex flex-col h-full
              `}
            >
              {/* TITLE */}
              <h3 className="text-2xl font-light tracking-tight">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-5xl font-light mt-4 text-[#c22924]">
                {plan.price}
              </p>

              {/* DESCRIPTION */}
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

              {/* BUTTON (ALIGNED SAME LEVEL) */}
              <button className="mt-auto w-full py-3 rounded-full bg-black text-white text-xs uppercase tracking-widest hover:bg-[#c22924] transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingStrategy;