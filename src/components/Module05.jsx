
import { useNavigate } from "react-router-dom";
import { BookOpen, NotebookPen } from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/module.css";

export default function Module05() {
  const navigate = useNavigate();

  return (
    <div className="modulePage">
      {/* BACK */}
      <button
        className="backButton"
        onClick={() => navigate("/")}
      >
        ← Back
      </button>

      {/* PROJECT HEADER */}
      <p className="projectLabel">
        Project 05
      </p>

      <h1 className="moduleTitle">
        Comparatives
      </h1>

      <p className="moduleSubtitle">
        Choose the Best Supplier • A2
      </p>

      {/* LESSON */}
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
          onClick={() => navigate("/project05/grammar")}
        >
          Open
        </PrimaryButton>
      </div>

      {/* HOMEWORK */}
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

        <PrimaryButton
          onClick={() => navigate("/project05/homework")}
        >
          Open
        </PrimaryButton>
      </div>
    </div>
  );
}
