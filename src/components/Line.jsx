import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

const PremiumSeparator = () => {
  // 📸 Images
  const screenImages = [
    "https://www.redeyedesign.co.nz/wp-content/uploads/We-Do-Web-Design.png",
    "https://img.freepik.com/premium-vector/web-design-development-graphics-flat-design-illustration_886588-20410.jpg",
    "https://img.freepik.com/free-vector/postponed-illustrated-design_23-2148491918.jpg?semt=ais_rp_50_assets&w=740&q=80",
    "https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration_335657-1825.jpg?semt=ais_hybrid&w=740&q=80",
  ];

  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.floor(v * screenImages.length);
    setIndex(Math.min(screenImages.length - 1, Math.max(0, i)));
  });

  return (
    <div ref={containerRef} className="relative lg:h-[300vh] bg-[#c22924]">
      
      <section className="relative lg:sticky top-0 min-h-[70vh] lg:h-screen w-full overflow-hidden flex items-center justify-center py-24 lg:py-0">

        {/* BACKGROUND GLOW - Desktop only */}
        <div className="hidden md:block absolute md:top-[-200px] md:left-[-150px] md:w-[500px] md:h-[500px] bg-white/10 md:blur-[160px] rounded-full" />
        <div className="hidden md:block absolute md:bottom-[-200px] md:right-[-150px] md:w-[500px] md:h-[500px] bg-black/20 md:blur-[180px] rounded-full" />

        {/* BIG BG TEXT */}
        <h1 className="absolute inset-0 flex items-center justify-center text-[55vw] lg:text-[22vw] tracking-tighter text-white/5 select-none pointer-events-none z-0 font-thin overflow-hidden whitespace-nowrap opacity-60 lg:opacity-100">
          DIGITAL
        </h1>

        <div className="relative z-10 w-full max-w-[95rem] mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="uppercase tracking-[0.25em] md:tracking-[0.45em] text-white/70 text-xs md:text-sm mb-4 md:mb-8 font-thin"
            >
              Next Generation Experience
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] tracking-tight font-thin"
            >
              Designing products
              <span className="block mt-2 md:mt-4 text-black font-thin">
                people truly remember
              </span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1 }}
              className="h-[2px] md:h-[3px] bg-white/70 mt-6 md:mt-12 mx-auto lg:mx-0 w-[120px] md:w-[200px]"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-xl lg:max-w-2xl mt-6 md:mt-10 text-white/90 text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed font-thin"
            >
              We create immersive web experiences with clean design,
              powerful development, and interactive animations that
              make your brand stand out in the modern digital world.
            </motion.p>
          </div>

          {/* RIGHT LAPTOP - HIDDEN ON MOBILE (hidden lg:flex) */}
          <motion.div
            initial={{ opacity: 0, rotateY: -20, y: 80 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex relative justify-center pb-8 lg:pb-0"
          >
            {/* GLOW */}
            <div className="absolute w-[800px] h-[800px] bg-white/10 blur-[160px] rounded-full" />

            {/* FLOATING LAPTOP */}
            <motion.div
              animate={{ y: [0, -12, 0] }} 
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex flex-col items-center"
            >
              {/* LAPTOP BODY */}
              <div className="relative lg:w-[620px] xl:w-[820px] lg:h-[380px] xl:h-[500px] bg-[#fdfcf8] rounded-[2%_3%_2%_4%/5%_2%_4%_2%] border-[3px] border-[#333] lg:shadow-[8px_8px_0px_rgba(51,51,51,0.8),-2px_-2px_0px_rgba(51,51,51,0.1)] flex flex-col overflow-hidden z-10">

                {/* WEBCAM */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 border-2 border-[#333] rounded-[40%_60%_70%_30%] bg-transparent" />

                {/* TOP BAR */}
                <div className="h-10 bg-transparent flex items-center px-4 gap-2 border-b-[2px] border-dashed border-[#333] mt-4">
                  <div className="w-3 h-3 rounded-[40%_60%_60%_40%] border-[2px] border-[#333] bg-red-200" />
                  <div className="w-3 h-3 rounded-[50%_40%_50%_60%] border-[2px] border-[#333] bg-yellow-200" />
                  <div className="w-3 h-3 rounded-[60%_50%_40%_50%] border-[2px] border-[#333] bg-green-200" />
                </div>

                {/* SCREEN */}
                <div className="relative flex-1 overflow-hidden bg-[#e0ded8]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={index}
                      src={screenImages[index]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply grayscale contrast-[1.3] sepia-[0.2]"
                    />
                  </AnimatePresence>

                  {/* TEXTURE */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(51,51,51,0.05)_4px,rgba(51,51,51,0.05)_5px)] pointer-events-none" />
                </div>

                {/* BOTTOM BEZEL */}
                <div className="h-6 bg-[#fdfcf8] border-t-[3px] border-[#333] flex items-center justify-center">
                  <div className="w-10 h-[3px] bg-[#333] rounded-[50%_40%_60%_30%]" />
                </div>
              </div>

              {/* BASE */}
              <div className="relative lg:w-[690px] xl:w-[910px] lg:h-5 bg-[#fdfcf8] border-[3px] border-[#333] rounded-[10%_10%_40%_40%/20%_20%_80%_80%] lg:shadow-[6px_10px_0px_rgba(51,51,51,0.8)] z-0 lg:-mt-[2px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:w-32 lg:h-2 border-b-[2px] border-x-[2px] border-[#333] rounded-b-[40%_60%_60%_40%] bg-[#eae8e0]" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* TOP WAVE */}
        <svg 
          className="absolute top-0 left-0 w-full h-[60px] md:h-[140px] pointer-events-none" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.08)"
            d="M0,96L80,106.7C160,117,320,139,480,149.3C640,160,800,160,960,138.7C1120,117,1280,75,1360,53.3L1440,32L1440,0L0,0Z"
          />
        </svg>

        {/* BOTTOM WAVE */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-[80px] md:h-[160px] pointer-events-none" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,261.3C1120,267,1280,213,1360,186.7L1440,160L1440,320L0,320Z"
          />
        </svg>

      </section>
    </div>
  );
};

export default PremiumSeparator;