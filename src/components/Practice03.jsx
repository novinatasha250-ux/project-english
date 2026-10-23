
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
    context: "A new colleague is visiting your office.",
    question: "___ a meeting room on the second floor.",
    options: ["There are", "There is", "Are there"],
    answer: 1,
    explanation:
      "A meeting room is singular, so we use There is."
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context: "Your colleague is looking for the elevator.",
    question: "There is ___ elevator near reception.",
    options: ["a", "an", "some"],
    answer: 1,
    explanation:
      "Elevator starts with a vowel sound, so we use an."
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context: "You're waiting for an update about your project.",
    question: "___ any good news about the project?",
    options: ["Are there", "Is there", "There are"],
    answer: 1,
    explanation:
      "News is an uncountable noun, even though it ends in -s. We say Is there any good news?"
  },
  {
    type: "CHOOSE THE ANSWER",
    icon: ClipboardCheck,
    context: "Someone is asking about the office kitchen.",
    question: "There ___ some coffee in the kitchen.",
    options: ["are", "is", "aren't"],
    answer: 1,
    explanation:
      "Coffee is uncountable here, so we use There is."
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context: "Your colleague is worried about today's workload.",
    question: "There is too many tasks to finish today.",
    options: [
      "There are too many tasks to finish today.",
      "There is too much tasks to finish today.",
      "There are too much task to finish today."
    ],
    answer: 0,
    explanation:
      "Tasks is plural. Use There are and too many with plural countable nouns."
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context: "You're describing a problem at work.",
    question: "There is problem with the printer.",
    options: [
      "There are a problem with the printer.",
      "There is a problem with the printer.",
      "There is an problem with the printer."
    ],
    answer: 1,
    explanation:
      "Problem is a singular countable noun. We need a before it."
  },
  {
    type: "FIX THE MISTAKE",
    icon: PencilLine,
    context: "A colleague is describing an empty office.",
    question: "There aren't some computers in this room.",
    options: [
      "There isn't any computers in this room.",
      "There aren't a computers in this room.",
      "There aren't any computers in this room."
    ],
    answer: 2,
    explanation:
      "Computers is plural. Use There aren't any in a negative sentence."
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context: "Before an important presentation",
    dialogue: [
      {
        speaker: "Anna",
        text: "Is there a problem with the projector?"
      },
      {
        speaker: "Max",
        text: "Yes, ___. It isn't working."
      }
    ],
    question: "Complete Max's answer.",
    options: ["there are", "there is", "it is"],
    answer: 1,
    explanation:
      "The short answer to Is there...? is Yes, there is."
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context: "In the office kitchen",
    dialogue: [
      {
        speaker: "Anna",
        text: "Is there any coffee left?"
      },
      {
        speaker: "Max",
        text: "No, there isn't. But ___ some tea."
      }
    ],
    question: "Complete Max's answer.",
    options: ["there's", "there are", "there aren't"],
    answer: 0,
    explanation:
      "Tea is uncountable, so we say There's some tea."
  },
  {
    type: "COMPLETE THE CONVERSATION",
    icon: MessageCircle,
    context: "Two days before a deadline",
    dialogue: [
      {
        speaker: "Anna",
        text: "There are only two days left!"
      },
      {
        speaker: "Max",
        text: "I know. ___ still a lot of work to do."
      }
    ],
    question: "Complete Max's answer.",
    options: ["There are", "Are there", "There's"],
    answer: 2,
    explanation:
      "Work is uncountable, so we use There's a lot of work."
  }
];

export default function Practice03() {
  const navigate = useNavigate();
  const quizRef = useRef(null);
  const feedbackRef = useRef(null);
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
    navigate("/project03/complete", {
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
          onClick={() => navigate("/project03/examples")}
        >
          ← Back
        </button>

        <p className="p03p-projectLabel">
          PROJECT 03 / PRACTICE
        </p>

        <header className="p03p-hero">

          <span className="p03p-pill">
            <Sparkles size={16} />
            YOUR GRAMMAR CHALLENGE
          </span>

          <h1>Let's put it into practice!</h1>

          <p>
            Ten workplace situations. Three types of questions.
            See how much you've learned!
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
                ref={feedbackRef}
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
