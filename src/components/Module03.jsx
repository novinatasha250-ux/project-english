
import { useNavigate } from "react-router-dom";

import "../styles/module.css";
import PrimaryButton from "./ui/PrimaryButton";
import { BookOpen, NotebookPen } from "lucide-react";

export default function Module03() {
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
        Project 03
      </p>

      <h1 className="moduleTitle">
        There is / There are
      </h1>

      <p className="moduleSubtitle">
        Describing places
      </p>

      {/* Lesson */}

      <div className="resourceCard">

        <div className="resourceHeading">

          <div className="resourceIconCircle">
            <BookOpen className="resourceIcon" />
          </div>

          <div>
            <h2>Lesson</h2>
            <p>Grammar • Examples • Quiz</p>
          </div>

        </div>

        <PrimaryButton
          onClick={() => navigate("/project03/grammar")}
        >
          Open
        </PrimaryButton>

      </div>

      {/* Homework */}

      <div className="resourceCard">

        <div className="resourceHeading">

          <div className="resourceIconCircle">
            <NotebookPen
              strokeWidth={2.2}
              className="resourceIcon"
            />
          </div>

          <div>
            <h2>Homework</h2>
            <p>Extra practice</p>
          </div>

        </div>

        <button
          type="button"
          disabled
          style={{
            padding: "14px 28px",
            border: "none",
            borderRadius: "14px",
            background: "#e9e7ee",
            color: "#77717f",
            fontWeight: 700,
            cursor: "not-allowed",
          }}
        >
          Coming Soon
        </button>

      </div>

    </div>
  );
}
