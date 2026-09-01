import { useNavigate } from "react-router-dom";

import "../styles/module.css";
import PrimaryButton from "./ui/PrimaryButton";

export default function Module01() {
  const navigate = useNavigate();

  return (
    <div className="modulePage">

      <button
        className="backButton"
        onClick={() => navigate("/")}
      >
        ← Back
      </button>

      <p className="projectLabel">
        Project 01
      </p>

      <h1 className="moduleTitle">
        Time & Place
      </h1>

      <p className="moduleSubtitle">
        AT • ON • IN
      </p>

      {/* Lesson */}

      <div className="resourceCard">

        <div>
          <h2>📚 Lesson</h2>
          <p>Grammar • Examples • Quiz</p>
        </div>

        <PrimaryButton
          onClick={() => navigate("/project01/grammar")}
        >
          Open
        </PrimaryButton>

      </div>

      {/* Homework */}

      <div className="resourceCard">

        <div>
          <h2>📝 Homework</h2>
          <p>Extra practice</p>
        </div>

        <PrimaryButton
          onClick={() => alert("Homework coming soon!")}
        >
          Open
        </PrimaryButton>

      </div>

    </div>
  );
}