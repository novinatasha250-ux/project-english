
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  FilePenLine,
  RotateCcw,
  Sparkles,
  XCircle
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homeworkPacking04.css";
import "../styles/learn/homeworkMeeting04.css";

const tasks = [
  {
    speaker: "Oksana",
    label: "Meeting agenda",
    original: "We need to discuss three important informations.",
    answers: [
      "We need to discuss three important pieces of information.",
      "We need to discuss some important information.",
      "We need to discuss three important topics."
    ],
    model: "We need to discuss three important pieces of information.",
    explanation:
      "Information is uncountable. We can say some information or three pieces of information."
  },
  {
    speaker: "Alexander",
    label: "Technical documents",
    original: "I have much drawings for the client.",
    answers: [
      "I have many drawings for the client.",
      "I have a lot of drawings for the client.",
      "I have lots of drawings for the client.",
      "I have some drawings for the client.",
      "I have a few drawings for the client."
    ],
    model: "I have many drawings for the client.",
    explanation:
      "Drawings are countable. Use many, some, a few, or a lot of."
  },
  {
    speaker: "Nikita",
    label: "Project schedule",
    original: "We don't have many time to finish the project.",
    answers: [
      "We don't have much time to finish the project.",
      "We don't have a lot of time to finish the project.",
      "We have little time to finish the project."
    ],
    model: "We don't have much time to finish the project.",
    explanation:
      "Time is uncountable, so we use much rather than many."
  },
  {
    speaker: "Natalia",
    label: "Client questions",
    original: "The client has a little questions about the equipment.",
    answers: [
      "The client has a few questions about the equipment.",
      "The client has some questions about the equipment.",
      "The client has many questions about the equipment."
    ],
    model: "The client has a few questions about the equipment.",
    explanation:
      "Questions are countable. Use a few rather than a little."
  },
  {
    speaker: "Oksana",
    label: "Safety discussion",
    original: "We need an advice about the safety system.",
    answers: [
      "We need some advice about the safety system.",
      "We need advice about the safety system.",
      "We need a piece of advice about the safety system."
    ],
    model: "We need some advice about the safety system.",
    explanation:
      "Advice is uncountable. We cannot say an advice."
  },
  {
    speaker: "Alexander",
    label: "Equipment delivery",
    original: "There isn't some equipment in the warehouse.",
    answers: [
      "There isn't any equipment in the warehouse.",
      "There is no equipment in the warehouse."
    ],
    model: "There isn't any equipment in the warehouse.",
    explanation:
      "Any is normally used in negative sentences. Equipment is uncountable."
  },
  {
    speaker: "Nikita",
    label: "Project materials",
    original: "We only need a few steel for this part.",
    answers: [
      "We only need a little steel for this part.",
      "We only need some steel for this part."
    ],
    model: "We only need a little steel for this part.",
    explanation:
      "Steel is a material and is uncountable here. Use a little or some."
  },
  {
    speaker: "Natalia",
    label: "Meeting preparation",
    original: "Do we have some questions for the client?",
    answers: [
      "Do we have any questions for the client?"
    ],
    model: "Do we have any questions for the client?",
    explanation:
      "Any is the usual choice in a neutral question. Some is possible in certain questions, but any is more natural here."
  }
];

function normalize(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[.!?]+$/g, "")
    .replace(/\s+/g, " ")
    .replace(/[’]/g, "'");
}

export default function HomeworkMeeting04() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project04StudentName") || "";

  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});
  const [finished, setFinished] = useState(false);

  const total = tasks.length;
  const checkedCount = Object.keys(checked).length;

  const isCorrect = (index) =>
    tasks[index].answers.some(
      (answer) =>
        normalize(answer) === normalize(answers[index] || "")
    );

  const score = tasks.reduce(
    (sum, task, index) =>
      sum + (checked[index] && isCorrect(index) ? 1 : 0),
    0
  );

  function checkAnswer(index) {
    if (!String(answers[index] || "").trim()) return;

    setChecked((previous) => ({
      ...previous,
      [index]: true
    }));
  }

  function finishActivity() {
    if (checkedCount !== total) return;

    sessionStorage.setItem(
      "project04MeetingResult",
      JSON.stringify({
        name: studentName,
        activity: "Meeting the Client",
        score,
        total,
        answers,
        completedAt: new Date().toISOString()
      })
    );

    setFinished(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function tryAgain() {
    setAnswers({});
    setChecked({});
    setFinished(false);
    sessionStorage.removeItem("project04MeetingResult");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app">
      <div className="card p04pack-page p04meet-page">

        <button
          className="backButton"
          onClick={() =>
            navigate("/project04/homework/arrival")
          }
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 04 / HOMEWORK / ACTIVITY 03
        </p>

        <header className="p04pack-hero">
          <div className="p04pack-heroText">
            <span className="p04pack-pill">
              <BriefcaseBusiness size={16} />
              SHANGHAI CLIENT MEETING
            </span>

            <h1>
              Meeting the <span>Client</span>
            </h1>

            <p>
              The engineering team is preparing for a client
              meeting. Some notes contain grammar mistakes.
              Can you correct them?
            </p>

            <div className="p04pack-tags">
              <span>8 editing challenges</span>
              <span>Engineering English</span>
              <span>A2 Grammar</span>
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

        {!finished ? (
          <main className="p04pack-content">

            <div className="p04meet-instructions">
              <FilePenLine size={24} />

              <div>
                <strong>Your task</strong>
                <p>
                  Each note contains a grammar mistake.
                  Rewrite the complete sentence correctly.
                  Keep the original meaning.
                </p>
              </div>
            </div>

            <div className="p04pack-progressHeader">
              <strong>Notes reviewed</strong>
              <span>{checkedCount} / {total}</span>
            </div>

            <div
              className="p04pack-progressTrack"
              role="progressbar"
              aria-valuenow={checkedCount}
              aria-valuemin={0}
              aria-valuemax={total}
              aria-label="Notes reviewed"
            >
              <div
                style={{
                  width: `${(checkedCount / total) * 100}%`
                }}
              />
            </div>

            <div className="p04meet-sectionTitle">
              <ClipboardList size={22} />
              <h2>Review the team's meeting notes</h2>
            </div>

            <div className="p04meet-taskList">
              {tasks.map((task, index) => {
                const isChecked = Boolean(checked[index]);
                const correct = isCorrect(index);

                return (
                  <section
                    className="p04meet-task"
                    key={index}
                  >
                    <div className="p04meet-taskTop">
                      <span className="p04meet-number">
                        NOTE {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="p04meet-label">
                        {task.label}
                      </span>
                    </div>

                    <div className="p04meet-speaker">
                      <span className="p04meet-avatar">
                        {task.speaker[0]}
                      </span>

                      <strong>{task.speaker}</strong>
                    </div>

                    <div className="p04meet-original">
                      <span>Original note</span>
                      <p>{task.original}</p>
                    </div>

                    <label
                      className="p04meet-inputLabel"
                      htmlFor={`meeting-answer-${index}`}
                    >
                      Your corrected sentence
                    </label>

                    <textarea
                      id={`meeting-answer-${index}`}
                      rows={2}
                      value={answers[index] || ""}
                      disabled={isChecked}
                      placeholder="Rewrite the sentence here..."
                      onChange={(event) =>
                        setAnswers((previous) => ({
                          ...previous,
                          [index]: event.target.value
                        }))
                      }
                    />

                    {!isChecked ? (
                      <button
                        type="button"
                        className="p04pack-checkButton"
                        disabled={
                          !String(answers[index] || "").trim()
                        }
                        onClick={() => checkAnswer(index)}
                      >
                        Check correction
                      </button>
                    ) : (
                      <div
                        className={`p04meet-feedback ${
                          correct
                            ? "p04meet-feedbackCorrect"
                            : "p04meet-feedbackWrong"
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
                          <div className="p04meet-feedbackHeading">
                            {correct ? (
                              <CheckCircle2 size={19} />
                            ) : (
                              <XCircle size={19} />
                            )}

                            <strong>
                              {correct
                                ? "Well corrected!"
                                : "Check this correction"}
                            </strong>
                          </div>

                          {!correct && (
                            <p>
                              <strong>Suggested correction:</strong>
                              {" "}{task.model}
                            </p>
                          )}

                          <p>{task.explanation}</p>
                        </div>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            <div className="p04pack-bottom">
              <h2>
                {checkedCount === total
                  ? "Meeting notes reviewed!"
                  : "Keep editing!"}
              </h2>

              <p>
                {checkedCount === total
                  ? "You've checked all eight notes."
                  : "Review every note before moving on."}
              </p>

              <PrimaryButton
                disabled={checkedCount !== total}
                onClick={finishActivity}
              >
                Finish Activity <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </main>
        ) : (
          <main className="p04pack-result">
            <div className="p04pack-resultIcon">
              <Sparkles size={32} />
            </div>

            <h2>Activity 03 complete!</h2>

            <p>
              Great work{studentName ? `, ${studentName}` : ""}!
              You've helped the team prepare their
              meeting notes.
            </p>

            <div className="p04pack-score">
              {score} <span>/ {total}</span>
            </div>

            <p>
              {score === total
                ? "Excellent! Your meeting notes are ready."
                : "Well done! Review the suggested corrections before the next task."}
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
                  navigate("/project04/homework/email")
                }
              >
                Activity 04 <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
