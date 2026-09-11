import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn.css";

export default function Examples01() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project01/grammar")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 01
        </p>

        <h1 className="lessonTitle">
          Examples
        </h1>

        <p className="lessonSubtitle">
          Time
        </p>

        <div className="lessonProgress">
          <span className="progressDot"></span>
          <span className="activeDot"></span>
          <span className="progressDot"></span>
        </div>

        <div className="grammarCards">

          <div className="grammarCard">

            <div className="cardHeading">
              <div className="grammarIcon">🕒</div>
              <h2>AT</h2>
            </div>

            <h3>Exact Times</h3>

            <p>We start work <strong>at 8:00</strong>.</p>
            <p>We have lunch <strong>at noon</strong>.</p>
            <p>I usually go to bed <strong>at midnight</strong>.</p>

          </div>

          <div className="grammarCard">

            <div className="cardHeading">
              <div className="grammarIcon">📅</div>
              <h2>ON</h2>
            </div>

            <h3>Days & Dates</h3>

            <p>We have English <strong>on Monday</strong>.</p>
            <p>My birthday is <strong>on 15 May</strong>.</p>
            <p>We celebrate New Year <strong>on 1 January</strong>.</p>

          </div>

          <div className="grammarCard">

            <div className="cardHeading">
              <div className="grammarIcon">🗓️</div>
              <h2>IN</h2>
            </div>

            <h3>Long Periods</h3>

            <p>We travel <strong>in July</strong>.</p>
            <p>I was born <strong>in 1995</strong>.</p>
            <p>It often snows <strong>in winter</strong>.</p>

          </div>

        </div>

        <div className="nextLessonCard">

          <h2>Natalia</h2>

          <p>
            Great! Now let's check what you've learned.
          </p>

          <PrimaryButton
            onClick={() => navigate("/project01/practice")}
          >
            Start Quiz →
          </PrimaryButton>

        </div>

      </div>
    </div>
  );
}