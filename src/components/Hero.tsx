import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100dvh]">
      <div className="max-w-5xl px-5 flex justify-center items-center flex-col">
        <img
          src="/zeliq.png"
          width={500}
          height={500}
          alt="zeliq"
          className="w-32 rounded-full"
        ></img>
        <h1 className="text-2xl pt-3 font-semibold">
          Hi, I&apos;m Zeliq Zayyan
        </h1>
        <h2 className="text-white/50 pt-1 font-semibold">AI/ML Engineer</h2>
        <div className="flex flex-col items-end">
          <p className="lg:text-5xl md:text-4xl text-3xl max-w-2xl md:px-10 mt-4 lg:leading-[3.7rem] font-semibold text-center">
            Passionate about Artificial Intelligence & Machine Learning.
          </p>
          <img src="/line.svg" className="w-1/2" alt="line" />
        </div>
        <p className="text-white/50 md:text-base text-sm max-w-xl px-3 text-center">
          I am a quick learner driven to find the gaps and innovate ways to make
          the world a better place. My profound interests lie in Machine
          Learning, Data Science, Artificial Intelligence, UI/UX, Web Designing
          and development, and Marketing, Product Design and Development.
        </p>
        <Link
          href="https://drive.google.com/file/d/1xgke9ldYwa6rgEeY6sq3ffMpmR8_IrFE/view?usp=sharing"
          className="md:mt-14 mt-9 font-semibold tracking-wide hover:underline underline-offset-4"
          target="_blank"
        >
          View Resume
        </Link>
      </div>
    </div>
  );
};

export default Hero;
