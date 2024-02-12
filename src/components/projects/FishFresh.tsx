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
            {"Artificially Intelligent Traffic Management System (AITMS)"}
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
            Ambulance Delays In India, US And Brazil
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            In India, According To Recent Data, Up To 30% Of Ambulance Delays
            Result In Fatalities, With 24,000 Deaths Reported In India Per Day
            Due To Traffic Jams And Delayed Ambulance Assistance.
            <br />
            <br />
            In The United States, A Study Estimated That Every One-minute Delay
            In Ambulance Arrival Was Associated With A 1.1% Increase In
            Mortality Risk.
            <br />
            <br />
            In Brazil, A Study Conducted By The Federal University Of Rio De
            Janeiro Found That Ambulance Delays Were Associated With The Risk Of
            Death Increased By 11% For Every 10-minute Delay In Ambulance
            Arrival.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Negative Impacts of Traffic Jams
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            According To The World Health Organization (Who), Road Traffic
            Injuries Causes The Death Of A Person Every 26 Seconds.
            <br />
            <br />
            An Average IT Engineer Working In Bangalore Spends More Than 1.2
            Years Of His Life On Traffic Jam.
            <br />
            <br />A Study Conducted In Bangalore, India, Estimated That About
            20,000 Liters Of Fuel Were Wasted Daily Due To Idling Of Vehicles At
            44 Major Traffic Signals. This Led To An Emission Of 46,800 Kg Of
            Co2, 1,200 Kg Of Co, 240 Kg Of Hc, And 80 Kg Of Nox Per Day.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Implementation Of Our System
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            The Implementation Of Our System Is Done Using Computer Vision, AI
            And A Group Of Sensors And Cameras On The Traffic Signals. We Take
            Multiple Parameters Such As The Number Of Pedestrians Waiting, The
            Traffic Conditions Of The Previous And Next Roads, The Number Of
            Cars In Each Lane, The Emergency Services, And Many Others Into
            Account While Determining The Best Possible Decisions. We Centralize
            All The Real-time Traffic Data And Control Such That Minimum Time Is
            Spent On Any Traffic Signal And There Is Always A Free-flow.
          </p>
          <br />
          <h3 className="font-semibold mr-5 text-2xl text-white">
            Artificially Intelligent Traffic Control System
          </h3>
          <p className="text-white/50 font-medium leading-7 flex mt-5 text-lg md:text-xl">
            Our AI Traffic Control System can detect and respond to emergency
            vehicles, reduce traffic jams, and save lives. Many people die in
            India due to delayed ambulance assistance caused by narrow roads and
            congestion. Our system can quickly clear the way for the emergency
            vehicle, improving response time and traffic flow. This technology
            can make a big difference in saving lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FishFresh;
