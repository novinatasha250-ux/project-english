
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  RotateCcw,
  Sparkles,
  XCircle,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homeworkRobots05.css";

// ============================================
// PROJECT 05 — HOMEWORK ACTIVITY 01
// MEET THE ROBOTS
// ============================================

const questions = [
  {
    group: "PRICE AND PRODUCTION",
    context:
      "CompactBot costs $18,000. PowerBot costs $25,000.",
    question: "CompactBot is ___ PowerBot.",
    options: [
      "cheaper than",
      "more cheap than",
      "the cheapest",
    ],
    answer: 0,
    explanation:
      "Cheap is a short adjective. Add -er and use than: cheaper than.",
  },
  {
    group: "PRICE AND PRODUCTION",
    context:
      "CompactBot produces 40 units per hour. PowerBot produces 65.",
    question: "PowerBot is ___ CompactBot.",
    options: [
      "fast than",
      "faster than",
      "more faster than",
    ],
    answer: 1,
    explanation:
      "Fast is a short adjective. Use faster than to compare the two robots.",
  },
  {
    group: "PRICE AND PRODUCTION",
    context:
      "The factory wants to produce more units every hour.",
    question:
      "PowerBot has ___ production capacity than CompactBot.",
    options: [
      "higher",
      "more high",
      "highest",
    ],
    answer: 0,
    explanation:
      "High is a short adjective. Its comparative form is higher.",
  },
  {
    group: "SIZE AND ENERGY",
    context:
      "CompactBot is 1.2 m tall. PowerBot is 1.8 m tall.",
    question: "PowerBot is ___ CompactBot.",
    options: [
      "taller than",
      "more tall than",
      "tallest than",
    ],
    answer: 0,
    explanation:
      "Tall is a short adjective. Add -er and use than: taller than.",
  },
  {
    group: "SIZE AND ENERGY",
    context:
      "CompactBot uses 2.0 kW. PowerBot uses 3.5 kW.",
    question:
      "CompactBot has ___ power consumption than PowerBot.",
    options: [
      "lower",
      "more low",
      "lowest",
    ],
    answer: 0,
    explanation:
      "Low is a short adjective. Its comparative form is lower. CompactBot uses less power, although that does not necessarily mean it is more energy-efficient per unit produced.",
  },
  {
    group: "SIZE AND ENERGY",
    context:
      "The factory has limited space for the new machine.",
    question:
      "CompactBot is ___ PowerBot.",
    options: [
      "smaller than",
      "more small than",
      "smallest than",
    ],
    answer: 0,
    explanation:
      "Small is a short adjective. Add -er and use than: smaller than. The height data also show that CompactBot is shorter.",
  },
  {
    group: "MAKING COMPARISONS",
    context:
      "Oksana is comparing the cost of the two robots.",
    question:
      "PowerBot is ___ CompactBot.",
    options: [
      "expensiver than",
      "more expensive than",
      "most expensive than",
    ],
    answer: 1,
    explanation:
      "Expensive is a long adjective, so use more expensive than.",
  },
  {
    group: "MAKING COMPARISONS",
    context:
      "Nikita is choosing a robot for a small workshop.",
    question:
      "CompactBot is a ___ choice if the workshop has a low ceiling.",
    options: [
      "gooder",
      "more good",
      "better",
    ],
    answer: 2,
    explanation:
      "Good is irregular. Its comparative form is better. CompactBot is shorter, so it may fit more easily in a workshop with a low ceiling.",
  },
];

const groups = [
  {
    title: "01 · Price and production",
    subtitle:
      "Compare the cost and production capacity of the robots.",
    icon: Gauge,
    start: 0,
    end: 3,
  },
  {
    title: "02 · Size and energy",
    subtitle:
      "Look at the robots' height and power consumption.",
    icon: Bot,
    start: 3,
    end: 6,
  },
  {
    title: "03 · Making comparisons",
    subtitle:
      "Use comparative adjectives to explain the differences.",
    icon: ClipboardCheck,
    start: 6,
    end: 8,
  },
];

export default function HomeworkRobots05() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project05StudentName") || "";

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

  function selectAnswer(index, optionIndex) {
    if (checked[index]) return;

    setAnswers((previous) => ({
      ...previous,
      [index]: optionIndex,
    }));
  }

  function checkAnswer(index) {
    if (answers[index] === undefined) return;

    setChecked((previous) => ({
      ...previous,
      [index]: true,
    }));
  }

  function finishActivity() {
    if (!allChecked) return;

    const result = {
      name: studentName,
      activity: "Meet the Robots",
      score,
      total,
      answers,
      completedAt: new Date().toISOString(),
    };

    sessionStorage.setItem(
      "project05RobotsResult",
      JSON.stringify(result)
    );

    setFinished(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function tryAgain() {
    setAnswers({});
    setChecked({});
    setFinished(false);

    sessionStorage.removeItem("project05RobotsResult");
  }

  return (
    <div className="app">
      <div className="card p04pack-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project05/homework")}
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 05 / HOMEWORK / ACTIVITY 01
        </p>

        {/* HERO */}

        <header className="p04pack-hero">
          <div className="p04pack-heroText">
            <span className="p04pack-pill">
              <Sparkles size={16} />
              UPGRADE THE FACTORY
            </span>

            <h1>
              Meet the <span>Robots</span>
            </h1>

            <p>
              The factory needs a new industrial robot.
              Compare two machines and help the engineering
              team understand their differences.
            </p>

            <div className="p04pack-tags">
              <span>8 questions</span>
              <span>Instant feedback</span>
              <span>A2 English</span>
            </div>
          </div>

          {/* ENGINEER NATALIA */}

          <img
            src="/natalia-engineer.png"
            alt="Natalia dressed as an engineer"
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

            {/* ROBOT COMPARISON */}

            <section className="p04pack-section">
              <div className="p04pack-sectionHeading">
                <div className="p04pack-sectionIcon">
                  <Bot size={23} />
                </div>

                <div>
                  <h2>Meet CompactBot and PowerBot</h2>

                  <p>
                    Study the specifications before
                    answering the questions.
                  </p>
                </div>
              </div>

              <img
                src="/robots-comparison.png"
                alt="CompactBot costs $18,000, produces 40 units per hour, uses 2.0 kW and is 1.2 m tall. PowerBot costs $25,000, produces 65 units per hour, uses 3.5 kW and is 1.8 m tall."
                className="p05robots-comparisonImage"
              />
            </section>

            {/* PROGRESS */}

            <div className="p04pack-progressHeader">
              <strong>
                Your robot comparison progress
              </strong>

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
                  width: `${(answeredCount / total) * 100}%`,
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
                      const index = group.start + localIndex;

                      const isChecked = Boolean(checked[index]);

                      const isCorrect =
                        answers[index] === question.answer;

                      return (
                        <div
                          className="p04pack-questionCard"
                          key={index}
                        >
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

                          <p className="p04pack-context">
                            {question.context}
                          </p>

                          <h3>{question.question}</h3>

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
                                    : "",
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
                  ? "Robot comparison complete!"
                  : "Ready to compare the robots?"}
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
            <img
              src="/natalia-engineer.png"
              alt="Engineer Natalia celebrating your progress"
              className="p05robots-completionNatalia"
            />

            <div className="p04pack-resultIcon">
              <Sparkles size={32} />
            </div>

            <h2>Activity 01 complete!</h2>

            <p>
              Well done
              {studentName ? `, ${studentName}` : ""}!
              You've compared CompactBot and PowerBot.
            </p>

            <div className="p04pack-score">
              {score} <span>/ {total}</span>
            </div>

            <p>
              {score === total
                ? "Perfect! You can compare technical specifications confidently."
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
                  navigate("/project05/homework/meeting")
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
