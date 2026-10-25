
import { Plane } from "lucide-react";

import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function ProjectCard04() {
  return (
    <div className="projectCard comingSoonCard">

      <div className="projectNumber">
        Project 04
      </div>

      <div className="homeProjectIcon">
        <Plane size={32} strokeWidth={1.8} />
      </div>

      <h3>Countable & Uncountable</h3>

      <p className="projectInfo">
        Mission Shanghai • A2 • 25 min
      </p>

      <PrimaryButton disabled>
        Coming Soon
      </PrimaryButton>

    </div>
  );
}
