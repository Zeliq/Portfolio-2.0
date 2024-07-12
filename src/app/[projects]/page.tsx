import React from "react";
import Link from "next/link";
import AITMS from "@/components/projects/aitms";
import FishFresh from "@/components/projects/FishFresh";
import AIEdu from "@/components/projects/AIEdu";
import AInews from "@/components/projects/AInews";
import Finvest from "@/components/projects/finvest";
import TexGen from "@/components/projects/TexGen";
import MedicalDB from "@/components/projects/MedicalDB";
import Document from "@/components/projects/Document";
// import UserComponent2 from './UserComponent2';
// import UserComponent3 from './UserComponent3';

interface ProjectProps {
  params: {
    projects: string;
  };
}

const Username: React.FC<ProjectProps> = ({ params }: ProjectProps) => {
  const { projects } = params;

  // Render different components based on the username
  const renderComponent = () => {
    switch (projects) {
      case "aitms":
        return <AITMS />;
      case "FishFresh":
        return <FishFresh />;
      case "AIEdu":
        return <AIEdu />;
      case "AInews":
        return <AInews />;
      case "finvest":
          return <Finvest />;
      case "TexGen":
            return <TexGen />;
      case "MedicalDB":
            return <MedicalDB />;
      case "Document-Clustering":
            return <Document />
      default:
        return <div>{projects}</div>;
    }
  };

  return (
    <div>
      <Link
        href="/"
        className="fixed z-50 top-0 left-0 bg-[#202020] border-white/20 hover:border-white/40 transition-colors duration-200 m-5 border-2 px-7 rounded-full text-lg py-2"
      >
        Back
      </Link>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default Username;
