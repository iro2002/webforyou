import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import bgImage from "../images/bg4.png";

import p1_1 from "../images/project1/1.png";
import p1_2 from "../images/project1/2.png";
import p1_3 from "../images/project1/3.png";
import p1_4 from "../images/project1/4.png";
import p1_5 from "../images/project1/5.png";

import p2_1 from "../images/project2/1.png";
import p2_2 from "../images/project2/2.png";
import p2_3 from "../images/project2/3.png";
import p2_4 from "../images/project2/4.png";
import p2_5 from "../images/project2/5.png";

import p3_1 from "../images/project3/1.png";
import p3_2 from "../images/project3/2.png";
import p3_3 from "../images/project3/3.png";
import p3_4 from "../images/project3/4.png";
import p3_5 from "../images/project3/5.png";

import p4_1 from "../images/project4/1.png";
import p4_2 from "../images/project4/2.png";
import p4_3 from "../images/project4/3.png";
import p4_4 from "../images/project4/4.png";
import p4_5 from "../images/project4/5.png";

const projects = [
  {
    id: "01",
    title: "Craftgrapher",
    category: "E-Commerce Platform",
    desc: "Craftgrapher.com is a dynamic e-commerce platform designed to showcase products in a visually engaging and user-friendly manner.",
    images: [p1_1, p1_2, p1_3, p1_4, p1_5],
    href: "https://www.craftgrapher.com",
  },
  {
    id: "02",
    title: "Tropical Weldlock",
    category: "Photography Portfolio",
    desc: "A visually immersive photography website, created to elegantly present photo albums and capture the essence of each moment.",
    images: [p2_1, p2_2, p2_3, p2_4, p2_5],
    href: "http://www.tropicalweldlock.com",
  },
  {
    id: "03",
    title: "Thamindu Gamage",
    category: "Creative Portfolio",
    desc: "A professional portfolio website crafted for photographers, providing a refined platform to showcase albums and highlight creative work.",
    images: [p3_1, p3_2, p3_3, p3_4, p3_5],
    href: "https://www.thamindugamagephotography.me",
  },
  {
    id: "04",
    title: "Manthila Balasuriya",
    category: "Personal Portfolio",
    desc: "A clean and professional portfolio website showcasing individual achievements, projects and creative expertise.",
    images: [p4_1, p4_2, p4_3, p4_4, p4_5],
    href: "https://manthilabalasuriya.com/",
  },
];

const Project = () => {
  const { scrollYProgress } = useScroll();

  const bgY = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const bgX = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.25]);

  return (
    <section
      id="projects"
      className="relative py-20 text-black overflow-hidden bg-white min-h-screen"
    >
      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: bgY,
          x: bgX,
          scale: bgScale,
          willChange: "transform",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
            Selected <span className="text-[#c22924]">Projects</span>
          </h2>

          <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            A selection of work that defines our design thinking,
            engineering precision, and brand impact.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="mt-16 md:mt-24 space-y-14">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border-b border-black/10 pb-12"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col xl:flex-row gap-8 xl:gap-14"
              >
                {/* IMAGE SLIDER */}
                <div className="relative xl:w-[560px]">
                  {/* LEFT BUTTON */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(`slider-${project.id}`)
                        .scrollBy({
                          left: -320,
                          behavior: "smooth",
                        });
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 flex items-center justify-center hover:bg-[#c22924] hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* RIGHT BUTTON */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(`slider-${project.id}`)
                        .scrollBy({
                          left: 320,
                          behavior: "smooth",
                        });
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 flex items-center justify-center hover:bg-[#c22924] hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* SCROLL AREA */}
                  <div
                    id={`slider-${project.id}`}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {project.images.map((img, idx) => (
                      <motion.img
                        key={idx}
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="w-[260px] md:w-[320px] h-[180px] md:h-[220px] object-cover rounded-2xl snap-start flex-shrink-0 border border-gray-200 bg-white shadow-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 flex flex-col justify-between gap-8">
                  <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    {/* LEFT */}
                    <div className="flex gap-4">
                      <span className="text-gray-400 text-sm font-mono mt-2">
                        {project.id}
                      </span>

                      <div>
                        <h3 className="text-3xl md:text-5xl font-light tracking-tight transition-colors duration-500 group-hover:text-[#c22924]">
                          {project.title}
                        </h3>

                        <p className="text-gray-500 mt-3 text-xs md:text-sm uppercase tracking-[0.25em]">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="md:max-w-md">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  {/* VISIT BUTTON */}
                  <div>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-black group-hover:text-[#c22924] transition-colors duration-300">
                      Visit Website
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H8M17 7V16"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>

              {/* HOVER LINE */}
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="absolute left-0 bottom-0 h-[2px] bg-[#c22924]"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mt-24 md:mt-32"
        >
          <button className="px-10 py-4 bg-black text-white rounded-full hover:bg-[#c22924] transition-all duration-300 text-xs md:text-sm uppercase tracking-[0.25em] shadow-lg hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;