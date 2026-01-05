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
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Tx8cuct4cEsnVvAxVjFvZpYpPSgylGGoy9qBt2UgR2WJpiiPMKd8IJtUyuODlNU6DoCRegxiCB_0ueEHv0b-tkuOe9KNLW8n5crPWy9o04DjYbW8RcwPeFI9qHYtgrMOBb-m_DI2zzCNE_A7OPOMlyOcgU9oSB6UD4mh8mmgh9Yw-uaysY6Urc8j8bP1RnUVsz5TX8DMXPHppK4ax69j4xPZOWOCCAl0eRmWGYIp-nHxdkPxyHUDwCCT5bEBhtp_2asTbZOEz-k",
              },
              {
                name: "CSS",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiRdcmwqY84XDzWrOas3fjkjh-xGzkQpOeirj3v5vu9V5ST_TkPkc9hlLdLheEG4gMZH4ch8rQ5yHQcUHNp7jZDbBReEaNzNdadZjQZagaSPJaso5_s0HeZS9vQLSyXHvYeMmlzItm6Ftzbai_rVCTAUcW4DpLGam-qhw8SFqnUMaq2MQI9I0_gGCvPhyEkk6nT_aHGIEsQ76Jdn2d5O_1u4S5FkZeKwfw7ovnUBKk50BSgQXQu6JxelsFCzdsGkQOXYLrNms3MXA",
              },
              {
                name: "SASS",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARaaQhOgc4_GZ6xLr8SEUIOKcwPQ2qWoPaT6tvujITKd-LylNGTy7zAaEwWNKq6mIKGl3UxvDJe-yDKEqcf1as_iql57t94x6BYlrQ5KDdYaCiUDDcgmnt5V0T5W9wnejvqcfrN0K64bEqd6dM9tSQikztRGAOSkqJPgkeXW6Pch8d9z6m8VPFgOH6gLNd40U8Ifgna7YEXP758Xd2GW9GZu7jMCukM6gG7SfePJQwtpZcknHCDqF_KC2q6QBkYNzifxY-_kqOcFM",
              },
              {
                name: "Javascript",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNu0_GROlTJEnCsbZ7e4MBBwBshFhi4GYPCuxDAWlmCdGxD05N31H57TL49YfEvYlyhR56mmHjVX1mmG_EsybRc1OB0bnpdLe__8zSton8Zv0iglDz6HdsveWs1M0HctTbJJ0hogCiqF4XGvDqg3UIuusUwYItCE0R48hzrddIOAR4WnokjYHwEJPGBiuwoHJzPAhLx5dsQxtyiVEMExtN8ZbMe8ESOk606L6LhVYyXpoa2aTzdZb1R8bSxhGaRk6imy4-gzD6prk",
              },
              {
                name: "React JS",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6qxpbMySKLeA_2UEZPWeQ8-09DmIBp3Gnuf0kc2MJGk5ahhn4ZItit34z_MkXZKLcPs4rF-y_1FP_CWiaE7E9wmIMsKDQvcFWwsXAvmVZDlZ4xijp0eLn6RKDrGiudBpCnwHw3IO2suahJDqU1MO6AHVe5iJTzwsZBjjxzMlNe9nf40diJVDdFsA8hVPpreHagqiSyTQmY46Xe-1MaF4qNc0GmzXZ5zPnJl-vRL8SYQ6gqatT9Qw916Pu8i8NcWmfiLvhXlWS2pw",
                spin: true,
              },
              {
                name: "Github",
                svg: true,
              },
              {
                name: "Node JS",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxJX_NKEBpwOjmJbukUbMMshDJftLQAg7Df6DxLg6xLyt7cV4qZIOeKF25_hopD2UwUweHFzfM5sQh7NIuN3bdAQY8Eioj4hZMIbj27gMpbht8SwkoX6MZuFM3YkdTBy_kQmYq56ZI-YHed0RfsjSuaJG3OXGl2CRkI7kAUs9l66fKjj76s-geXQAbF-8vFzq9RzliV-XIdlbQZQiS3b6OvixfEJoknDN6IfXbJErKUEkHqJWlhFsGQ-FdMBIhv4Ti86TK57Ef7zM",
              },
              {
                name: "Firebase",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlMEZg_3WaVrRELOmdfrwBvlLGhyWf7c4wdFUf1gvfPGx8_x-3mINjLKqMN1I_NSmxMlHhmz40hzrcMCyqWYp2jbJMziGDmC2Li5v0__wofyDpBq2Lgb-ubBxjmX95BsppdoKu0k2WSedx-gg893sa-fxLV9eO53KT2AEVxy1FZyFyt5NMPxV6e8qx3mdYuqz1RhBWQ3kASHGUxBKnYPaiaQuzZxMZlohob_rZU-5Yz1-FyNl1X5PgWaWnExYNzTykRzxGkbMMWfE",
              },
              {
                name: "MongoDB",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzWlmgP-IIG7YXR2_HOOPCJLpgacy0wY2XV0Y7ngyEiFQsKZaZsISJ1zbIcdNUX8jW3zIAenFZ5VYd55hesi89rCi3s8Igu-FCNhoH85MaDy1y6wZcZbYe02RUzX2Trwdvht_H1v4LjnX-eim5Sm9L3OCpBGtzGp8uk2GSEvxMFqZ1bmSKtGnhzCb6H4WKo_Ej0Lhpzca1k1mnBiz8nMGBax7z2LL5ctJsM2NPdUOCoXozH7MTLsuFNJG4gOjI4GAtwSWDRLxNfF4",
              },
              {
                name: "Docker",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCivfsfLO-cvqgZ9IdJ4dCmvZE7rE6TLoM6rOw9_FEDR3VFa8VF6_r_ev67Pg3dqVMPpRN6EZMusxi5g8V4THcmaAo_M2dSV22iOMQemCrZi5Wz4Lox3Vfd14t8T4HMaAU8eyZMSxW0JhgDKRQtzLhX-Dxuwnakza9MZ2fbMNq5OUwsOxHkmSfa7_awiXNJWSmldVz6n4Gn7ObV6Y1fu3PhLvPaxwV5_0YP74SIh93ZQvEET1Eew8BLYfB8trv8S9VMy2R87IN9lZs",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-800"
              >
                <div
                  className={`w-16 h-16 mb-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    skill.spin ? "animate-[spin_10s_linear_infinite]" : ""
                  }`}
                >
                  {skill.svg ? (
                    <svg
                      className="w-full h-full text-gray-800 dark:text-white fill-current"
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

                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide uppercase">
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
