
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import FeedbackCard from "./ui/FeedbackCard";
import "../styles/learn/homework.css";

const correctAnswers = ["on", "at", "on", "in"];

export default function HomeworkEmail02() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [checked, setChecked] = useState(false);

  function updateAnswer(index, value) {
    setAnswers((previous) =>
      previous.map((answer, i) =>
        i === index ? value : answer
      )
    );
  }

  function checkAnswers() {
    if (answers.some((answer) => !answer.trim())) {
      return;
    }

    setChecked(true);
  }

  const results = answers.map(
    (answer, index) =>
      answer.trim().toLowerCase() === correctAnswers[index]
  );

  const correct = results.every(Boolean);
  const score = results.filter(Boolean).length;

  function gap(index) {
    return (
      <input
        className="smallInput"
        value={answers[index]}
        onChange={(e) => updateAnswer(index, e.target.value)}
        placeholder="..."
        aria-label={`Missing preposition ${index + 1}`}
        disabled={checked}
      />
    );
  }

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project02/homework/teams")}
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
          📧 Email
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="activeDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#777",
            marginBottom: "30px",
          }}
        >
          Complete the email with AT, ON or IN.
        </p>

        <div className="emailCard">

          <div className="emailHeader">
            <p>
              <span className="emailLabel">From:</span>
              <span className="emailValue">Oksana</span>
            </p>

            <p>
              <span className="emailLabel">To:</span>
              <span className="emailValue">Project Team</span>
            </p>

            <p>
              <span className="emailLabel">Subject:</span>
              <span className="emailValue">Office Visit</span>
            </p>
          </div>

          <div className="emailBody">

            <p>Hello everyone,</p>

            <div className="emailGap"></div>

            <p>
              Our clients are visiting our office
              {gap(0)} Tuesday.
            </p>

            <div className="emailGap"></div>

            <p>
              Please meet them {gap(1)} the
              reception desk at 10:00.
            </p>

            <div className="emailGap"></div>

            <p>
              The meeting room is {gap(2)} the
              third floor.
            </p>

            <div className="emailGap"></div>

            <p>
              After the meeting, we will have lunch
              {gap(3)} the company cafeteria.
            </p>

            <div className="emailGap"></div>

            <p>Thank you!</p>

            <div className="emailGap"></div>

            <p>Best regards,</p>

            <p>Oksana</p>

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
              title={
                correct ? "Great job!" : "Almost there!"
              }
              explanation={
                correct
                  ? "Excellent! You used all four prepositions correctly."
                  : `You got ${score} out of 4 correct. Remember: ON for days and floors, AT for a specific point, and IN for an enclosed space.`
              }
              answers={[
                "ON Tuesday (day)",
                "AT the reception desk (specific point)",
                "ON the third floor (floor)",
                "IN the company cafeteria (inside a place)",
              ]}
              nextLabel="Continue to Calendar →"
              onNext={() =>
                navigate("/project02/homework/calendar")
              }
            />
          )}
        </div>

      </div>
    </div>
  );
}
