import React from "react";
import arju from "../img/Arju-hasan.png";

export default function About() {
  return (
    // <section
    //   id="about"
    //   className="py-20 px-4 sm:px-10 bg-background-dark/50 relative"
    // >
    //   <div className="max-w-[960px] mx-auto">
    //     <div className="flex flex-col md:flex-row gap-12 items-center">
    //       <div className="w-full md:w-1/3 flex justify-center">
    //         <div className="relative w-64 h-64">
    //           <div className="absolute inset-0 rounded-full border-2 border-primary border-dashed animate-[spin_10s_linear_infinite]"></div>
    //           <div className="absolute inset-3 rounded-full bg-surface-dark overflow-hidden border-4 border-surface-dark shadow-xl">
    //             <img
    //               className="w-full h-full object-cover"
    //               src={arju}
    //               alt="Portrait"
    //             />
    //           </div>
    //           <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg neon-glow">
    //             <span className="material-symbols-outlined">code</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-2/3 flex flex-col gap-6">
    //         <div>
    //           <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">
    //             About Me
    //           </h2>
    //           <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
    //             Passionate about clean code and user-centric design
    //           </h3>
    //         </div>
    //         <p className="text-gray-400 leading-relaxed text-lg">
    //           I am a dedicated Full Stack Developer with a knack for building
    //           robust backends and intuitive frontends. My journey involves
    //           constant learning and applying modern best practices to create
    //           seamless web experiences. With a strong foundation in computer
    //           science and a passion for problem-solving, I turn ideas into
    //           reality.
    //         </p>
    //         <div className="grid grid-cols-2 gap-4 mt-2">
    //           <div className="glass-panel p-4 rounded-xl border-l-4 border-l-primary">
    //             <h4 className="font-bold text-white text-lg">1+ Years</h4>
    //             <p className="text-sm text-gray-500">Experience</p>
    //           </div>
    //           <div className="glass-panel p-4 rounded-xl border-l-4 border-l-purple-400">
    //             <h4 className="font-bold text-white text-lg">50+ Projects</h4>
    //             <p className="text-sm text-gray-500">Completed</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div
      id="about"
      className="relative max-w-4xl mx-auto px-6 py-14 mt-10 rounded-3xl border border-white/10 bg-[#0A0A0F]/60 backdrop-blur-xl shadow-[0_0_80px_#6b2cff30] text-gray-300"
    >
      {/* TOP LEFT NEON CORNER */}
      <div className="absolute -top-2 -left-2 w-10 h-10 rounded-tl-3xl border-t-4 border-l-4 border-indigo-400 shadow-[0_0_25px_#7b5cff]"></div>

      {/* BOTTOM RIGHT NEON CORNER */}
      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-br-3xl border-b-4 border-r-4 border-indigo-400 shadow-[0_0_25px_#7b5cff]"></div>

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center text-indigo-300 mb-8 tracking-wide">
        About Me
      </h2>

      {/* DESCRIPTION */}
      <p className="leading-relaxed text-lg mb-5">
        Hello! I'm a passionate{" "}
        <span className="text-purple-400 font-semibold">
          MERN Stack Developer
        </span>
        who began exploring the inner workings of websites and applications out
        of sheer curiosity. Over the years, I developed a deep love for
        problem-solving through code and creating full–stack applications that
        are not only functional but also visually appealing and user-friendly.
      </p>

      <p className="leading-relaxed text-lg mb-5">
        I enjoy working on projects where I can leverage
        <span className="text-blue-400 font-semibold"> React</span>,
        <span className="text-yellow-300 font-semibold"> JavaScript</span>,
        <span className="text-green-500 font-semibold"> MongoDB</span>
        <span className="text-green-400 font-semibold"> Node.js</span>, along
        with modern UI frameworks like
        <span className="text-red-500 font-semibold"> Tailwind CSS</span>. My
        focus is on building responsive, fast, and scalable web applications
        with clean and maintainable code.
      </p>

      <p className="leading-relaxed text-lg mb-8">
        …and sparks creativity. I also enjoy learning new technologies,
        listening to music, and thinking about innovative digital solutions.
      </p>

      {/* BADGES */}
      <div className="flex flex-wrap gap-4 mt-6">
        <span className="px-5 py-2 rounded-full bg-yellow-500 text-black text-sm font-semibold shadow-lg">
          JavaScript
        </span>

        <span className="px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold shadow-lg">
          React
        </span>

        <span className="px-5 py-2 rounded-full bg-green-500 text-white text-sm font-semibold shadow-lg">
          Node.js
        </span>

        <span className="px-5 py-2 rounded-full bg-green-600 text-white text-sm font-semibold shadow-lg">
          MongoDB
        </span>

        <span className="px-5 py-2 rounded-full bg-red-500 text-white text-sm font-semibold shadow-lg">
          Tailwind CSS
        </span>

        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm font-semibold shadow-lg">
          MERN Stack
        </span>
      </div>
    </div>
  );
}
