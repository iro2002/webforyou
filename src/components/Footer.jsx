import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-white text-black border-t border-black/10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-light tracking-tight">
              Web<span className="text-[#c22924]">ForYou</span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              We design and develop high-performance digital experiences
              that help brands grow and stand out in the digital world.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-500">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li className="hover:text-[#c22924] cursor-pointer transition">About</li>
              <li className="hover:text-[#c22924] cursor-pointer transition">Services</li>
              <li className="hover:text-[#c22924] cursor-pointer transition">Projects</li>
              <li className="hover:text-[#c22924] cursor-pointer transition">Contact</li>
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-500">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li className="hover:text-[#c22924] transition">UI/UX Design</li>
              <li className="hover:text-[#c22924] transition">Web Development</li>
              <li className="hover:text-[#c22924] transition">Brand Identity</li>
              <li className="hover:text-[#c22924] transition">SEO Optimization</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-500">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <p>Negombo, Sri Lanka</p>
              <p>+94 76 000 0000</p>
              <p>hello@webforyou.com</p>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-black/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} WebForYou. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">
            <span className="hover:text-[#c22924] cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-[#c22924] cursor-pointer transition">Terms</span>
            <span className="hover:text-[#c22924] cursor-pointer transition">Cookies</span>
          </div>
        </div>

      </div>

      {/* FLOATING RED GLOW EFFECT */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c22924]/10 blur-[120px] rounded-full" />
    </footer>
  );
};

export default Footer;