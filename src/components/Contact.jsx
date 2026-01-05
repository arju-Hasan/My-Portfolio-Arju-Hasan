import React from "react";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-10 bg-gradient-to-t from-background-dark to-surface-dark relative"
    >
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 bg-surface-dark border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">
                Get in Touch
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's work together
              </h3>
              <p className="text-gray-400">
                Have a project in mind or want to hire me? Fill out the form or
                send me a direct email. I'm always open to discussing new
                projects and opportunities.
              </p>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <span className="text-sm md:text-base">arju3h@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="text-sm md:text-base">
                  Mirpur, Dhaka Bangladesh
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
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
              <a
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors"
                href="https://www.facebook.com/arju95"
              >
                <BsFacebook />
              </a>
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-400 ml-1">
                  Name
                </label>
                <input
                  className="w-full h-12 rounded-xl bg-background-dark border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-400 ml-1">
                  Email
                </label>
                <input
                  className="w-full h-12 rounded-xl bg-background-dark border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="example@gmail.com"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-400 ml-1">
                Subject
              </label>
              <input
                className="w-full h-12 rounded-xl bg-background-dark border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Project Inquiry"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-400 ml-1">
                Message
              </label>
              <textarea
                className="w-full h-32 rounded-md bg-background-dark border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button className="mt-2 h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all neon-glow flex items-center justify-center gap-2">
              <span>Send Message</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
