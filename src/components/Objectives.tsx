import React from "react";

const Objectives = () => {
  return (
    <div>
      <div className="md:px-20 mb-20 px-10">
        <h1 className="lg:text-5xl text-4xl mb-10 font-semibold ">
          Objectives
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold pb-1">Learn</h2>
            <p className="text-lg">
              Learn Eager to embark on a career journey driven by a relentless
              pursuit of knowledge and skills, where I can engage with
              challenges that foster continuous learning, enabling me to stay at
              the forefront of industry trends and best practices.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-1">Grow</h2>
            <p className="text-lg">
              Committed to a career path that not only offers personal growth
              but also empowers me to contribute significantly to the growth of
              the organization. I am determined to seek out roles and
              responsibilities that encourage me to stretch beyond my comfort
              zone, fostering both individual and collective success
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-1">Experiment</h2>
            <p className="text-lg">
              Enthusiastic about embracing a career marked by a spirit of
              innovation and experimentation, I aspire to join an environment
              that values calculated risks and creative thinking. By fearlessly
              stepping into uncharted territory, I aim to discover fresh
              perspectives and unconventional solutions that drive progress and
              redefine possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
