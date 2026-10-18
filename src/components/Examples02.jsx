
import { useNavigate } from "react-router-dom";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/examples.css";

import {
  MapPin,
  Layers3,
  Building2
} from "lucide-react";

export default function Examples02() {

  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() => navigate("/project02/grammar")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 02
        </p>

        <h1 className="lessonTitle">
          Examples
        </h1>

        <p className="lessonSubtitle">
          Place
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
                <MapPin
                  size={34}
                  strokeWidth={2.2}
                  className="grammarIcon"
                />
              </div>

              <h2>AT</h2>
              <h3>Specific Points</h3>

            </div>

            <div className="exampleList">

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  The visitors are waiting <strong>at reception</strong>.
                </span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  I'll meet you <strong>at the entrance</strong>.
                </span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  She is waiting <strong>at the bus stop</strong>.
                </span>
              </div>

            </div>

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

            <div className="exampleList">

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  The documents are <strong>on the desk</strong>.
                </span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  There's a calendar <strong>on the wall</strong>.
                </span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  Our office is <strong>on the second floor</strong>.
                </span>
              </div>

            </div>

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

            <div className="exampleList">

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  The manager is <strong>in the meeting room</strong>.
                </span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  There are three lifts <strong>in the building</strong>.
                </span>
              </div>

              <div className="exampleItem">
                <span className="exampleBadge">✓</span>
                <span>
                  Our company has an office <strong>in Kazan</strong>.
                </span>
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
              onClick={() => navigate("/project02/practice")}
            >
              Start Quiz →
            </PrimaryButton>

          </div>

        </div>

      </div>
    </div>
  );
}
