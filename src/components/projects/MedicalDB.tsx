// SecondSection.tsx
import React from "react";
// import RoundedImage from "./RoundedImage";
import Link from "next/link";

const FishFresh: React.FC = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center">
      <div className="mb-10 max-w-7xl px-5">
        <div className="my-20 md:mb-20 mb-10 flex flex-col items-center justify-center">
          <div className="w-full h-48 overflow-hidden rounded-lg flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="/Img4.jpg"
                alt="/Img4"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="mb-4 font-bold text-3xl text-left md:text-4xl lg:text-5xl">
            {"Quick Bites: Latest News In Under 5 Lines"}
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
          Unified Medical Database
          </h3>
          <p className="text-white/50 font-medium leading-7 flex flex-col mt-5 text-lg md:text-xl">
            The Unified Medical Database, a groundbreaking solution poised to transform healthcare as we know it. This innovative platform is engineered to streamline and safeguard crucial medical information, ensuring rapid access to vital data that can mean the difference between life and death in emergency situations.      </p>    <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Real-time Medical Insights:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          Powered by cutting-edge technology, this system aggregates and organizes medical records, including patient histories, blood types, allergies, and emergency contact details. With real-time updates and seamless integration, medical professionals can swiftly access pertinent information, enabling faster and more informed decision-making in critical moments.
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          User-Centric Interface:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          Navigating complex medical data has never been simpler. Our user-friendly interface prioritizes ease of use, ensuring healthcare professionals can efficiently retrieve and update patient information with minimal effort. Whether in the ER or during routine check-ups, access to comprehensive medical histories is just a click away.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Lifesaving Efficiency:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          By centralizing medical records and streamlining information retrieval, the Unified Medical Database revolutionizes emergency response protocols. With reduced time spent searching for critical data, responders can focus on delivering timely care, potentially saving countless lives in the process.
          </p>
          <Link href="/" className="flex font-semibold border p-3 w-32 justify-center mt-7">View Project</Link>
        </div>
      </div>
    </section>
  );
};

export default FishFresh;
