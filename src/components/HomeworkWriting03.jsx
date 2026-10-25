
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  MessageSquareText,
  Send,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework-writing03.css";

/* ==========================================
   GOOGLE SHEETS
========================================== */

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwEHJ_Ned3ZRvj8LdPILREkmszw8kWyOcQjTknfdYmcgsSIqXamOvnscstFv_q_POaG/exec";

/* ==========================================
   OFFICE CHECKLIST
========================================== */

const checklist = [
  {
    item: "Meeting room",
    status: "ready",
    detail: "1 room",
  },
  {
    item: "Chairs",
    status: "ready",
    detail: "12 chairs",
  },
  {
    item: "Project documents",
    status: "ready",
    detail: "Some documents",
  },
  {
    item: "Projector",
    status: "missing",
    detail: "Not available",
  },
  {
    item: "Coffee",
    status: "missing",
    detail: "Not available",
  },
];

/* ==========================================
   COMPONENT
========================================== */

export default function HomeworkWriting03() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project03StudentName") || "";

  const [message, setMessage] = useState(
    () => sessionStorage.getItem("project03Writing") || ""
  );

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  /* ==========================================
     WORD COUNT
  ========================================== */

  const wordCount = message.trim()
    ? message.trim().split(/\s+/).length
    : 0;

  const canSubmit =
    wordCount >= 25 && !submitting;

  /* ==========================================
     SUBMIT TO GOOGLE SHEETS
  ========================================== */

  async function handleSubmit() {
    if (!canSubmit) return;

    if (!studentName.trim()) {
      setError(
        "Your name is missing. Please return to the homework introduction and enter it."
      );
      return;
    }

    const writing = message.trim();

    sessionStorage.setItem(
      "project03Writing",
      writing
    );

    const teamsScore = Number(
      sessionStorage.getItem("project03TeamsScore") || 0
    );

    const emailScore = Number(
      sessionStorage.getItem("project03EmailScore") || 0
    );

    const checklistScore = Number(
      sessionStorage.getItem("project03CalendarScore") || 0
    );

    const data = {
      student: studentName.trim(),
      project: "Project 03",

      q1: `Teams: ${teamsScore}/5`,
      q2: `Email: ${emailScore}/5`,
      q3: `Office checklist: ${checklistScore}/5`,

      writing,
      email: writing,
    };

    setSubmitting(true);
    setError("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      /*
       * no-cors prevents the browser from reading
       * Google's response. We cannot verify here
       * whether the spreadsheet saved the data.
       */

      sessionStorage.setItem(
        "project03Submitted",
        "true"
      );

      navigate("/project03/homework/complete");

    } catch (err) {
      console.error("Submission error:", err);

      setError(
        "We couldn't send your homework. Please check your internet connection and try again."
      );

    } finally {
      setSubmitting(false);
    }
  }

  /* ==========================================
     PAGE
  ========================================== */

  return (
    <div className="hw03WritingPage">
      <div className="hw03WritingContainer">

        {/* BACK */}

        <button
          className="hw03WritingBack"
          onClick={() =>
            navigate("/project03/homework/calendar")
          }
        >
          <ArrowLeft size={19} />
          Back
        </button>

        <p className="hw03WritingEyebrow">
          PROJECT 03 / HOMEWORK / ACTIVITY 04
        </p>

        {/* HERO */}

        <section className="hw03WritingHero">

          <div className="hw03WritingHeroBadge">
            <Sparkles size={18} />
            YOUR FINAL CHALLENGE
          </div>

          <h1>
            Write a workplace
            <span> update.</span>
          </h1>

          <p>
            Use what you've learned to write a clear,
            useful message in English.
          </p>

          <div className="hw03WritingTags">
            <span>Real-life writing</span>
            <span>5–7 sentences</span>
            <span>There is / There are</span>
          </div>

        </section>

        {/* ==========================================
            SECTION 01 — TASK
        ========================================== */}

        <section className="hw03WritingSection">

          <div className="hw03WritingSectionHeading">
            <span>01 / YOUR TASK</span>

            <h2>A message from Oksana</h2>

            <p>
              Read the message and check what is ready
              for Thursday's office visit.
            </p>
          </div>

          <div className="hw03WritingMessage">

            <div className="hw03WritingAvatar">
              O
            </div>

            <div>
              <strong>Oksana</strong>

              <p>
                Hi! Are we ready for the visitors on
                Thursday? Please send me a short update.
                Tell me what we have and what we don't
                have yet. Thanks!
              </p>
            </div>

          </div>

          {/* CHECKLIST */}

          <div className="hw03WritingChecklist">

            <div className="hw03WritingChecklistTitle">
              <ClipboardList size={22} />
              <h3>Office preparation checklist</h3>
            </div>

            {checklist.map((entry) => (

              <div
                className="hw03WritingChecklistRow"
                key={entry.item}
              >

                <div className="hw03WritingChecklistName">

                  <span
                    className={
                      entry.status === "ready"
                        ? "hw03WritingStatusDot ready"
                        : "hw03WritingStatusDot missing"
                    }
                  />

                  <strong>{entry.item}</strong>

                </div>

                <div className="hw03WritingChecklistDetails">

                  <span>{entry.detail}</span>

                  <span
                    className={
                      entry.status === "ready"
                        ? "hw03WritingStatus ready"
                        : "hw03WritingStatus missing"
                    }
                  >
                    {entry.status === "ready"
                      ? "Ready"
                      : "Missing"}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ==========================================
            SECTION 02 — LANGUAGE SUPPORT
        ========================================== */}

        <section className="hw03WritingSection">

          <div className="hw03WritingSectionHeading">
            <span>02 / PLAN YOUR MESSAGE</span>

            <h2>Useful language</h2>

            <p>
              You don't need to use every expression.
              Choose the ones that help you.
            </p>
          </div>

          <div className="hw03WritingTips">

            {/* READY */}

            <div className="hw03WritingTip">

              <div className="hw03WritingTipIcon">
                <CheckCircle2 size={23} />
              </div>

              <h3>What is ready?</h3>

              <p>There is a meeting room.</p>
              <p>There are twelve chairs.</p>
              <p>There are some documents.</p>

            </div>

            {/* MISSING */}

            <div className="hw03WritingTip">

              <div className="hw03WritingTipIcon">
                <MessageSquareText size={23} />
              </div>

              <h3>What is missing?</h3>

              <p>There isn't a projector.</p>
              <p>There isn't any coffee.</p>
              <p>We need to prepare...</p>

            </div>

          </div>

          {/* REMINDER */}

          <div className="hw03WritingReminder">

            <Lightbulb size={21} />

            <p>
              <strong>Grammar reminder:</strong> Use
              <strong> there is </strong>
              with singular or uncountable nouns and
              <strong> there are </strong>
              with plural nouns.
            </p>

          </div>

        </section>

        {/* ==========================================
            SECTION 03 — WRITING
        ========================================== */}

        <section className="hw03WritingSection">

          <div className="hw03WritingSectionHeading">
            <span>03 / YOUR TURN</span>

            <h2>Reply to Oksana</h2>

            <p>
              Write 5–7 sentences. Describe at least
              three things that are ready and two
              things that are missing.
            </p>
          </div>

          <div className="hw03WritingEditor">

            <div className="hw03WritingEditorHeader">

              <Send size={20} />

              <strong>Workplace update</strong>

              <span>Draft message</span>

            </div>

            <div className="hw03WritingEditorBody">

              <p className="hw03WritingGreeting">
                Hi Oksana,
              </p>

              <textarea
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setError("");
                }}
                placeholder={
                  "Here's an update about Thursday's visit...\n\nThere is..."
                }
                rows={9}
                aria-label="Your workplace update"
              />

              {/* STUDENT NAME */}

              <p className="hw03WritingSignoff">
                Best,
                <br />
                {studentName || "Your name"}
              </p>

            </div>

            <div className="hw03WritingEditorFooter">
              <span>{wordCount} words</span>
              <span>Minimum 25 words</span>
            </div>

          </div>

          {/* ERROR */}

          {error && (
            <div
              className="hw03WritingSuccess"
              role="alert"
              style={{
                background: "#fff0ef",
                borderColor: "#f2c5c5",
                color: "#a83f45",
              }}
            >
              <p>{error}</p>
            </div>
          )}

          {/* SUBMIT BUTTON */}

          <div className="hw03WritingActions">

            <PrimaryButton
              onClick={handleSubmit}
              disabled={!canSubmit}
            >
              {submitting
                ? "Submitting..."
                : "Submit homework"}

              {!submitting && (
                <ArrowRight size={19} />
              )}
            </PrimaryButton>

          </div>

        </section>

      </div>
    </div>
  );
}
