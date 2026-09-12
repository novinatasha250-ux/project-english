import { useNavigate } from "react-router-dom";

import "../styles/module.css";
import PrimaryButton from "./ui/PrimaryButton";
import { BookOpen, NotebookPen } from "lucide-react";

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
        Time
      </h1>

      <p className="moduleSubtitle">
        AT • ON • IN
      </p>

      {/* Lesson */}

      <div className="resourceCard">

        <div className="resourceHeading">

          <div className="resourceIconCircle">
            <BookOpen
          
              className="resourceIcon"
            />
          </div>

          <div>
            <h2>Lesson</h2>
            <p>Grammar • Examples • Quiz</p>
          </div>

        </div>

        <PrimaryButton
          onClick={() => navigate("/project01/grammar")}
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

        <PrimaryButton
          onClick={() => navigate("/project01/homework/email")}
        >
          Open
        </PrimaryButton>

      </div>

    </div>
  );
}