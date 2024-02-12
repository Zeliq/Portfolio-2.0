import About from "@/components/About";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Objectives />
    </main>
  );
}
