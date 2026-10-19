
import { useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
import FeedbackCard from "./ui/FeedbackCard";
import { ClipboardList } from "lucide-react";

const questions = [
  {
    name: "Alexander",
    question: "Where is the Design Review?",
    expected: "The Design Review is in Meeting Room A.",
    check: (text) =>
      /\bin\b/.test(text) &&
      /meeting room a\b/.test(text),
  },
  {
    name: "Oksana",
    question: "When and where is the Client Meeting?",
    expected:
      "The Client Meeting is on Wednesday at 2:00 pm in Conference Room B.",
    check: (text) =>
      /\bon\b/.test(text) &&
      /\bwednesday\b/.test(text) &&
      /\bat\b/.test(text) &&
      /\b(2:00|2 pm|2pm|14:00)\b/.test(text) &&
      /\bin\b/.test(text) &&
      /conference room b\b/.test(text),
  },
  {
    name: "Nikita",
    question: "Where is the Safety Training?",
    expected:
      "The Safety Training is on the second floor.",
    check: (text) =>
      /\bon\b/.test(text) &&
      /second floor\b/.test(text),
  },
];

export default function CalendarQuestions02({
  answers,
  setAnswers,
}) {
  const [results, setResults] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [finished, setFinished] = useState(false);

  const allCorrect =
    results?.every(Boolean) ?? false;

  const showAnswers =
    results !== null &&
    !allCorrect &&
    attempts >= 2;

  function checkAnswers() {
    if (answers.some((answer) => !answer.trim())) {
      alert("Please answer all three questions.");
      return;
    }

    const checked = questions.map((question, index) =>
      question.check(
        answers[index].toLowerCase().trim()
      )
    );

    setResults(checked);
    setAttempts((previous) => previous + 1);
  }

  function updateAnswer(index, value) {
    setAnswers((previous) =>
      previous.map((answer, i) =>
        i === index ? value : answer
      )
    );
    setResults(null);
  }

  function continueToWriting() {
    setFinished(true);

    document
      .getElementById("project02-writing")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <div className="nextLessonCard">

      <div className="sectionTitle">
        <ClipboardList
          size={36}
          strokeWidth={2.2}
          className="sectionIcon"
        />
        <h2>Your colleagues need your help</h2>
      </div>

      <p className="homeworkIntro">
        Read the Project Calendar and answer
        their questions. Use complete sentences
        with AT, ON or IN.
      </p>

      {questions.map((question, index) => (
        <div
          className="homeworkQuestion"
          key={question.name}
        >
          <div className="questionName">
            {question.name}
          </div>

          <p className="questionText">
            {question.question}
          </p>

          <input
            className="answerInput"
            value={answers[index]}
            onChange={(e) =>
              updateAnswer(index, e.target.value)
            }
            placeholder="Type your reply..."
            disabled={finished}
          />
        </div>
      ))}

      {!finished && (
        <div className="homeworkButton">
          <PrimaryButton onClick={checkAnswers}>
            Check →
          </PrimaryButton>
        </div>
      )}

      {results && !finished && (
        <div style={{ marginTop: "40px" }}>
          <FeedbackCard
            correct={allCorrect}
            title={
              allCorrect
                ? "Great job!"
                : "Almost there!"
            }
            explanation={
              allCorrect
                ? "Excellent! You used the correct prepositions."
                : showAnswers
                  ? "Here are the correct answers."
                  : "Check the calendar and try again."
            }
            answers={
              showAnswers
                ? questions
                    .filter((_, index) => !results[index])
                    .map((question) => question.expected)
                : undefined
            }
            nextLabel={
              allCorrect || showAnswers
                ? "Continue to Writing →"
                : "Try Again"
            }
            onNext={() => {
              if (allCorrect || showAnswers) {
                continueToWriting();
              } else {
                setResults(null);
              }
            }}
          />
        </div>
      )}

    </div>
  );
}
