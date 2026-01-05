import React from "react";
import { motion } from "framer-motion";
// import arju from "../img/Arju-hasn.png";
import arju from "../img/Arju-hasan.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-10 relative overflow-x-hidden"
    >
      <div className="max-w-[1200px] w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary tracking-wide uppercase">
              Available for work
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 text-glow">
              Scalable
            </span>{" "}
            Web Apps
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl border-l-4 pl-2">
            Hi, I'm a Full Stack Developer specializing in the MERN stack. I
            transform complex requirements into robust, high-performance web
            applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-base font-bold h-12 px-8 rounded-full transition-all neon-glow shadow-lg shadow-primary/25"
              href="#projects"
            >
              View Projects{" "}
              <span className="material-symbols-outlined text-[20px]">
                layers
              </span>
            </a>
            <a
              className="flex items-center justify-center gap-2 bg-surface-dark border border-white/10 hover:bg-white/5 text-white text-base font-bold h-12 px-8 rounded-full transition-all"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-6 mt-8 text-gray-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              <span className="text-sm">Clean Code</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              <span className="text-sm">Modern Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              <span className="text-sm">Responsive</span>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/20 to-transparent blur-3xl -z-10"></div>

          <div className="relative w-full aspect-square max-w-[500px] rounded-full border border-white/10 bg-surface-dark/50 backdrop-blur-sm p-6 flex items-center justify-center overflow-hidden hero-float">
            <div className="absolute inset-0 bg-surface-dark/50 backdrop-blur-sm opacity-80"></div>

            <motion.div
              initial={{ rotate: -3 }}
              whileHover={{ rotate: 0 }}
              className="relative z-10 glass-panel p-6 rounded-full  shadow-2xl border border-primary/20 overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={arju}
                alt="Arju-Hasan img"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
