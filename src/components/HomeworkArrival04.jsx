
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  Coffee,
  Hotel,
  MessageCircle,
  Plane,
  RotateCcw,
  Send,
  Sparkles
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";

import "../styles/learn/homeworkPacking04.css";
import "../styles/learn/homeworkArrival04.css";

const scenes = [
  {
    title: "At the airport",
    subtitle: "The team has just landed in Shanghai.",
    icon: Plane,
    messages: [
      {
        speaker: "Oksana",
        text: "We've landed! Has everyone collected their luggage?"
      },
      {
        speaker: "Nikita",
        before: "Yes! I have two suitcases, but Alexander has too ",
        after: " luggage.",
        answers: ["much"],
        explanation:
          "Luggage is uncountable. We say too much luggage."
      },
      {
        speaker: "Alexander",
        before: "Don't worry! I only have ",
        after: " bags.",
        answers: ["a few"],
        explanation:
          "Bags are countable. A few means a small number."
      },
      {
        speaker: "Natalia",
        before: "Great! Do we have ",
        after: " time to get a taxi?",
        answers: ["enough"],
        explanation:
          "Enough time means the amount of time we need."
      }
    ]
  },
  {
    title: "At the hotel",
    subtitle: "Everyone is checking into their rooms.",
    icon: Hotel,
    messages: [
      {
        speaker: "Alexander",
        text: "I've checked into my room. Is everything okay?"
      },
      {
        speaker: "Oksana",
        before: "There aren't ",
        after: " towels in my bathroom.",
        answers: ["any"],
        explanation:
          "We normally use any in negative sentences."
      },
      {
        speaker: "Nikita",
        before: "There's only ",
        after: " water in my room.",
        answers: ["a little"],
        explanation:
          "Water is uncountable. A little means a small amount."
      },
      {
        speaker: "Natalia",
        before: "I'll ask reception for ",
        after: " information about breakfast.",
        answers: ["some"],
        explanation:
          "Information is uncountable. We can say some information."
      }
    ]
  },
  {
    title: "Before the meeting",
    subtitle: "The team is preparing for tomorrow.",
    icon: Coffee,
    messages: [
      {
        speaker: "Natalia",
        text: "Our client meeting starts at 9 a.m. tomorrow. Are we ready?"
      },
      {
        speaker: "Nikita",
        before: "I have ",
        after: " questions about the technical drawings.",
        answers: ["a few"],
        explanation:
          "Questions are countable. A few means a small number."
      },
      {
        speaker: "Alexander",
        before: "I need ",
        after: " advice about my presentation.",
        answers: ["some"],
        explanation:
          "Advice is uncountable. We say some advice, not advices."
      },
      {
        speaker: "Oksana",
        before: "We don't have ",
        after: " time left, so let's finish preparing!",
        answers: ["much"],
        explanation:
          "Time is uncountable. Much is common in negative sentences."
      }
    ]
  }
];

const questions = scenes.flatMap((scene) =>
  scene.messages.filter((message) => message.answers)
);

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/g, "");
}

export default function HomeworkArrival04() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project04StudentName") || "";

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
  const total = questions.length;
  const score = results.filter((result) => result.correct).length;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
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
        correct
      }
    ]);

    setFeedback({
      correct,
      answer: currentMessage.answers[0],
      explanation: currentMessage.explanation
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
      "project04ArrivalResult",
      JSON.stringify({
        name: studentName,
        activity: "Arriving in Shanghai",
        score,
        total,
        answers: results,
        completedAt: new Date().toISOString()
      })
    );

    setFinished(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function restart() {
    setSceneIndex(0);
    setVisibleCount(1);
    setDraft("");
    setFeedback(null);
    setResults([]);
    setFinished(false);

    sessionStorage.removeItem("project04ArrivalResult");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const readyForNext =
    !currentMessage?.answers || Boolean(feedback);

  const isLastScene = sceneIndex === scenes.length - 1;
  const isLastMessage = visibleCount === scene.messages.length;

  return (
    <div className="app">
      <div className="card p04pack-page p04arrival-page">

        <button
          className="backButton"
          onClick={() =>
            navigate("/project04/homework/packing")
          }
        >
          ← Back
        </button>

        <p className="p04pack-label">
          PROJECT 04 / HOMEWORK / ACTIVITY 02
        </p>

        <header className="p04pack-hero">
          <div className="p04pack-heroText">

            <span className="p04pack-pill">
              <MessageCircle size={16} />
              SHANGHAI GROUP CHAT
            </span>

            <h1>
              We've arrived in <span>Shanghai!</span>
            </h1>

            <p>
              Follow the team's group chat. Complete each
              message to continue the conversation.
            </p>

            <div className="p04pack-tags">
              <span>3 locations</span>
              <span>9 messages to complete</span>
              <span>A2 Grammar</span>
            </div>
          </div>

          <img
            src="/natalia-travel.png"
            alt="Natalia travelling to Shanghai"
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

            <div className="p04pack-progressHeader">
              <strong>Chat progress</strong>
              <span>{answeredCount} / {total}</span>
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
                  width: `${(answeredCount / total) * 100}%`
                }}
              />
            </div>

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
                        : ""
                    ].filter(Boolean).join(" ")}
                  >
                    <SceneIcon size={17} />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>

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
                                    aria-label="Missing expression"
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
                      ? "Next Location"
                      : "Next Message"}

                  <ArrowRight size={18} />
                </PrimaryButton>
              </div>
            </section>
          </main>
        ) : (
          <main className="p04pack-result">

            <div className="p04pack-resultIcon">
              <Sparkles size={32} />
            </div>

            <h2>Activity 02 complete!</h2>

            <p>
              Great work
              {studentName ? `, ${studentName}` : ""}!
              You've helped Oksana, Alexander, Nikita,
              and Natalia communicate in Shanghai.
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
                  navigate("/project04/homework/meeting")
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
