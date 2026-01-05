import React from "react";

const Skills = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300 min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Main Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            What I do
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-light">
            I am a passionate developer with a strong foundation in modern web
            technologies. Currently focusing on building scalable web
            applications and crafting intuitive user experiences. I specialize
            in full-stack development and enjoy solving complex problems with
            clean, efficient code.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Left Vertical Title (Desktop only) */}
          <div className="hidden lg:flex flex-col justify-center items-center absolute -left-16 top-0 bottom-0">
            <div className="flex items-center gap-4 -rotate-90 origin-center whitespace-nowrap">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wider">
                {/* Skills */}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Small Device Title */}
          <div className="lg:hidden flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">
              Skills
            </h2>
            <div className="w-8 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Skill Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Skill Card Example (Repeated Below) */}
            {[
              {
                name: "HTML",
                img: "https://i.ibb.co.com/YTRLdhgM/images-removebg-preview.png",
              },
              {
                name: "CSS",
                img: "https://i.ibb.co.com/1G22M385/CSS3-Logo-PNG-removebg-preview-2.png",
              },
              {
                name: "Next jS",
                // img: "https://i.ibb.co.com/XxPDK8w0/next-js-logo-icon-145038-removebg-preview.png",
                img: "https://i.ibb.co.com/qMFy4C2D/images-4-removebg-preview.png",
              },
              {
                name: "Javascript",
                img: "https://i.ibb.co.com/0y39cbkH/images-2.png",
              },
              {
                name: "React JS",
                img: "https://i.ibb.co.com/Gfqq54Jg/images-1-removebg-preview.png",
                spin: true,
              },
              {
                name: "Github",
                img: "https://i.ibb.co.com/LDHsKQ3w/25231.png",
              },
              {
                name: "Node JS",
                img: "https://i.ibb.co.com/zhvvQXV1/nodejs-image.webp",
              },
              {
                name: "Firebase",
                img: "https://i.ibb.co.com/ksBVfgmx/channels4-profile-removebg-preview.png",
              },
              {
                name: "MongoDB",
                img: "https://i.ibb.co.com/spZwTsyw/images-3-removebg-preview.png",
              },
              {
                name: "Tailwind-css",
                img: "https://i.ibb.co.com/8g6LLq46/tailwind-css-logo-png-seeklogo-354675-removebg-preview.png",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-400 flex flex-col items-center justify-center p-6  rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-800"
              >
                <div
                  className={`w-16 h-16 mb-4 flex items-center  justify-center transition-transform group-hover:scale-110 ${
                    skill.spin ? "animate-[spin_10s_linear_infinite]" : ""
                  }`}
                >
                  {skill.svg ? (
                    <svg
                      className="w-full h-full text-gray-300 dark:text-white fill-current"
                      viewBox="0 0 98 96"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      />
                    </svg>
                  ) : (
                    <img
                      alt={skill.name}
                      className="w-full h-full drop-shadow-lg"
                      src={skill.img}
                    />
                  )}
                </div>

                <span className="text-sm font-semibold text-black dark:text-primary tracking-wide uppercase">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

// import React from "react";

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-4 sm:px-10">
//       asdf
//     </section>
//   );
// }

//   <div className="max-w-[960px] mx-auto">
//   <div className="text-center mb-16">
//     <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">
//       My Expertise
//     </h2>
//     <h3 className="text-3xl md:text-4xl font-bold text-white">
//       Tech Stack &amp; Skills
//     </h3>
//   </div>

//   <div className="relative max-w-4xl mx-auto px-6 py-6 mt-6 rounded-3xl border border-white/10 bg-[#0A0A0F]/60 backdrop-blur-xl shadow-[0_0_40px_#6b2cff20] text-gray-300">
//     <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-1">
//       Overview
//     </h4>
//     <h3 className="text-lg font-semibold text-white mb-2">
//       A compact summary of my skills and focus
//     </h3>
//     <p className="text-gray-400 mb-4">
//       I build responsive frontends and scalable backends with an emphasis
//       on readable, maintainable code and great user experiences. Below are
//       highlights and tools I use day-to-day.
//     </p>

//     <div className="grid grid-cols-2 gap-3">
//       <div className="glass-panel p-4 rounded-xl border-l-4 border-l-primary">
//         <h4 className="font-bold text-white text-lg">1+ Years</h4>
//         <p className="text-sm text-gray-500">Experience</p>
//       </div>
//       <div className="glass-panel p-4 rounded-xl border-l-4 border-l-purple-400">
//         <h4 className="font-bold text-white text-lg">50+ Projects</h4>
//         <p className="text-sm text-gray-500">Completed</p>
//       </div>
//     </div>

//     <div className="flex flex-wrap gap-3 mt-4">
//       <span className="px-4 py-2 rounded-full bg-yellow-500 text-black text-sm font-semibold">
//         JavaScript
//       </span>
//       <span className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold">
//         React
//       </span>
//       <span className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold">
//         Node.js
//       </span>
//       <span className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold">
//         Tailwind CSS
//       </span>
//     </div>
//   </div>

//   <div className="grid md:grid-cols-3 gap-6">
//     <div className="bg-surface-dark rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-colors group">
//       <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
//         <span className="material-symbols-outlined text-3xl">html</span>
//       </div>
//       <h4 className="text-xl font-bold text-white mb-4">Frontend</h4>
//       <div className="flex flex-wrap gap-2">
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           React.js
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Redux
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Tailwind CSS
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Next.js
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           TypeScript
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Framer Motion
//         </span>
//       </div>
//     </div>

//     <div className="bg-surface-dark rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-colors group">
//       <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
//         <span className="material-symbols-outlined text-3xl">
//           database
//         </span>
//       </div>
//       <h4 className="text-xl font-bold text-white mb-4">Backend</h4>
//       <div className="flex flex-wrap gap-2">
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Node.js
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Express.js
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           MongoDB
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           PostgreSQL
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           SQL
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           GraphQL
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           JWT Auth
//         </span>
//       </div>
//     </div>

//     <div className="bg-surface-dark rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-colors group">
//       <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
//         <span className="material-symbols-outlined text-3xl">build</span>
//       </div>
//       <h4 className="text-xl font-bold text-white mb-4">
//         Tools &amp; Others
//       </h4>
//       <div className="flex flex-wrap gap-2">
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Git &amp; Github
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Docker
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           AWS
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Vercel
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Jest
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
//           Figma
//         </span>
//       </div>
//     </div>
//   </div>
// </div>
