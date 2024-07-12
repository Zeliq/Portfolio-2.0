// SecondSection.tsx
import React from "react";
// import RoundedImage from "./RoundedImage";

const Document: React.FC = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center">
      <div className="mb-10 max-w-7xl px-5">
        <div className="my-20 md:mb-20 mb-10 flex flex-col items-center justify-center">
          <div className="w-full h-48 overflow-hidden rounded-lg flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="/img8.jpg"
                alt="/img8"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="mb-4 font-bold text-3xl text-left md:text-4xl lg:text-5xl">
            {"Document Clustering: Organize Files Seamlessly"}
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
            Enhancing File Organization with Document Clustering
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            In today's digital age, managing large volumes of documents efficiently can be daunting. Our project, Document Clustering, leverages cutting-edge Natural Language Processing (NLP) and supervised learning techniques to revolutionize file organization. By analyzing the content of each document, our system intelligently categorizes files into folders based on their topics and themes.
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Addressing Organizational Challenges </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            Traditional file systems often lead to clutter and inefficiency, making it difficult to locate specific documents quickly. Our AI-powered solution eliminates these challenges by automatically grouping related documents together. This not only simplifies navigation but also enhances productivity by providing a structured and intuitive file management system.
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Streamlining Document Access
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            Imagine seamlessly transitioning from a chaotic array of files to a neatly organized system where finding the right document is effortless. Document Clustering achieves this by applying advanced algorithms that understand the context and semantics of each document, ensuring that similar documents are grouped logically.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Advancing Efficiency and Productivity
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            By organizing files based on their content, Document Clustering optimizes workflow efficiency. Users can now focus more on tasks that matter, rather than spending valuable time searching through disorganized files. This innovative approach not only saves time but also enhances overall productivity in professional and personal contexts.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Transforming Document Management          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            Just as our AI Traffic Control System improves emergency response times, Document Clustering revolutionizes document management. It brings order to chaos, ensuring that information is accessible and structured, thereby empowering users with a streamlined approach to managing their digital assets.          
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Empowering Users with Intelligent Organization
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            With Document Clustering, we're not just redefining how files are stored—we're empowering users to harness the power of AI to create a more organized and efficient digital workspace. Seamlessly organizing files based on their content, our solution sets a new standard in document management, promising simplicity, clarity, and enhanced productivity.
          </p>
          <Link href="https://github.com/Zeliq/Document-Clustering" className="flex font-semibold border p-3 w-32 justify-center mt-7">View Project</Link>

        </div>
      </div>
    </section>
  );
};

export default Document;
