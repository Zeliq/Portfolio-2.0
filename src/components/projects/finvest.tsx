// SecondSection.tsx
import React from "react";
// import RoundedImage from "./RoundedImage";
import Link from "next/link";
const Finvest: React.FC = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center">
      <div className="mb-10 max-w-7xl px-5">
        <div className="my-20 md:mb-20 mb-10 flex flex-col items-center justify-center">
          <div className="w-full h-48 overflow-hidden rounded-lg flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="/img5.jpg"
                alt="/img5"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="mb-4 font-bold text-3xl text-left md:text-4xl lg:text-5xl">
            {"Finvest: Financial Tools For The Underserved"}
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
          Empowering the Underserved:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          In a nation where technological constraints hinder access for many, there exists a profound willingness to embrace technology despite the challenges. The underserved population, facing limited exposure to financial education and lacking spending power, encounters barriers to financial inclusion. Our Finvest project aims to be the catalyst for change by leveraging technology to bridge these gaps, fostering economic empowerment and resilience within these communities.

          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Tailored Financial Solutions:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          Recognizing the unique needs of the underserved, our project introduces a range of solutions. From Microfinance Empowerment utilizing Python to Collaborative Fund Contributions developed with Next JS, TypeScript, and Express JS, we are committed to providing tailored financial services for students, SMEs, and farmers.
            <br />
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Guiding the Path to Financial Inclusion:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          Our mission goes beyond providing tools; we strive to empower through education. Through services like Tailored Investment Guidance, Legally Binding Financial Contracts implemented with Next JS, and a user-friendly SMS-Based Chat Facility, we aim to impart financial knowledge and facilitate access to formal financial systems.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Holistic Approach to Financial Inclusion:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          The Finvest initiative embraces a holistic approach, offering not only practical financial solutions but also a comprehensive Financial Education Module. This, coupled with seamless Website Integration, ensures that the underserved populations are not just participants but informed and empowered contributors to the formal financial landscape.
          </p>
          <br></br>
          <h3 className="font-semibold mr-5 text-2xl text-white">
          AI-Based News Recommendation:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          In addition to financial tools, our commitment extends to keeping our users well-informed. Through AI-based news recommendation, we provide a curated stream of relevant information, ensuring that the underserved communities are not only financially equipped but also stay abreast of the latest happenings that may impact their economic landscape. Join us in revolutionizing financial inclusion for the underserved through technology, education, and empowerment.
          </p>
          <Link href="/" className="flex font-semibold border p-3 w-32 justify-center mt-7">Goto TexGen</Link>
        </div>
      </div>
    </section>
  );
};

export default Finvest;
