
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Lightbulb,
  Sparkles,
  XCircle,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework03.css";

const checklist = [
  { item: "Meeting room", quantity: 1, status: "Ready" },
  { item: "Chairs", quantity: 8, status: "Ready" },
  { item: "Projectors", quantity: 0, status: "Missing" },
  { item: "Coffee", quantity: "Available", status: "Ready" },
  { item: "Clean cups", quantity: 0, status: "Missing" },
  { item: "Presentation", quantity: 1, status: "Ready" },
];

const questions = [
  {
    question: "___ a meeting room ready for the visitors.",
    options: ["There is", "There are", "Are there"],
    answer: "There is",
    explanation:
      "One meeting room is available, so we use There is.",
  },
  {
    question: "___ eight chairs in the meeting room.",
    options: ["There is", "There are", "Is there"],
    answer: "There are",
    explanation:
      "Eight chairs is plural, so we use There are.",
  },
  {
    question: "___ any projectors available.",
    options: ["There aren't", "There isn't", "There are"],
    answer: "There aren't",
    explanation:
      "Projectors is plural. The checklist shows zero, so we use There aren't any.",
  },
  {
    question: "___ some coffee for the visitors.",
    options: ["There are", "There is", "Are there"],
    answer: "There is",
    explanation:
      "Coffee is uncountable, so we use There is.",
  },
  {
    question: "___ any clean cups?",
    options: ["Are there", "Is there", "There are"],
    answer: "Are there",
    explanation:
      "Cups is plural. To ask about availability, we use Are there any...?",
  },
];

export default function HomeworkCalendar03() {
  const navigate = useNavigate();
  const questionRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];
  const isCorrect = selected === question.answer;
  const isLast = current === questions.length - 1;

  useEffect(() => {
    if (current === 0) return;

    questionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [current]);

  function checkAnswer() {
    if (!selected || checked) return;

    if (isCorrect) {
      setScore((previous) => previous + 1);
    }

    setChecked(true);
  }

  function nextQuestion() {
    if (isLast) {
      sessionStorage.setItem(
        "project03CalendarScore",
        String(score)
      );

      navigate("/project03/homework/writing");
      return;
    }

    setCurrent((previous) => previous + 1);
    setSelected("");
    setChecked(false);
  }

  return (
    <div className="app">
      <div className="card p03h-page p03h-teamsPage">

        <button
          className="backButton"
          onClick={() =>
            navigate("/project03/homework/email")
          }
        >
          ← Back
        </button>

        <p className="p03h-projectLabel">
          PROJECT 03 / HOMEWORK / 03
        </p>

        {/* HERO */}

        <header className="p03h-hero p03h-activityHero">

          <div className="p03h-heroText">

            <span className="p03h-pill">
              <ClipboardCheck size={17} />
              ACTIVITY 03 / OFFICE CHECKLIST
            </span>

            <h1>Are we ready?</h1>

            <p>
              The visitors are arriving soon!
              Check what's ready, what's missing,
              and what the team still needs.
            </p>

            <div className="p03h-heroTags">
              <span>Office checklist</span>
              <span>5 questions</span>
              <span>Real workplace English</span>
            </div>

          </div>

          <img
            src="/natalia-homework.png"
            alt="Natalia"
            className="p03h-heroNatalia"
          />

        </header>

        {/* CHECKLIST */}

        <section className="p03h-checklistSection">

          <span className="p03h-eyebrow">
            THURSDAY / VISITOR PREPARATION
          </span>

          <h2>Office preparation checklist</h2>

          <p>
            Read the checklist before answering
            the questions.
          </p>

          <div className="p03h-checklistTable">

            <div className="p03h-checklistHeader">
              <span>ITEM</span>
              <span>QUANTITY</span>
              <span>STATUS</span>
            </div>

            {checklist.map((row) => (

              <div
                className="p03h-checklistRow"
                key={row.item}
              >

                <strong>{row.item}</strong>

                <span>{row.quantity}</span>

                <span
                  className={`p03h-status ${
                    row.status === "Ready"
                      ? "ready"
                      : "missing"
                  }`}
                >
                  {row.status === "Ready" ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <XCircle size={16} />
                  )}

                  {row.status}

                </span>

              </div>

            ))}

          </div>

        </section>

        {/* PROGRESS */}

        <div className="p03h-teamsProgress">

          <div className="p03h-teamsProgressText">

            <span>
              QUESTION {current + 1} / {questions.length}
            </span>

            <span>
              {Math.round(
                ((current + 1) / questions.length) * 100
              )}%
            </span>

          </div>

          <div className="p03h-teamsProgressTrack">

            <div
              style={{
                width: `${
                  ((current + 1) / questions.length) * 100
                }%`,
              }}
            />

          </div>

        </div>

        {/* QUESTION */}

        <section
          ref={questionRef}
          className="p03h-teamsQuestion"
        >

          <div className="p03h-teamsQuestionHeading">

            <span className="p03h-eyebrow">
              COMPLETE THE SENTENCE
            </span>

            <h2>{question.question}</h2>

            <p>
              Use the information from the checklist.
            </p>

          </div>

          <div className="p03h-answerOptions">

            {question.options.map((option, index) => {

              const correct =
                checked && option === question.answer;

              const wrong =
                checked &&
                option === selected &&
                !isCorrect;

              const chosen =
                !checked && option === selected;

              const className = [
                "p03h-answerOption",
                chosen ? "selected" : "",
                correct ? "correct" : "",
                wrong ? "wrong" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <button
                  key={option}
                  type="button"
                  className={className}
                  disabled={checked}
                  onClick={() => setSelected(option)}
                >

                  <span className="p03h-optionLetter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>{option}</span>

                  {correct && (
                    <CheckCircle2 size={20} />
                  )}

                  {wrong && (
                    <XCircle size={20} />
                  )}

                </button>
              );
            })}

          </div>

          {/* NATALIA FEEDBACK */}

          {checked && (

            <div
              className={`p03h-answerFeedback ${
                isCorrect ? "correct" : "wrong"
              }`}
              role="status"
            >

              <div className="p03h-feedbackNataliaWrapper">

                <img
                  src={
                    isCorrect
                      ? "/confetti.png"
                      : "/thinking-swirl.png"
                  }
                  alt=""
                  className={
                    isCorrect
                      ? "p03h-feedbackDecoration p03h-confetti"
                      : "p03h-feedbackDecoration p03h-swirl"
                  }
                />

                <img
                  src={
                    isCorrect
                      ? "/natalia-correct.png"
                      : "/natalia-wrong.png"
                  }
                  alt="Natalia"
                  className="p03h-feedbackNatalia"
                />

              </div>

              <div className="p03h-feedbackContent">

                <h3>

                  {isCorrect ? (
                    <>
                      <CheckCircle2 size={26} />
                      Great job!
                    </>
                  ) : (
                    <>
                      <Lightbulb size={26} />
                      Almost there!
                    </>
                  )}

                </h3>

                {!isCorrect && (
                  <p className="p03h-correctAnswer">
                    Correct answer:{" "}
                    <strong>{question.answer}</strong>
                  </p>
                )}

                <p className="p03h-feedbackExplanation">
                  {question.explanation}
                </p>

                <span className="p03h-scoreBadge">
                  Score: {score} / {questions.length}
                </span>

              </div>

            </div>

          )}

        </section>

        {/* ACTION */}

        <div className="p03h-teamsActions">

          {!checked ? (

            <PrimaryButton
              onClick={checkAnswer}
              disabled={!selected}
            >
              Check answer
            </PrimaryButton>

          ) : (

            <PrimaryButton onClick={nextQuestion}>

              {isLast
                ? "Continue to Activity 04"
                : "Next question"}

              <ArrowRight size={18} />

            </PrimaryButton>

          )}

        </div>

        <p className="p03h-teamsFooter">
          <Sparkles size={16} />
          You're getting closer to the finish line!
        </p>

      </div>
    </div>
  );
}
