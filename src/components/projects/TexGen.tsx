// SecondSection.tsx
import React from "react";
// import RoundedImage from "./RoundedImage";
import Link from "next/link";

const TexGen: React.FC = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center">
      <div className="mb-10 max-w-7xl px-5">
        <div className="my-20 md:mb-20 mb-10 flex flex-col items-center justify-center">
          <div className="w-full h-48 overflow-hidden rounded-lg flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="/img6.jpg"
                alt="/img6"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="mb-4 font-bold text-3xl text-left md:text-4xl lg:text-5xl">
            {"TexGen: Free Placeholder Text Generator"}
          </h1>
          <div className="flex w-full items-end justify-end">
            <img
              src="/line.svg"
              className="w-1/2"
              width={500}
              height={500}
              alt="line"
            ></img>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="mt-5 font-semibold text-2xl text-white">
          TextGen: Liberating Creativity with Placeholder Text:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          ntroducing TexGen, your go-to Free Placeholder Text Generator designed to unleash the creative spirit without the constraints of content creation. Whether you're a designer, developer, or content creator, TexGen is here to simplify the process of generating placeholder text for your projects.
            <br />
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Seamless Creativity Integration:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          TexGen offers a user-friendly interface, making it effortless to generate placeholder text for websites, design mockups, or any creative endeavor. With a few clicks, you can have customizable and dynamic placeholder text at your fingertips, saving time and fostering seamless creativity integration.
            <br />
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Tailored for Every Project:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          No project is the same, and TexGen understands that. It allows you to customize the length and style of your placeholder text, ensuring that it aligns perfectly with the unique requirements of your design or development project. This versatility makes TexGen an invaluable tool for professionals and enthusiasts alike.


          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Enhancing Workflow Efficiency:


          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          In the fast-paced world of design and development, efficiency is key. TexGen streamlines your workflow by providing instant, free, and high-quality placeholder text. Say goodbye to the hassle of searching for suitable placeholder content; TexGen is here to enhance your efficiency and allow you to focus on bringing your creative visions to life.


          </p>
          <Link href="https://texgen.vercel.app/" className="flex font-semibold border p-3 w-32 justify-center mt-7">Goto TexGen</Link>
        </div>
      </div>
    </section>
  );
};

export default TexGen;
