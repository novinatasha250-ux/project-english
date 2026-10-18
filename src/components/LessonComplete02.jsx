
import { useLocation, useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/completion.css";

export default function LessonComplete02() {
  const navigate = useNavigate();
  const location = useLocation();

  const score = Math.max(
    0,
    Math.min(5, Number(location.state?.score ?? 0))
  );

  let message = "Keep practising!";

  if (score === 5) {
    message = "Outstanding work!";
  } else if (score >= 4) {
    message = "Fantastic work!";
  } else if (score >= 3) {
    message = "Nice work!";
  }

  return (
    <div className="app">
      <div className="card">

        <p className="projectLabel">
          Project 02
        </p>

        <h1 className="lessonTitle">
          Lesson Complete
        </h1>

        <p className="lessonSubtitle">
          Place
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="activeDot"></span>
          <span className="activeDot"></span>
        </div>

        <div className="lessonCompleteCard">

          <img
            src="/natalia-homework.png"
            alt="Natalia"
            className="completionNatalia"
          />

          <div className="lessonScore">

            <div className="lessonStars">
              {"★".repeat(score)}
              {"☆".repeat(5 - score)}
            </div>

            <div className="lessonFraction">
              {score} / 5
            </div>

          </div>

          <h2 className="completeTitle">
            {message}
          </h2>

          <p className="completeText">
            You successfully completed today's lesson.
          </p>

          <div className="completeChecklist">

            <div className="checkItem">
              <span className="checkIcon">✓</span>
              <span>Grammar</span>
            </div>

            <div className="checkItem">
              <span className="checkIcon">✓</span>
              <span>Examples</span>
            </div>

            <div className="checkItem">
              <span className="checkIcon">✓</span>
              <span>Practice</span>
            </div>

          </div>

          <div className="homeworkMessage">

            <h3>
              Great progress!
            </h3>

            <p>
              You've completed the lesson on
              prepositions of place.
              More practice is coming soon!
            </p>

          </div>

          <PrimaryButton
            onClick={() => navigate("/project02")}
          >
            Return to Project 02 →
          </PrimaryButton>

        </div>

      </div>
    </div>
  );
}
