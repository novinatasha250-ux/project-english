import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function ProjectCard({ onStart }) {
  return (
    <div className="projectCard">

      <div className="projectNumber">
        Project 01
      </div>

      <h3>
        Time & Place
      </h3>

      <p className="projectInfo">
        A2 • 15 min
      </p>

      <PrimaryButton onClick={onStart}>
        Start Project
      </PrimaryButton>

    </div>
  );
}