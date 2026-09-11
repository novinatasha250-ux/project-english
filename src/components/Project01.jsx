import { useState } from "react";
import "../App.css";

const questions = [
  {
    question: "The design review starts ___ Monday.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The meeting begins ___ 9:00.",
    options: ["at", "on", "in"],
    answer: "at",
  },
  {
    question: "Our team has a workshop ___ October.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "Please send the drawings ___ the morning.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "The client meeting is ___ Friday afternoon.",
    options: ["at", "on", "in"],
    answer: "on",
  },
];

export default function Project01() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
const [studentName, setStudentName] = useState("");
const [started, setStarted] = useState(false);
  const q = questions[current];
if (!started) {
  return (
    <div className="app">
      <div className="card">
        <h1>📐 Project English</h1>

        <h2>Project 01 — Time </h2>

        <p>Please enter your name to start.</p>

        <input
          className="nameInput"
          type="text"
          placeholder="Your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <button
          className="mainButton"
          disabled={!studentName.trim()}
          onClick={() => setStarted(true)}
        >
          Start Lesson
        </button>
      </div>
    </div>
  );
}
  function checkAnswer() {
    if (checked) return;

    if (selected === q.answer) {
      setScore(score + 1);
    }

    setChecked(true);
  }

  function nextQuestion() {
    setSelected("");
    setChecked(false);
    setCurrent(current + 1);
  }

  if (current >= questions.length) {
    return (
      <div className="app">
        <div className="card">
         <h1>🏆 Great job, {studentName}!</h1>
          <h2>
            Score: {score} / {questions.length}
          </h2><p>
  You have successfully completed <b>Project 01 – Time</b>.
</p><button
  className="mainButton"
  onClick={() => {
    const message = `Hi Natalia!

My name is ${studentName}.

I completed Project 01 – Time.

My score: ${score}/${questions.length}.

See you in class!`;

    navigator.clipboard.writeText(message);

    alert("✅ Your results have been copied! Please paste them into Telegram and send them to Natalia.");
  }}
>
  📤 Copy Results for Natalia
</button>

          <h3>Writing Task</h3>

          <p>
            Write a short Teams message to your colleague.
          </p>

          <p>
            <b>Situation:</b> The meeting is on Tuesday at 10:00, but you cannot
            attend. Suggest another time.
          </p>

          <textarea
            rows="6"
            placeholder="Write your message here..."
          ></textarea>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="card">
        <h1>📐 Project English</h1>

        <h2>Project 01 — Time </h2>

        <p>
          Question {current + 1} / {questions.length}
        </p>

        <progress
          value={current}
          max={questions.length}
          style={{ width: "100%" }}
        ></progress>

        <h3>{q.question}</h3>

        {q.options.map((option) => (
          <button
            key={option}
            className="option"
            disabled={checked}
            onClick={() => setSelected(option)}
            style={{
              background:
                selected === option ? "#8c7cf0" : "white",
              color:
                selected === option ? "white" : "black",
            }}
          >
            {option}
          </button>
        ))}

        {!checked ? (
          <button className="mainButton" onClick={checkAnswer}>
            Check Answer
          </button>
        ) : (
          <>
            <p>
              {selected === q.answer
                ? "✅ Correct!"
                : `❌ Correct answer: ${q.answer}`}
            </p>

            <button className="mainButton" onClick={nextQuestion}>
              Next →
            </button>
          </>
        )}
      </div>
    </div>
  );
}