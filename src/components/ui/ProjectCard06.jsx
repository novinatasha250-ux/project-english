
import { useNavigate } from "react-router-dom";
import { Trophy } from "lucide-react";

import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function ProjectCard06() {
  const navigate = useNavigate();

  return (
    <div className="projectCard">
      <div className="projectNumber">
        Project 06
      </div>

      <div className="homeProjectIcon">
        <Trophy size={32} strokeWidth={1.8} />
      </div>

      <h3>Superlatives</h3>

      <p className="projectInfo">
        Choose the Best Equipment • A2 • 25 min
      </p>

      <PrimaryButton
        onClick={() => navigate("/project06")}
      >
        Start Project
      </PrimaryButton>
    </div>
  );
}
