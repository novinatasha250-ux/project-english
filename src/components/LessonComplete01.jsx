import { useLocation, useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn.css";

export default function LessonComplete01() {

  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state?.score ?? 0;

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
          Project 01
        </p>

        <h1 className="lessonTitle">
          Lesson Complete
        </h1>

        <p className="lessonSubtitle">
          Time
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="activeDot"></span>
          <span className="activeDot"></span>
        </div>

        <div className="nextLessonCard">

          <img
            src="/natalia-homework.png"
            alt="Natalia"
            className="lessonCompleteNatalia"
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
              Ready for one more step?
            </h3>

            <p>
              Let's practice everything you learned with today's homework.
            </p>

          </div>

          <PrimaryButton
            onClick={() => navigate("/project01/homework")}
          >
            Start Homework →
          </PrimaryButton>

        </div>

      </div>

    </div>
  );
}