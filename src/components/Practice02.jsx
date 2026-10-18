
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/practice.css";

const questions = [
  {
    question: "The visitors are waiting ___ reception.",
    options: ["in", "on", "at", "by"],
    answer: "at",
    explanation: "We use AT for specific points or locations, such as reception.",
  },
  {
    question: "The project documents are ___ my desk.",
    options: ["at", "in", "on", "by"],
    answer: "on",
    explanation: "We use ON when something is on a surface.",
  },
  {
    question: "Our manager is ___ the meeting room.",
    options: ["on", "at", "in", "by"],
    answer: "in",
    explanation: "We use IN when someone or something is inside a room.",
  },
  {
    question: "Our office is ___ the third floor.",
    options: ["at", "on", "in", "by"],
    answer: "on",
    explanation: "We use ON when talking about floors in a building.",
  },
  {
    question: "Our design institute is ___ Kazan.",
    options: ["on", "at", "in", "by"],
    answer: "in",
    explanation: "We use IN with cities, towns and countries.",
  },
];

export default function Practice02() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];

  function selectAnswer(option) {
    if (!checked) {
      setSelected(option);
    }
  }

  function checkAnswer() {
    if (!selected || checked) return;

    if (selected === question.answer) {
      setScore((prev) => prev + 1);
    }

    setChecked(true);
  }

  function nextQuestion() {
    setCurrent((prev) => prev + 1);
    setSelected("");
    setChecked(false);
  }

  function finishQuiz() {
    navigate("/project02/complete", {
      state: {
        score,
      },
    });
  }

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project02/examples")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 02
        </p>

        <h1 className="lessonTitle">
          Practice
        </h1>

        <p className="lessonSubtitle">
          Question {current + 1} of {questions.length}
        </p>

        <div className="lessonProgress">
          <span className="progressDot"></span>
          <span className="progressDot"></span>
          <span className="activeDot"></span>
        </div>

        <div className="grammarCard">
          <h2>{question.question}</h2>

          <div className="quizOptions">
            {question.options.map((option) => {
              let className = "quizOption";

              if (!checked && selected === option) {
                className += " selected";
              }

              if (checked && option === question.answer) {
                className += " correct";
              }

              if (
                checked &&
                option === selected &&
                option !== question.answer
              ) {
                className += " wrong";
              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() => selectAnswer(option)}
                  disabled={checked}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEEDBACK */}

        {checked && (
          <div className="quizFeedback">

            <div className="feedbackNataliaWrapper">

              {selected === question.answer ? (
                <img
                  src="/confetti.png"
                  alt=""
                  className="confetti"
                />
              ) : (
                <img
                  src="/thinking-swirl.png"
                  alt=""
                  className="thinkingSwirl"
                />
              )}

              <img
                src={
                  selected === question.answer
                    ? "/natalia-correct.png"
                    : "/natalia-wrong.png"
                }
                alt="Natalia"
                className="feedbackNatalia"
              />

            </div>

            <div className="feedbackCard">

              <h2
                key={`${current}-${selected}`}
                className={
                  selected === question.answer
                    ? "correctTitle"
                    : "wrongTitle"
                }
              >
                {selected === question.answer
                  ? "Great job!"
                  : "Almost there!"}
              </h2>

              {selected !== question.answer && (
                <p className="feedbackAnswer">
                  Correct answer:
                  <span className="answerBadge">
                    {question.answer.toUpperCase()}
                  </span>
                </p>
              )}

              <p className="feedbackText">
                {question.explanation}
              </p>

              <div className="scorePill">
                Score {score} / {questions.length}
              </div>

            </div>

          </div>
        )}

        {/* ACTION BUTTON */}

        <div className="quizActions">

          {!checked ? (
            <PrimaryButton
              onClick={checkAnswer}
              disabled={!selected}
            >
              Check answer
            </PrimaryButton>
          ) : current < questions.length - 1 ? (
            <PrimaryButton onClick={nextQuestion}>
              Next Question
            </PrimaryButton>
          ) : (
            <PrimaryButton onClick={finishQuiz}>
              Finish Quiz
            </PrimaryButton>
          )}

        </div>

      </div>
    </div>
  );
}
