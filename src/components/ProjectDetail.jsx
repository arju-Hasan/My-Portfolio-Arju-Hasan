import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-20 px-4 sm:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Project not found
          </h2>
          <p className="text-gray-400 mb-6">
            The project you're looking for does not exist.
          </p>
          <Link to="/" className="text-primary underline">
            Back to portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary underline text-sm">
            ← Back
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start bg-surface-dark p-8 rounded-3xl border border-white/5 shadow-2xl">
          <div>
            <img
              src={project.img}
              alt={project.title}
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {project.title}
            </h1>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                Main tech stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 items-center mt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white px-5 py-2 rounded-lg font-semibold"
              >
                View Live
              </a>
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white"
              >
                <FaGithub /> View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
