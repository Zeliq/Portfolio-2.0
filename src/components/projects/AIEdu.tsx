// SecondSection.tsx
import React from "react";
// import RoundedImage from "./RoundedImage";

const AInews: React.FC = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center">
      <div className="mb-10 max-w-7xl px-5">
        <div className="my-20 md:mb-20 mb-10 flex flex-col items-center justify-center">
          <div className="w-full h-48 overflow-hidden rounded-lg flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="/img3.jpg"
                alt="/img3"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="mb-4 font-bold text-3xl text-left md:text-4xl lg:text-5xl">
            {"AI Assisted Learning By Enabling Textbook Based Answer Generation To User Queries"}
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
            Leveraging The Power Of AI In Education
          </h3>
          <p className="text-white/50 font-medium leading-7 flex flex-col mt-5 text-lg md:text-xl">
          The aim of this project is to leverage AI in education, specifically utilizing ChatGPT as an AI tool, to address the following challenges:</p>
          <ul className="text-white/50 font-semibold">
          <li>1. Personalized Learning</li>
<li>2. Automation of Administrative Tasks</li>
<li>3. Increased Accessibility</li>
<li>4. Smart Learning Content</li>
<li>5. Virtual Assistants.</li></ul>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Revolutionizing Education with AI:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          In our pursuit of transforming education, our AI-powered tool stands as a beacon of innovation. By allowing users to upload textbooks, the AI undergoes comprehensive training through advanced NLP techniques, paving the way for a more accessible and efficient learning experience.
            <br />
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Effortless Learning Experience:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          The heart of our system lies in its ability to generate answers to user queries by extracting relevant information directly from the uploaded textbooks. This not only streamlines the learning process but also empowers students with a tool that promotes ease of comprehension and knowledge retention.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Transparency in Learning:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          What sets our tool apart is its commitment to transparency. Users can witness the specific lines and passages the AI references to formulate responses, providing a clear and traceable connection between the answer and the textbook content.
          </p>
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Global Impact:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          Our vision extends beyond mere convenience; we aim to revolutionize education on a global scale. Through the seamless integration of AI technology, we strive to create a learning environment that is not only user-friendly but also fosters a deeper understanding of educational content. Join us in reshaping the future of education with our innovative AI-driven approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AInews;
