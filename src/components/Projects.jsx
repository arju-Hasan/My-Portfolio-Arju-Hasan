import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-TuitionBD",
      liveUrl: "https://e-tuitionbd.web.app",
      gitUrl: "https://github.com/arju-Hasan/E-Tuition-BD",
      img: "https://i.ibb.co.com/nqYsRbQp/Screenshot-2026-01-05-064908.png",
      description:
        "Tutoring platform to find tutors, post jobs and connect students with tutors.",
      tech: [
        "React",
        "Firebase",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "express.js",
      ],
    },
    {
      title: "Eco Nature",
      liveUrl: "https://eco-nature-client.web.app",
      gitUrl: "https://github.com/arju-Hasan/Eco-Nature-Client",
      img: "https://i.ibb.co.com/JRzrbgh3/Screenshot-2026-01-05-064244.png",
      description:
        "Sustainability tracker and community challenges to reduce environmental impact.",
      tech: [
        "React",
        "Firebase",
        "Admin SDK",
        "JWT Verification",
        "Tailwind CSS",
      ],
    },
    {
      title: "BookHub",
      liveUrl: "https://bookhub-bd.netlify.app",
      gitUrl: "https://github.com/arju-Hasan/book-hub",
      img: "https://i.ibb.co.com/hxKNM6Xg/Screenshot-2026-01-05-064402.png",
      description:
        "Book listing and detail pages with searching and browsing features.",
      tech: ["React", "Netlify", "Tailwind CSS", "mongoDB"],
    },
    {
      title: "Responsive Flowers",
      liveUrl: "https://arju-hasan.github.io/Responsive-Flowers",
      gitUrl: "https://github.com/arju-Hasan/Responsive-Flowers",
      img: "https://i.ibb.co.com/kVm67N5d/Screenshot-2026-01-05-064752.png",
      description:
        "Static responsive flower shop demo built with plain HTML/CSS/git.",
      tech: ["HTML", "CSS", "Tailwind CSS", "Git-Hub"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h3>
          </div>
          <a
            className="text-white hover:text-primary transition-colors flex items-center gap-2 group"
            href="https://github.com/arju-Hasan"
            target="_blank"
          >
            <span>View Github</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-surface-dark border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,43,238,0.15)] flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={p.img}
                  alt={p.title}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {p.title}
                    </h4>
                    <span className="text-xs font-medium text-primary">
                      Live Project
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      className="flex gap-1 items-center px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm transition-colors"
                      href={p.gitUrl}
                      target="_blank"
                      title="Open Git Code"
                    >
                      {" "}
                      <FaGithub />
                      Code
                    </a>
                    <a
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Open Live Demo"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
