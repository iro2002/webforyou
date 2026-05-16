import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in UI/UX design, full-stack web development, and brand identity design for startups and businesses.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Depending on complexity, most projects take between 2 to 6 weeks from planning to final delivery.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance and support packages to keep your website updated, secure, and optimized.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign and improve your current website with better UI, performance, and conversion-focused structure.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Node.js and Tailwind CSS depending on project needs.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
            Frequently{" "}
            <span className="text-[#c22924]">Asked</span> Questions
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Everything you need to know before starting a project with us.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-black/10 pb-4"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-5 text-left group"
              >
                <span className="text-lg md:text-xl font-light group-hover:text-[#c22924] transition">
                  {item.question}
                </span>

                <span className="text-2xl text-gray-400 group-hover:text-[#c22924] transition">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;