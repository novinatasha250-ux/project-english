
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Bot,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Lightbulb,
  Save,
  Send,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";

import "../styles/learn/homeworkPacking04.css";
import "../styles/learn/homeworkRecommendation05.css";

/* ============================================
   PROJECT 05 — FINAL RECOMMENDATION
   ============================================ */

// Existing Google Apps Script endpoint.
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwEHJ_Ned3ZRvj8LdPILREkmszw8kWyOcQjTknfdYmcgsSIqXamOvnscstFv_q_POaG/exec";

const DRAFT_KEY = "project05RecommendationDraft";
const RESULT_KEY = "project05RecommendationResult";
const SUBMITTED_KEY = "project05Submitted";

const specifications = [
  {
    label: "Price",
    compact: "$18,000",
    power: "$25,000",
  },
  {
    label: "Production",
    compact: "40 units/hour",
    power: "65 units/hour",
  },
  {
    label: "Power consumption",
    compact: "2.0 kW",
    power: "3.5 kW",
  },
  {
    label: "Height",
    compact: "1.2 m",
    power: "1.8 m",
  },
];

const comparativeWords = [
  "cheaper",
  "faster",
  "slower",
  "smaller",
  "bigger",
  "taller",
  "shorter",
  "higher",
  "lower",
  "better",
  "worse",
  "more expensive",
  "less expensive",
  "more suitable",
  "less suitable",
  "more powerful",
  "less powerful",
  "more efficient",
  "less efficient",
];

const checklistItems = [
  {
    id: "comparison",
    label: "I compared CompactBot and PowerBot.",
  },
  {
    id: "choice",
    label: "I clearly recommended one robot.",
  },
  {
    id: "reasons",
    label: "I explained the reasons for my decision.",
  },
  {
    id: "review",
    label: "I checked my grammar and spelling.",
  },
];

/* ============================================
   HELPERS
   ============================================ */

function readJSON(key) {
  try {
    return JSON.parse(
      sessionStorage.getItem(key) || "null"
    );
  } catch {
    return null;
  }
}

function countWords(text) {
  const trimmed = text.trim();

  return trimmed
    ? trimmed.split(/\s+/).length
    : 0;
}

function detectComparatives(text) {
  const lower = text.toLowerCase();

  return comparativeWords.filter((word) => {
    const escaped = word.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    const pattern = new RegExp(
      `\\b${escaped}\\b`,
      "i"
    );

    return pattern.test(lower);
  });
}

function scoreText(result) {
  if (
    !result ||
    typeof result.score !== "number" ||
    typeof result.total !== "number"
  ) {
    return "Not recorded";
  }

  return `${result.score} / ${result.total}`;
}

/* ============================================
   COMPONENT
   ============================================ */

export default function HomeworkRecommendation05() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage
      .getItem("project05StudentName")
      ?.trim() || "";

  const [initialDraft] = useState(
    () => readJSON(DRAFT_KEY)
  );

  const [choice, setChoice] = useState(
    initialDraft?.choice || ""
  );

  const [reasonOne, setReasonOne] = useState(
    initialDraft?.reasonOne || ""
  );

  const [reasonTwo, setReasonTwo] = useState(
    initialDraft?.reasonTwo || ""
  );

  const [writing, setWriting] = useState(
    initialDraft?.writing || ""
  );

  const [checklist, setChecklist] = useState(
    initialDraft?.checklist || {}
  );

  const [showTips, setShowTips] = useState(true);
  const [savedNotice, setSavedNotice] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const robots = readJSON("project05RobotsResult");
  const meeting = readJSON("project05MeetingResult");
  const report = readJSON("project05ReportResult");

  const wordCount = countWords(writing);
  const comparativesUsed = detectComparatives(writing);
  const hasComparatives = comparativesUsed.length >= 4;

  // The comparative checker is guidance only.
  // It does not determine whether writing is correct.

  const canSubmit =
    Boolean(studentName) &&
    Boolean(choice) &&
    Boolean(reasonOne.trim()) &&
    Boolean(reasonTwo.trim()) &&
    Boolean(writing.trim()) &&
    !submitting;

  /* ============================================
     REDIRECT IF ALREADY SUBMITTED
     ============================================ */

  useEffect(() => {
    if (
      sessionStorage.getItem(SUBMITTED_KEY) === "true"
    ) {
      navigate("/project05/homework/complete", {
        replace: true,
      });
    }
  }, [navigate]);

  /* ============================================
     AUTO-SAVE DRAFT
     ============================================ */

  useEffect(() => {
    if (
      sessionStorage.getItem(SUBMITTED_KEY) === "true"
    ) {
      return;
    }

    sessionStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({
        choice,
        reasonOne,
        reasonTwo,
        writing,
        checklist,
      })
    );
  }, [
    choice,
    reasonOne,
    reasonTwo,
    writing,
    checklist,
  ]);

  function saveDraft() {
    sessionStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({
        choice,
        reasonOne,
        reasonTwo,
        writing,
        checklist,
      })
    );

    setSavedNotice(true);
  }

  /* ============================================
     SUBMIT HOMEWORK
     ============================================ */

  async function submitRecommendation() {
    if (submitting) return;

    if (!canSubmit) {
      setError(
        "Please select a robot, complete both reasons, " +
        "and write your recommendation before submitting."
      );
      return;
    }

    setSubmitting(true);
    setError("");

    const finalWriting = writing.trim();

    const data = {
      student: studentName,
      project: "Project 05",

      q1: `Meet the Robots: ${scoreText(robots)}`,

      q2: `Engineering Meeting: ${scoreText(meeting)}`,

      q3: `Technical Report: ${scoreText(report)}`,

      writing:
        `Recommended robot: ${choice}\n\n` +
        `Reason 1: ${reasonOne.trim()}\n` +
        `Reason 2: ${reasonTwo.trim()}\n\n` +
        `Final recommendation:\n${finalWriting}`,

      // Retained for compatibility with
      // the existing spreadsheet endpoint.
      email: finalWriting,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      // With no-cors, the browser cannot verify
      // that Google Sheets saved the submission.

      sessionStorage.setItem(
        RESULT_KEY,
        JSON.stringify({
          name: studentName,
          activity: "Your Final Recommendation",
          choice,
          reasons: [
            reasonOne.trim(),
            reasonTwo.trim(),
          ],
          writing: finalWriting,
          wordCount,
          comparatives: comparativesUsed,
          completedAt: new Date().toISOString(),
          submissionStatus: "request-sent-unverified",
        })
      );

      sessionStorage.setItem(
        SUBMITTED_KEY,
        "true"
      );

      sessionStorage.removeItem(DRAFT_KEY);

      // Go to the dedicated Project 05
      // Homework Complete page.
      navigate("/project05/homework/complete", {
        replace: true,
      });
    } catch (err) {
      console.error(
        "Project 05 submission error:",
        err
      );

      setError(
        "We couldn't send your homework request. " +
        "Please check your internet connection " +
        "and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  /* ============================================
     PAGE
     ============================================ */

  return (
    <div className="app">
      <div className="card p04pack-page p05rec-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() =>
            navigate("/project05/homework/report")
          }
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 05 / HOMEWORK / ACTIVITY 04
        </p>

        {/* HERO */}

        <header className="p04pack-hero">
          <div className="p04pack-heroText">
            <span className="p04pack-pill">
              <Sparkles size={16} />
              FINAL FACTORY MISSION
            </span>

            <h1>
              Your Final{" "}
              <span>Recommendation</span>
            </h1>

            <p>
              The factory manager needs your advice!
              Compare CompactBot and PowerBot,
              recommend the most suitable robot,
              and explain your decision using
              comparative adjectives.
            </p>

            <div className="p04pack-tags">
              <span>Final mission</span>
              <span>4+ comparatives</span>
              <span>Workplace writing</span>
            </div>
          </div>

          <img
            src="/natalia-engineer.png"
            alt="Engineer Natalia"
            className="p04pack-natalia"
          />
        </header>

        {/* STUDENT */}

        {studentName && (
          <div className="p04pack-student">
            <CheckCircle2 size={17} />
            Working as{" "}
            <strong>{studentName}</strong>
          </div>
        )}

        <main className="p04pack-content">

          {/* ==================================
              MANAGER MESSAGE
              ================================== */}

          <section className="p05rec-brief">
            <div className="p05rec-sectionTitle">
              <ClipboardCheck size={23} />

              <div>
                <h2>Your mission</h2>
                <p>
                  Read the manager's instructions.
                </p>
              </div>
            </div>

            <div className="p05rec-managerMessage">
              <span>
                MESSAGE FROM THE FACTORY MANAGER
              </span>

              <p>
                Our factory needs a new industrial
                robot. We have a budget of{" "}
                <strong>$26,000</strong>, but our
                workshop has limited space.
              </p>

              <p>
                Please compare CompactBot and
                PowerBot and recommend one of them.
                Explain your decision using at
                least four different comparative
                expressions.
              </p>

              <p className="p05rec-managerSignature">
                — Factory Manager
              </p>
            </div>
          </section>

          {/* ==================================
              ROBOT SPECIFICATIONS
              ================================== */}

          <section className="p05rec-specifications">
            <div className="p05rec-sectionTitle">
              <Bot size={23} />

              <div>
                <h2>Compare the robots</h2>
                <p>
                  Review the technical specifications.
                </p>
              </div>
            </div>

            <div className="p05rec-tableWrap">
              <table className="p05rec-table">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>CompactBot</th>
                    <th>PowerBot</th>
                  </tr>
                </thead>

                <tbody>
                  {specifications.map((item) => (
                    <tr key={item.label}>
                      <th scope="row">
                        {item.label}
                      </th>
                      <td>{item.compact}</td>
                      <td>{item.power}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="p05rec-specNote">
              Note: Lower power consumption alone
              does not prove better energy
              efficiency per unit produced.
            </p>
          </section>

          {/* ==================================
              STEP 1 — PLANNING
              ================================== */}

          <section className="p05rec-planning">
            <div className="p05rec-sectionTitle">
              <Lightbulb size={23} />

              <div>
                <h2>
                  Step 1 · Plan your recommendation
                </h2>
                <p>
                  Choose a robot and explain why.
                </p>
              </div>
            </div>

            <p className="p05rec-fieldLabel">
              Which robot do you recommend?
            </p>

            <div className="p05rec-choiceGrid">
              {["CompactBot", "PowerBot"].map(
                (robot) => (
                  <button
                    key={robot}
                    type="button"
                    className={`p05rec-choice ${
                      choice === robot
                        ? "p05rec-choiceSelected"
                        : ""
                    }`}
                    onClick={() => {
                      setChoice(robot);
                      setSavedNotice(false);
                      setError("");
                    }}
                    aria-pressed={choice === robot}
                  >
                    <Bot size={22} />

                    <strong>{robot}</strong>

                    <span>
                      {robot === "CompactBot"
                        ? "Cheaper · Shorter"
                        : "Faster · Higher production"}
                    </span>

                    {choice === robot && (
                      <CheckCircle2 size={19} />
                    )}
                  </button>
                )
              )}
            </div>

            <div className="p05rec-planFields">
              <label>
                Reason 1
                <input
                  value={reasonOne}
                  onChange={(event) => {
                    setReasonOne(event.target.value);
                    setSavedNotice(false);
                    setError("");
                  }}
                  placeholder="What is the first advantage?"
                />
              </label>

              <label>
                Reason 2
                <input
                  value={reasonTwo}
                  onChange={(event) => {
                    setReasonTwo(event.target.value);
                    setSavedNotice(false);
                    setError("");
                  }}
                  placeholder="What is the second advantage?"
                />
              </label>
            </div>
          </section>

          {/* ==================================
              STEP 2 — WRITING
              ================================== */}

          <section className="p05rec-writingSection">
            <div className="p05rec-sectionTitle">
              <FileText size={23} />

              <div>
                <h2>
                  Step 2 · Write your recommendation
                </h2>

                <p>
                  Write to the factory manager.
                  Explain your decision and use
                  at least four different
                  comparative expressions.
                  There is no word limit.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="p05rec-tipsToggle"
              onClick={() =>
                setShowTips((previous) => !previous)
              }
              aria-expanded={showTips}
            >
              <Lightbulb size={18} />

              {showTips
                ? "Hide writing support"
                : "Show writing support"}
            </button>

            {showTips && (
              <div className="p05rec-tips">
                <strong>
                  Useful expressions
                </strong>

                <ul>
                  <li>
                    I recommend ... because ...
                  </li>
                  <li>
                    ... is cheaper than ...
                  </li>
                  <li>
                    ... has a higher production capacity.
                  </li>
                  <li>
                    However, the other robot is ...
                  </li>
                  <li>
                    ... is a better choice for our factory.
                  </li>
                </ul>

                <p>
                  Remember to explain your choice,
                  not just list the specifications.
                </p>
              </div>
            )}

            <label
              className="p05rec-fieldLabel"
              htmlFor="p05rec-writing"
            >
              Your recommendation to the manager
            </label>

            <textarea
              id="p05rec-writing"
              className="p05rec-textarea"
              value={writing}
              onChange={(event) => {
                setWriting(event.target.value);
                setSavedNotice(false);
                setError("");
              }}
              placeholder={
                "Dear Manager,\n\n" +
                "I recommend..."
              }
              rows={9}
            />

            {/* COMPARATIVE COUNTER */}

            <div className="p05rec-writingStats">
              <div
                className={`p05rec-stat ${
                  hasComparatives
                    ? "p05rec-statGood"
                    : ""
                }`}
              >
                <strong>
                  {comparativesUsed.length} / 4
                </strong>

                <span>
                  Different comparatives detected
                </span>
              </div>
            </div>

            {comparativesUsed.length > 0 && (
              <div className="p05rec-detected">
                <strong>Detected:</strong>{" "}
                {comparativesUsed.join(", ")}
              </div>
            )}

            <p className="p05rec-checkNote">
              This checker identifies comparative
              expressions, but it cannot assess
              whether they are used correctly.
              Check that your sentences make sense
              and support your recommendation.
            </p>
          </section>

          {/* ==================================
              STEP 3 — SELF-REVIEW
              ================================== */}

          <section className="p05rec-review">
            <div className="p05rec-sectionTitle">
              <CheckCircle2 size={23} />

              <div>
                <h2>
                  Step 3 · Check your work
                </h2>

                <p>
                  Review your recommendation
                  before submitting.
                </p>
              </div>
            </div>

            <div className="p05rec-checklist">
              {checklistItems.map((item) => (
                <label
                  key={item.id}
                  className="p05rec-checklistItem"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(
                      checklist[item.id]
                    )}
                    onChange={(event) =>
                      setChecklist((previous) => ({
                        ...previous,
                        [item.id]:
                          event.target.checked,
                      }))
                    }
                  />

                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </section>

          {/* ==================================
              SAVE DRAFT
              ================================== */}

          <div className="p05rec-actions">
            <button
              type="button"
              className="p05rec-saveButton"
              onClick={saveDraft}
            >
              <Save size={18} />
              Save Draft
            </button>

            {savedNotice && (
              <span className="p05rec-savedNotice">
                <CheckCircle2 size={16} />
                Saved in this browser session
              </span>
            )}
          </div>

          {/* ==================================
              VALIDATION MESSAGES
              ================================== */}

          {error && (
            <div
              className="p05rec-error"
              role="alert"
            >
              {error}
            </div>
          )}

          {!studentName && (
            <p
              className="p05rec-error"
              role="alert"
            >
              Your name is missing. Return to
              the homework introduction and
              enter your name.
            </p>
          )}

          {/* ==================================
              SUBMIT HOMEWORK
              ================================== */}

          <div className="p04pack-bottom">
            <h2>
              Ready to finish your mission?
            </h2>

            <p>
              Your recommendation and activity
              scores will be sent to Natalia.
            </p>

            <PrimaryButton
              disabled={!canSubmit}
              onClick={submitRecommendation}
            >
              {submitting
                ? "Submitting..."
                : "Submit Homework"}

              {!submitting && (
                <Send size={18} />
              )}
            </PrimaryButton>

            {!canSubmit && !submitting && (
              <p className="p05rec-checkNote">
                To submit, select a robot,
                write two reasons, and complete
                your recommendation.
              </p>
            )}

            {submitting && (
              <p
                className="p05rec-checkNote"
                role="status"
              >
                Sending your homework request...
              </p>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
