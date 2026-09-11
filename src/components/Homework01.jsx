import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn.css";

export default function Homework01() {

  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <div className="app">

      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project01/complete")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 01
        </p>

        <h1 className="lessonTitle">
          Homework
        </h1>

        <p className="lessonSubtitle">
          Time
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
        </div>

        <div className="nextLessonCard">

          <h2>📝 Project Brief</h2>

          <p>
            Today's goal is to use
            <strong> AT</strong>,
            <strong> ON</strong> and
            <strong> IN</strong> correctly
            when talking about time at work.
          </p>

          <hr className="lessonDivider" />

          <h3>Today's Homework</h3>

          <p>
            📖 Grammar Review
            <br />
            💬 Teams Messages
            <br />
            📧 Email
            <br />
            📅 Calendar
            <br />
            ✍️ Writing Task
          </p>

          <p style={{ marginTop: "30px" }}>
            ⏱ <strong>Estimated time:</strong> 10–15 minutes
          </p>

          <hr className="lessonDivider" />

          <p>
            Before you begin, please enter your name.
          </p>

          <input
            className="nameInput"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div style={{ marginTop: "32px" }}>

            <PrimaryButton
              onClick={() => navigate("/project01/homework/teams")}
            >
              Begin Homework →
            </PrimaryButton>

          </div>

        </div>

      </div>

    </div>
  );
}