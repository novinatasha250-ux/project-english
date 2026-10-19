import Hero from "./Hero";
import ProjectCard from "./ui/ProjectCard";
import UpcomingCard from "./ui/UpcomingCard";
import ComingSoonCard from "./ui/ComingSoonCard";

export default function Home() {
  return (
    <div className="app">
      <div className="card">
        <Hero />

        <ProjectCard />

        <UpcomingCard />

        <ComingSoonCard />
      </div>
    </div>
  );
}