
import { useNavigate } from "react-router-dom";
import { BookOpen, NotebookPen } from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/module.css";

export default function Module03() {
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
        Project 03
      </p>

      <h1 className="moduleTitle">
        There is / There are
      </h1>

      <p className="moduleSubtitle">
        Describing places
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
          onClick={() => navigate("/project03/grammar")}
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
          onClick={() => navigate("/project03/homework")}
        >
          Open
        </PrimaryButton>

      </div>

    </div>
  );
}
