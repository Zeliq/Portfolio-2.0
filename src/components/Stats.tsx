import React from "react";

const Stats = () => {
  return (
    <div className="mt-20 mb-14 flex flex-col justify-center items-center">
      <div className="flex sm:gap-14 gap-8 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:text-7xl md:text-6xl text-5xl font-semibold">
            8+
          </div>
          <p className="lg:text-2xl text-white/50 font-semibold">Projects</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="lg:text-7xl md:text-6xl text-5xl font-semibold">
            11+
          </div>
          <p className="lg:text-2xl text-white/50 font-semibold">
            Certifications
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="lg:text-7xl md:text-6xl text-5xl font-semibold">
            5+
          </div>
          <p className="lg:text-2xl text-white/50 font-semibold">Internships</p>
        </div>
      </div>
      <img
        src="/line.svg"
        className="w-full lg:max-w-2xl md:max-w-xl max-w-lg px-5"
        alt="line"
      />
    </div>
  );
};

export default Stats;
