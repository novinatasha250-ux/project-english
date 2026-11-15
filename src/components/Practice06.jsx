
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
// PROJECT 06 — SUPERLATIVES PRACTICE
// CHOOSE THE BEST EQUIPMENT
// ============================================

const questions = [
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context:
      "Oksana is comparing three machines. Compact 100 costs $12,000, Flex 200 costs $16,000, and Power 300 costs $22,000.",
    question: "Compact 100 is ___ machine.",
    options: [
      "the cheaper",
      "the cheapest",
      "the most cheap",
    ],
    answer: 1,
    explanation:
      "Compact 100 has the lowest price. Cheap is a short adjective: cheap → the cheapest.",
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context:
      "Alexander checks production speed. Compact 100 produces 40 units/hour, Flex 200 produces 60, and Power 300 produces 90.",
    question: "Power 300 is ___ machine.",
    options: [
      "the fastest",
      "the most fast",
      "faster than",
    ],
    answer: 0,
    explanation:
      "Power 300 has the highest production speed. Fast → the fastest.",
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context:
      "Nikita checks the weights: Compact 100 weighs 450 kg, Flex 200 weighs 650 kg, and Power 300 weighs 900 kg.",
    question: "Power 300 is ___ machine.",
    options: [
      "the heavyest",
      "the most heavy",
      "the heaviest",
    ],
    answer: 2,
    explanation:
      "Heavy ends in a consonant + y. Change y to i and add -est: the heaviest.",
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context:
      "The reliability ratings are 92% for Compact 100, 97% for Flex 200, and 95% for Power 300.",
    question: "Flex 200 is ___ machine.",
    options: [
      "the reliablest",
      "the most reliable",
      "more reliable than",
    ],
    answer: 1,
    explanation:
      "Reliable is a longer adjective, so use the most reliable.",
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context:
      "A colleague is writing a short report about the three machines.",
    question:
      "Power 300 is the most fastest machine in the group.",
    options: [
      "Power 300 is the fastest machine in the group.",
      "Power 300 is the more fast machine in the group.",
      "Power 300 is fastest than the other machines.",
    ],
    answer: 0,
    explanation:
      "Do not combine most and -est. Fast is a short adjective: the fastest.",
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context:
      "A colleague is describing the size of a new factory building.",
    question:
      "This is the bigest building in the industrial park.",
    options: [
      "This is the most big building in the industrial park.",
      "This is the biggest building in the industrial park.",
      "This is the bigger building in the industrial park.",
    ],
    answer: 1,
    explanation:
      "Big doubles its final consonant before -est: big → the biggest.",
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context:
      "A colleague is making a recommendation about the three machines.",
    question:
      "Flex 200 is best option if reliability is our priority.",
    options: [
      "Flex 200 is the goodest option if reliability is our priority.",
      "Flex 200 is the most good option if reliability is our priority.",
      "Flex 200 is the best option if reliability is our priority.",
    ],
    answer: 2,
    explanation:
      "Good has an irregular superlative form: the best. Remember to include the.",
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context:
      "Oksana and Alexander are discussing the prices of the three machines.",
    dialogue: [
      {
        speaker: "Oksana",
        text: "Compact 100 costs $12,000, and Power 300 costs $22,000.",
      },
      {
        speaker: "Alexander",
        text: "Yes, Power 300 is the ___ expensive machine.",
      },
    ],
    question: "Complete Alexander's answer.",
    options: ["more", "most", "much"],
    answer: 1,
    explanation:
      "Use the most with long adjectives: the most expensive.",
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context:
      "Nikita and Oksana are discussing the reliability ratings.",
    dialogue: [
      {
        speaker: "Nikita",
        text: "Compact 100 has 92%, Flex 200 has 97%, and Power 300 has 95%.",
      },
      {
        speaker: "Oksana",
        text: "So Flex 200 has the ___ reliability rating.",
      },
    ],
    question: "Complete Oksana's answer.",
    options: ["highest", "higher", "most high"],
    answer: 0,
    explanation:
      "High is a short adjective: high → the highest.",
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context:
      "The engineering team is discussing its final equipment recommendation.",
    dialogue: [
      {
        speaker: "Alexander",
        text: "Power 300 is the fastest, but it's also the most expensive.",
      },
      {
        speaker: "Nikita",
        text: "If reliability is the most important factor, Flex 200 is the ___ choice.",
      },
    ],
    question: "Complete Nikita's answer.",
    options: ["goodest", "better", "best"],
    answer: 2,
    explanation:
      "Good has an irregular superlative form: good → better → the best.",
  },
];

// ============================================
// PRACTICE PAGE
// ============================================

export default function Practice06() {
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
    navigate("/project06/complete", {
      state: {
        score,
        total: questions.length,
      },
    });
  }

  return (
    <div className="app">
      <div className="card p03p-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project06/examples")}
        >
          ← Back
        </button>

        <p className="p03p-projectLabel">
          PROJECT 06 / PRACTICE
        </p>

        {/* HERO */}

        <header className="p03p-hero">
          <span className="p03p-pill">
            <Sparkles size={16} />
            CHOOSE THE BEST EQUIPMENT CHALLENGE
          </span>

          <h1>Can you choose the best machine?</h1>

          <p>
            Ten engineering and workplace situations.
            Three types of questions.
            Test your superlative adjectives!
          </p>

          <div className="p03p-heroTags">
            <span>10 questions</span>
            <span>Instant feedback</span>
            <span>Final score</span>
          </div>
        </header>

        {/* LESSON PROGRESS */}

        <div
          className="p03p-lessonDots"
          aria-label="Lesson step 3 of 3"
        >
          <span />
          <span />
          <span className="p03p-activeDot" />
        </div>

        {/* QUIZ */}

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

            {/* ANSWER FEEDBACK */}

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

          {/* NAVIGATION */}

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
