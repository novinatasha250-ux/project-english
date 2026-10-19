
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework.css";

export default function Homework02() {
  const navigate = useNavigate();

  const [name, setName] = useState(
    () => sessionStorage.getItem("project02StudentName") || ""
  );

  function startHomework() {
    const studentName = name.trim();

    if (!studentName) {
      alert("Please enter your name before you start.");
      return;
    }

    sessionStorage.setItem(
      "project02StudentName",
      studentName
    );

    navigate("/project02/homework/teams");
  }

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project02/complete")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 02
        </p>

        <h1 className="lessonTitle">
          Homework
        </h1>

        <p className="lessonSubtitle">
          Place
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
        </div>

        <div className="nextLessonCard">

          {/* Goal */}

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
                Use <strong>AT</strong>,{" "}
                <strong>ON</strong> and{" "}
                <strong>IN</strong> to talk about
                places at work and review
                prepositions of time.
              </p>
            </div>

          </div>

          {/* Homework activities */}

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

          {/* Estimated time */}

          <div className="estimatedTime">
            <span className="timeLabel">
              Estimated time
            </span>

            <span className="timeValue">
              15–20 minutes
            </span>
          </div>

          {/* Student name */}

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

          {/* Start button */}

          <PrimaryButton onClick={startHomework}>
            Start Homework →
          </PrimaryButton>

        </div>
      </div>
    </div>
  );
}
