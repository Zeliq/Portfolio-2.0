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
                src="/img4.jpg"
                alt="/img4"
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
          Quick Bites of Daily News
          </h3>
          <p className="text-white/50 font-medium leading-7 flex flex-col mt-5 text-lg md:text-xl">
          In our quest to keep you informed, our AI News Summarizer emerges as a game-changer. This innovative project is designed to fetch the latest news, utilize AI algorithms to distill it into concise summaries, and pair each article with an appropriate image based on its title.</p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Real-time News Digest:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          With our AI at the helm, you can expect real-time updates curated into bite-sized summaries, ensuring you stay abreast of current events without drowning in information overload. The system employs advanced natural language processing to extract key insights, presenting you with a streamlined and digestible overview of the day's happenings.
            <br />
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          Visual Enhancements:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          Beyond mere words, our project recognizes the power of visuals. Each news summary is complemented by an image that resonates with the article's title, adding a visual dimension to your news consumption experience.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
          User-Friendly Interface:
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
          Navigating the world of news has never been easier. The summaries and images are displayed on a simple and intuitive screen, allowing users to effortlessly stay informed in a visually engaging manner. Join us on this journey to revolutionize news consumption with the perfect blend of AI and simplicity.
          </p>
          <Link href="/" className="flex font-semibold border p-3 w-32 justify-center mt-7">Goto TexGen</Link>
        </div>
      </div>
    </section>
  );
};

export default FishFresh;
