
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Mail,
  RotateCcw,
  Send,
  Sparkles
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homeworkPacking04.css";
import "../styles/learn/homeworkEmail04.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwEHJ_Ned3ZRvj8LdPILREkmszw8kWyOcQjTknfdYmcgsSIqXamOvnscstFv_q_POaG/exec";

const preparation = [
  {
    text: "We have many information about the project.",
    options: ["many", "information", "project"],
    answer: "many",
    correction: "We have a lot of information about the project.",
    explanation: "Information is uncountable."
  },
  {
    text: "Nikita has a little questions about the equipment.",
    options: ["a little", "questions", "equipment"],
    answer: "a little",
    correction: "Nikita has a few questions about the equipment.",
    explanation: "Questions are countable, so we use a few."
  },
  {
    text: "Alexander needs some advices about his presentation.",
    options: ["needs", "advices", "presentation"],
    answer: "advices",
    correction: "Alexander needs some advice about his presentation.",
    explanation: "Advice is uncountable."
  },
  {
    text: "We don't have many time before the meeting.",
    options: ["don't", "many", "time"],
    answer: "many",
    correction: "We don't have much time before the meeting.",
    explanation: "Time is uncountable, so we use much."
  }
];

const checklistItems = [
  { id: "meeting", label: "I mentioned the client meeting." },
  { id: "team", label: "I mentioned the team or their work." },
  { id: "grammar", label: "I used quantity expressions." },
  { id: "review", label: "I checked my grammar and spelling." }
];

function readResult(key) {
  try {
    return JSON.parse(sessionStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}

function countWords(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

export default function HomeworkEmail04() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project04StudentName") || "";

  const [stage, setStage] = useState("prepare");
  const [selected, setSelected] = useState({});
  const [checked, setChecked] = useState({});
  const [subject, setSubject] = useState("Update from Shanghai");
  const [emailBody, setEmailBody] = useState(
    () => sessionStorage.getItem("project04EmailDraft") || ""
  );
  const [checklist, setChecklist] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const packing = readResult("project04PackingResult");
  const arrival = readResult("project04ArrivalResult");
  const meeting = readResult("project04MeetingResult");

  const checkedCount = Object.keys(checked).length;
  const preparationScore = preparation.reduce(
    (total, item, index) =>
      total + (
        checked[index] && selected[index] === item.answer ? 1 : 0
      ),
    0
  );

  const wordCount = countWords(emailBody);

  const allChecklistChecked = checklistItems.every(
    (item) => Boolean(checklist[item.id])
  );

  const canSubmit =
    Boolean(studentName.trim()) &&
    Boolean(subject.trim()) &&
    Boolean(emailBody.trim()) &&
    allChecklistChecked &&
    !submitting;

  const activityResults = [
    { title: "Packing for Shanghai", result: packing },
    { title: "Arriving in Shanghai", result: arrival },
    { title: "Meeting the Client", result: meeting }
  ];

  function scoreText(result) {
    return result
      ? `${result.score} / ${result.total}`
      : "Not recorded";
  }

  async function submitHomework() {
    if (!canSubmit) return;

    setError("");
    setSubmitting(true);

    const writing = emailBody.trim();

    const data = {
      student: studentName.trim(),
      project: "Project 04",
      q1: `Packing: ${scoreText(packing)}`,
      q2: `Arrival: ${scoreText(arrival)}`,
      q3:
        `Meeting: ${scoreText(meeting)}; ` +
        `Email preparation: ${preparationScore}/4`,
      writing: `Subject: ${subject.trim()}\n\n${writing}`,
      email: writing
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
      });

      sessionStorage.setItem(
        "project04EmailResult",
        JSON.stringify({
          name: studentName,
          activity: "An Email from Shanghai",
          preparationScore,
          preparationTotal: 4,
          subject: subject.trim(),
          email: writing,
          wordCount,
          completedAt: new Date().toISOString()
        })
      );

      sessionStorage.setItem("project04Submitted", "true");

      setStage("complete");
      window.scrollTo({ top: 0, behavior: "smooth" });

    } catch (err) {
      console.error("Submission error:", err);
      setError(
        "We couldn't send your homework. Check your internet connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function restart() {
    setStage("prepare");
    setSelected({});
    setChecked({});
    setSubject("Update from Shanghai");
    setEmailBody("");
    setChecklist({});
    setError("");

    sessionStorage.removeItem("project04EmailDraft");
    sessionStorage.removeItem("project04EmailResult");
    sessionStorage.removeItem("project04Submitted");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app">
      <div className="card p04pack-page p04email-page">

        <button
          className="backButton"
          onClick={() => {
            if (stage === "write") {
              setStage("prepare");
            } else {
              navigate("/project04/homework/meeting");
            }
          }}
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 04 / HOMEWORK / ACTIVITY 04
        </p>

        <header className="p04pack-hero">
          <div className="p04pack-heroText">
            <span className="p04pack-pill">
              <Mail size={16} />
              FINAL SHANGHAI CHALLENGE
            </span>

            <h1>
              An Email from <span>Shanghai</span>
            </h1>

            <p>
              The team has finished its first client meeting.
              Write a short update to your manager.
            </p>

            <div className="p04pack-tags">
              <span>Grammar review</span>
              <span>Business email</span>
              <span>About 50 words</span>
            </div>
          </div>

          <img
            src="/natalia-travel.png"
            alt="Natalia in Shanghai"
            className="p04pack-natalia"
          />
        </header>

        {studentName && (
          <div className="p04pack-student">
            <CheckCircle2 size={17} />
            Working as <strong>{studentName}</strong>
          </div>
        )}

        {stage === "prepare" && (
          <main className="p04pack-content">
            <div className="p04email-intro">
              <ClipboardCheck size={25} />
              <div>
                <h2>Step 1: Check the grammar</h2>
                <p>
                  Find the incorrect expression in each sentence.
                  Then check your answer.
                </p>
              </div>
            </div>

            <div className="p04pack-progressHeader">
              <strong>Sentences checked</strong>
              <span>{checkedCount} / 4</span>
            </div>

            <div className="p04pack-progressTrack">
              <div style={{ width: `${checkedCount * 25}%` }} />
            </div>

            <div className="p04email-preparationList">
              {preparation.map((item, index) => {
                const isChecked = Boolean(checked[index]);
                const correct = selected[index] === item.answer;

                return (
                  <section
                    className="p04email-preparationCard"
                    key={index}
                  >
                    <span className="p04email-stepNumber">
                      SENTENCE {index + 1}
                    </span>

                    <p className="p04email-originalSentence">
                      {item.text}
                    </p>

                    <p className="p04email-prompt">
                      Which expression is incorrect?
                    </p>

                    <div className="p04email-wordOptions">
                      {item.options.map((option) => (
                        <button
                          type="button"
                          key={option}
                          disabled={isChecked}
                          className={
                            selected[index] === option
                              ? "p04email-wordSelected"
                              : ""
                          }
                          onClick={() =>
                            setSelected((previous) => ({
                              ...previous,
                              [index]: option
                            }))
                          }
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {!isChecked ? (
                      <button
                        type="button"
                        className="p04pack-checkButton"
                        disabled={!selected[index]}
                        onClick={() =>
                          setChecked((previous) => ({
                            ...previous,
                            [index]: true
                          }))
                        }
                      >
                        Check answer
                      </button>
                    ) : (
                      <div
                        className={`p04email-feedback ${
                          correct
                            ? "p04email-feedbackCorrect"
                            : "p04email-feedbackWrong"
                        }`}
                        role="status"
                      >
                        <img
                          src={
                            correct
                              ? "/natalia-correct.png"
                              : "/natalia-wrong.png"
                          }
                          alt="Natalia giving feedback"
                        />

                        <div>
                          <strong>
                            {correct ? "Exactly!" : "Let's review!"}
                          </strong>
                          <p>
                            <b>Correct sentence:</b>{" "}
                            {item.correction}
                          </p>
                          <p>{item.explanation}</p>
                        </div>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            <div className="p04pack-bottom">
              <h2>
                {checkedCount === 4
                  ? "Ready to write!"
                  : "Keep reviewing!"}
              </h2>

              <p>
                {checkedCount === 4
                  ? `Your grammar score: ${preparationScore} / 4`
                  : "Check all four sentences before continuing."}
              </p>

              <PrimaryButton
                disabled={checkedCount !== 4}
                onClick={() => {
                  setStage("write");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Write Your Email
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </main>
        )}

        {stage === "write" && (
          <main className="p04pack-content">

            <div className="p04email-intro">
              <FileText size={25} />
              <div>
                <h2>Step 2: Write your email</h2>
                <p>
                  Write a short email to your manager.
                  Aim for about 50 words, but there is no strict limit.
                </p>
              </div>
            </div>

            <div className="p04email-situation">
              <span>YOUR SITUATION</span>

              <p>
                You are in Shanghai with Oksana,
                Alexander, Nikita, and Natalia.
                Your team has met a Chinese client
                to discuss an engineering project.
              </p>

              <p>Write an email to your manager. Include:</p>

              <ul>
                <li>Information about the client meeting</li>
                <li>Documents or information your team has</li>
                <li>Questions or problems to discuss</li>
              </ul>

              <p>
                Try to use <strong>some, any, much, many,
                a few,</strong> or <strong>a little</strong>.
              </p>

              <p>
                <strong>Suggested length:</strong> About 50 words.
              </p>
            </div>

            <div className="p04email-composer">
              <div className="p04email-composerHeader">
                <Mail size={20} />
                <strong>New email</strong>
              </div>

              <div className="p04email-emailField">
                <span>To</span>
                <strong>Your manager</strong>
              </div>

              <div className="p04email-emailField">
                <label htmlFor="p04email-subject">
                  Subject
                </label>

                <input
                  id="p04email-subject"
                  value={subject}
                  onChange={(event) =>
                    setSubject(event.target.value)
                  }
                />
              </div>

              <div className="p04email-body">
                <textarea
                  value={emailBody}
                  onChange={(event) => {
                    const value = event.target.value;
                    setEmailBody(value);
                    sessionStorage.setItem(
                      "project04EmailDraft",
                      value
                    );
                    setError("");
                  }}
                  rows={10}
                  aria-label="Your email"
                  placeholder={
                    "Dear Manager,\n\n" +
                    "I'm writing to update you about " +
                    "our meeting in Shanghai...\n\n" +
                    "Best regards,\n" +
                    (studentName || "Your name")
                  }
                />
              </div>

              <div className="p04email-wordCount">
                <span>{wordCount} words</span>
                <span>Suggested: about 50 words</span>
              </div>
            </div>

            <div className="p04email-checklist">
              <div className="p04email-checklistHeading">
                <Sparkles size={20} />
                <h3>Before you send</h3>
              </div>

              <p>
                Review your email and tick each item.
              </p>

              {checklistItems.map((item) => (
                <label
                  className="p04email-checklistItem"
                  key={item.id}
                >
                  <input
                    type="checkbox"
                    checked={Boolean(checklist[item.id])}
                    onChange={(event) =>
                      setChecklist((previous) => ({
                        ...previous,
                        [item.id]: event.target.checked
                      }))
                    }
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>

            {error && (
              <div
                role="alert"
                className="p04email-feedback p04email-feedbackWrong"
              >
                <p>{error}</p>
              </div>
            )}

            {!studentName.trim() && (
              <p role="alert">
                Your name is missing. Return to the
                homework introduction and enter your name.
              </p>
            )}

            <div className="p04pack-bottom">
              <h2>Ready to submit?</h2>

              <p>
                <p>
  Your homework will be sent to Natalia.
</p>
              </p>

              <PrimaryButton
                disabled={!canSubmit}
                onClick={submitHomework}
              >
                {submitting
                  ? "Submitting..."
                  : "Submit Homework"}

                {!submitting && <Send size={18} />}
              </PrimaryButton>
            </div>
          </main>
        )}

        {stage === "complete" && (
          <main className="p04pack-result">
            <div className="p04pack-resultIcon">
              <Sparkles size={32} />
            </div>

            <h2>Mission Shanghai complete!</h2>

            <img
              src="/natalia-correct.png"
              alt="Natalia congratulating you"
              className="p04email-finishNatalia"
            />

            <p>
              Well done{studentName ? `, ${studentName}` : ""}!
              You've finished Project 04.
            </p>

            <div className="p04email-summary">
              <h3>Your homework summary</h3>

              {activityResults.map((item) => (
                <div
                  className="p04email-summaryRow"
                  key={item.title}
                >
                  <span>{item.title}</span>
                  <strong>{scoreText(item.result)}</strong>
                </div>
              ))}

              <div className="p04email-summaryRow">
                <span>Email preparation</span>
                <strong>{preparationScore} / 4</strong>
              </div>

              <div className="p04email-summaryRow">
                <span>Business email</span>
                <strong>{wordCount} words</strong>
              </div>
            </div>

            <p className="p04email-note">
              Your homework submission request has been sent.
              Please note that delivery cannot be verified
              automatically. If needed, check with your teacher.
            </p>

            <div className="p04pack-resultActions">
              <button
                type="button"
                className="p04pack-retry"
                onClick={restart}
              >
                <RotateCcw size={18} />
                Try Again
              </button>

              <PrimaryButton
                onClick={() => navigate("/project04")}
              >
                Back to Project
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
