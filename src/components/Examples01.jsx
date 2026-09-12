import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn.css";

import {
  Clock3,
  CalendarDays,
  Calendar
} from "lucide-react";

export default function Examples01() {

  const navigate = useNavigate();

  return (

    <div className="app">

      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project01/grammar")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 01
        </p>

        <h1 className="lessonTitle">
          Examples
        </h1>

        <p className="lessonSubtitle">
          Time
        </p>

        <div className="lessonProgress">
          <span className="progressDot"></span>
          <span className="activeDot"></span>
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

            <div className="exampleList">

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>We start work <strong>at 8:00</strong>.</span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>We have lunch <strong>at noon</strong>.</span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>I usually go to bed <strong>at midnight</strong>.</span>
              </div>

            </div>

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

            <div className="exampleList">

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>We have English <strong>on Monday</strong>.</span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>My birthday is <strong>on 15 May</strong>.</span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>We celebrate New Year <strong>on 1 January</strong>.</span>
              </div>

            </div>

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

            <div className="exampleList">

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>We travel <strong>in July</strong>.</span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>I was born <strong>in 1995</strong>.</span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>It often snows <strong>in winter</strong>.</span>
              </div>

            </div>

          </div>

        </div>

        <div className="nextLessonCard">

          <img
            src="/natalia-examples.png"
            alt="Natalia"
            className="nextNatalia"
          />

          <div className="nextContent">

            <h2>
              Ready for a quiz?
            </h2>

            <PrimaryButton
              onClick={() => navigate("/project01/practice")}
            >
              Start Quiz →
            </PrimaryButton>

          </div>

        </div>

      </div>

    </div>

  );

}