
import { useNavigate } from "react-router-dom";

import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function ComingSoonCard() {
  const navigate = useNavigate();

  return (
    <div className="projectCard comingSoonCard">

      <div className="projectNumber">
        Project 03
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
