import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import FeedbackCard from "./ui/FeedbackCard";
import "../styles/learn.css";

const messages = [
  {
    name: "Nikita",
    initial: "N",
    time: "09:05",
    lines: [
      "Good morning everyone!",
      "",
      "The design review starts ____ 9:00.",
      "",
      "See you there!",
    ],
    answer: "at",
    explanation: "We use AT with exact times.",
  },
  {
    name: "Alexander",
    initial: "A",
    time: "14:18",
    lines: [
      "Hi Nikita,",
      "",
      "Can we review the drawings ____ Monday?",
      "",
      "Thanks!",
    ],
    answer: "on",
    explanation: "We use ON with days and dates.",
  },
  {
    name: "Oksana",
    initial: "O",
    time: "08:40",
    lines: [
      "The annual safety training is ____ October.",
      "",
      "Please add it to your calendar.",
    ],
    answer: "in",
    explanation: "We use IN with months.",
  },
];

export default function HomeworkTeams() {

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  const message = messages[current];

  const isCorrect =
    answer.trim().toLowerCase() === message.answer;

  function checkAnswer() {
    if (!answer.trim()) return;
    setChecked(true);
  }

  function nextMessage() {

    if (current === messages.length - 1) {
      navigate("/project01/homework/email");
      return;
    }

    setCurrent(current + 1);
    setAnswer("");
    setChecked(false);

  }

  return (

    <div className="app">

      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project01/homework")}
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
          💬 Team Chat
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#777",
            marginBottom: "40px",
          }}
        >
          Message {current + 1} of {messages.length}
        </p>

        <div className="teamsCard">

          <div className="teamsTop">

            <div className="avatar">
              {message.initial}
            </div>

            <div className="teamsInfo">

              <div className="teamsName">
                {message.name}
              </div>

              <div className="teamsTime">
                {message.time}
              </div>

            </div>

          </div>

          <div className="teamsBubble">

            {message.lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

          </div>

          {!checked ? (

            <>

              <p
                style={{
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                Complete the message
              </p>

              <input
                className="nameInput"
                placeholder="Type the missing word..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

              <div
                style={{
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >

                <PrimaryButton onClick={checkAnswer}>
                  Check →
                </PrimaryButton>

              </div>

            </>

          ) : (

            <FeedbackCard
              correct={isCorrect}
              title={
                isCorrect
                  ? "Great job!"
                  : "Almost there!"
              }
              explanation={message.explanation}
              answer={message.answer.toUpperCase()}
              score={isCorrect ? current + 1 : current}
              total={messages.length}
              nextLabel={
                current === messages.length - 1
                  ? "Continue to Email →"
                  : "Next Message →"
              }
              onNext={nextMessage}
            />

          )}

        </div>

      </div>

    </div>

  );
}