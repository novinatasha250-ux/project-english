import Hero from "./Hero";
import ProjectCard from "./ui/ProjectCard";
import UpcomingCard from "./ui/UpcomingCard";

export default function Home({ onStart }) {
  return (
    <div className="app">
      <div className="card">
        <Hero />

        <ProjectCard onStart={onStart} />

        <UpcomingCard />
      </div>
    </div>
  );
}