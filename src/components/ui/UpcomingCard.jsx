
import { useNavigate } from "react-router-dom";
import "../../styles/upcoming-card.css";

export default function UpcomingCard() {
  const navigate = useNavigate();

  return (
    <div className="upcomingCard">

      <div className="projectNumber">
        Project 02
      </div>

      <h3>Place</h3>

      <p className="projectInfo">
        A2 • 20 min
      </p>

      <button
        className="lockedButton"
        onClick={() => navigate("/project02")}
      >
        Start Project →
      </button>

    </div>
  );
}
