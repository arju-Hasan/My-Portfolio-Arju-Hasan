import React from "react";
import { AiFillSetting } from "react-icons/ai";
import {
  FaRegArrowAltCircleUp,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { LuMonitorSmartphone } from "react-icons/lu";

const Services = () => {
  return (
    <div
      id="Services"
      className="bg-background-light dark:bg-background-dark font-body antialiased min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 mt-20"
    >
      {/* Background dot patterns */}
      <div className="absolute left-0 top-1/3 w-32 h-64 dot-pattern opacity-30 dark:opacity-20 hidden lg:block"></div>
      <div className="absolute right-0 top-0 w-32 h-64 dot-pattern opacity-30 dark:opacity-20 hidden lg:block"></div>
      <div className="absolute right-0 bottom-0 w-32 h-64 dot-pattern opacity-30 dark:opacity-20 hidden lg:block"></div>
      <div className="absolute top-6 right-6 w-44 h-44 bg-teal-500 bg-blob blob-anim-12 rounded-full z-0 opacity-50 hidden md:block"></div>

      <main className="container mx-auto px-4 py-12 lg:py-20 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-sm font-medium tracking-wide text-gray-600 dark:text-gray-300 uppercase">
                My services
              </span>
            </div>

            <div className="relative inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold font-display text-gray-900 dark:text-white">
                <span className="text-primary">Services</span> I Provide
              </h1>

              <svg
                className="absolute -top-6 -right-8 w-8 h-8 text-white opacity-80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L14 9L21 12L14 15L12 22L10 15L3 12L10 9L12 2Z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
            >
              Hire me
            </a>

            <div className="hidden sm:flex items-center gap-4 text-gray-500 dark:text-gray-400">
              <div className="w-16 h-[1px] bg-gray-400 dark:bg-gray-600"></div>
              <span className="text-sm">Let's connect</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* IMAGE SECTION */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="absolute top-10 left-1/2 lg:left-8 transform -translate-x-1/2 lg:translate-x-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-primary-light bg-blob blob-anim-11 rounded-full z-0 opacity-70"></div>

            <div className="absolute -top-8 -right-6 sm:-right-8 w-28 h-28 bg-violet-500 bg-blob blob-anim-12 rounded-full z-0 opacity-65 hidden sm:block"></div>

            <div className="absolute -bottom-12 -left-8 lg:-left-12 bg-indigo-600 bg-blob blob-anim-9 w-40 h-40 sm:w-56 sm:h-56 rounded-full z-0 opacity-60"></div>

            <div className="relative z-10 mt-8">
              <img
                alt="Professional web developer"
                className="w-full max-w-[320px] sm:max-w-[380px] h-auto object-cover relative drop-shadow-2xl"
                src="https://i.ibb.co.com/5gDFBNXb/Chat-GPT-Image-Jan-5-2026-09-11-39-AM-removebg-preview.png"
              />
            </div>

            {/* Small icons around image */}
            <div className="absolute top-0 right-10 text-primary transform rotate-12">
              <svg
                width="40"
                height="60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="absolute bottom-10 -right-4 text-primary transform -rotate-12">
              <svg
                width="30"
                height="50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="absolute -bottom-12 -left-8 lg:-left-12 text-primary w-24 h-32 transform rotate-12 z-0">
              <svg
                className="w-full h-full"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <svg
              className="absolute bottom-32 -right-8 lg:-right-16 w-32 h-20 text-white hidden sm:block opacity-80"
              fill="none"
              stroke="currentColor"
              strokeDasharray="4 4"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 100 60"
            >
              <path d="M10 50 C 40 50, 60 40, 90 10"></path>
              <path d="M85 10 L 90 10 L 88 18" strokeDasharray="0"></path>
            </svg>
          </div>

          {/* SERVICES GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="absolute top-8 lg:top-12 right-0 lg:-right-12 w-28 h-28 bg-pink-500 bg-blob blob-anim-9 rounded-full z-0 opacity-40 hidden md:block"></div>
            <div className="absolute bottom-8 lg:bottom-4 right-0 lg:-right-20 w-36 h-36 bg-yellow-400 bg-blob blob-anim-11 rounded-full z-0 opacity-35 hidden md:block"></div>
            {/* Card 1 */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer border border-gray-100 dark:border-none">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="material-icons-outlined text-white text-xl">
                  &lt;/&gt;
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Web Development
              </h3>
              <p className="text-gray-600 text-sm">
                Building fast, responsive, and scalable websites using modern
                technologies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer border border-gray-100 dark:border-none md:mt-12">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="material-icons-outlined text-white text-xl">
                  <LuMonitorSmartphone />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Front-End Development
              </h3>
              <p className="text-gray-600 text-sm">
                Transforming UI designs into interactive, high-performance web
                pages.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer border border-gray-100 dark:border-none">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="material-icons-outlined text-white text-2xl">
                  <AiFillSetting />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Website Maintenance
              </h3>
              <p className="text-gray-600 text-sm">
                Ensuring your website stays secure, updated, and optimized.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer border border-gray-100 dark:border-none md:mt-12">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="material-icons-outlined text-white text-2xl">
                  <GrLanguage />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Portfolio & Business Web
              </h3>
              <p className="text-gray-600 text-sm">
                Creating elegant, custom websites for brands and businesses.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* DARK MODE TOGGLE */}
      <div className="fixed flex flex-col gap-2 bottom-3 right-3 sm:bottom-4 sm:right-4 z-50">
        <button
          id="home"
          onClick={() => window.open("https://wa.me/+8801721602904", "_blank")}
          className="bg-gray-700 dark:bg-white text-white dark:text-gray-800 p-2 sm:p-3 rounded-full shadow-lg border border-gray-600 dark:border-gray-200"
          aria-label="Open WhatsApp"
        >
          <span className="text-xl sm:text-2xl">
            <FaWhatsapp />
          </span>
        </button>
        <button
          id="home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-700 dark:bg-white text-white dark:text-gray-800 p-2 sm:p-3 rounded-full shadow-lg border border-gray-600 dark:border-gray-200"
          aria-label="Scroll to top"
        >
          <span className="text-xl sm:text-2xl">
            <FaRegArrowAltCircleUp />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Services;
