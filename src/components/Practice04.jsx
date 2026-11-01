
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
  XCircle
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/practice03.css";

const questions = [
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context: "Natalia is packing for Shanghai.",
    question: "I need to pack ___ luggage for my trip.",
    options: ["a few", "some", "many"],
    answer: 1,
    explanation:
      "Luggage is uncountable. We use some luggage, not a few or many luggage."
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context: "Anna is checking the travel documents.",
    question: "How ___ passports do we need?",
    options: ["much", "many", "a little"],
    answer: 1,
    explanation:
      "Passports are countable, so we use how many."
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context: "At the airport, boarding starts soon.",
    question: "We don't have ___ time before boarding.",
    options: ["many", "a few", "much"],
    answer: 2,
    explanation:
      "Time is uncountable, so we use much in this negative sentence."
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context: "Natalia is checking into her hotel.",
    question: "There are ___ towels in the bathroom.",
    options: ["three", "much", "a little"],
    answer: 0,
    explanation:
      "Towels are countable. We can count them: one towel, two towels, three towels."
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context: "The team is preparing for a client meeting.",
    question: "We need some informations about the project.",
    options: [
      "We need some information about the project.",
      "We need many informations about the project.",
      "We need an information about the project."
    ],
    answer: 0,
    explanation:
      "Information is uncountable. It has no plural -s, and we don't use a/an directly before it."
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context: "The client is asking for recommendations.",
    question: "Can you give us a few advice?",
    options: [
      "Can you give us many advice?",
      "Can you give us some advice?",
      "Can you give us an advice?"
    ],
    answer: 1,
    explanation:
      "Advice is uncountable. Use some advice or a piece of advice."
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context: "Anna is talking about souvenirs.",
    question: "I bought a little souvenirs in Shanghai.",
    options: [
      "I bought much souvenirs in Shanghai.",
      "I bought a little souvenir in Shanghai.",
      "I bought a few souvenirs in Shanghai."
    ],
    answer: 2,
    explanation:
      "Souvenirs are plural countable nouns. Use a few souvenirs."
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context: "At the airport café",
    dialogue: [
      {
        speaker: "Natalia",
        text: "Is there any coffee left?"
      },
      {
        speaker: "Anna",
        text: "Yes, there's ___ coffee in the pot."
      }
    ],
    question: "Complete Anna's answer.",
    options: ["a few", "some", "many"],
    answer: 1,
    explanation:
      "Coffee is uncountable here. Some coffee is the correct expression."
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context: "During the client meeting",
    dialogue: [
      {
        speaker: "Client",
        text: "How many questions do you have?"
      },
      {
        speaker: "Natalia",
        text: "Just ___. We can finish quickly."
      }
    ],
    question: "Complete Natalia's answer.",
    options: ["a little", "much", "a few"],
    answer: 2,
    explanation:
      "Questions are countable. A few means a small number."
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context: "Packing for the return flight",
    dialogue: [
      {
        speaker: "Anna",
        text: "Is there enough space in your suitcase?"
      },
      {
        speaker: "Natalia",
        text: "Not really. There's only ___ space left."
      }
    ],
    question: "Complete Natalia's answer.",
    options: ["a little", "a few", "many"],
    answer: 0,
    explanation:
      "Space is uncountable in this context, so we use a little."
  }
];

export default function Practice04() {
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
      block: "start"
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
    navigate("/project04/complete", {
      state: {
        score,
        total: questions.length
      }
    });
  }

  return (
    <div className="app">
      <div className="card p03p-page">
        <button
          className="backButton"
          onClick={() => navigate("/project04/examples")}
        >
          ← Back
        </button>

        <p className="p03p-projectLabel">
          PROJECT 04 / PRACTICE
        </p>

        <header className="p03p-hero">
          <span className="p03p-pill">
            <Sparkles size={16} />
            MISSION SHANGHAI CHALLENGE
          </span>

          <h1>Ready for your business trip?</h1>

          <p>
            Ten travel and workplace situations.
            Three types of questions.
            Test your countable and uncountable nouns!
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
                  showWrong ? "p03p-wrong" : ""
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
