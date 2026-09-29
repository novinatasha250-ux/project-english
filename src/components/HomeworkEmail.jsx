import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import FeedbackCard from "./ui/FeedbackCard";
import "../styles/learn.css";

export default function HomeworkEmail() {
  const navigate = useNavigate();

  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [checked, setChecked] = useState(false);

  function checkAnswers() {
    if (!day.trim() || !time.trim()) return;
    setChecked(true);
  }

  const correct =
    day.trim().toLowerCase() === "on" &&
    time.trim().toLowerCase() === "at";

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project01/homework/teams")}
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
          📧 Email
        </p>

        <div className="lessonProgress">
          <span className="progressDot activeDot"></span>
          <span className="progressDot activeDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
        </div>

        <div className="emailCard">

          <div className="emailHeader">

            <p>
              <span className="emailLabel">From:</span>
              <span className="emailValue">Nikita</span>
            </p>

            <p>
              <span className="emailLabel">To:</span>
              <span className="emailValue">Project Team</span>
            </p>

            <p>
              <span className="emailLabel">Subject:</span>
              <span className="emailValue">Design Review</span>
            </p>

          </div>

          <div className="emailBody">

            <p>Hello everyone,</p>

            <div className="emailGap"></div>

            <p>
              The design review will take place
            </p>

            <div className="emailGap"></div>

            <div className="emailIndent">

              <p>
                <input
                  className="smallInput"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="..."
                />
                Monday
              </p>

              <p>
                <input
                  className="smallInput"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="..."
                />
                9:00.
              </p>

            </div>

            <div className="emailGap"></div>

            <p>Please arrive five minutes early.</p>

            <div className="emailGap"></div>

            <p>Best regards,</p>

            <div className="emailGap"></div>

            <p>Nikita</p>

          </div>

        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "35px",
          }}
        >

          {!checked ? (

            <PrimaryButton onClick={checkAnswers}>
              Check →
            </PrimaryButton>

          ) : (

            <FeedbackCard
              correct={correct}
              title={correct ? "Great job!" : "Almost there!"}
              explanation="We use ON with days and AT with exact times."
              answer="ON Monday, AT 9:00"
              nextLabel="Continue →"
              onNext={() =>
                navigate("/project01/homework/calendar")
              }
            />

          )}

        </div>

      </div>
    </div>
  );
}