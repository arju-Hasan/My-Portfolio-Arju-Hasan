// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="mt-0 relative ">
//       {/* Decorative SVG wave - top of footer */}
//       <div className="w-full overflow-hidden leading-[0]">
//         <svg
//           className="w-full h-13"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//           aria-hidden="true"
//         >
//           {" "}
//           <path
//             fill="#273036"
//             fillOpacity="1"
//             d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,69.3C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
//           ></path>
//         </svg>
//       </div>

//       <div className="bg-[#273036] text-gray-300 text-sm pb-8 text-center">
//         <div className="w-full mx-auto">
//           © 2024 DevPortfolio. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full pt-2 pb-10 overflow-hidden bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-300">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full filter blur-[80px] opacity-20"></div>
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 border border-gray-700 opacity-20 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-gray-800 rounded-full opacity-30 hidden md:block"></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full opacity-40 animate-pulse"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
          <span className="text-gray-400">Let's</span>{" "}
          <span className="text-primary glow-text">Connect</span>
        </h2>

        {/* Icon & Logo */}
        <div className="flex flex-col items-center mb-8 cursor-default">
          <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
            <svg
              className="w-full h-full text-indigo-900 fill-current opacity-50 absolute animate-spin-slow"
              style={{ animationDuration: "20s" }}
              viewBox="0 0 100 100"
            >
              <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
            </svg>

            <svg
              className="h-8 w-8 text-primary relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>

            <div className="absolute inset-0 border-2 border-dashed border-indigo-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
          </div>

          <h3 className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white">
            Arju<span className="text-primary">-Hasan</span>
          </h3>
        </div>

        {/* Sub Text */}
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-5 text-sm md:text-base leading-relaxed">
          MERN Stack Developer building{" "}
          <span className="text-gray-900 dark:text-white font-semibold">
            Clean & Animated
          </span>{" "}
          interfaces.
        </p>
        {/* Bottom Bar */}
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
            href="https://github.com/arju-Hasan"
          >
            <FaGithub />
          </a>
          <a
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
            href="https://www.linkedin.com/in/arju95"
          >
            <FaLinkedin />
          </a>
          <a
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
            href="https://x.com/dev_arju95"
          >
            <BsTwitterX />
          </a>
        </div>
      </div>
      <aside className="mt-6 text-center text-xl text-gray-500">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <a
            href="https://github.com/arju-Hasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Arju-hasan
          </a>
        </p>
      </aside>
    </footer>
  );
}
