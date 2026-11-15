
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Gauge,
  RotateCcw,
  Sparkles,
  XCircle,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homeworkRobots05.css";

// ============================================
// PROJECT 06 — HOMEWORK ACTIVITY 01
// EXPLORE THE MACHINES
// ============================================

const machines = [
  {
    name: "Compact 100",
    price: "$12,000",
    speed: "40 units/hour",
    weight: "450 kg",
    reliability: "92%",
  },
  {
    name: "Flex 200",
    price: "$16,000",
    speed: "60 units/hour",
    weight: "650 kg",
    reliability: "97%",
  },
  {
    name: "Power 300",
    price: "$22,000",
    speed: "90 units/hour",
    weight: "900 kg",
    reliability: "95%",
  },
];

const questions = [
  {
    context:
      "Compact 100 costs $12,000. Flex 200 costs $16,000. Power 300 costs $22,000.",
    question: "Compact 100 is ___ machine.",
    options: [
      "the cheapest",
      "cheaper than",
      "the most cheap",
    ],
    answer: 0,
    explanation:
      "Compact 100 has the lowest price. Cheap → the cheapest.",
  },
  {
    context:
      "Power 300 produces 90 units per hour. Flex 200 produces 60, and Compact 100 produces 40.",
    question: "Power 300 is ___ machine.",
    options: [
      "the most fast",
      "the fastest",
      "faster than",
    ],
    answer: 1,
    explanation:
      "Power 300 has the highest production speed. Fast → the fastest.",
  },
  {
    context:
      "The machines weigh 450 kg, 650 kg, and 900 kg.",
    question: "Power 300 is ___ machine.",
    options: [
      "the heavyest",
      "the most heavy",
      "the heaviest",
    ],
    answer: 2,
    explanation:
      "Heavy ends in consonant + y. Change y to i: the heaviest.",
  },
  {
    context:
      "Compact 100 weighs 450 kg. The other machines weigh 650 kg and 900 kg.",
    question: "Compact 100 is ___ machine.",
    options: [
      "the lightest",
      "the most light",
      "lighter than",
    ],
    answer: 0,
    explanation:
      "Compact 100 has the lowest weight. Light → the lightest.",
  },
  {
    context:
      "The reliability ratings are 92%, 97%, and 95%.",
    question: "Flex 200 is ___ machine.",
    options: [
      "the reliablest",
      "the most reliable",
      "more reliable than",
    ],
    answer: 1,
    explanation:
      "Flex 200 has the highest reliability rating. Use the most reliable.",
  },
  {
    context:
      "Power 300 costs $22,000. The other machines cost $12,000 and $16,000.",
    question: "Power 300 is ___ machine.",
    options: [
      "the expensivest",
      "more expensive",
      "the most expensive",
    ],
    answer: 2,
    explanation:
      "Expensive is a longer adjective. Use the most expensive.",
  },
  {
    context:
      "Compact 100 produces 40 units per hour, Flex 200 produces 60, and Power 300 produces 90.",
    question: "Compact 100 has ___ production speed.",
    options: [
      "the lowest",
      "the most low",
      "lower than",
    ],
    answer: 0,
    explanation:
      "Compact 100 has the lowest production speed. Low → the lowest.",
  },
  {
    context:
      "The factory wants a machine with the highest reliability rating.",
    question: "Which machine is the best choice for this priority?",
    options: [
      "Compact 100",
      "Flex 200",
      "Power 300",
    ],
    answer: 1,
    explanation:
      "Flex 200 has the highest reliability rating at 97%.",
  },
];

const groups = [
  {
    title: "01 · Price and production",
    subtitle: "Identify the cheapest and fastest machines.",
    icon: Gauge,
    start: 0,
    end: 2,
  },
  {
    title: "02 · Weight and reliability",
    subtitle: "Compare machine weight and reliability ratings.",
    icon: Factory,
    start: 2,
    end: 5,
  },
  {
    title: "03 · Making decisions",
    subtitle: "Use superlatives to explain the specifications.",
    icon: ClipboardCheck,
    start: 5,
    end: 8,
  },
];

export default function HomeworkMachines06() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project06StudentName") || "";

  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const answeredCount = Object.keys(checked).length;

  const score = questions.reduce((sum, question, index) => {
    const correct =
      checked[index] && answers[index] === question.answer;

    return sum + (correct ? 1 : 0);
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
      activity: "Explore the Machines",
      score,
      total,
      answers,
      completedAt: new Date().toISOString(),
    };

    sessionStorage.setItem(
      "project06MachinesResult",
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

    sessionStorage.removeItem("project06MachinesResult");
  }

  return (
    <div className="app">
      <div className="card p04pack-page">

        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project06/homework")}
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 06 / HOMEWORK / ACTIVITY 01
        </p>

        <header className="p04pack-hero">
          <div className="p04pack-heroText">
            <span className="p04pack-pill">
              <Sparkles size={16} />
              THE PRODUCTION CHALLENGE
            </span>

            <h1>
              Explore the <span>Machines</span>
            </h1>

            <p>
              The factory needs new equipment.
              Study three machines and help the
              engineering team identify the best
              options for different priorities.
            </p>

            <div className="p04pack-tags">
              <span>8 questions</span>
              <span>Instant feedback</span>
              <span>A2 English</span>
            </div>
          </div>

          <img
            src="/natalia-engineer.png"
            alt="Natalia dressed as an engineer"
            className="p04pack-natalia"
          />
        </header>

        {studentName && (
          <div className="p04pack-student">
            <CheckCircle2 size={17} />
            Working as <strong>{studentName}</strong>
          </div>
        )}

        {!finished ? (
          <main className="p04pack-content">

            {/* MACHINE SPECIFICATIONS */}

            <section className="p04pack-section">
              <div className="p04pack-sectionHeading">
                <div className="p04pack-sectionIcon">
                  <Factory size={23} />
                </div>

                <div>
                  <h2>Meet the three machines</h2>
                  <p>
                    Study the specifications before
                    answering the questions.
                  </p>
                </div>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "left",
                    minWidth: "540px",
                  }}
                >
                  <thead>
                    <tr>
                      <th style={headerStyle}>Machine</th>
                      <th style={headerStyle}>Price</th>
                      <th style={headerStyle}>Speed</th>
                      <th style={headerStyle}>Weight</th>
                      <th style={headerStyle}>Reliability</th>
                    </tr>
                  </thead>

                  <tbody>
                    {machines.map((machine) => (
                      <tr key={machine.name}>
                        <td style={cellStyle}>
                          <strong>{machine.name}</strong>
                        </td>
                        <td style={cellStyle}>{machine.price}</td>
                        <td style={cellStyle}>{machine.speed}</td>
                        <td style={cellStyle}>{machine.weight}</td>
                        <td style={cellStyle}>{machine.reliability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* PROGRESS */}

            <div className="p04pack-progressHeader">
              <strong>Your equipment analysis progress</strong>
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
                            <span>QUESTION {index + 1}</span>

                            {isChecked && (
                              <span
                                className={
                                  isCorrect
                                    ? "p04pack-statusCorrect"
                                    : "p04pack-statusWrong"
                                }
                              >
                                {isCorrect ? "Correct" : "Review"}
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
                              onClick={() => checkAnswer(index)}
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
                                    {question.options[question.answer]}
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
                  ? "Equipment analysis complete!"
                  : "Ready to explore the machines?"}
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
              You've explored all three machines.
            </p>

            <div className="p04pack-score">
              {score} <span>/ {total}</span>
            </div>

            <p>
              {score === total
                ? "Perfect! You can identify the best equipment options confidently."
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
                  navigate("/project06/homework/meeting")
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

const headerStyle = {
  padding: "14px 12px",
  background: "#eee9fb",
  color: "#342b59",
  borderBottom: "2px solid #d9cef5",
  fontSize: "14px",
};

const cellStyle = {
  padding: "14px 12px",
  borderBottom: "1px solid #e8e5ef",
  fontSize: "14px",
};
