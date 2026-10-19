
import "../../styles/project-card.css";

export default function ComingSoonCard() {
  return (
    <div className="projectCard comingSoonCard">
      <div className="projectNumber">
        Project 03
      </div>

      <h3>There is / There are</h3>

      <p className="projectInfo">
        A2 • Coming Soon
      </p>

      <button
        className="comingSoonButton"
        disabled
      >
        Coming Soon
      </button>
    </div>
  );
}
