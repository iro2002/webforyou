import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "../images/bg4.png";

const projects = [
  {
    id: "01",
    title: "Craftgrapher",
    category: "E-Commerce Platform",
    desc: "Craftgrapher.com is a dynamic e-commerce platform designed to showcase products in a visually engaging and user-friendly manner.",
    image: "https://picsum.photos/600/400?random=11",
    href: "https://www.craftgrapher.com",
  },
  {
    id: "02",
    title: "Tropical Weldlock",
    category: "Photography Portfolio",
    desc: "A visually immersive photography website, created to elegantly present photo albums and capture the essence of each moment.",
    image: "https://picsum.photos/600/400?random=12",
    href: "http://www.tropicalweldlock.com",
  },
  {
    id: "03",
    title: "Thamindu Gamage",
    category: "Creative Portfolio",
    desc: "A professional portfolio website crafted for photographers, providing a refined platform to showcase albums and highlight creative work.",
    image: "https://picsum.photos/600/400?random=13",
    href: "https://www.thamindugamagephotography.me",
  },
  {
    id: "04",
    title: "Manthila Balasuriya",
    category: "Personal Portfolio",
    desc: "A clean and professional portfolio website showcasing individual achievements, projects and creative expertise.",
    image: "https://picsum.photos/600/400?random=14",
    href: "https://manthilabalasuriya.com/",
  },
];

const Project = () => {
  const { scrollYProgress } = useScroll();

  const bgY = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const bgX = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.25]);

  return (
    <section id="projects" className="relative py-20 text-black overflow-hidden bg-white min-h-screen">

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
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight">
            Selected <span className="text-[#c22924]">Projects</span>
          </h2>

          <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-xl max-w-2xl mx-auto">
            A selection of work that defines our design thinking, engineering precision, and brand impact.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="mt-16 md:mt-24 space-y-10">

          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative border-b border-black/10 pb-10 cursor-pointer"
            >

              <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row gap-6">

                {/* IMAGE */}
                <div className="md:w-64 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 md:h-32 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-6">

                  <div className="flex gap-4">
                    <span className="text-gray-400 text-sm font-mono mt-1">
                      {project.id}
                    </span>

                    <div>
                      <h3 className="text-2xl md:text-5xl font-light tracking-tight group-hover:text-[#c22924] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-500 mt-1 text-xs md:text-sm uppercase tracking-widest">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <div className="md:max-w-md">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                </div>
              </a>

              {/* RED LINE */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#c22924] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}

        </div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mt-20 md:mt-32"
        >
          <button className="px-8 py-3 md:px-10 md:py-4 bg-black text-white rounded-full hover:bg-[#c22924] transition text-xs md:text-sm uppercase tracking-widest">
            View All Projects
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Project;