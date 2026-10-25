
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Mail,
  Sparkles,
  XCircle,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework03.css";

const questions = [
  {
    before: "Good news! ",
    after: " a group of visitors coming to our office on Thursday.",
    options: ["There are", "There is", "Are there"],
    answer: "There is",
    explanation:
      "A group is singular, so we use There is, even though the group contains several people.",
  },
  {
    before: "However, ",
    after: " enough chairs in the main meeting room.",
    options: ["there isn't", "there aren't", "there is"],
    answer: "there aren't",
    explanation:
      "Chairs is a plural noun. We use there aren't enough chairs.",
  },
  {
    before: "I think ",
    after: " extra table in the storage room.",
    options: ["there is a", "there is an", "there are an"],
    answer: "there is an",
    explanation:
      "Table is singular, but the article belongs to extra. Extra begins with a vowel sound, so we say an extra table.",
  },
  {
    before: "Nikita, ",
    after: " any clean cups in the kitchen?",
    options: ["is there", "are there", "there are"],
    answer: "are there",
    explanation:
      "Cups is plural. To ask a question, we use Are there any...?",
  },
  {
    before: "Finally, ",
    after: " some important information about the visitors in the shared folder.",
    options: ["there are", "there is", "are there"],
    answer: "there is",
    explanation:
      "Information is uncountable, so we use There is, not There are.",
  },
];

export default function HomeworkEmail03() {
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
        "project03EmailScore",
        String(score)
      );

      navigate("/project03/homework/calendar");
      return;
    }

    setCurrent((previous) => previous + 1);
    setSelected("");
    setChecked(false);
  }

  return (
    <div className="app">
      <div className="card p03h-page p03h-teamsPage p03h-emailPage">

        <button
          className="backButton"
          onClick={() =>
            navigate("/project03/homework/teams")
          }
        >
          ← Back
        </button>

        <p className="p03h-projectLabel">
          PROJECT 03 / HOMEWORK / 02
        </p>

        {/* HERO */}

        <header className="p03h-hero p03h-activityHero">
          <div className="p03h-heroText">

            <span className="p03h-pill">
              <Mail size={17} />
              ACTIVITY 02 / EMAIL
            </span>

            <h1>Preparing for visitors</h1>

            <p>
              Oksana is organizing a visit to the
              office. Read her email to Alexander
              and Nikita, and help her complete
              five sentences.
            </p>

            <div className="p03h-heroTags">
              <span>5 grammar gaps</span>
              <span>Workplace email</span>
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
              EMAIL GAP {current + 1} / {questions.length}
            </span>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className="p03h-teamsProgressTrack">
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* EMAIL */}

        <section
          ref={questionRef}
          className="p03h-teamsQuestion"
        >
          <div className="p03h-teamsQuestionHeading">
            <span className="p03h-eyebrow">
              IN YOUR INBOX
            </span>

            <h2>Help Oksana finish her email</h2>

            <p>
              Read the sentence and choose
              the best grammar form.
            </p>
          </div>

          <div className="p03h-emailDocument">

            <div className="p03h-emailDocumentHeader">

              <div className="p03h-emailDocumentIcon">
                <Mail size={24} />
              </div>

              <div>
                <strong>Office visit on Thursday</strong>
                <span>Draft email</span>
              </div>

            </div>

            <div className="p03h-emailMeta">
              <div>
                <span>From</span>
                <strong>Oksana</strong>
              </div>

              <div>
                <span>To</span>
                <strong>Alexander, Nikita</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>
                  <Clock3 size={15} />
                  11:40
                </strong>
              </div>
            </div>

            <div className="p03h-emailBody">
              <p>Hi Alexander and Nikita,</p>

              <p>
                {question.before}
                <span className="p03h-emailGap">
                  {checked ? question.answer : "______"}
                </span>
                {question.after}
              </p>

              <p>
                Thanks for your help!
              </p>

              <p>
                Best,
                <br />
                Oksana
              </p>
            </div>

          </div>

          {/* ANSWER OPTIONS */}

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

                  {correct && <CheckCircle2 size={20} />}
                  {wrong && <XCircle size={20} />}
                </button>
              );
            })}
          </div>

          {/* NATALIA FEEDBACK */}

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
                ? "Continue to Activity 03"
                : "Next sentence"}
              <ArrowRight size={18} />
            </PrimaryButton>
          )}
        </div>

        <p className="p03h-teamsFooter">
          <Sparkles size={16} />
          Every message is a chance to improve!
        </p>

      </div>
    </div>
  );
}
