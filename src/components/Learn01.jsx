import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn.css";

import {
  Clock3,
  CalendarDays,
  Calendar
} from "lucide-react";

export default function Learn01() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project01")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 01
        </p>

        <div className="lessonHeader">

          <img
            src="/natalia-grammar.png"
            alt="Natalia"
            className="grammarNatalia"
          />

          <div className="lessonHeaderText">

            <h1 className="lessonTitle">
              Time
            </h1>

            <p className="lessonSubtitle">
              AT • ON • IN
            </p>

          </div>

        </div>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="progressDot"></span>
          <span className="progressDot"></span>
        </div>

        <div className="grammarCards">

          {/* AT */}
          <div className="grammarCard">

            <div className="cardHeading">

              <div className="grammarIconCircle">
                <Clock3
                  size={34}
                  strokeWidth={2.2}
                  className="grammarIcon"
                />
              </div>

              <h2>AT</h2>

              <h3>Exact Times</h3>

            </div>

            <p>at 7:00</p>
            <p>at noon</p>
            <p>at midnight</p>

          </div>

          {/* ON */}
          <div className="grammarCard">

            <div className="cardHeading">

              <div className="grammarIconCircle">
                <CalendarDays
                  size={34}
                  strokeWidth={2.2}
                  className="grammarIcon"
                />
              </div>

              <h2>ON</h2>

              <h3>Days & Dates</h3>

            </div>

            <p>on Monday</p>
            <p>on 15 May</p>
            <p>on my birthday</p>

          </div>

          {/* IN */}
          <div className="grammarCard">

            <div className="cardHeading">

              <div className="grammarIconCircle">
                <Calendar
                  size={34}
                  strokeWidth={2.2}
                  className="grammarIcon"
                />
              </div>

              <h2>IN</h2>

              <h3>Long Periods</h3>

            </div>

            <p>in July</p>
            <p>in 2026</p>
            <p>in winter</p>

          </div>

        </div>

       <div className="nextLessonCard">

  <img
    src="/natalia-examples.png"
    alt="Natalia"
    className="nextNatalia"
  />

  <div className="nextContent">

    <h2>Let's look at examples!</h2>

    <PrimaryButton
      onClick={() => navigate("/project01/examples")}
    >
      Examples →
    </PrimaryButton>

  </div>

</div>

      </div>
    </div>
  );
}