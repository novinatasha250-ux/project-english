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

          {/* ---------- Goal ---------- */}

          <div className="homeworkHero">

            <img
              src="/natalia-homework-desk.png"
              alt="Natalia"
              className="lessonCompleteNatalia"
            />

            <div className="goalCard">

              <h2 className="goalTitle">
                Today's Goal
              </h2>

              <p className="goalText">
                Use <strong>AT</strong>, <strong>ON</strong> and <strong>IN</strong> correctly when talking about time at work.
              </p>

            </div>

          </div>

          {/* ---------- Homework ---------- */}

          <div className="completeChecklist">

            <div className="checkItem">
              <span className="checkIcon">✓</span>
              <span>Grammar Review</span>
            </div>

            <div className="checkItem">
              <span className="checkIcon">✓</span>
              <span>Teams Messages</span>
            </div>

            <div className="checkItem">
              <span className="checkIcon">✓</span>
              <span>Email</span>
            </div>

            <div className="checkItem">
              <span className="checkIcon">✓</span>
              <span>Calendar</span>
            </div>

            <div className="checkItem">
              <span className="checkIcon">✓</span>
              <span>Writing Task</span>
            </div>

          </div>

          {/* ---------- Estimated time ---------- */}

          <div className="estimatedTime">

            <span className="timeLabel">
              Estimated time
            </span>

            <span className="timeValue">
              10–15 minutes
            </span>

          </div>

          {/* ---------- Name ---------- */}

          <div className="nameSection">

            <div className="nameLabel">
              Before you begin, please enter your name.
            </div>

            <input
              className="nameInput"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>

          {/* ---------- Button ---------- */}

          <PrimaryButton
            onClick={() => navigate("/project01/homework/teams")}
          >
            Start Homework →
          </PrimaryButton>

        </div>

      </div>

    </div>

  );
}