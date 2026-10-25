
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  MessageSquare,
  Sparkles,
  XCircle,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework03.css";

const questions = [
  {
    sender: "Oksana",
    time: "09:05",
    message:
      "Good morning! ___ a problem with the printer in Room 204.",
    options: ["There are", "There is", "Are there"],
    answer: "There is",
    explanation:
      "A problem is singular, so we use There is.",
  },
  {
    sender: "Alexander",
    time: "09:18",
    message:
      "___ too many tasks to finish before Friday!",
    options: ["There is", "Is there", "There are"],
    answer: "There are",
    explanation:
      "Tasks is plural, so we use There are.",
  },
  {
    sender: "Nikita",
    time: "09:32",
    message:
      "___ any updates from the client?",
    options: ["Is there", "Are there", "There are"],
    answer: "Are there",
    explanation:
      "Updates is plural. In questions, we use Are there.",
  },
  {
    sender: "Oksana",
    time: "10:10",
    message:
      "Unfortunately, ___ any free meeting rooms this morning.",
    options: ["there aren't", "there isn't", "there are"],
    answer: "there aren't",
    explanation:
      "Meeting rooms is plural. We use there aren't any in negative sentences.",
  },
  {
    sender: "Alexander",
    time: "11:25",
    message:
      "Good news! ___ an extra hour to check the drawings.",
    options: ["There are", "There is", "There aren't"],
    answer: "There is",
    explanation:
      "An extra hour is singular, so we use There is.",
  },
];

export default function HomeworkTeams03() {
  const navigate = useNavigate();
  const questionRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];
  const isCorrect = selected === question.answer;
  const isLast = current === questions.length - 1;

  const progress = ((current + 1) / questions.length) * 100;

  useEffect(() => {
    if (current === 0) return;

    questionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [current]);

  function checkAnswer() {
    if (!selected || checked) return;

    if (isCorrect) {
      setScore((previous) => previous + 1);
    }

    setChecked(true);
  }

  function nextQuestion() {
    if (isLast) {
      sessionStorage.setItem(
        "project03TeamsScore",
        String(score)
      );

      navigate("/project03/homework/email");
      return;
    }

    setCurrent((previous) => previous + 1);
    setSelected("");
    setChecked(false);
  }

  return (
    <div className="app">
      <div className="card p03h-page p03h-teamsPage">

        <button
          className="backButton"
          onClick={() => navigate("/project03/homework")}
        >
          ← Back
        </button>

        <p className="p03h-projectLabel">
          PROJECT 03 / HOMEWORK / 01
        </p>

        {/* HERO */}

        <header className="p03h-hero p03h-activityHero">
          <div className="p03h-heroText">

            <span className="p03h-pill">
              <MessageSquare size={17} />
              ACTIVITY 01 / TEAMS
            </span>

            <h1>A busy Monday</h1>

            <p>
              It's Monday morning. Oksana, Alexander,
              and Nikita are discussing problems,
              deadlines, and good news at work.
            </p>

            <div className="p03h-heroTags">
              <span>5 messages</span>
              <span>Grammar practice</span>
              <span>Instant feedback</span>
            </div>

          </div>

          <img
            src="/natalia-homework.png"
            alt="Natalia"
            className="p03h-heroNatalia"
          />
        </header>

        {/* PROGRESS */}

        <div className="p03h-teamsProgress">
          <div className="p03h-teamsProgressText">
            <span>
              MESSAGE {current + 1} / {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="p03h-teamsProgressTrack">
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* QUESTION */}

        <section
          ref={questionRef}
          className="p03h-teamsQuestion"
        >
          <div className="p03h-teamsQuestionHeading">
            <span className="p03h-eyebrow">
              THE TEAM CHAT
            </span>

            <h2>Complete the message</h2>

            <p>
              Choose the correct option to complete
              the message.
            </p>
          </div>

          <div className="p03h-chatCard">
            <div className="p03h-chatHeader">

              <div className="p03h-chatAvatar">
                {question.sender.charAt(0)}
              </div>

              <div className="p03h-chatSender">
                <strong>{question.sender}</strong>
              </div>

              <span className="p03h-chatTime">
                {question.time}
              </span>

            </div>

            <div className="p03h-chatMessage">
              {question.message}
            </div>
          </div>

          {/* OPTIONS */}

          <div className="p03h-answerOptions">
            {question.options.map((option, index) => {
              const correct =
                checked && option === question.answer;

              const wrong =
                checked &&
                option === selected &&
                !isCorrect;

              const chosen =
                !checked && option === selected;

              const className = [
                "p03h-answerOption",
                chosen ? "selected" : "",
                correct ? "correct" : "",
                wrong ? "wrong" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <button
                  key={option}
                  type="button"
                  className={className}
                  disabled={checked}
                  onClick={() => setSelected(option)}
                >
                  <span className="p03h-optionLetter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>{option}</span>

                  {correct && (
                    <CheckCircle2 size={20} />
                  )}

                  {wrong && (
                    <XCircle size={20} />
                  )}
                </button>
              );
            })}
          </div>

          {/* FEEDBACK */}

          {checked && (
            <div
              className={`p03h-answerFeedback ${
                isCorrect ? "correct" : "wrong"
              }`}
              role="status"
            >
              <div className="p03h-feedbackNataliaWrapper">

                <img
                  src={
                    isCorrect
                      ? "/confetti.png"
                      : "/thinking-swirl.png"
                  }
                  alt=""
                  className={
                    isCorrect
                      ? "p03h-feedbackDecoration p03h-confetti"
                      : "p03h-feedbackDecoration p03h-swirl"
                  }
                />

                <img
                  src={
                    isCorrect
                      ? "/natalia-correct.png"
                      : "/natalia-wrong.png"
                  }
                  alt="Natalia"
                  className="p03h-feedbackNatalia"
                />

              </div>

              <div className="p03h-feedbackContent">
                <h3>
                  {isCorrect ? (
                    <>
                      <CheckCircle2 size={26} />
                      Great job!
                    </>
                  ) : (
                    <>
                      <Lightbulb size={26} />
                      Almost there!
                    </>
                  )}
                </h3>

                {!isCorrect && (
                  <p className="p03h-correctAnswer">
                    Correct answer:{" "}
                    <strong>{question.answer}</strong>
                  </p>
                )}

                <p className="p03h-feedbackExplanation">
                  {question.explanation}
                </p>

                <span className="p03h-scoreBadge">
                  Score: {score} / {questions.length}
                </span>
              </div>
            </div>
          )}

        </section>

        {/* ACTION */}

        <div className="p03h-teamsActions">
          {!checked ? (
            <PrimaryButton
              onClick={checkAnswer}
              disabled={!selected}
            >
              Check answer
            </PrimaryButton>
          ) : (
            <PrimaryButton onClick={nextQuestion}>
              {isLast
                ? "Continue to Email"
                : "Next message"}
              <ArrowRight size={18} />
            </PrimaryButton>
          )}
        </div>

        <p className="p03h-teamsFooter">
          <Sparkles size={16} />
          Small steps make a big difference!
        </p>

      </div>
    </div>
  );
}
