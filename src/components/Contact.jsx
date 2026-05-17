import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@youragency.com",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+94 77 123 4567",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Colombo, Sri Lanka",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section className="relative bg-white py-32 overflow-hidden">

      {/* BACK TEXT */}
      <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-[14vw] font-thin text-black/[0.03] pointer-events-none select-none">
        CONTACT
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-24">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-sm text-[#c22924] mb-4"
          >
            Get In Touch
          </motion.p>
<motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="text-5xl md:text-6xl lg:text-7xl font-thin leading-[0.95] text-black"
>
  Let’s build something
  <span className="block text-[#c22924] mt-3">
    amazing together
  </span>
</motion.h2>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 border border-black/10 rounded-2xl p-6 hover:border-[#c22924]/40 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 text-[#c22924]">
                  <item.icon className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="text-black font-medium">{item.title}</h4>
                  <p className="text-black/60 text-sm">{item.detail}</p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="border border-black/10 rounded-3xl p-10"
          >

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924]"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924]"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924] resize-none"
              />

              <button className="w-full bg-[#c22924] text-white py-4 rounded-xl text-sm tracking-widest uppercase hover:opacity-90 transition">
                Send Message
              </button>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;