import { useLocation, useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn.css";

export default function LessonComplete01() {
  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state?.score ?? 0;

  let message = "Keep practising!";

  if (score === 5) {
    message = "Excellent work!";
  } else if (score >= 4) {
    message = "Great job!";
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

          <h2>🎉 {message}</h2>

          <h1 className="scoreTitle">
            {score} / 5
          </h1>

          <p className="scoreText">
            You have successfully completed today's lesson.
          </p>

          <div className="completionList">

            <p>✅ Grammar</p>

            <p>✅ Examples</p>

            <p>✅ Practice</p>

          </div>

          <hr className="lessonDivider" />

          <h3>Natalia</h3>

          <p>
            Fantastic work! Now let's complete the homework
            and put everything into practice.
          </p>

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