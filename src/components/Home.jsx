
import Hero from "./Hero";
import ProjectCard from "./ui/ProjectCard";
import UpcomingCard from "./ui/UpcomingCard";
import ComingSoonCard from "./ui/ComingSoonCard";
import ProjectCard04 from "./ui/ProjectCard04";

import "../styles/home.css";

export default function Home() {
  return (
    <main className="app homePage">
      <div className="card homePageInner">
        <Hero />

        <section className="homeProjects">
          <div className="homeProjectsHeading">
            <span className="homeEyebrow">
              YOUR LEARNING JOURNEY
            </span>

            <h2>Choose your next project</h2>

            <p>
              Small steps. Real English. Everyday progress.
            </p>
          </div>

          <div className="homeProjectsGrid">
            <ProjectCard />
            <UpcomingCard />
            <ComingSoonCard />
            <ProjectCard04 />
          </div>
        </section>
      </div>
    </main>
  );
}
