
import { useLocation, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  MessageCircle,
  RotateCcw,
  Sparkles,
  Trophy
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/completion03.css";

export default function LessonComplete03() {
  const navigate = useNavigate();
  const location = useLocation();

  const total = 10;

  const rawScore = Number(location.state?.score);

  const hasResult =
    location.state?.score !== undefined &&
    location.state?.score !== null &&
    Number.isFinite(rawScore);

  const score = hasResult
    ? Math.max(0, Math.min(total, Math.floor(rawScore)))
    : 0;

  const percentage = Math.round((score / total) * 100);

  let message = "Keep going!";
  let subtitle =
    "Every question is an opportunity to learn. Review the examples and try again.";

  if (score === 10) {
    message = "Outstanding work!";
    subtitle =
      "A perfect score! You've mastered today's grammar challenge.";
  } else if (score >= 8) {
    message = "Fantastic work!";
    subtitle =
      "You have a strong understanding of there is and there are.";
  } else if (score >= 6) {
    message = "Well done!";
    subtitle =
      "You're making great progress. A little more practice will make you even more confident.";
  } else if (score >= 4) {
    message = "Good progress!";
    subtitle =
      "You've learned some important patterns. Keep practising!";
  }

  return (
    <div className="app">
      <div className="card p03c-page">

        {/* BACK */}

        <button
          className="backButton"
          onClick={() => navigate("/project03")}
        >
          ← Back
        </button>

        <p className="p03c-projectLabel">
          PROJECT 03 / LESSON COMPLETE
        </p>

        {/* HERO */}

        <header className="p03c-hero">

          <span className="p03c-pill">
            <Sparkles size={16} />
            YOUR LEARNING JOURNEY
          </span>

          <h1>Lesson complete!</h1>

          <p>There is / There are</p>

          <div className="p03c-heroTags">
            <span>A2 Grammar</span>
            <span>Workplace English</span>
            <span>Project 03</span>
          </div>

        </header>

        {/* LESSON PROGRESS */}

        <div
          className="p03c-lessonDots"
          aria-label="All three lesson steps complete"
        >
          <span />
          <span />
          <span />
        </div>

        <main className="p03c-content">

          {!hasResult ? (

            /* NO QUIZ RESULT */

            <div className="p03c-noResult">

              <Trophy size={42} />

              <h2>Ready for your challenge?</h2>

              <p>
                Complete the practice quiz to see your score
                and celebrate your progress.
              </p>

              <PrimaryButton
                onClick={() =>
                  navigate("/project03/practice")
                }
              >
                Start Practice <ArrowRight size={18} />
              </PrimaryButton>

            </div>

          ) : (

            <>
              {/* RESULTS */}

              <section className="p03c-resultCard">

                <div className="p03c-resultTop">

                  <span className="p03c-eyebrow">
                    YOUR RESULTS
                  </span>

                  <span className="p03c-completeBadge">
                    <CheckCircle2 size={16} />
                    COMPLETED
                  </span>

                </div>

                {/* NATALIA + SCORE RING */}

                <div className="p03c-celebration">

                  <div className="p03c-character">

                    <img
                      src="/confetti.png"
                      alt=""
                      className="p03c-confetti"
                    />

                    <img
                      src="/natalia-homework.png"
                      alt="Natalia celebrating your progress"
                      className="p03c-natalia"
                    />

                  </div>

                  <div className="p03c-scoreRing">

                    <div
                      className="p03c-ring"
                      style={{
                        "--p03c-score": `${percentage}%`
                      }}
                    >

                      <div className="p03c-ringCenter">

                        <span className="p03c-scoreNumber">
                          {score}
                          <small> / {total}</small>
                        </span>

                        <span className="p03c-scoreLabel">
                          CORRECT ANSWERS
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* RESULT MESSAGE */}

                <div className="p03c-resultMessage">

                  <Trophy size={29} />

                  <h2>{message}</h2>

                  <p>{subtitle}</p>

                  <div className="p03c-percentage">
                    {percentage}% correct
                  </div>

                </div>

              </section>

              {/* LEARNING JOURNEY */}

              <section className="p03c-journey">

                <div className="p03c-sectionHeading">

                  <span className="p03c-eyebrow">
                    YOUR LEARNING JOURNEY
                  </span>

                  <h2>Look how far you've come!</h2>

                  <p>
                    You've completed all three steps
                    of today's lesson.
                  </p>

                </div>

                <div className="p03c-journeyGrid">

                  {/* GRAMMAR */}

                  <div className="p03c-journeyItem">

                    <div className="p03c-journeyIcon">
                      <BookOpen size={27} />
                    </div>

                    <h3>01 · Grammar</h3>

                    <p>
                      Learned the rules for singular,
                      plural, and uncountable nouns.
                    </p>

                    <span className="p03c-done">
                      <Check size={16} />
                      Complete
                    </span>

                  </div>

                  {/* EXAMPLES */}

                  <div className="p03c-journeyItem">

                    <div className="p03c-journeyIcon">
                      <MessageCircle size={27} />
                    </div>

                    <h3>02 · Examples</h3>

                    <p>
                      Explored natural English in
                      everyday workplace situations.
                    </p>

                    <span className="p03c-done">
                      <Check size={16} />
                      Complete
                    </span>

                  </div>

                  {/* PRACTICE */}

                  <div className="p03c-journeyItem">

                    <div className="p03c-journeyIcon">
                      <Trophy size={27} />
                    </div>

                    <h3>03 · Practice</h3>

                    <p>
                      Completed 10 questions with
                      immediate grammar feedback.
                    </p>

                    <span className="p03c-done">
                      <Check size={16} />
                      Complete
                    </span>

                  </div>

                </div>

              </section>

              {/* WHAT'S NEXT — REFINED LAYOUT */}

              <section className="p03c-next">

                <div className="p03c-nextHeading">

                  <div className="p03c-nextIcon">
                    <Sparkles size={25} />
                  </div>

                  <span className="p03c-eyebrow">
                    WHAT'S NEXT?
                  </span>

                  <h2>
                    Keep your English growing!
                  </h2>

                </div>

                <p className="p03c-nextDescription">
                  Great progress today! You can challenge
                  yourself again or return to Project 03.
                  More workplace activities are coming soon.
                </p>

                <div className="p03c-actions">

                  <button
                    className="p03c-secondaryButton"
                    onClick={() =>
                      navigate("/project03/practice")
                    }
                  >
                    <RotateCcw size={18} />
                    Try Again
                  </button>

                  <PrimaryButton
                    onClick={() =>
                      navigate("/project03")
                    }
                  >
                    Back to Project
                    <ArrowRight size={18} />
                  </PrimaryButton>

                </div>

              </section>

            </>

          )}

        </main>

      </div>
    </div>
  );
}
