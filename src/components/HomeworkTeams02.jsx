
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import FeedbackCard from "./ui/FeedbackCard";
import "../styles/learn/homework.css";

const messages = [
  {
    name: "Nikita",
    initial: "N",
    time: "09:05",
    lines: [
      "Good morning everyone!",
      "",
      "The meeting room is ____ the second floor.",
      "",
      "See you there!",
    ],
    answer: "on",
    explanation: "We use ON with floors of a building.",
  },
  {
    name: "Alexander",
    initial: "A",
    time: "10:20",
    lines: [
      "Hi everyone,",
      "",
      "Let's meet ____ the reception desk.",
      "",
      "I'll be there in five minutes.",
    ],
    answer: "at",
    explanation: "We use AT for a specific meeting point.",
  },
  {
    name: "Oksana",
    initial: "O",
    time: "11:15",
    lines: [
      "Our client works ____ Moscow.",
      "",
      "We have a meeting with them next week.",
    ],
    answer: "in",
    explanation: "We use IN with cities and countries.",
  },
  {
    name: "Nikita",
    initial: "N",
    time: "14:30",
    lines: [
      "The presentation starts ____ 10:30 tomorrow.",
      "",
      "Please arrive early.",
    ],
    answer: "at",
    explanation: "We use AT with exact times.",
  },
  {
    name: "Alexander",
    initial: "A",
    time: "15:45",
    lines: [
      "The workshop is ____ Friday.",
      "",
      "Please check your calendar.",
    ],
    answer: "on",
    explanation: "We use ON with days of the week.",
  },
];

export default function HomeworkTeams02() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const message = messages[current];

  const isCorrect =
    answer.trim().toLowerCase() === message.answer;

  function checkAnswer() {
    if (!answer.trim() || checked) return;

    if (isCorrect) {
      setCorrectCount((previous) => previous + 1);
    }

    setChecked(true);
  }

  function nextMessage() {
    if (current === messages.length - 1) {
      navigate("/project02/homework/email");
      return;
    }

    setCurrent((previous) => previous + 1);
    setAnswer("");
    setChecked(false);
  }

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project02/homework")}
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
              <p key={index}>{line || "\u00A0"}</p>
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
                placeholder="Type AT, ON or IN..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") checkAnswer();
                }}
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
                isCorrect ? "Great job!" : "Almost there!"
              }
              explanation={message.explanation}
              answer={message.answer.toUpperCase()}
              score={correctCount}
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
