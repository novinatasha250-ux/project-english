import PrimaryButton from "./ui/PrimaryButton";

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
  setAttempts
}) {


  const checkAnswers = () => {

    const a1 = answer1.toLowerCase().trim();
    const a2 = answer2.toLowerCase().trim();
    const a3 = answer3.toLowerCase().trim();

    // Question 1

const q1 =
  a1.includes("wednesday");

// Question 2

const q2 =
  a2.includes("monday");

// Question 3

const hasFriday =
  a3.includes("friday");

const hasTime =
  a3.includes("4") ||
  a3.includes("4:00") ||
  a3.includes("4 pm") ||
  a3.includes("4pm") ||
  a3.includes("16") ||
  a3.includes("16:00");

const q3 =
  hasFriday || hasTime;

setResults({
  q1,
  q2,
  q3
});

setAttempts(prev => prev + 1);

};

return (
    <div className="nextLessonCard">

      <h2>📋 Your colleagues need your help</h2>

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

        <div className="feedbackBox">

          <p>
            {results.q1
              ? "✅ Great! The Client Meetings are on Wednesdays."
              : attempts >= 2
                ? "💡 Correct answer: The Client Meetings are on Wednesdays."
                : "❌ Almost! Check the calendar again."}
          </p>

          <p>
            {results.q2
              ? "✅ Great! The next Design Review is on Monday 22 September."
              : attempts >= 2
                ? "💡 Correct answer: The next Design Review is on Monday 22 September."
                : "❌ Almost! Check the calendar again."}
          </p>

          <p>
            {results.q3
              ? "✅ Great! The Safety Training is on Friday 26 September at 4:00 pm."
              : attempts >= 2
                ? "💡 Correct answer: The Safety Training is on Friday 26 September at 4:00 pm."
                : "❌ Almost! Check the calendar again."}
          </p>

          {results.q1 && results.q2 && results.q3 && (

            <div className="successBanner">

              🎉 Excellent! You completed this activity.

            </div>

          )}

        </div>

      )}

    </div>

  );

}