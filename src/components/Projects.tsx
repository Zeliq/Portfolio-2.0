import React from "react";
import Image from "next/image";
import Link from "next/link";
import FishFresh from "./projects/FishFresh";

interface CardProps {
  text: string;
  img: string;
  link: string;
}

export default function Projects(): JSX.Element {
  return (
    <div className="md:px-20 mb-20 px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <Card
          link="aitms"
          img="img1.jpg"
          text="Artificially Intelligent Traffic Management System"
        />
        <Card link="FishFresh" img="img2.jpg" text="Fish Freshness Detection" />
        <Card link="AIEdu" img="img3.jpg" text="AI based Learning Assistant" />
        <Card link="AInews" img="Img4.jpg" text="Quick Bites-AI Generated Short News" />
        <Card link="finvest" img="img5.jpg" text="Finvest: Financial Tools For The Underserved" />
        <Card link="TexGen" img="img6.jpg" text="TexGen: Free Placeholder Text Generator " />
        <Card link="MedicalDB" img="img6.jpg" text="Unified Medical Database " />

      </div>
    </div>
  );
}

function Card({ text, img, link }: CardProps): JSX.Element {
  return (
    <Link
      href={link}
      className="relative hover:cursor-pointer gradient_border overflow-hidden rounded-3xl border group h-96"
    >
      <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
      <Image
        src={`/${img}`}
        alt={`${text} image`}
        fill
        className="object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute bottom-10 z-20 flex flex-col items-center justify-center">
        <h1 className="px-10 text-2xl font-bold text-white">{text}</h1>
      </div>
    </Link>
  );
}
