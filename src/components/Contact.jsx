import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "94762196507";

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    detail: "infowebforyou.team@gmail.com",
    href: "mailto:infowebforyou.team@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone (WhatsApp)",
    detail: "+94 76 219 6507",
    href: "https://wa.me/94762196507",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Colombo, Sri Lanka",
    href: "https://maps.google.com/?q=Colombo,SriLanka",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const SERVICE_OPTIONS = [
  "Personal Portfolio Website",
  "Startup E-Commerce",
  "Business Landing Page",
  "Tourism & Travel Websites",
  "Hotel & Resort Websites",
  "SEO & Performance",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
📩 New Project Inquiry

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "Not provided"}

🧩 Service: ${formData.service}
💰 Budget: ${formData.budget || "Not specified"}

💬 Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

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

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            {CONTACT_INFO.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 border border-black/10 rounded-2xl p-6 hover:border-[#c22924]/40 hover:shadow-lg hover:shadow-black/5 transition cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 text-[#c22924]">
                  <item.icon className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="text-black font-medium">{item.title}</h4>
                  <p className="text-black/60 text-sm">{item.detail}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="border border-black/10 rounded-3xl p-10 space-y-5"
          >

            {/* Name */}
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924]"
            />

            {/* Email */}
            <input
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924]"
            />

            {/* Phone (Optional) */}
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924]"
            />

            {/* Service */}
            <select
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924]"
            >
              <option value="">Select Service</option>
              {SERVICE_OPTIONS.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Budget */}
            <input
              type="text"
              placeholder="Budget"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924]"
            />

            {/* Message */}
            <textarea
              rows="5"
              required
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border border-black/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#c22924] resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#c22924] text-white py-4 rounded-xl text-sm tracking-widest uppercase hover:opacity-90 transition"
            >
              Send via WhatsApp
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;