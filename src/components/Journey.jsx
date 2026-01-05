import React from "react";
import book from "../img/book.png";

export default function Journey() {
  return (
    <section className="py-20 px-4 sm:px-10 bg-background-dark/30" id="journey">
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">
              My Journey
            </h2>
            <h3 className="text-3xl font-bold text-white mb-6">
              Education &amp; Experience
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A timeline of my academic background and professional growth in
              the tech industry.
            </p>
            <div className="w-full">
              <img src={book} alt="arju book" />
            </div>
          </div>
          <div className="md:w-2/3 grid justify-center items-center">
            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <div className="relative group">
                <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-background-dark border-4 border-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(108,43,238,0.5)]"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-sm font-bold tracking-widest">
                    2025 - PRESENT
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    Full Stack Developer
                  </h4>
                  <span className="text-gray-400 text-sm">
                    Programming-Hero <br /> Banani, Dhaka, Bangladesh
                  </span>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-background-dark border-4 border-gray-600 group-hover:border-primary group-hover:scale-125 transition-all duration-300"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-sm font-bold tracking-widest">
                    2024 - 2024
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    Digital Marketing
                  </h4>
                  <span className="text-gray-400 text-sm">
                    FutureIT and Lerning IT <br /> Bangla Motor, Dhaka
                  </span>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-background-dark border-4 border-gray-600 group-hover:border-primary group-hover:scale-125 transition-all duration-300"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-sm font-bold tracking-widest">
                    2022 - PRESENT
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    B.Sc. Chemistry
                  </h4>
                  <span className="text-gray-400 text-sm">
                    National University, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
