
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Luggage,
  RotateCcw,
  Sparkles,
  XCircle
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homeworkPacking04.css";

// ============================================
// QUESTIONS
// ============================================

const questions = [
  {
    group: "PACKING CHECKLIST",
    context: "Natalia is preparing her suitcase.",
    question: "I need to take two ___ to Shanghai.",
    options: ["luggages", "suitcases", "luggage"],
    answer: 1,
    explanation:
      "Suitcase is countable. We can say two suitcases. Luggage is uncountable."
  },
  {
    group: "PACKING CHECKLIST",
    context: "Natalia is checking her travel documents.",
    question: "I have ___ important documents in my bag.",
    options: ["a little", "much", "a few"],
    answer: 2,
    explanation:
      "Documents are countable. A few means a small number."
  },
  {
    group: "PACKING CHECKLIST",
    context: "Natalia is packing her laptop.",
    question: "I need ___ space in my bag for my laptop.",
    options: ["some", "many", "a few"],
    answer: 0,
    explanation:
      "Space is uncountable in this sentence. Some space is correct."
  },
  {
    group: "BEFORE THE FLIGHT",
    context: "Natalia is checking her schedule.",
    question: "How ___ time do we have before the flight?",
    options: ["many", "much", "a few"],
    answer: 1,
    explanation:
      "Time is uncountable, so we ask How much time?"
  },
  {
    group: "BEFORE THE FLIGHT",
    context: "Natalia is checking her hand luggage.",
    question: "Are there ___ liquids in your hand luggage?",
    options: ["some", "any", "much"],
    answer: 1,
    explanation:
      "We normally use any in neutral questions. Liquids is a plural countable noun."
  },
  {
    group: "BEFORE THE FLIGHT",
    context: "Natalia is trying to close her suitcase.",
    question: "There isn't ___ room in my suitcase.",
    options: ["many", "a few", "much"],
    answer: 2,
    explanation:
      "Room means available space here. It is uncountable, so we use much."
  },
  {
    group: "FINAL CHECK",
    context: "Anna asks Natalia about the client meeting.",
    question: "Do you have ___ information about the meeting?",
    options: ["many", "any", "a few"],
    answer: 1,
    explanation:
      "Information is uncountable. Any information is correct in this neutral question."
  },
  {
    group: "FINAL CHECK",
    context: "Natalia is ready to leave.",
    question: "I only need ___ more minutes to finish packing.",
    options: ["a few", "a little", "much"],
    answer: 0,
    explanation:
      "Minutes are countable, so we use a few minutes."
  }
];

// ============================================
// ACTIVITY SECTIONS
// ============================================

const groups = [
  {
    title: "01 · Packing checklist",
    subtitle: "What should Natalia put in her suitcase?",
    icon: Luggage,
    start: 0,
    end: 3
  },
  {
    title: "02 · Before the flight",
    subtitle: "Check the time, luggage, and travel preparations.",
    icon: ClipboardCheck,
    start: 3,
    end: 6
  },
  {
    title: "03 · Final check",
    subtitle: "Make sure everything is ready.",
    icon: CheckCircle2,
    start: 6,
    end: 8
  }
];

// ============================================
// COMPONENT
// ============================================

export default function HomeworkPacking04() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project04StudentName") || "";

  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const answeredCount = Object.keys(checked).length;

  const score = questions.reduce((sum, question, index) => {
    const isCorrect =
      checked[index] && answers[index] === question.answer;

    return sum + (isCorrect ? 1 : 0);
  }, 0);

  const allChecked = answeredCount === total;

  // ==========================================
  // ANSWER HANDLING
  // ==========================================

  function selectAnswer(index, optionIndex) {
    if (checked[index]) return;

    setAnswers((previous) => ({
      ...previous,
      [index]: optionIndex
    }));
  }

  function checkAnswer(index) {
    if (answers[index] === undefined) return;

    setChecked((previous) => ({
      ...previous,
      [index]: true
    }));
  }

  function finishActivity() {
    if (!allChecked) return;

    const result = {
      name: studentName,
      activity: "Packing for Shanghai",
      score,
      total,
      answers,
      completedAt: new Date().toISOString()
    };

    sessionStorage.setItem(
      "project04PackingResult",
      JSON.stringify(result)
    );

    setFinished(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function tryAgain() {
    setAnswers({});
    setChecked({});
    setFinished(false);

    sessionStorage.removeItem("project04PackingResult");
  }

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="app">
      <div className="card p04pack-page">

        {/* BACK BUTTON */}

        <button
          className="backButton"
          onClick={() => navigate("/project04/homework")}
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 04 / HOMEWORK / ACTIVITY 01
        </p>

        {/* HERO */}

        <header className="p04pack-hero">
          <div className="p04pack-heroText">

            <span className="p04pack-pill">
              <Sparkles size={16} />
              MISSION SHANGHAI
            </span>

            <h1>
              Packing for <span>Shanghai</span>
            </h1>

            <p>
              Natalia is going on a business trip.
              Help her prepare everything she needs!
            </p>

            <div className="p04pack-tags">
              <span>8 questions</span>
              <span>Instant feedback</span>
              <span>A2 English</span>
            </div>
          </div>

          <img
            src="/natalia-travel.png"
            alt="Natalia ready for her trip"
            className="p04pack-natalia"
          />
        </header>

        {/* STUDENT NAME */}

        {studentName && (
          <div className="p04pack-student">
            <CheckCircle2 size={17} />
            Working as <strong>{studentName}</strong>
          </div>
        )}

        {!finished ? (
          <main className="p04pack-content">

            {/* PROGRESS */}

            <div className="p04pack-progressHeader">
              <strong>Your packing progress</strong>

              <span>
                {answeredCount} / {total} checked
              </span>
            </div>

            <div
              className="p04pack-progressTrack"
              role="progressbar"
              aria-valuenow={answeredCount}
              aria-valuemin={0}
              aria-valuemax={total}
              aria-label="Questions checked"
            >
              <div
                style={{
                  width: `${(answeredCount / total) * 100}%`
                }}
              />
            </div>

            {/* QUESTION GROUPS */}

            {groups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <section
                  className="p04pack-section"
                  key={group.title}
                >

                  <div className="p04pack-sectionHeading">
                    <div className="p04pack-sectionIcon">
                      <GroupIcon size={23} />
                    </div>

                    <div>
                      <h2>{group.title}</h2>
                      <p>{group.subtitle}</p>
                    </div>
                  </div>

                  {questions
                    .slice(group.start, group.end)
                    .map((question, localIndex) => {
                      const index =
                        group.start + localIndex;

                      const isChecked =
                        Boolean(checked[index]);

                      const isCorrect =
                        answers[index] === question.answer;

                      return (
                        <div
                          className="p04pack-questionCard"
                          key={index}
                        >

                          {/* QUESTION HEADER */}

                          <div className="p04pack-questionTop">
                            <span>
                              QUESTION {index + 1}
                            </span>

                            {isChecked && (
                              <span
                                className={
                                  isCorrect
                                    ? "p04pack-statusCorrect"
                                    : "p04pack-statusWrong"
                                }
                              >
                                {isCorrect
                                  ? "Correct"
                                  : "Review"}
                              </span>
                            )}
                          </div>

                          {/* CONTEXT */}

                          <p className="p04pack-context">
                            {question.context}
                          </p>

                          <h3>{question.question}</h3>

                          {/* OPTIONS */}

                          <div className="p04pack-options">
                            {question.options.map(
                              (option, optionIndex) => {
                                const selected =
                                  answers[index] === optionIndex;

                                const showCorrect =
                                  isChecked &&
                                  optionIndex === question.answer;

                                const showWrong =
                                  isChecked &&
                                  selected &&
                                  !isCorrect;

                                const classes = [
                                  "p04pack-option",

                                  selected && !isChecked
                                    ? "p04pack-selected"
                                    : "",

                                  showCorrect
                                    ? "p04pack-correct"
                                    : "",

                                  showWrong
                                    ? "p04pack-wrong"
                                    : ""
                                ]
                                  .filter(Boolean)
                                  .join(" ");

                                return (
                                  <button
                                    type="button"
                                    key={optionIndex}
                                    className={classes}
                                    disabled={isChecked}
                                    onClick={() =>
                                      selectAnswer(
                                        index,
                                        optionIndex
                                      )
                                    }
                                  >
                                    <span className="p04pack-letter">
                                      {String.fromCharCode(
                                        65 + optionIndex
                                      )}
                                    </span>

                                    <span>{option}</span>

                                    {showCorrect && (
                                      <CheckCircle2 size={19} />
                                    )}

                                    {showWrong && (
                                      <XCircle size={19} />
                                    )}
                                  </button>
                                );
                              }
                            )}
                          </div>

                          {/* CHECK BUTTON OR FEEDBACK */}

                          {!isChecked ? (
                            <button
                              type="button"
                              className="p04pack-checkButton"
                              disabled={
                                answers[index] === undefined
                              }
                              onClick={() =>
                                checkAnswer(index)
                              }
                            >
                              Check answer
                            </button>
                          ) : (
                            <div
                              className={`p04pack-feedback ${
                                isCorrect
                                  ? "p04pack-feedbackCorrect"
                                  : "p04pack-feedbackWrong"
                              }`}
                              role="status"
                            >
                              <div className="p04pack-feedbackTitle">
                                {isCorrect ? (
                                  <CheckCircle2 size={20} />
                                ) : (
                                  <XCircle size={20} />
                                )}

                                <strong>
                                  {isCorrect
                                    ? "Great job!"
                                    : "Let's review!"}
                                </strong>
                              </div>

                              {!isCorrect && (
                                <p>
                                  Correct answer:{" "}
                                  <strong>
                                    {
                                      question.options[
                                        question.answer
                                      ]
                                    }
                                  </strong>
                                </p>
                              )}

                              <p>{question.explanation}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </section>
              );
            })}

            {/* FINISH */}

            <div className="p04pack-bottom">
              <h2>
                {allChecked
                  ? "Your suitcase is ready!"
                  : "Almost ready to travel!"}
              </h2>

              <p>
                {allChecked
                  ? "You've checked every answer. See how you did!"
                  : "Check all eight answers to finish this activity."}
              </p>

              <PrimaryButton
                disabled={!allChecked}
                onClick={finishActivity}
              >
                Finish Activity
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </main>
        ) : (

          /* COMPLETION SCREEN */

          <main className="p04pack-result">
            <div className="p04pack-resultIcon">
              <Sparkles size={32} />
            </div>

            <h2>Activity 01 complete!</h2>

            <p>
              Well done
              {studentName ? `, ${studentName}` : ""}!
              You've helped Natalia get ready for Shanghai.
            </p>

            <div className="p04pack-score">
              {score} <span>/ {total}</span>
            </div>

            <p>
              {score === total
                ? "Perfect! You know your travel grammar."
                : "Good effort! Review the explanations and keep practising."}
            </p>

            <div className="p04pack-resultActions">
              <button
                type="button"
                className="p04pack-retry"
                onClick={tryAgain}
              >
                <RotateCcw size={18} />
                Try Again
              </button>

              <PrimaryButton
                onClick={() =>
                  navigate("/project04/homework/arrival")
                }
              >
                Activity 02
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
