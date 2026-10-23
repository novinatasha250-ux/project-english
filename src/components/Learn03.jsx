
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  CircleHelp,
  Lightbulb,
  MinusCircle,
  Printer,
  Sparkles,
  X
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/lesson03.css";

function QuickCheck({
  number,
  question,
  options,
  correct,
  explanation
}) {
  const [selected, setSelected] = useState(null);

  const answered = selected !== null;
  const isCorrect = selected === correct;

  return (
    <div className="p03-check">

      <div className="p03-checkTop">
        <span className="p03-eyebrow">
          QUICK CHECK {number}
        </span>
        <CircleHelp size={19} />
      </div>

      <h3>{question}</h3>

      <div className="p03-options">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            className={`p03-option ${
              selected === index
                ? isCorrect
                  ? "p03-optionCorrect"
                  : "p03-optionWrong"
                : ""
            }`}
            onClick={() => setSelected(index)}
          >
            <span>
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>

      {answered && (
        <div
          className={`p03-feedback ${
            isCorrect
              ? "p03-feedbackCorrect"
              : "p03-feedbackWrong"
          }`}
          role="status"
        >
          {isCorrect ? (
            <CheckCircle2 size={20} />
          ) : (
            <Lightbulb size={20} />
          )}

          <p>
            <strong>
              {isCorrect
                ? "Exactly!"
                : "Not quite. Try again!"}
            </strong>{" "}
            {isCorrect
              ? explanation
              : "Look at the noun and decide which form is correct."}
          </p>
        </div>
      )}

    </div>
  );
}

export default function Learn03() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card p03-page">

        <button
          className="backButton"
          onClick={() => navigate("/project03")}
        >
          ← Back
        </button>

        <p className="p03-projectLabel">
          PROJECT 03 / GRAMMAR
        </p>

        {/* HERO */}

        <header className="p03-hero">

          <div className="p03-heroText">

            <span className="p03-pill">
              <Sparkles size={15} />
              A2 GRAMMAR GUIDE
            </span>

            <h1>
              There is <span>/</span> There are
            </h1>

            <p className="p03-heroLead">
              Learn how to describe offices, buildings,
              meeting rooms, and the things around you.
            </p>

            <div className="p03-heroTags">
              <span>Singular &amp; plural</span>
              <span>Articles</span>
              <span>Questions</span>
            </div>

          </div>

          <img
            src="/natalia-grammar.png"
            alt="Natalia introducing the grammar lesson"
            className="p03-heroNatalia"
          />

        </header>

        <div
          className="p03-progress"
          aria-label="Lesson step 1 of 3"
        >
          <span className="p03-progressActive" />
          <span />
          <span />
        </div>

        <main className="p03-content">

          {/* 01 — THE BASICS */}

          <section className="p03-section">

            <div className="p03-sectionIntro">
              <span className="p03-eyebrow">
                01 / THE BASICS
              </span>

              <h2>One or many?</h2>

              <p>
                Use <strong>there is</strong> and{" "}
                <strong>there are</strong> to say
                that something exists in a place.
              </p>
            </div>

            <div className="p03-comparison">

              {/* SINGULAR */}

              <article className="p03-compareCard p03-singular">

                <div className="p03-compareTop">
                  <span className="p03-number">01</span>
                  <span className="p03-miniLabel">
                    SINGULAR
                  </span>
                </div>

                <div className="p03-visual p03-oneObject">
                  <div
                    className="p03-printer"
                    aria-hidden="true"
                  >
                    <Printer
                      size={48}
                      strokeWidth={1.6}
                    />
                  </div>
                </div>

                <h3>There is</h3>

                <p className="p03-pattern">
                  There{" "}
                  <span className="p03-highlightVerb">
                    is
                  </span>
                  {" + "}
                  <span className="p03-highlightArticle">
                    a/an
                  </span>
                  {" + singular noun"}
                </p>

                <p className="p03-example">
                  There is{" "}
                  <mark>a printer</mark>{" "}
                  in the office.
                </p>

              </article>

              {/* PLURAL */}

              <article className="p03-compareCard p03-plural">

                <div className="p03-compareTop">
                  <span className="p03-number">02</span>
                  <span className="p03-miniLabel">
                    PLURAL
                  </span>
                </div>

                <div className="p03-visual p03-manyObjects">
                  {[1, 2, 3].map((item) => (
                    <div
                      className="p03-printer"
                      key={item}
                      aria-hidden="true"
                    >
                      <Printer
                        size={36}
                        strokeWidth={1.6}
                      />
                    </div>
                  ))}
                </div>

                <h3>There are</h3>

                <p className="p03-pattern">
                  There{" "}
                  <span className="p03-highlightVerb">
                    are
                  </span>
                  {" + plural noun"}
                </p>

                <p className="p03-example">
                  There are{" "}
                  <mark>three printers</mark>{" "}
                  in the office.
                </p>

              </article>

            </div>

            <div className="p03-note">
              <Lightbulb size={21} />

              <p>
                <strong>Also remember:</strong>{" "}
                Use <strong>there is</strong> with
                uncountable nouns, too.
                <br />
                <em>
                  There is some water in the kitchen.
                </em>
              </p>
            </div>

          </section>

          {/* 02 — ARTICLES */}

          <section className="p03-section">

            <div className="p03-sectionIntro">
              <span className="p03-eyebrow">
                02 / ARTICLES &amp; QUANTIFIERS
              </span>

              <h2>Don't forget a / an!</h2>

              <p>
                Singular countable nouns normally
                need an article or another determiner.
              </p>
            </div>

            <div className="p03-ruleGrid">

              <div className="p03-ruleCard">
                <span className="p03-ruleBadge">
                  A
                </span>

                <h3>a + consonant sound</h3>

                <p>
                  There is <strong>a desk</strong>.
                </p>

                <p>
                  There is <strong>a computer</strong>.
                </p>
              </div>

              <div className="p03-ruleCard">
                <span className="p03-ruleBadge">
                  AN
                </span>

                <h3>an + vowel sound</h3>

                <p>
                  There is{" "}
                  <strong>an office</strong> upstairs.
                </p>

                <p>
                  There is{" "}
                  <strong>an elevator</strong>.
                </p>
              </div>

              <div className="p03-ruleCard">
                <span className="p03-ruleBadge">
                  SOME
                </span>

                <h3>some + plural / uncountable</h3>

                <p>
                  There are{" "}
                  <strong>some chairs</strong>.
                </p>

                <p>
                  There is{" "}
                  <strong>some coffee</strong>.
                </p>
              </div>

            </div>

            <div className="p03-mistakeInline">

              <div>
                <X size={18} />
                <span>There is printer.</span>
              </div>

              <div>
                <Check size={18} />
                <span>
                  There is <strong>a</strong> printer.
                </span>
              </div>

            </div>

            <QuickCheck
              number="01"
              question="There is ___ meeting room on the second floor."
              options={["a", "an", "some"]}
              correct={0}
              explanation="Meeting room is singular and starts with a consonant sound, so we use a."
            />

          </section>

          {/* 03 — NEGATIVES */}

          <section className="p03-section">

            <div className="p03-sectionIntro">
              <span className="p03-eyebrow">
                03 / NEGATIVE SENTENCES
              </span>

              <h2>What isn't there?</h2>

              <p>
                Use <strong>isn't</strong> or{" "}
                <strong>aren't</strong> when
                something does not exist.
              </p>
            </div>

            <div className="p03-formRows">

              <div className="p03-formRow">
                <span className="p03-formIcon">
                  <MinusCircle size={23} />
                </span>

                <div>
                  <span className="p03-formLabel">
                    SINGULAR
                  </span>

                  <h3>There isn't</h3>

                  <p>
                    There isn't a cafeteria
                    in this building.
                  </p>
                </div>
              </div>

              <div className="p03-formRow">
                <span className="p03-formIcon">
                  <MinusCircle size={23} />
                </span>

                <div>
                  <span className="p03-formLabel">
                    PLURAL
                  </span>

                  <h3>There aren't</h3>

                  <p>
                    There aren't any printers
                    on this floor.
                  </p>
                </div>
              </div>

            </div>

            <div className="p03-note">
              <Lightbulb size={21} />

              <p>
                <strong>Some or any?</strong>{" "}
                We usually use <strong>some</strong>{" "}
                in positive sentences and{" "}
                <strong>any</strong> in negative
                sentences and questions.
              </p>
            </div>

          </section>

          {/* 04 — QUESTIONS */}

          <section className="p03-section">

            <div className="p03-sectionIntro">
              <span className="p03-eyebrow">
                04 / QUESTIONS
              </span>

              <h2>Is there...? Are there...?</h2>

              <p>
                Put <strong>is</strong> or{" "}
                <strong>are</strong> before{" "}
                <strong>there</strong> to make
                a question.
              </p>
            </div>

            <div className="p03-questionGrid">

              <div className="p03-questionCard">
                <span className="p03-formLabel">
                  SINGULAR
                </span>

                <h3>Is there a lift?</h3>

                <p>
                  <CheckCircle2 size={17} />
                  Yes, there is.
                </p>

                <p>
                  <X size={17} />
                  No, there isn't.
                </p>
              </div>

              <div className="p03-questionCard">
                <span className="p03-formLabel">
                  PLURAL
                </span>

                <h3>Are there any windows?</h3>

                <p>
                  <CheckCircle2 size={17} />
                  Yes, there are.
                </p>

                <p>
                  <X size={17} />
                  No, there aren't.
                </p>
              </div>

            </div>

            <QuickCheck
              number="02"
              question="___ there any meeting rooms on this floor?"
              options={["Is", "Are", "Does"]}
              correct={1}
              explanation="Meeting rooms is plural, so we ask Are there...?"
            />

          </section>

          {/* 05 — COMMON MISTAKES */}

          <section className="p03-section">

            <div className="p03-sectionIntro">
              <span className="p03-eyebrow">
                05 / COMMON MISTAKES
              </span>

              <h2>Watch out for these!</h2>
            </div>

            <div className="p03-mistakes">

              {[
                [
                  "There is two offices.",
                  "There are two offices."
                ],
                [
                  "There is printer.",
                  "There is a printer."
                ],
                [
                  "Is there any chairs?",
                  "Are there any chairs?"
                ],
                [
                  "There aren't some windows.",
                  "There aren't any windows."
                ]
              ].map(([wrong, right]) => (
                <div
                  className="p03-mistake"
                  key={wrong}
                >
                  <p>
                    <X size={18} />
                    {wrong}
                  </p>

                  <p>
                    <Check size={18} />
                    {right}
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* GRAMMAR SUMMARY */}

          <section className="p03-summary">

            <span className="p03-eyebrow">
              YOUR GRAMMAR CHEAT SHEET
            </span>

            <h2>At a glance</h2>

            <div className="p03-tableWrap">

              <table>
                <thead>
                  <tr>
                    <th>Form</th>
                    <th>Singular</th>
                    <th>Plural</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Positive</td>
                    <td>There is a desk.</td>
                    <td>There are some desks.</td>
                  </tr>

                  <tr>
                    <td>Negative</td>
                    <td>There isn't a desk.</td>
                    <td>There aren't any desks.</td>
                  </tr>

                  <tr>
                    <td>Question</td>
                    <td>Is there a desk?</td>
                    <td>Are there any desks?</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </section>

        </main>

        {/* NEXT LESSON */}

        <div className="p03-next">

          <img
            src="/natalia-examples.png"
            alt="Natalia"
            className="p03-nextNatalia"
          />

          <div className="p03-nextText">

            <span className="p03-eyebrow">
              NEXT UP
            </span>

            <h2>Let's see it in action!</h2>

            <p>
              Explore realistic workplace situations
              and see how the grammar works.
            </p>

            <PrimaryButton
              onClick={() =>
                navigate("/project03/examples")
              }
            >
              Examples <ArrowRight size={18} />
            </PrimaryButton>

          </div>

        </div>

      </div>
    </div>
  );
}
