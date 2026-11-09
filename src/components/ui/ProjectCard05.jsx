
import { useNavigate } from "react-router-dom";
import { Scale } from "lucide-react";

import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function ProjectCard05() {
  const navigate = useNavigate();

  return (
    <div className="projectCard">
      <div className="projectNumber">
        Project 05
      </div>

      <div className="homeProjectIcon">
        <Scale size={32} strokeWidth={1.8} />
      </div>

      <h3>Comparatives</h3>

      <p className="projectInfo">
        Choose the Best Supplier • A2 • 25 min
      </p>

      <PrimaryButton
        onClick={() => navigate("/project05")}
      >
        Start Project
      </PrimaryButton>
    </div>
  );
}
