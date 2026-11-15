
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  Lightbulb,
  Save,
  Send,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homeworkPacking04.css";
import "../styles/learn/homeworkRecommendation05.css";

// ============================================
// PROJECT 06 — FINAL RECOMMENDATION
// ============================================

// Existing Google Apps Script endpoint.
// The same spreadsheet receives Project 05 and 06
// submissions, distinguished by the project field.

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwEHJ_Ned3ZRvj8LdPILREkmszw8kWyOcQjTknfdYmcgsSIqXamOvnscstFv_q_POaG/exec";

const DRAFT_KEY = "project06RecommendationDraft";
const RESULT_KEY = "project06RecommendationResult";
const SUBMITTED_KEY = "project06Submitted";

const specifications = [
  {
    label: "Price",
    compact: "$12,000",
    flex: "$16,000",
    power: "$22,000",
  },
  {
    label: "Production speed",
    compact: "40 units/hour",
    flex: "60 units/hour",
    power: "90 units/hour",
  },
  {
    label: "Weight",
    compact: "450 kg",
    flex: "650 kg",
    power: "900 kg",
  },
  {
    label: "Reliability",
    compact: "92%",
    flex: "97%",
    power: "95%",
  },
];

const machineOptions = [
  {
    name: "Compact 100",
    description: "Cheapest · Lightest",
  },
  {
    name: "Flex 200",
    description: "Most reliable · Within budget",
  },
  {
    name: "Power 300",
    description: "Fastest · Over budget",
  },
];

const superlativeWords = [
  "cheapest",
  "fastest",
  "slowest",
  "lightest",
  "heaviest",
  "lowest",
  "highest",
  "best",
  "worst",
  "most expensive",
  "least expensive",
  "most reliable",
  "least reliable",
  "most suitable",
  "least suitable",
];

const checklistItems = [
  {
    id: "comparison",
    label: "I compared the three machines.",
  },
  {
    id: "choice",
    label: "I clearly recommended one machine.",
  },
  {
    id: "reasons",
    label: "I explained my reasons using superlatives.",
  },
  {
    id: "budget",
    label: "I considered the budget and reliability.",
  },
  {
    id: "review",
    label: "I checked my grammar and spelling.",
  },
];

// ============================================
// HELPERS
// ============================================

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

  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function detectSuperlatives(text) {
  const lower = text.toLowerCase();

  return superlativeWords.filter((word) => {
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

// ============================================
// COMPONENT
// ============================================

export default function HomeworkRecommendation06() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage
      .getItem("project06StudentName")
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

  const machines = readJSON("project06MachinesResult");
  const meeting = readJSON("project06MeetingResult");
  const report = readJSON("project06ReportResult");

  const wordCount = countWords(writing);
  const superlativesUsed = detectSuperlatives(writing);
  const hasSuperlatives = superlativesUsed.length >= 4;

  // This checker is guidance only.
  // It cannot determine whether the grammar is correct.

  const canSubmit =
    Boolean(studentName) &&
    Boolean(choice) &&
    Boolean(reasonOne.trim()) &&
    Boolean(reasonTwo.trim()) &&
    Boolean(writing.trim()) &&
    !submitting;

  // ============================================
  // REDIRECT IF ALREADY SUBMITTED
  // ============================================

  useEffect(() => {
    if (
      sessionStorage.getItem(SUBMITTED_KEY) === "true"
    ) {
      navigate("/project06/homework/complete", {
        replace: true,
      });
    }
  }, [navigate]);

  // ============================================
  // AUTO-SAVE DRAFT
  // ============================================

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

  // ============================================
  // SUBMIT HOMEWORK
  // ============================================

  async function submitRecommendation() {
    if (submitting) return;

    if (!canSubmit) {
      setError(
        "Please select a machine, complete both reasons, " +
        "and write your recommendation before submitting."
      );
      return;
    }

    setSubmitting(true);
    setError("");

    const finalWriting = writing.trim();

    const data = {
      student: studentName,
      project: "Project 06",

      q1: `Explore the Machines: ${scoreText(machines)}`,

      q2: `Production Meeting: ${scoreText(meeting)}`,

      q3: `Equipment Report: ${scoreText(report)}`,

      writing:
        `Recommended machine: ${choice}\n\n` +
        `Reason 1: ${reasonOne.trim()}\n` +
        `Reason 2: ${reasonTwo.trim()}\n\n` +
        `Final recommendation:\n${finalWriting}`,

      // Retained for compatibility with the
      // existing spreadsheet endpoint.
      email: finalWriting,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      // A no-cors request cannot confirm whether
      // Google Sheets saved the submission.

      sessionStorage.setItem(
        RESULT_KEY,
        JSON.stringify({
          name: studentName,
          activity: "Your Final Decision",
          choice,
          reasons: [
            reasonOne.trim(),
            reasonTwo.trim(),
          ],
          writing: finalWriting,
          wordCount,
          superlatives: superlativesUsed,
          completedAt: new Date().toISOString(),
          submissionStatus: "request-sent-unverified",
        })
      );

      sessionStorage.setItem(
        SUBMITTED_KEY,
        "true"
      );

      sessionStorage.removeItem(DRAFT_KEY);

      navigate("/project06/homework/complete", {
        replace: true,
      });
    } catch (err) {
      console.error(
        "Project 06 submission error:",
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

  return (
    <div className="app">
      <div className="card p04pack-page p05rec-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() =>
            navigate("/project06/homework/report")
          }
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 06 / HOMEWORK / ACTIVITY 04
        </p>

        {/* HERO */}

        <header className="p04pack-hero">
          <div className="p04pack-heroText">
            <span className="p04pack-pill">
              <Sparkles size={16} />
              FINAL FACTORY MISSION
            </span>

            <h1>
              Your Final <span>Decision</span>
            </h1>

            <p>
              The factory manager needs your advice!
              Compare three machines, recommend the
              most suitable option, and explain your
              decision using superlative adjectives.
            </p>

            <div className="p04pack-tags">
              <span>Final mission</span>
              <span>4+ superlatives</span>
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
            Working as <strong>{studentName}</strong>
          </div>
        )}

        <main className="p04pack-content">

          {/* MANAGER MESSAGE */}

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
                Our factory needs a new machine.
                Our maximum budget is{" "}
                <strong>$20,000</strong>.
                Reliability is our top priority,
                but production speed is also important.
              </p>

              <p>
                Please review Compact 100, Flex 200,
                and Power 300. Recommend the best
                machine for our factory and explain
                your decision using at least four
                different superlative expressions.
              </p>

              <p className="p05rec-managerSignature">
                — Factory Manager
              </p>
            </div>
          </section>

          {/* SPECIFICATIONS */}

          <section className="p05rec-specifications">
            <div className="p05rec-sectionTitle">
              <Factory size={23} />

              <div>
                <h2>Compare the machines</h2>
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
                    <th>Compact 100</th>
                    <th>Flex 200</th>
                    <th>Power 300</th>
                  </tr>
                </thead>

                <tbody>
                  {specifications.map((item) => (
                    <tr key={item.label}>
                      <th scope="row">
                        {item.label}
                      </th>
                      <td>{item.compact}</td>
                      <td>{item.flex}</td>
                      <td>{item.power}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="p05rec-specNote">
              Note: Power 300 exceeds the factory's
              budget. Flex 200 has the highest
              reliability rating.
            </p>
          </section>

          {/* STEP 1 — PLANNING */}

          <section className="p05rec-planning">
            <div className="p05rec-sectionTitle">
              <Lightbulb size={23} />

              <div>
                <h2>
                  Step 1 · Plan your recommendation
                </h2>
                <p>
                  Choose a machine and explain why.
                </p>
              </div>
            </div>

            <p className="p05rec-fieldLabel">
              Which machine do you recommend?
            </p>

            <div className="p05rec-choiceGrid">
              {machineOptions.map((machine) => (
                <button
                  key={machine.name}
                  type="button"
                  className={`p05rec-choice ${
                    choice === machine.name
                      ? "p05rec-choiceSelected"
                      : ""
                  }`}
                  onClick={() => {
                    setChoice(machine.name);
                    setSavedNotice(false);
                    setError("");
                  }}
                  aria-pressed={choice === machine.name}
                >
                  <Factory size={22} />

                  <strong>{machine.name}</strong>

                  <span>{machine.description}</span>

                  {choice === machine.name && (
                    <CheckCircle2 size={19} />
                  )}
                </button>
              ))}
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

          {/* STEP 2 — WRITING */}

          <section className="p05rec-writingSection">
            <div className="p05rec-sectionTitle">
              <FileText size={23} />

              <div>
                <h2>
                  Step 2 · Write your recommendation
                </h2>

                <p>
                  Write to the factory manager.
                  Explain your decision using at least
                  four different superlative expressions.
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
                    ... is the most reliable machine.
                  </li>
                  <li>
                    ... is the cheapest option.
                  </li>
                  <li>
                    ... has the highest production speed.
                  </li>
                  <li>
                    ... is the most expensive machine.
                  </li>
                  <li>
                    ... is the best choice for our factory.
                  </li>
                </ul>

                <p>
                  Remember to explain your choice,
                  not just list the specifications.
                  Consider both reliability and budget.
                </p>
              </div>
            )}

            <label
              className="p05rec-fieldLabel"
              htmlFor="p06rec-writing"
            >
              Your recommendation to the manager
            </label>

            <textarea
              id="p06rec-writing"
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

            {/* SUPERLATIVE COUNTER */}

            <div className="p05rec-writingStats">
              <div
                className={`p05rec-stat ${
                  hasSuperlatives
                    ? "p05rec-statGood"
                    : ""
                }`}
              >
                <strong>
                  {superlativesUsed.length} / 4
                </strong>

                <span>
                  Different superlatives detected
                </span>
              </div>
            </div>

            {superlativesUsed.length > 0 && (
              <div className="p05rec-detected">
                <strong>Detected:</strong>{" "}
                {superlativesUsed.join(", ")}
              </div>
            )}

            <p className="p05rec-checkNote">
              This checker identifies superlative
              expressions, but it cannot assess
              whether they are used correctly.
              Check that your sentences make sense
              and support your recommendation.
            </p>
          </section>

          {/* STEP 3 — SELF-REVIEW */}

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

          {/* SAVE DRAFT */}

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

          {/* VALIDATION */}

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

          {/* SUBMIT */}

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
                To submit, select a machine,
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
