
import { useNavigate } from "react-router-dom";
import { Building2 } from "lucide-react";

import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function ComingSoonCard() {
  const navigate = useNavigate();

  return (
    <div className="projectCard">

      <div className="projectNumber">
        Project 03
      </div>

      <div className="homeProjectIcon">
        <Building2 size={32} strokeWidth={1.8} />
      </div>

      <h3>There is / There are</h3>

      <p className="projectInfo">
        A2 • 20 min
      </p>

      <PrimaryButton
        onClick={() => navigate("/project03")}
      >
        Start Project
      </PrimaryButton>

    </div>
  );
}
