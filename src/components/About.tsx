import React from "react";

const About = () => {
  return (
    <div className="bg-white text-black flex justify-center items-center">
      <div className="flex lg:px-20 px-10 lg:my-24 my-20">
        <div className="xl:pr-38 lg:pr-20 md:pr-0">
          <div className="lg:w-2/4 md:w-4/5 flex flex-col items-end">
            <h1 className="xl:text-6xl md:text-5xl text-4xl lg:w-2/3 font-semibold mr-auto">
              Making a Difference.
            </h1>
            <img src="/line.svg" className="w-1/2" alt="line" />
          </div>
          <p className="py-5 md:text-2xl text-lg">
            As a passionate individual committed to making a difference, I am a
            quick learner with a keen eye for identifying gaps and a relentless
            drive to innovate.
          </p>
          <p className="md:text-2xl text-lg">
            I am dedicated to acquiring knowledge and skills that empower me to
            contribute meaningfully to the world. I thrive on seizing new
            opportunities, continuously expanding my skill set, and refining
            existing ones. With a holistic approach to problem-solving and a
            commitment to excellence, I am on a mission to bring about positive
            change in the world.
          </p>
        </div>
        <div className="lg:flex hidden xl:min-w-24 min-w-20 xl:h-24 h-20 mt-auto mb-5 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
