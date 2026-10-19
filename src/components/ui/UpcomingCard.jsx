
import { useNavigate } from "react-router-dom";
import "../../styles/project-card.css";
import PrimaryButton from "./PrimaryButton";

export default function UpcomingCard() {
  const navigate = useNavigate();

  return (
    <div className="projectCard">
      <div className="projectNumber">
        Project 02
      </div>

      <h3>Place</h3>

      <p className="projectInfo">
        A2 • 20 min
      </p>

      <PrimaryButton
        onClick={() => navigate("/project02")}
      >
        Start Project
      </PrimaryButton>
    </div>
  );
}
