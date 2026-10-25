
import { useNavigate } from "react-router-dom";
import { Clock3 } from "lucide-react";

import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function ProjectCard() {
  const navigate = useNavigate();

  return (
    <div className="projectCard">

      <div className="projectNumber">
        Project 01
      </div>

      <div className="homeProjectIcon">
        <Clock3 size={32} strokeWidth={1.8} />
      </div>

      <h3>
        Time
      </h3>

      <p className="projectInfo">
        A2 • 15 min
      </p>

      <PrimaryButton
        onClick={() => navigate("/project01")}
      >
        Start Project
      </PrimaryButton>

    </div>
  );
}
