
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  RotateCcw,
  Sparkles,
  XCircle,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homeworkPacking04.css";
import "../styles/learn/homeworkReport05.css";

// ============================================
// PROJECT 05 — HOMEWORK ACTIVITY 03
// FIX THE TECHNICAL REPORT
// ============================================

const corrections = [
  {
    before: "CompactBot is more cheap than PowerBot.",
    error: "more cheap",
    start: "CompactBot is ",
    after: " than PowerBot.",
    answers: ["cheaper"],
    explanation:
      "Cheap is a short adjective. Use cheaper, not more cheap.",
  },
  {
    before: "PowerBot is more fast than CompactBot.",
    error: "more fast",
    start: "PowerBot is ",
    after: " than CompactBot.",
    answers: ["faster"],
    explanation:
      "Fast is a short adjective. Add -er to make faster.",
  },
  {
    before: "PowerBot is biger than CompactBot.",
    error: "biger",
    start: "PowerBot is ",
    after: " than CompactBot.",
    answers: ["bigger"],
    explanation:
      "Big ends in consonant + vowel + consonant. Double the final consonant: bigger.",
  },
  {
    before: "CompactBot is more small than PowerBot.",
    error: "more small",
    start: "CompactBot is ",
    after: " than PowerBot.",
    answers: ["smaller"],
    explanation:
      "Small is a short adjective. Use smaller.",
  },
  {
    before: "PowerBot is expensiver than CompactBot.",
    error: "expensiver",
    start: "PowerBot is ",
    after: " than CompactBot.",
    answers: ["more expensive"],
    explanation:
      "Expensive is a long adjective. Use more expensive.",
  },
  {
    before: "CompactBot is more low in power consumption.",
    error: "more low",
    start: "CompactBot has ",
    after: " power consumption than PowerBot.",
    answers: ["lower"],
    explanation:
      "Low becomes lower. CompactBot uses 2.0 kW, compared with PowerBot's 3.5 kW.",
  },
  {
    before: "PowerBot has a more high production capacity.",
    error: "more high",
    start: "PowerBot has a ",
    after: " production capacity than CompactBot.",
    answers: ["higher"],
    explanation:
      "High becomes higher. PowerBot produces 65 units per hour.",
  },
  {
    before: "CompactBot is a gooder choice for a small workshop.",
    error: "gooder",
    start: "CompactBot is a ",
    after: " choice for a small workshop.",
    answers: ["better"],
    explanation:
      "Good has an irregular comparative form: better.",
  },
];

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/g, "");
}

export default function HomeworkReport05() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project05StudentName") || "";

  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});
  const [finished, setFinished] = useState(false);

  const total = corrections.length;
  const answeredCount = Object.keys(checked).length;

  const score = corrections.reduce((sum, item, index) => {
    const isCorrect =
      checked[index] &&
      item.answers.some(
        (answer) =>
          normalize(answer) ===
          normalize(answers[index] || "")
      );

    return sum + (isCorrect ? 1 : 0);
  }, 0);

  const allChecked = answeredCount === total;

  function updateAnswer(index, value) {
    if (checked[index]) return;

    setAnswers((previous) => ({
      ...previous,
      [index]: value,
    }));
  }

  function checkAnswer(index) {
    if (!answers[index]?.trim()) return;

    setChecked((previous) => ({
      ...previous,
      [index]: true,
    }));
  }

  function finishActivity() {
    if (!allChecked) return;

    const results = corrections.map((item, index) => ({
      original: item.before,
      answer: answers[index] || "",
      correct: item.answers.some(
        (answer) =>
          normalize(answer) ===
          normalize(answers[index] || "")
      ),
      expected: item.answers[0],
    }));

    sessionStorage.setItem(
      "project05ReportResult",
      JSON.stringify({
        name: studentName,
        activity: "Fix the Technical Report",
        score,
        total,
        answers: results,
        completedAt: new Date().toISOString(),
      })
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

    sessionStorage.removeItem("project05ReportResult");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="app">
      <div className="card p04pack-page p05report-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() =>
            navigate("/project05/homework/meeting")
          }
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 05 / HOMEWORK / ACTIVITY 03
        </p>

        {/* HERO */}

        <header className="p04pack-hero">
          <div className="p04pack-heroText">
            <span className="p04pack-pill">
              <ClipboardCheck size={16} />
              ENGINEERING QUALITY CHECK
            </span>

            <h1>
              Fix the <span>Technical Report</span>
            </h1>

            <p>
              One of your colleagues has written a report
              comparing CompactBot and PowerBot, but there
              are grammar mistakes. Help correct the report
              before the manager reads it!
            </p>

            <div className="p04pack-tags">
              <span>8 corrections</span>
              <span>Writing practice</span>
              <span>A2 Grammar</span>
            </div>
          </div>

          <img
            src="/natalia-engineer.png"
            alt="Engineer Natalia helping check the report"
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

            {/* REPORT INTRODUCTION */}

            <section className="p05report-document">
              <div className="p05report-documentHeader">
                <FileText size={26} />

                <div>
                  <span>INTERNAL ENGINEERING REPORT</span>

                  <h2>
                    Robot Comparison — Draft 01
                  </h2>

                  <p>Prepared by: Colleague</p>
                </div>
              </div>

              <div className="p05report-documentBody">
                <p>
                  <strong>To:</strong> Factory Manager
                </p>

                <p>
                  <strong>Subject:</strong> CompactBot vs PowerBot
                </p>

                <p>
                  Our engineering team has compared two
                  industrial robots. The report below
                  contains eight grammar mistakes.
                  Please correct them before submission.
                </p>
              </div>
            </section>

            {/* PROGRESS */}

            <div className="p04pack-progressHeader">
              <strong>
                Report correction progress
              </strong>

              <span>
                {answeredCount} / {total} checked
              </span>
            </div>

            <div
              className="p04pack-progressTrack"
              role="progressbar"
              aria-label="Corrections checked"
              aria-valuenow={answeredCount}
              aria-valuemin={0}
              aria-valuemax={total}
            >
              <div
                style={{
                  width: `${(answeredCount / total) * 100}%`,
                }}
              />
            </div>

            {/* CORRECTION CARDS */}

            <section className="p05report-corrections">
              <div className="p05report-sectionHeading">
                <span>YOUR TASK</span>

                <h2>
                  Find and correct the mistakes
                </h2>

                <p>
                  Read each sentence. The incorrect
                  expression is highlighted. Type the
                  correct comparative form.
                </p>
              </div>

              {corrections.map((item, index) => {
                const isChecked = Boolean(checked[index]);

                const isCorrect = item.answers.some(
                  (answer) =>
                    normalize(answer) ===
                    normalize(answers[index] || "")
                );

                return (
                  <div
                    className="p05report-correctionCard"
                    key={index}
                  >
                    <div className="p05report-cardTop">
                      <span>
                        SENTENCE {index + 1}
                      </span>

                      {isChecked && (
                        <span
                          className={
                            isCorrect
                              ? "p05report-statusCorrect"
                              : "p05report-statusWrong"
                          }
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 size={15} />
                              Correct
                            </>
                          ) : (
                            <>
                              <XCircle size={15} />
                              Review
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    {/* ORIGINAL SENTENCE */}

                    <p className="p05report-original">
                      {item.before.split(item.error)[0]}
                      <mark>{item.error}</mark>
                      {item.before.split(item.error)[1]}
                    </p>

                    {/* STUDENT CORRECTION */}

                    <div className="p05report-answerArea">
                      <label
                        htmlFor={`p05report-answer-${index}`}
                      >
                        Your correction
                      </label>

                      <div className="p05report-sentence">
                        <span>{item.start}</span>

                        <input
                          id={`p05report-answer-${index}`}
                          type="text"
                          value={answers[index] || ""}
                          placeholder="Type the correct form"
                          disabled={isChecked}
                          onChange={(event) =>
                            updateAnswer(
                              index,
                              event.target.value
                            )
                          }
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              checkAnswer(index);
                            }
                          }}
                        />

                        <span>{item.after}</span>
                      </div>
                    </div>

                    {/* CHECK / FEEDBACK */}

                    {!isChecked ? (
                      <button
                        type="button"
                        className="p05report-checkButton"
                        disabled={!answers[index]?.trim()}
                        onClick={() => checkAnswer(index)}
                      >
                        Check correction
                      </button>
                    ) : (
                      <div
                        className={`p05report-feedback ${
                          isCorrect
                            ? "p05report-feedbackCorrect"
                            : "p05report-feedbackWrong"
                        }`}
                        role="status"
                      >
                        <img
                          src={
                            isCorrect
                              ? "/natalia-correct.png"
                              : "/natalia-wrong.png"
                          }
                          alt="Natalia giving feedback"
                        />

                        <div>
                          <strong>
                            {isCorrect
                              ? "Correct!"
                              : "Not quite!"}
                          </strong>

                          {!isCorrect && (
                            <p>
                              Correct answer:{" "}
                              <b>{item.answers[0]}</b>
                            </p>
                          )}

                          <p>{item.explanation}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>

            {/* FINISH */}

            <div className="p04pack-bottom">
              <h2>
                {allChecked
                  ? "The report has been reviewed!"
                  : "Let's improve the report!"}
              </h2>

              <p>
                {allChecked
                  ? "You've reviewed all eight sentences."
                  : "Check all eight corrections to finish."}
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
              alt="Engineer Natalia"
              className="p05report-completionNatalia"
            />

            <div className="p04pack-resultIcon">
              <Sparkles size={32} />
            </div>

            <h2>Activity 03 complete!</h2>

            <p>
              Great work
              {studentName ? `, ${studentName}` : ""}!
              You've reviewed your colleague's
              technical report.
            </p>

            <div className="p04pack-score">
              {score} <span>/ {total}</span>
            </div>

            <p>
              {score === total
                ? "Excellent! All eight corrections were accurate."
                : "Good effort! Review the corrections before writing your recommendation."}
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
                  navigate(
                    "/project05/homework/recommendation"
                  )
                }
              >
                Activity 04
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
