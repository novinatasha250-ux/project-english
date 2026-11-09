
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Factory,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homeworkPacking04.css";
import "../styles/learn/homeworkArrival04.css";
import "../styles/learn/homeworkMeeting05.css";

// ============================================
// PROJECT 05 — HOMEWORK ACTIVITY 02
// THE ENGINEERING MEETING
// ============================================

const scenes = [
  {
    title: "Comparing the robots",
    subtitle:
      "The engineers are reviewing the specifications.",
    icon: Bot,
    messages: [
      {
        speaker: "Oksana",
        text:
          "Let's compare the two robots. CompactBot costs $18,000, but PowerBot costs $25,000.",
      },
      {
        speaker: "Alexander",
        before: "So CompactBot is ",
        after: " than PowerBot.",
        answers: ["cheaper"],
        explanation:
          "Cheap is a short adjective. Add -er: cheaper.",
      },
      {
        speaker: "Nikita",
        before:
          "PowerBot produces 65 units per hour, so it's ",
        after: " than CompactBot.",
        answers: ["faster"],
        explanation:
          "Fast becomes faster. PowerBot produces more units per hour.",
      },
      {
        speaker: "Oksana",
        before:
          "And PowerBot is ",
        after: " than CompactBot. It's 1.8 metres tall!",
        answers: ["taller"],
        explanation:
          "Tall becomes taller. PowerBot is 1.8 m tall, while CompactBot is 1.2 m tall.",
      },
    ],
  },
  {
    title: "Factory requirements",
    subtitle:
      "The team discusses space and electricity.",
    icon: Factory,
    messages: [
      {
        speaker: "Nikita",
        text:
          "Our workshop has limited space. Which robot would fit better?",
      },
      {
        speaker: "Alexander",
        before:
          "CompactBot is ",
        after: " than PowerBot, so it may fit more easily.",
        answers: ["shorter"],
        explanation:
          "Short becomes shorter. CompactBot is 1.2 m tall.",
      },
      {
        speaker: "Oksana",
        before:
          "CompactBot also has ",
        after: " power consumption than PowerBot.",
        answers: ["lower"],
        explanation:
          "Low becomes lower. CompactBot uses 2.0 kW, while PowerBot uses 3.5 kW.",
      },
      {
        speaker: "Nikita",
        before:
          "But PowerBot has a ",
        after: " production capacity.",
        answers: ["higher"],
        explanation:
          "High becomes higher. PowerBot produces 65 units per hour, compared with 40.",
      },
    ],
  },
  {
    title: "Making a decision",
    subtitle:
      "The engineers discuss the best option.",
    icon: Zap,
    messages: [
      {
        speaker: "Oksana",
        text:
          "We need to think about both the price and our production targets.",
      },
      {
        speaker: "Alexander",
        before:
          "PowerBot is ",
        after: " than CompactBot, but it produces more units.",
        answers: ["more expensive"],
        explanation:
          "Expensive is a long adjective. Use more expensive.",
      },
      {
        speaker: "Nikita",
        before:
          "CompactBot may be a ",
        after: " choice for a smaller workshop.",
        answers: ["better"],
        explanation:
          "Good has an irregular comparative form: better.",
      },
      {
        speaker: "Oksana",
        before:
          "If we need more production, PowerBot is the ",
        after: " option for our needs.",
        answers: ["better"],
        explanation:
          "Better is the comparative form of good. The best option depends on the factory's priorities.",
      },
    ],
  },
];

const total = scenes.reduce(
  (sum, scene) =>
    sum + scene.messages.filter((message) => message.answers).length,
  0
);

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/g, "");
}

export default function HomeworkMeeting05() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project05StudentName") || "";

  const [sceneIndex, setSceneIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [draft, setDraft] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const scene = scenes[sceneIndex];
  const currentMessage = scene.messages[visibleCount - 1];

  const answeredCount = results.length;
  const score = results.filter((result) => result.correct).length;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [visibleCount, feedback, sceneIndex]);

  useEffect(() => {
    if (!feedback && currentMessage?.answers) {
      inputRef.current?.focus();
    }
  }, [visibleCount, sceneIndex, feedback, currentMessage]);

  function submitAnswer() {
    if (!currentMessage?.answers || feedback || !draft.trim()) {
      return;
    }

    const correct = currentMessage.answers.some(
      (answer) => normalize(answer) === normalize(draft)
    );

    setResults((previous) => [
      ...previous,
      {
        scene: scene.title,
        speaker: currentMessage.speaker,
        answer: draft.trim(),
        correct,
      },
    ]);

    setFeedback({
      correct,
      answer: currentMessage.answers[0],
      explanation: currentMessage.explanation,
    });
  }

  function nextMessage() {
    if (currentMessage?.answers && !feedback) return;

    if (visibleCount < scene.messages.length) {
      setVisibleCount((previous) => previous + 1);
      setDraft("");
      setFeedback(null);
      return;
    }

    if (sceneIndex < scenes.length - 1) {
      setSceneIndex((previous) => previous + 1);
      setVisibleCount(1);
      setDraft("");
      setFeedback(null);
      return;
    }

    finishActivity();
  }

  function finishActivity() {
    sessionStorage.setItem(
      "project05MeetingResult",
      JSON.stringify({
        name: studentName,
        activity: "The Engineering Meeting",
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

  function restart() {
    setSceneIndex(0);
    setVisibleCount(1);
    setDraft("");
    setFeedback(null);
    setResults([]);
    setFinished(false);

    sessionStorage.removeItem("project05MeetingResult");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const readyForNext =
    !currentMessage?.answers || Boolean(feedback);

  const isLastScene = sceneIndex === scenes.length - 1;
  const isLastMessage = visibleCount === scene.messages.length;

  return (
    <div className="app">
      <div className="card p04pack-page p04arrival-page p05meeting-page">
        <button
          type="button"
          className="backButton"
          onClick={() =>
            navigate("/project05/homework/robots")
          }
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 05 / HOMEWORK / ACTIVITY 02
        </p>

        {/* HERO */}

        <header className="p04pack-hero">
          <div className="p04pack-heroText">
            <span className="p04pack-pill">
              <MessageCircle size={16} />
              FACTORY TEAM CHAT
            </span>

            <h1>
              The Engineering <span>Meeting</span>
            </h1>

            <p>
              Join Oksana, Alexander, and Nikita as they
              compare two industrial robots. Complete
              their messages to continue the discussion.
            </p>

            <div className="p04pack-tags">
              <span>3 conversations</span>
              <span>9 messages to complete</span>
              <span>A2 Grammar</span>
            </div>
          </div>

          <img
            src="/natalia-engineer.png"
            alt="Engineer Natalia introducing the meeting"
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
            {/* PROGRESS */}

            <div className="p04pack-progressHeader">
              <strong>Meeting progress</strong>
              <span>
                {answeredCount} / {total}
              </span>
            </div>

            <div
              className="p04pack-progressTrack"
              role="progressbar"
              aria-label="Messages completed"
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

            {/* SCENE TABS */}

            <div className="p04arrival-sceneTabs">
              {scenes.map((item, index) => {
                const SceneIcon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={[
                      "p04arrival-sceneTab",
                      index === sceneIndex
                        ? "p04arrival-sceneTabActive"
                        : "",
                      index < sceneIndex
                        ? "p04arrival-sceneTabDone"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <SceneIcon size={17} />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>

            {/* GROUP CHAT */}

            <section className="p04arrival-messenger">
              <div className="p04arrival-messengerHeader">
                <div className="p04arrival-groupIcon">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <h2>{scene.title}</h2>
                  <p>{scene.subtitle}</p>
                </div>
              </div>

              <div className="p04arrival-messages">
                {scene.messages
                  .slice(0, visibleCount)
                  .map((message, index) => {
                    const active = index === visibleCount - 1;
                    const hasQuestion = Boolean(message.answers);

                    const questionOffset = scenes
                      .slice(0, sceneIndex)
                      .reduce(
                        (sum, item) =>
                          sum +
                          item.messages.filter(
                            (entry) => entry.answers
                          ).length,
                        0
                      );

                    const localQuestionIndex = scene.messages
                      .slice(0, index + 1)
                      .filter((entry) => entry.answers).length - 1;

                    const result = hasQuestion
                      ? results[questionOffset + localQuestionIndex]
                      : null;

                    return (
                      <div
                        className="p04arrival-chatRow"
                        key={`${sceneIndex}-${index}`}
                      >
                        <div className="p04arrival-avatar">
                          {message.speaker[0]}
                        </div>

                        <div className="p04arrival-bubble">
                          <strong>{message.speaker}</strong>

                          {!hasQuestion ? (
                            <p>{message.text}</p>
                          ) : (
                            <>
                              <div className="p04arrival-sentence">
                                <span>{message.before}</span>

                                {active && !feedback ? (
                                  <input
                                    ref={inputRef}
                                    type="text"
                                    value={draft}
                                    placeholder="Your answer"
                                    aria-label="Missing comparative expression"
                                    onChange={(event) =>
                                      setDraft(event.target.value)
                                    }
                                    onKeyDown={(event) => {
                                      if (event.key === "Enter") {
                                        submitAnswer();
                                      }
                                    }}
                                  />
                                ) : (
                                  <span
                                    className={
                                      result?.correct
                                        ? "p04arrival-filledCorrect"
                                        : "p04arrival-filledWrong"
                                    }
                                  >
                                    {result?.answer || "___"}
                                  </span>
                                )}

                                <span>{message.after}</span>
                              </div>

                              {active && !feedback && (
                                <button
                                  type="button"
                                  className="p04arrival-send"
                                  disabled={!draft.trim()}
                                  onClick={submitAnswer}
                                >
                                  <Send size={16} />
                                  Send answer
                                </button>
                              )}
                            </>
                          )}

                          {active && feedback && (
                            <div
                              className={`p04arrival-feedback ${
                                feedback.correct
                                  ? "p04arrival-feedbackCorrect"
                                  : "p04arrival-feedbackWrong"
                              }`}
                              role="status"
                            >
                              <img
                                src={
                                  feedback.correct
                                    ? "/natalia-correct.png"
                                    : "/natalia-wrong.png"
                                }
                                alt="Natalia giving feedback"
                              />

                              <div>
                                <strong>
                                  {feedback.correct
                                    ? "That's right!"
                                    : "Not quite!"}
                                </strong>

                                {!feedback.correct && (
                                  <p>
                                    Correct answer:{" "}
                                    <b>{feedback.answer}</b>
                                  </p>
                                )}

                                <p>{feedback.explanation}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                <div ref={chatEndRef} />
              </div>

              <div className="p04arrival-nextArea">
                <PrimaryButton
                  disabled={!readyForNext}
                  onClick={nextMessage}
                >
                  {isLastScene && isLastMessage
                    ? "Finish Activity"
                    : isLastMessage
                      ? "Next Conversation"
                      : "Next Message"}

                  <ArrowRight size={18} />
                </PrimaryButton>
              </div>
            </section>
          </main>
        ) : (
          /* COMPLETION */

          <main className="p04pack-result">
            <img
              src="/natalia-engineer.png"
              alt="Engineer Natalia"
              className="p05meeting-completionNatalia"
            />

            <div className="p04pack-resultIcon">
              <Sparkles size={32} />
            </div>

            <h2>Activity 02 complete!</h2>

            <p>
              Great work
              {studentName ? `, ${studentName}` : ""}!
              You've helped the engineering team compare
              the two robots.
            </p>

            <div className="p04pack-score">
              {score} <span>/ {total}</span>
            </div>

            <p>
              {score === total
                ? "Perfect! Every answer was correct."
                : "Good effort! Review the grammar and keep practising."}
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
                onClick={() =>
                  navigate("/project05/homework/report")
                }
              >
                Activity 03
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
