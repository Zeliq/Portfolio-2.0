// SecondSection.tsx
import React from "react";
// import RoundedImage from "./RoundedImage";

const FishFresh: React.FC = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center">
      <div className="mb-10 max-w-7xl px-5">
        <div className="my-20 md:mb-20 mb-10 flex flex-col items-center justify-center">
          <div className="w-full h-48 overflow-hidden rounded-lg flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src="/img2.jpg"
                alt="/img2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="mb-4 font-bold text-3xl text-left md:text-4xl lg:text-5xl">
            {"Freshness Analysis for Fish using image Processing and Deep Learning Approach"}
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
            Problem Statement
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            The fishing industry is one of the most rapidly expanding industries. Fish consumption has increased all over the world. It is critical to maintain quality until the product reaches the consumer.From the catch to the consumer, the quality of a fish can be influenced primarily by handling, processing, and storage processes. The retention duration and storage temperature of post-harvested fish are important elements in maintaining the product's final quality. This study provides an image processing and deep learning method for image segmentation and fish freshness prediction that is totally automatic, efficient, and non-destructive. As soon as the image of the fish is sent to the network, it automatically classifies it as fresh or not fresh. The accuracy of the CNN-based approach to determining fish freshness was around 87.5%. By using a deep learning model, the accuracy increased by up to 100% on the dataset collected. </p>
          <h3 className="mt-5 font-semibold text-2xl text-white">Revolutionizing Fish Freshness Assessment</h3>
           <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            Our project pioneers a cutting-edge method leveraging image processing and deep learning techniques to automatically categorize fish as fresh or not. With an astounding accuracy of up to 100% on our meticulously curated dataset, we're reshaping the landscape of fish quality assessment.
            </p>
             <br />
    
      
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Harnessing Technological Innovation:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            Delving into the technical intricacies, we elucidate the arsenal of software and hardware pivotal to our project's success. From the versatile Visual Studio Code to the robust frameworks of TensorFlow and Keras, our software toolkit ensures precise implementation. Complemented by hardware marvels like the NVIDIA Jetson TX2 and Intel RealSense Cameras, we've crafted a formidable platform poised for real-world application.
            <br />
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Pioneering Progress in the Fishing Industry:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
           Looking ahead, our study underscores the transformative potential of this technology within the fishing sector. By automating and refining fish quality evaluation processes, we anticipate significant enhancements in efficiency and accuracy. This innovation not only benefits fishermen and suppliers but also ensures consumers receive fresher, higher-quality seafood—a win-win for the entire industry.
          </p>
          <br />

        </div>
      </div>
    </section>
  );
};

export default FishFresh;
