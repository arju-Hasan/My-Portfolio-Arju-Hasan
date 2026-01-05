import React, { useState, useEffect } from "react";
import Background from "./Background";

export default function Navbar() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <div className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4 w-full">
      {/* <Background /> */}
      <nav className="glass-panel rounded-full px-2 py-2 flex items-center justify-between gap-4 max-w-5xl w-full shadow-lg border border-white/10">
        <div className="flex items-center gap-3 pl-4">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white neon-glow">
            <span className="material-symbols-outlined text-[20px]">
              terminal
            </span>
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">
            Arju<span className="text-primary">-Hasan</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1 bg-background-dark/50 rounded-full p-1 border border-white/5">
          <a
            className="px-5 py-2 text-sm font-medium hover:text-white text-gray-300 hover:bg-primary/20 rounded-full transition-all"
            href="#home"
          >
            Home
          </a>
          <a
            className="px-5 py-2 text-sm font-medium hover:text-white text-gray-300 hover:bg-primary/20 rounded-full transition-all"
            href="#about"
          >
            About
          </a>
          <a
            className="px-5 py-2 text-sm font-medium hover:text-white text-gray-300 hover:bg-primary/20 rounded-full transition-all"
            href="#Services"
          >
            Services
          </a>
          <a
            className="px-5 py-2 text-sm font-medium hover:text-white text-gray-300 hover:bg-primary/20 rounded-full transition-all"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="px-5 py-2 text-sm font-medium hover:text-white text-gray-300 hover:bg-primary/20 rounded-full transition-all"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="px-5 py-2 text-sm font-medium hover:text-white text-gray-300 hover:bg-primary/20 rounded-full transition-all"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <a
          className="hidden sm:flex bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all neon-glow items-center gap-2"
          href="#contact"
        >
          <span>Hire Me</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </a>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="hidden md:inline-flex items-center justify-center p-2 rounded-full bg-background-dark/20 text-gray-200 hover:bg-background-dark/40 transition mr-2"
        >
          <span className="material-symbols-outlined text-[18px]">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>

        <button className="md:hidden p-2 text-white bg-primary/20 rounded-full mr-1">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </div>
  );
}
