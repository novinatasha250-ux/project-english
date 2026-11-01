
import { useNavigate } from "react-router-dom";
import { Plane } from "lucide-react";

import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function ProjectCard04() {
  const navigate = useNavigate();

  return (
    <div className="projectCard">
      <div className="projectNumber">
        Project 04
      </div>

      <div className="homeProjectIcon">
        <Plane size={32} strokeWidth={1.8} />
      </div>

      <h3>Countable &amp; Uncountable</h3>

      <p className="projectInfo">
        Mission Shanghai • A2 • 25 min
      </p>

      <PrimaryButton
        onClick={() => navigate("/project04")}
      >
        Start Project
      </PrimaryButton>
    </div>
  );
}
