
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/lesson.css";

import {
  MapPin,
  Layers3,
  Building2
} from "lucide-react";

export default function Learn02() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project02")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 02
        </p>

        <div className="lessonHeader">

          <img
            src="/natalia-grammar.png"
            alt="Natalia"
            className="grammarNatalia"
          />

          <div className="lessonHeaderText">
            <h1 className="lessonTitle">
              Place
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
                <MapPin
                  size={34}
                  strokeWidth={2.2}
                  className="grammarIcon"
                />
              </div>

              <h2>AT</h2>
              <h3>Specific Points</h3>

            </div>

            <p>at reception</p>
            <p>at the bus stop</p>
            <p>at the entrance</p>

          </div>

          {/* ON */}
          <div className="grammarCard">

            <div className="cardHeading">

              <div className="grammarIconCircle">
                <Layers3
                  size={34}
                  strokeWidth={2.2}
                  className="grammarIcon"
                />
              </div>

              <h2>ON</h2>
              <h3>Surfaces &amp; Floors</h3>

            </div>

            <p>on the desk</p>
            <p>on the wall</p>
            <p>on the second floor</p>

          </div>

          {/* IN */}
          <div className="grammarCard">

            <div className="cardHeading">

              <div className="grammarIconCircle">
                <Building2
                  size={34}
                  strokeWidth={2.2}
                  className="grammarIcon"
                />
              </div>

              <h2>IN</h2>
              <h3>Inside &amp; Areas</h3>

            </div>

            <p>in the office</p>
            <p>in the meeting room</p>
            <p>in Kazan</p>

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
              onClick={() => navigate("/project02/examples")}
            >
              Examples →
            </PrimaryButton>

          </div>

        </div>

      </div>
    </div>
  );
}
