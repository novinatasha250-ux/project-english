import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn.css";

const questions = [
  {
    question: "The meeting starts ___ 9:00.",
    options: ["in", "on", "at", "by"],
    answer: "at",
    explanation: "We use AT with exact times.",
  },
  {
    question: "We have a project meeting ___ Monday.",
    options: ["at", "in", "on", "by"],
    answer: "on",
    explanation: "We use ON with days and dates.",
  },
  {
    question: "The client will visit our office ___ July.",
    options: ["at", "on", "in", "by"],
    answer: "in",
    explanation: "We use IN with months, years and seasons.",
  },
  {
    question: "The deadline is ___ 15 May.",
    options: ["at", "on", "in", "by"],
    answer: "on",
    explanation: "Specific dates use ON.",
  },
  {
    question: "Our company opened a new office ___ 2024.",
    options: ["on", "at", "in", "by"],
    answer: "in",
    explanation: "Years use IN.",
  },
];

export default function Practice01() {
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
    if (!selected) return;

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
    navigate("/project01/complete", {
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
          onClick={() => navigate("/project01/examples")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 01
        </p>

        <h1 className="lessonTitle">
          Practice
        </h1>

        <p className="lessonSubtitle">
          Question {current + 1} of {questions.length}
        </p>

        <div className="lessonProgress">
          <span className="progressDot"></span>
          <span className="progressDot activeDot"></span>
          <span className="progressDot"></span>
        </div>

        <div className="grammarCard">

          <h2>{question.question}</h2>

          <div className="quizOptions">

            {question.options.map((option) => {

              let className = "quizOption";

              if (!checked && selected === option)
                className += " selected";

              if (checked && option === question.answer)
                className += " correct";

              if (
                checked &&
                option === selected &&
                option !== question.answer
              )
                className += " wrong";

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() => selectAnswer(option)}
                >
                  {option}
                </button>
              );

            })}

          </div>

        </div>

        {checked && (

          <div className="nextLessonCard">

            {selected === question.answer ? (
              <>
                <h2>✅ Correct!</h2>
                <p>{question.explanation}</p>
              </>
            ) : (
              <>
                <h2>❌ Not quite</h2>

                <p>
                  Correct answer:
                  <strong> {question.answer.toUpperCase()}</strong>
                </p>

                <p>{question.explanation}</p>
              </>
            )}

            <p>
              <strong>Score:</strong> {score} / {questions.length}
            </p>

          </div>

        )}

        <div className="nextLessonCard">

          {!checked ? (

            <PrimaryButton onClick={checkAnswer}>
              Check Answer →
            </PrimaryButton>

          ) : current === questions.length - 1 ? (

            <PrimaryButton onClick={finishQuiz}>
              Finish →
            </PrimaryButton>

          ) : (

            <PrimaryButton onClick={nextQuestion}>
              Next Question →
            </PrimaryButton>

          )}

        </div>

      </div>
    </div>
  );
}