
import { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Lightbulb,
  MessageCircle,
  PencilLine,
  Sparkles,
  XCircle,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/practice03.css";

// ============================================
// PROJECT 05 — COMPARATIVES PRACTICE
// ============================================

const questions = [
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context:
      "Oksana is comparing two equipment offers. Alpha costs $8,000 and Beta costs $9,500.",
    question: "Alpha is ___ Beta.",
    options: [
      "more cheap than",
      "cheaper than",
      "the cheapest",
    ],
    answer: 1,
    explanation:
      "Cheap is a short adjective. Add -er and use than: cheaper than.",
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context:
      "Alexander is comparing delivery times. Alpha needs 10 days and Beta needs 6 days.",
    question: "Beta's delivery is ___ Alpha's.",
    options: [
      "faster than",
      "more fast than",
      "fastest than",
    ],
    answer: 0,
    explanation:
      "Fast is a short adjective, so we say faster than.",
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context:
      "Nikita is checking the dimensions of two machines.",
    question: "The new machine is ___ the old one.",
    options: [
      "biger than",
      "more big than",
      "bigger than",
    ],
    answer: 2,
    explanation:
      "Big doubles its final consonant before -er: bigger than.",
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context:
      "Oksana is testing two control panels. The new one is simpler to operate.",
    question: "The new control panel is ___ to use.",
    options: [
      "easyer",
      "easier",
      "more easy",
    ],
    answer: 1,
    explanation:
      "Easy ends in a consonant + y. Change y to i and add -er: easier.",
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context:
      "Alexander is explaining why the team should consider Beta Industrial.",
    question:
      "Beta is more reliable than Alpha, but it is more expensiver.",
    options: [
      "Beta is reliabler than Alpha, but it is more expensive.",
      "Beta is more reliable than Alpha, but it is more expensive.",
      "Beta is more reliable that Alpha, but it is expensiver.",
    ],
    answer: 1,
    explanation:
      "Use more + adjective with reliable and expensive. Don't combine more and -er.",
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context:
      "Nikita is discussing a new production machine.",
    question:
      "The new machine is more heavy than the old machine.",
    options: [
      "The new machine is heavier than the old machine.",
      "The new machine is heavyer than the old machine.",
      "The new machine is more heavier than the old machine.",
    ],
    answer: 0,
    explanation:
      "Heavy ends in a consonant + y, so change y to i and add -er: heavier.",
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context:
      "Oksana is comparing the quality of two suppliers.",
    question:
      "Beta offers a gooder warranty than Alpha.",
    options: [
      "Beta offers a more good warranty than Alpha.",
      "Beta offers a better warranty than Alpha.",
      "Beta offers a best warranty than Alpha.",
    ],
    answer: 1,
    explanation:
      "Good is irregular. Its comparative form is better.",
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context: "The team is discussing supplier prices.",
    dialogue: [
      {
        speaker: "Oksana",
        text: "Alpha is cheaper than Beta. What do you think?",
      },
      {
        speaker: "Alexander",
        text: "Yes, but Beta's equipment is ___ efficient.",
      },
    ],
    question: "Complete Alexander's answer.",
    options: ["more", "most", "much"],
    answer: 0,
    explanation:
      "Efficient is a longer adjective. We use more efficient to compare two options.",
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context: "The engineers are comparing two warehouses.",
    dialogue: [
      {
        speaker: "Nikita",
        text: "Our old warehouse is quite small.",
      },
      {
        speaker: "Oksana",
        text: "The new warehouse is ___ than the old one.",
      },
    ],
    question: "Complete Oksana's answer.",
    options: ["more large", "larger", "largeer"],
    answer: 1,
    explanation:
      "Large already ends in -e, so add only -r: larger.",
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context:
      "The team is making its final supplier recommendation.",
    dialogue: [
      {
        speaker: "Alexander",
        text: "Alpha is cheaper, but Beta can deliver much sooner.",
      },
      {
        speaker: "Nikita",
        text: "Then Beta is a ___ choice for an urgent order.",
      },
    ],
    question: "Complete Nikita's answer.",
    options: ["gooder", "better", "more good"],
    answer: 1,
    explanation:
      "Good has an irregular comparative form: better. Beta is a better choice when fast delivery is important.",
  },
];

// ============================================
// PRACTICE PAGE
// ============================================

export default function Practice05() {
  const navigate = useNavigate();
  const quizRef = useRef(null);
  const shouldScrollToQuestion = useRef(false);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];
  const QuestionIcon = question.icon;

  const isCorrect = selected === question.answer;
  const isLast = current === questions.length - 1;
  const progress = ((current + 1) / questions.length) * 100;

  useLayoutEffect(() => {
    if (!shouldScrollToQuestion.current) return;

    shouldScrollToQuestion.current = false;

    quizRef.current?.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  }, [current]);

  function checkAnswer() {
    if (selected === null || checked) return;

    if (isCorrect) {
      setScore((previous) => previous + 1);
    }

    setChecked(true);
  }

  function nextQuestion() {
    shouldScrollToQuestion.current = true;
    setCurrent((previous) => previous + 1);
    setSelected(null);
    setChecked(false);
  }

  function finishQuiz() {
    navigate("/project05/complete", {
      state: {
        score,
        total: questions.length,
      },
    });
  }

  return (
    <div className="app">
      <div className="card p03p-page">
        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project05/examples")}
        >
          ← Back
        </button>

        <p className="p03p-projectLabel">
          PROJECT 05 / PRACTICE
        </p>

        <header className="p03p-hero">
          <span className="p03p-pill">
            <Sparkles size={16} />
            CHOOSE THE BEST SUPPLIER CHALLENGE
          </span>

          <h1>Can you choose the better offer?</h1>

          <p>
            Ten engineering and workplace situations.
            Three types of questions.
            Test your comparative adjectives!
          </p>

          <div className="p03p-heroTags">
            <span>10 questions</span>
            <span>Instant feedback</span>
            <span>Final score</span>
          </div>
        </header>

        <div
          className="p03p-lessonDots"
          aria-label="Lesson step 3 of 3"
        >
          <span />
          <span />
          <span className="p03p-activeDot" />
        </div>

        <main className="p03p-content" ref={quizRef}>
          <div className="p03p-progressTop">
            <span>
              QUESTION {current + 1} / {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div
            className="p03p-progressTrack"
            role="progressbar"
            aria-label="Quiz progress"
            aria-valuenow={current + 1}
            aria-valuemin={0}
            aria-valuemax={questions.length}
          >
            <div style={{ width: `${progress}%` }} />
          </div>

          <div className="p03p-quizCard" key={current}>
            <div className="p03p-typeRow">
              <div className="p03p-typeIcon">
                <QuestionIcon
                  size={25}
                  strokeWidth={1.8}
                />
              </div>

              <span className="p03p-typeLabel">
                {question.type}
              </span>
            </div>

            <div className="p03p-context">
              <span>THE SITUATION</span>
              <p>{question.context}</p>
            </div>

            {question.dialogue && (
              <div className="p03p-dialogue">
                {question.dialogue.map((line, index) => (
                  <div
                    key={index}
                    className={`p03p-message ${
                      index === 0
                        ? "p03p-messageLeft"
                        : "p03p-messageRight"
                    }`}
                  >
                    <span>{line.speaker}</span>
                    <p>{line.text}</p>
                  </div>
                ))}
              </div>
            )}

            <h2 className="p03p-question">
              {question.question}
            </h2>

            <p className="p03p-instruction">
              {question.type === "FIX THE MISTAKE"
                ? "Choose the correct version."
                : "Choose the best answer."}
            </p>

            <div className="p03p-options">
              {question.options.map((option, index) => {
                const isSelected = selected === index;
                const showCorrect =
                  checked && index === question.answer;
                const showWrong =
                  checked && isSelected && !isCorrect;

                const className = [
                  "p03p-option",
                  isSelected && !checked
                    ? "p03p-selected"
                    : "",
                  showCorrect ? "p03p-correct" : "",
                  showWrong ? "p03p-wrong" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    key={index}
                    type="button"
                    disabled={checked}
                    onClick={() => setSelected(index)}
                    className={className}
                  >
                    <span className="p03p-letter">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="p03p-optionText">
                      {option}
                    </span>

                    {showCorrect && (
                      <CheckCircle2 size={21} />
                    )}

                    {showWrong && (
                      <XCircle size={21} />
                    )}
                  </button>
                );
              })}
            </div>

            {checked && (
              <div
                className={`p03p-feedback ${
                  isCorrect
                    ? "p03p-feedbackCorrect"
                    : "p03p-feedbackWrong"
                }`}
                role="status"
              >
                <div className="p03p-feedbackNatalia">
                  <img
                    src={
                      isCorrect
                        ? "/confetti.png"
                        : "/thinking-swirl.png"
                    }
                    alt=""
                    className="p03p-feedbackEffect"
                  />

                  <img
                    src={
                      isCorrect
                        ? "/natalia-correct.png"
                        : "/natalia-wrong.png"
                    }
                    alt="Natalia"
                    className="p03p-feedbackCharacter"
                  />
                </div>

                <div className="p03p-feedbackContent">
                  <div className="p03p-feedbackHeading">
                    {isCorrect ? (
                      <CheckCircle2 size={23} />
                    ) : (
                      <Lightbulb size={23} />
                    )}

                    <h3>
                      {isCorrect
                        ? "Great job!"
                        : "Almost there!"}
                    </h3>
                  </div>

                  {!isCorrect && (
                    <p className="p03p-correctAnswer">
                      Correct answer:{" "}
                      <strong>
                        {question.options[question.answer]}
                      </strong>
                    </p>
                  )}

                  <p>{question.explanation}</p>

                  <span className="p03p-scorePill">
                    Score: {score} / {questions.length}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p03p-actions">
            {!checked ? (
              <PrimaryButton
                onClick={checkAnswer}
                disabled={selected === null}
              >
                Check answer
              </PrimaryButton>
            ) : !isLast ? (
              <PrimaryButton onClick={nextQuestion}>
                Next question <ArrowRight size={18} />
              </PrimaryButton>
            ) : (
              <PrimaryButton onClick={finishQuiz}>
                See my results <ArrowRight size={18} />
              </PrimaryButton>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
