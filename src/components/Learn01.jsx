import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn.css";

export default function Learn01() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project01")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 01
        </p>

        <h1 className="lessonTitle">
          Grammar
        </h1>

        <p className="lessonSubtitle">
          Time & Place
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
        </div>

        <div className="grammarCards">

          <div className="grammarCard">

            <div className="cardHeading">
              <div className="grammarIcon">🕒</div>
              <h2>AT</h2>
            </div>

            <h3>Exact Times</h3>

            <p>at 7:00</p>
            <p>at noon</p>
            <p>at midnight</p>

          </div>

          <div className="grammarCard">

            <div className="cardHeading">
              <div className="grammarIcon">📅</div>
              <h2>ON</h2>
            </div>

            <h3>Days & Dates</h3>

            <p>on Monday</p>
            <p>on 15 May</p>
            <p>on my birthday</p>

          </div>

          <div className="grammarCard">

            <div className="cardHeading">
              <div className="grammarIcon">🗓️</div>
              <h2>IN</h2>
            </div>

            <h3>Long Periods</h3>

            <p>in July</p>
            <p>in 2026</p>
            <p>in winter</p>

          </div>

        </div>

        <div className="nextLessonCard">

          <h2>Natalia</h2>

          <p>
            Let's see how these rules work in real life.
          </p>

          <PrimaryButton
            onClick={() => navigate("/project01/practice")}
          >
            Continue →
          </PrimaryButton>

        </div>

      </div>
    </div>
  );
}