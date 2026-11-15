
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CircleHelp,
  Lightbulb,
  Sparkles,
  X,
  Factory,
  Gauge,
  Wallet,
  ShieldCheck,
  Weight,
  Trophy,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/lesson05.css";

// ============================================
// INTERACTIVE QUICK CHECK
// ============================================

function QuickCheck({
  number,
  question,
  options,
  correct,
  explanation,
  hint,
}) {
  const [selected, setSelected] = useState(null);

  const answered = selected !== null;
  const isCorrect = selected === correct;

  return (
    <div className="p05-check">
      <div className="p05-checkTop">
        <span className="p05-eyebrow">
          QUICK CHECK {number}
        </span>
        <CircleHelp size={19} />
      </div>

      <h3>{question}</h3>

      <div className="p05-options">
        {options.map((option, index) => (
          <button
            type="button"
            key={option}
            aria-pressed={selected === index}
            className={`p05-option ${
              selected === index
                ? isCorrect
                  ? "p05-optionCorrect"
                  : "p05-optionWrong"
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
          className={`p05-feedback ${
            isCorrect
              ? "p05-feedbackCorrect"
              : "p05-feedbackWrong"
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
            {isCorrect ? explanation : hint}
          </p>
        </div>
      )}
    </div>
  );
}

// ============================================
// EQUIPMENT DATA
// ============================================

const machines = [
  {
    code: "MACHINE A",
    name: "Compact 100",
    price: "$12,000",
    speed: "40 units/hour",
    weight: "450 kg",
    reliability: "92%",
  },
  {
    code: "MACHINE B",
    name: "Flex 200",
    price: "$16,000",
    speed: "60 units/hour",
    weight: "650 kg",
    reliability: "97%",
  },
  {
    code: "MACHINE C",
    name: "Power 300",
    price: "$22,000",
    speed: "90 units/hour",
    weight: "900 kg",
    reliability: "95%",
  },
];

const mistakes = [
  [
    "Power 300 is the most fastest machine.",
    "Power 300 is the fastest machine.",
  ],
  [
    "Compact 100 is the cheaper machine.",
    "Compact 100 is the cheapest machine.",
  ],
  [
    "Power 300 is the heavyest machine.",
    "Power 300 is the heaviest machine.",
  ],
  [
    "Flex 200 is the reliablest machine.",
    "Flex 200 is the most reliable machine.",
  ],
  [
    "This is best option.",
    "This is the best option.",
  ],
];

// ============================================
// MAIN LESSON
// ============================================

export default function Learn06() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card p05-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project06")}
        >
          ← Back
        </button>

        <p className="p05-projectLabel">
          PROJECT 06 / GRAMMAR
        </p>

        {/* ====================================
            HERO
        ==================================== */}

        <header className="p05-hero">
          <div className="p05-heroText">

            <span className="p05-pill">
              <Sparkles size={15} />
              A2 GRAMMAR GUIDE
            </span>

            <h1>
              Choose the{" "}
              <span>Best Equipment</span>
            </h1>

            <p className="p05-heroLead">
              Natalia's engineering team needs
              a new machine for the factory.
              They have three options.
              Learn how to identify the fastest,
              cheapest, and most reliable
              equipment before making a decision.
            </p>

            <div className="p05-heroTags">
              <span>Short adjectives + -est</span>
              <span>The most + adjective</span>
              <span>The best / worst</span>
            </div>

          </div>

          <img
            src="/natalia-grammar.png"
            alt="Natalia explaining superlative adjectives"
            className="p05-heroNatalia"
          />
        </header>

        {/* PROGRESS */}

        <div
          className="p05-progress"
          aria-label="Lesson step 1 of 3"
        >
          <span className="p05-progressActive" />
          <span />
          <span />
        </div>

        <main className="p05-content">

          {/* ====================================
              SECTION 01 — THREE MACHINES
          ==================================== */}

          <section className="p05-section">

            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                01 / THREE MACHINES
              </span>

              <h2>Which machine is the best?</h2>

              <p>
                We use <strong>superlatives</strong>{" "}
                to identify the number one option
                in a group of three or more.
              </p>
            </div>

            <div className="p05-supplierGrid">
              {machines.map((machine) => (
                <article
                  className="p05-supplier"
                  key={machine.code}
                >
                  <span className="p05-miniLabel">
                    {machine.code}
                  </span>

                  <h3>{machine.name}</h3>

                  <dl>
                    <dt>Price</dt>
                    <dd>{machine.price}</dd>

                    <dt>Speed</dt>
                    <dd>{machine.speed}</dd>

                    <dt>Weight</dt>
                    <dd>{machine.weight}</dd>

                    <dt>Reliability</dt>
                    <dd>{machine.reliability}</dd>
                  </dl>
                </article>
              ))}
            </div>

            <div className="p05-decision">
              <strong>Compare the machines:</strong>

              <p>
                Compact 100 is{" "}
                <strong>the cheapest</strong>.
                Power 300 is{" "}
                <strong>the fastest</strong>.
                Flex 200 is{" "}
                <strong>the most reliable</strong>.
              </p>
            </div>

            <div className="p05-note">
              <Lightbulb size={21} />

              <p>
                <strong>Pattern:</strong>{" "}
                Subject + <em>is</em> +{" "}
                <strong>the</strong> + superlative
                adjective.
                Example:{" "}
                <em>
                  Power 300 is the fastest machine.
                </em>
              </p>
            </div>

            <QuickCheck
              number="01"
              question="Which machine is the cheapest?"
              options={[
                "Compact 100",
                "Flex 200",
                "Power 300",
              ]}
              correct={0}
              explanation="Compact 100 costs $12,000, the lowest price."
              hint="Look at the prices. Which machine costs the least?"
            />

          </section>

          {/* ====================================
              SECTION 02 — SHORT ADJECTIVES
          ==================================== */}

          <section className="p05-section">

            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                02 / SHORT ADJECTIVES
              </span>

              <h2>Add -est</h2>

              <p>
                Most one-syllable adjectives take{" "}
                <strong>-est</strong> in the
                superlative form.
                We usually put{" "}
                <strong>the</strong> before them.
              </p>
            </div>

            <div className="p05-ruleGrid">

              <article className="p05-ruleCard">
                <span className="p05-ruleBadge">
                  + EST
                </span>

                <h3>fast → the fastest</h3>

                <p>
                  Power 300 is{" "}
                  <strong>the fastest</strong>{" "}
                  machine.
                </p>

                <p>
                  cheap → the cheapest
                  <br />
                  small → the smallest
                </p>
              </article>

              <article className="p05-ruleCard">
                <span className="p05-ruleBadge">
                  + ST
                </span>

                <h3>large → the largest</h3>

                <p>
                  If the adjective ends in{" "}
                  <strong>-e</strong>, add only{" "}
                  <strong>-st</strong>.
                </p>

                <p>
                  safe → the safest
                  <br />
                  nice → the nicest
                </p>
              </article>

              <article className="p05-ruleCard">
                <span className="p05-ruleBadge">
                  DOUBLE
                </span>

                <h3>big → the biggest</h3>

                <p>
                  For many short consonant-vowel-
                  consonant adjectives, double
                  the final consonant.
                </p>

                <p>
                  hot → the hottest
                  <br />
                  thin → the thinnest
                </p>
              </article>

            </div>

            <QuickCheck
              number="02"
              question="Power 300 produces 90 units per hour. It is ___ machine."
              options={[
                "the most fast",
                "the fastest",
                "the faster",
              ]}
              correct={1}
              explanation="Fast is a short adjective: fast → the fastest."
              hint="For a short adjective, add -est and use the."
            />

          </section>

          {/* ====================================
              SECTION 03 — SPELLING CHANGES
          ==================================== */}

          <section className="p05-section">

            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                03 / SPELLING CHANGES
              </span>

              <h2>Heavy → the heaviest</h2>

              <p>
                When an adjective ends in a
                consonant + <strong>y</strong>,
                change <strong>y</strong> to{" "}
                <strong>i</strong> and add{" "}
                <strong>-est</strong>.
              </p>
            </div>

            <div className="p05-questionGrid">

              <div className="p05-questionCard">
                <span className="p05-formLabel">
                  Y → IEST
                </span>

                <h3>heavy → the heaviest</h3>

                <p>
                  <Weight size={18} />
                  Power 300 is{" "}
                  <strong>the heaviest</strong>{" "}
                  machine at 900 kg.
                </p>
              </div>

              <div className="p05-questionCard">
                <span className="p05-formLabel">
                  Y → IEST
                </span>

                <h3>easy → the easiest</h3>

                <p>
                  <Gauge size={18} />
                  This control panel is{" "}
                  <strong>the easiest to use</strong>.
                </p>
              </div>

            </div>

            <QuickCheck
              number="03"
              question="Power 300 weighs 900 kg. It is ___ machine."
              options={[
                "the heavyest",
                "the most heavy",
                "the heaviest",
              ]}
              correct={2}
              explanation="Heavy ends in consonant + y: heavy → the heaviest."
              hint="Change the final y to i, then add -est."
            />

          </section>

          {/* ====================================
              SECTION 04 — LONG ADJECTIVES
          ==================================== */}

          <section className="p05-section">

            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                04 / LONG ADJECTIVES
              </span>

              <h2>Use the most + adjective</h2>

              <p>
                For most longer adjectives,
                use <strong>the most</strong>{" "}
                before the adjective.
              </p>
            </div>

            <div className="p05-formRows">

              <div className="p05-formRow">
                <span className="p05-formIcon">
                  <ShieldCheck size={22} />
                </span>

                <div>
                  <span className="p05-formLabel">
                    RELIABILITY
                  </span>

                  <h3>the most reliable</h3>

                  <p>
                    Flex 200 has a 97% reliability
                    rating. It is{" "}
                    <strong>
                      the most reliable
                    </strong>{" "}
                    machine.
                  </p>
                </div>
              </div>

              <div className="p05-formRow">
                <span className="p05-formIcon">
                  <Wallet size={22} />
                </span>

                <div>
                  <span className="p05-formLabel">
                    PRICE
                  </span>

                  <h3>the most expensive</h3>

                  <p>
                    Power 300 costs $22,000.
                    It is{" "}
                    <strong>
                      the most expensive
                    </strong>{" "}
                    machine.
                  </p>
                </div>
              </div>

              <div className="p05-formRow">
                <span className="p05-formIcon">
                  <Factory size={22} />
                </span>

                <div>
                  <span className="p05-formLabel">
                    EQUIPMENT
                  </span>

                  <h3>the most efficient</h3>

                  <p>
                    We want to choose{" "}
                    <strong>
                      the most efficient
                    </strong>{" "}
                    machine for our factory.
                  </p>
                </div>
              </div>

            </div>

            <div className="p05-note">
              <Lightbulb size={21} />

              <p>
                <strong>Remember:</strong>{" "}
                Say <em>the most reliable</em>,
                not <em>the reliablest</em>.
                Some two-syllable adjectives,
                such as <em>simple</em>,
                can also take <em>-est</em>.
              </p>
            </div>

            <QuickCheck
              number="04"
              question="Flex 200 has the highest reliability rating. It is ___ machine."
              options={[
                "the reliablest",
                "the most reliable",
                "more reliable",
              ]}
              correct={1}
              explanation="Use the most with a longer adjective: the most reliable."
              hint="Reliable is a longer adjective. Use the most."
            />

          </section>

          {/* ====================================
              SECTION 05 — IRREGULAR FORMS
          ==================================== */}

          <section className="p05-section">

            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                05 / SPECIAL FORMS
              </span>

              <h2>The best and the worst</h2>

              <p>
                Some adjectives have irregular
                superlative forms.
                Don't add <strong>-est</strong>{" "}
                or <strong>most</strong>.
              </p>
            </div>

            <div className="p05-comparison">

              <article className="p05-compareCard p05-countable">

                <div className="p05-compareTop">
                  <span className="p05-number">
                    01
                  </span>

                  <span className="p05-miniLabel">
                    GOOD
                  </span>
                </div>

                <div className="p05-visual">
                  <Trophy
                    size={54}
                    strokeWidth={1.5}
                  />
                </div>

                <h3>good → the best</h3>

                <p className="p05-example">
                  Flex 200 may be{" "}
                  <mark>the best option</mark>{" "}
                  if reliability is our priority.
                </p>
              </article>

              <article className="p05-compareCard p05-uncountable">

                <div className="p05-compareTop">
                  <span className="p05-number">
                    02
                  </span>

                  <span className="p05-miniLabel">
                    BAD
                  </span>
                </div>

                <div className="p05-visual">
                  <X
                    size={54}
                    strokeWidth={1.5}
                  />
                </div>

                <h3>bad → the worst</h3>

                <p className="p05-example">
                  A machine that often breaks
                  down could be{" "}
                  <mark>the worst option</mark>{" "}
                  for our factory.
                </p>
              </article>

            </div>

            <QuickCheck
              number="05"
              question="We need to choose ___ machine for our factory."
              options={[
                "the goodest",
                "the best",
                "the most good",
              ]}
              correct={1}
              explanation="The superlative form of good is the best."
              hint="Good has an irregular superlative form."
            />

          </section>

          {/* ====================================
              SECTION 06 — COMMON MISTAKES
          ==================================== */}

          <section className="p05-section">

            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                06 / COMMON MISTAKES
              </span>

              <h2>Watch out for these!</h2>

              <p>
                These are common mistakes
                when using superlatives.
              </p>
            </div>

            <div className="p05-mistakes">
              {mistakes.map(([wrong, right]) => (
                <div
                  className="p05-mistake"
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

          {/* ====================================
              GRAMMAR SUMMARY
          ==================================== */}

          <section className="p05-summary">

            <span className="p05-eyebrow">
              YOUR GRAMMAR CHEAT SHEET
            </span>

            <h2>At a glance</h2>

            <div className="p05-tableWrap">
              <table>
                <thead>
                  <tr>
                    <th>Rule</th>
                    <th>Adjective</th>
                    <th>Superlative</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Short adjective</td>
                    <td>fast</td>
                    <td>the fastest</td>
                  </tr>

                  <tr>
                    <td>Ends in -e</td>
                    <td>large</td>
                    <td>the largest</td>
                  </tr>

                  <tr>
                    <td>Double consonant</td>
                    <td>big</td>
                    <td>the biggest</td>
                  </tr>

                  <tr>
                    <td>Consonant + y</td>
                    <td>heavy</td>
                    <td>the heaviest</td>
                  </tr>

                  <tr>
                    <td>Long adjective</td>
                    <td>reliable</td>
                    <td>the most reliable</td>
                  </tr>

                  <tr>
                    <td>Irregular</td>
                    <td>good / bad</td>
                    <td>the best / the worst</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </section>

        </main>

        {/* ====================================
            NEXT UP
        ==================================== */}

        <div className="p05-next">

          <img
            src="/natalia-examples.png"
            alt="Natalia introducing the examples"
            className="p05-nextNatalia"
          />

          <div className="p05-nextText">

            <span className="p05-eyebrow">
              NEXT UP
            </span>

            <h2>Ready to choose?</h2>

            <p>
              See how Oksana, Alexander,
              and Nikita use superlatives
              to discuss equipment and
              choose the best machine.
            </p>

            <PrimaryButton
              onClick={() =>
                navigate("/project06/examples")
              }
            >
              Examples
              <ArrowRight size={18} />
            </PrimaryButton>

          </div>

        </div>

      </div>
    </div>
  );
}
