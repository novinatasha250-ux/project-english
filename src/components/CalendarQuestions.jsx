import PrimaryButton from "./ui/PrimaryButton";
import FeedbackCard from "./ui/FeedbackCard";
import { ClipboardList } from "lucide-react";

export default function CalendarQuestions({
  answer1,
  setAnswer1,
  answer2,
  setAnswer2,
  answer3,
  setAnswer3,
  results,
  setResults,
  attempts,
  setAttempts,
}) {

  function checkAnswers() {

    const a1 = answer1.toLowerCase().trim();
    const a2 = answer2.toLowerCase().trim();
    const a3 = answer3.toLowerCase().trim();

    const q1 = a1.includes("wednesday");

    const q2 = a2.includes("monday");

    const hasFriday =
      a3.includes("friday");

    const hasTime =
      a3.includes("4") ||
      a3.includes("4:00") ||
      a3.includes("4 pm") ||
      a3.includes("4pm") ||
      a3.includes("16") ||
      a3.includes("16:00");

    const q3 = hasFriday && hasTime;

    setResults({
      q1,
      q2,
      q3,
    });

    setAttempts((prev) => prev + 1);

  }

  const allCorrect =
    results &&
    results.q1 &&
    results.q2 &&
    results.q3;

  const showAnswers =
    results &&
    !allCorrect &&
    attempts >= 2;

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
        Read the Project Calendar and reply to their questions.
      </p>

      {/* Alexander */}

      <div className="homeworkQuestion">

        <div className="questionName">
          Alexander
        </div>

        <p className="questionText">
          When are the Client Meetings?
        </p>

        <input
          className="answerInput"
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          placeholder="Type your reply..."
        />

      </div>

      {/* Oksana */}

      <div className="homeworkQuestion">

        <div className="questionName">
          Oksana
        </div>

        <p className="questionText">
          I missed this week's Design Review.
          <br />
          When is the next one?
        </p>

        <input
          className="answerInput"
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          placeholder="Type your reply..."
        />

      </div>

      {/* Nikita */}

      <div className="homeworkQuestion">

        <div className="questionName">
          Nikita
        </div>

        <p className="questionText">
          When is the Safety Training?
        </p>

        <input
          className="answerInput"
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          placeholder="Type your reply..."
        />

      </div>

      <div className="homeworkButton">

        <PrimaryButton onClick={checkAnswers}>
          Check →
        </PrimaryButton>

      </div>

      {results && (

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
                ? "You answered all three questions correctly."
                : showAnswers
                  ? ""
                  : "Check the calendar again."
            }

            answers={
              showAnswers
                ? [
                    !results.q1 &&
                      "The Client Meetings are <strong>ON</strong> Wednesdays.",

                    !results.q2 &&
                      "The next Design Review is <strong>ON</strong> Monday 22 September.",

                    !results.q3 &&
                      "The Safety Training is <strong>ON</strong> Friday 26 September <strong>AT</strong> 4:00 pm.",
                  ].filter(Boolean)
                : undefined
            }

            nextLabel={
              showAnswers || allCorrect
                ? "Continue to Writing →"
                : "Try Again"
            }

            onNext={() => {

              if (showAnswers || allCorrect) {

                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });

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