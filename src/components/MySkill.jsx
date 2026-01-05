// import React, { useState, useEffect } from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const MySkill = () => {
//   const [dark, setDark] = useState(true);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [dark]);

//   return (
//     <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display min-h-screen transition-colors duration-300 antialiased selection:bg-primary selection:text-white">
//       <div className="max-w-4xl mx-auto min-h-screen flex flex-col relative overflow-hidden px-4">
//         {/* Background Effects */}
//         <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none dark:block hidden"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none dark:block hidden"></div>

//         {/* Header */}
//         <header className="pt-12 px-6 pb-6 text-center relative z-10">
//           <h1 className="text-4xl font-bold mb-2 text-primary dark:text-accent-text tracking-tight">
//             My Skills
//           </h1>
//           <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
//           <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
//             Proficient in modern technologies that power robust, scalable
//             applications.
//           </p>
//         </header>

//         {/* MAIN CONTENT */}
//         <main className="flex-1 px-4 pb-12 overflow-y-auto no-scrollbar relative z-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               {/* -------- FRONTEND -------- */}
//               <SkillCard title="Frontend">
//                 <SkillItem
//                   icon="bi-filetype-jsx"
//                   color="text-purple-400"
//                   name="React"
//                   percent={94}
//                 />
//                 <SkillItem
//                   icon="bi-filetype-js"
//                   color="text-yellow-400"
//                   name="JavaScript"
//                   percent={90}
//                 />
//                 <SkillItem
//                   icon="bi-wind"
//                   color="text-cyan-400"
//                   name="Tailwind CSS"
//                   percent={92}
//                 />
//                 <SkillItem
//                   icon="bi-filetype-html"
//                   color="text-orange-500"
//                   name="HTML/CSS"
//                   percent={94}
//                 />
//               </SkillCard>
//             </div>

//             <div>
//               {/* -------- BACKEND -------- */}
//               <SkillCard title="Backend">
//                 <SkillItem
//                   icon="bi-hexagon-fill"
//                   color="text-green-500"
//                   name="Node.js"
//                   percent={94}
//                 />
//                 <SkillItem
//                   icon="bi-database-fill"
//                   color="text-green-400"
//                   name="MongoDB"
//                   percent={92}
//                 />
//                 <SkillItem
//                   icon=""
//                   textOnly="ex"
//                   color="text-gray-300"
//                   name="Express.js"
//                   percent={88}
//                 />
//                 <SkillItem
//                   icon="bi-plug-fill"
//                   color="text-gray-400"
//                   name="REST API"
//                   percent={90}
//                 />
//               </SkillCard>
//             </div>

//             <div className="sm:col-span-2">
//               {/* -------- TOOLS -------- */}
//               <SkillCard title="Tools & DevOps">
//                 <SkillItem
//                   icon="bi-github"
//                   color="text-white"
//                   name="Git & GitHub"
//                   percent={94}
//                 />
//                 <SkillItem
//                   icon="bi-code-square"
//                   color="text-blue-500"
//                   name="VS Code"
//                   percent={92}
//                 />
//                 <SkillItem
//                   icon="bi-bezier2"
//                   color="text-pink-500"
//                   name="Figma"
//                   percent={90}
//                 />
//                 <SkillItem
//                   icon="bi-send-fill"
//                   color="text-orange-600"
//                   name="Postman"
//                   percent={90}
//                 />
//               </SkillCard>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// /* ------------------- COMPONENTS ------------------- */

// const SkillCard = ({ title, children }) => (
//   <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80">
//     <h2 className="text-xl font-semibold text-primary dark:text-accent-text text-center mb-6">
//       {title}
//     </h2>
//     <div className="space-y-6">{children}</div>
//   </div>
// );

// const SkillItem = ({ icon, name, color, percent, textOnly }) => (
//   <div className="group">
//     <div className="flex justify-between items-center mb-2">
//       <div className="flex items-center gap-3">
//         {icon ? (
//           <i
//             className={`${icon} text-2xl ${color} group-hover:scale-110 transition-transform duration-300`}
//           />
//         ) : (
//           <span
//             className={`text-xl font-bold ${color} group-hover:scale-110 transition-transform duration-300`}
//           >
//             {textOnly}
//           </span>
//         )}
//         <span className="font-medium text-sm">{name}</span>
//       </div>
//       <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
//         {percent}%
//       </span>
//     </div>
//     <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//       <div
//         className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
//         style={{ width: `${percent}%` }}
//       ></div>
//     </div>
//   </div>
// );

// export default MySkill;

import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const MySkill = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display min-h-screen transition-colors duration-300 antialiased selection:bg-primary selection:text-white">
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col relative overflow-hidden px-4">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none dark:block hidden"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none dark:block hidden"></div>

        {/* Header */}
        <header className="pt-12 px-6 pb-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-2 text-primary dark:text-accent-text tracking-tight">
            My Skills
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
            Proficient in modern technologies that power robust, scalable
            applications.
          </p>
        </header>

        {/* MAIN */}
        <main className="flex-1 px-4 pb-12 overflow-y-auto no-scrollbar relative z-10">
          {/* 3 Column on Desktop — 1 Column on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* -------- FRONTEND -------- */}
            <SkillCard title="Frontend">
              <SkillItem
                icon="bi-filetype-jsx"
                color="text-purple-400"
                name="React"
                percent={94}
              />
              <SkillItem
                icon="bi-filetype-js"
                color="text-yellow-400"
                name="JavaScript"
                percent={90}
              />
              <SkillItem
                icon="bi-wind"
                color="text-cyan-400"
                name="Tailwind CSS"
                percent={92}
              />
              <SkillItem
                icon="bi-filetype-html"
                color="text-orange-500"
                name="HTML/CSS"
                percent={94}
              />
            </SkillCard>

            {/* -------- BACKEND -------- */}
            <SkillCard title="Backend">
              <SkillItem
                icon="bi-hexagon-fill"
                color="text-green-500"
                name="Node.js"
                percent={94}
              />
              <SkillItem
                icon="bi-database-fill"
                color="text-green-400"
                name="MongoDB"
                percent={92}
              />
              <SkillItem
                icon=""
                textOnly="ex"
                color="text-gray-300"
                name="Express.js"
                percent={88}
              />
              <SkillItem
                icon="bi-plug-fill"
                color="text-gray-400"
                name="REST API"
                percent={90}
              />
            </SkillCard>

            {/* -------- TOOLS & DEVOPS -------- */}
            <SkillCard title="Tools & DevOps">
              <SkillItem
                icon="bi-github"
                color="text-white"
                name="Git & GitHub"
                percent={94}
              />
              <SkillItem
                icon="bi-code-square"
                color="text-blue-500"
                name="VS Code"
                percent={92}
              />
              <SkillItem
                icon="bi-bezier2"
                color="text-pink-500"
                name="Figma"
                percent={90}
              />
              <SkillItem
                icon="bi-send-fill"
                color="text-orange-600"
                name="Postman"
                percent={90}
              />
            </SkillCard>
          </div>
        </main>
      </div>
    </div>
  );
};

/* ------------------- COMPONENTS ------------------- */
const SkillCard = ({ title, children }) => (
  <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80">
    <h2 className="text-xl font-semibold text-primary dark:text-accent-text text-center mb-6">
      {title}
    </h2>
    <div className="space-y-6">{children}</div>
  </div>
);

const SkillItem = ({ icon, name, color, percent, textOnly }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-3">
        {icon ? (
          <i
            className={`${icon} text-2xl ${color} group-hover:scale-110 transition-transform duration-300`}
          />
        ) : (
          <span
            className={`text-xl font-bold ${color} group-hover:scale-110 transition-transform duration-300`}
          >
            {textOnly}
          </span>
        )}
        <span className="font-medium text-sm">{name}</span>
      </div>
      <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
        {percent}%
      </span>
    </div>
    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

export default MySkill;
