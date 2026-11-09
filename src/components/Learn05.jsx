
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
  Truck,
  Wallet,
  ShieldCheck,
  Gauge,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/lesson05.css";

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
            <span>{String.fromCharCode(65 + index)}</span>
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

const mistakes = [
  [
    "Supplier A is more cheaper.",
    "Supplier A is cheaper.",
  ],
  [
    "This machine is more fast.",
    "This machine is faster.",
  ],
  [
    "Our supplier is gooder.",
    "Our supplier is better.",
  ],
  [
    "Supplier B is reliable than A.",
    "Supplier B is more reliable than A.",
  ],
];

export default function Learn05() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card p05-page">

        {/* BACK BUTTON */}
        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project05")}
        >
          ← Back
        </button>

        <p className="p05-projectLabel">
          PROJECT 05 / GRAMMAR
        </p>

        {/* HERO */}
        <header className="p05-hero">
          <div className="p05-heroText">
            <span className="p05-pill">
              <Sparkles size={15} />
              A2 GRAMMAR GUIDE
            </span>

            <h1>
              Choose the <span>Best Supplier</span>
            </h1>

            <p className="p05-heroLead">
              Natalia's engineering team needs new equipment.
              Two suppliers have made offers. Learn to compare
              their prices, delivery times, and quality before
              making a decision.
            </p>

            <div className="p05-heroTags">
              <span>Short adjectives + -er</span>
              <span>More + adjective</span>
              <span>Better / worse</span>
            </div>
          </div>

          <img
            src="/natalia-grammar.png"
            alt="Natalia explaining comparative adjectives"
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

          {/* SECTION 01 */}
          <section className="p05-section">
            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                01 / TWO OFFERS
              </span>

              <h2>Which supplier is better?</h2>

              <p>
                We use comparatives to describe the difference
                between two people, things, or options.
              </p>
            </div>

            <div className="p05-supplierGrid">
              <article className="p05-supplier">
                <span className="p05-miniLabel">
                  SUPPLIER A / ALPHA
                </span>

                <h3>Alpha Engineering</h3>

                <dl>
                  <dt>Price</dt>
                  <dd>$8,000</dd>

                  <dt>Delivery</dt>
                  <dd>10 days</dd>

                  <dt>Warranty</dt>
                  <dd>12 months</dd>
                </dl>
              </article>

              <article className="p05-supplier">
                <span className="p05-miniLabel">
                  SUPPLIER B / BETA
                </span>

                <h3>Beta Industrial</h3>

                <dl>
                  <dt>Price</dt>
                  <dd>$9,500</dd>

                  <dt>Delivery</dt>
                  <dd>6 days</dd>

                  <dt>Warranty</dt>
                  <dd>24 months</dd>
                </dl>
              </article>
            </div>

            <div className="p05-decision">
              <strong>Compare the offers:</strong>

              <p>
                Alpha is <strong>cheaper than</strong> Beta.
                Beta is <strong>faster than</strong> Alpha.
                Beta's warranty is{" "}
                <strong>longer than</strong> Alpha's.
              </p>
            </div>

            <div className="p05-note">
              <Lightbulb size={21} />

              <p>
                <strong>Pattern:</strong> A + <em>is</em> +
                comparative adjective + <strong>than</strong> + B.
                Example: <em>Alpha is cheaper than Beta.</em>
              </p>
            </div>

            <QuickCheck
              number="01"
              question="Alpha costs $8,000. Beta costs $9,500. Alpha is ___ Beta."
              options={[
                "cheaper than",
                "more cheap than",
                "the cheapest",
              ]}
              correct={0}
              explanation="Cheap is a short adjective: cheap → cheaper than."
              hint="For a short adjective like cheap, add -er and use than."
            />
          </section>

          {/* SECTION 02 */}
          <section className="p05-section">
            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                02 / SHORT ADJECTIVES
              </span>

              <h2>Add -er</h2>

              <p>
                Most one-syllable adjectives take{" "}
                <strong>-er</strong> in the comparative form.
              </p>
            </div>

            <div className="p05-ruleGrid">
              <article className="p05-ruleCard">
                <span className="p05-ruleBadge">+ ER</span>

                <h3>fast → faster</h3>

                <p>
                  Beta delivers <strong>faster than</strong> Alpha.
                </p>

                <p>
                  cheap → cheaper
                  <br />
                  small → smaller
                </p>
              </article>

              <article className="p05-ruleCard">
                <span className="p05-ruleBadge">+ R</span>

                <h3>large → larger</h3>

                <p>
                  If the adjective ends in <strong>-e</strong>,
                  add only <strong>-r</strong>.
                </p>

                <p>
                  safe → safer
                  <br />
                  nice → nicer
                </p>
              </article>

              <article className="p05-ruleCard">
                <span className="p05-ruleBadge">
                  DOUBLE
                </span>

                <h3>big → bigger</h3>

                <p>
                  For many short consonant-vowel-consonant
                  adjectives, double the final consonant.
                </p>

                <p>
                  hot → hotter
                  <br />
                  thin → thinner
                </p>
              </article>
            </div>

            <QuickCheck
              number="02"
              question="This warehouse is ___ the old warehouse."
              options={[
                "biger than",
                "bigger than",
                "more big than",
              ]}
              correct={1}
              explanation="Big doubles the final consonant: big → bigger."
              hint="Look at the spelling rule for big: double the final consonant."
            />
          </section>

          {/* SECTION 03 */}
          <section className="p05-section">
            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                03 / SPELLING CHANGES
              </span>

              <h2>Easy → easier</h2>

              <p>
                When an adjective ends in a consonant +{" "}
                <strong>y</strong>, change <strong>y</strong>{" "}
                to <strong>i</strong> and add{" "}
                <strong>-er</strong>.
              </p>
            </div>

            <div className="p05-questionGrid">
              <div className="p05-questionCard">
                <span className="p05-formLabel">
                  Y → IER
                </span>

                <h3>easy → easier</h3>

                <p>
                  <Gauge size={18} />
                  This control panel is{" "}
                  <strong>easier to use</strong>.
                </p>
              </div>

              <div className="p05-questionCard">
                <span className="p05-formLabel">
                  Y → IER
                </span>

                <h3>heavy → heavier</h3>

                <p>
                  <Truck size={18} />
                  This machine is{" "}
                  <strong>heavier than</strong> that one.
                </p>
              </div>
            </div>

            <QuickCheck
              number="03"
              question="The new software is ___ to use than the old software."
              options={[
                "easyer",
                "more easy",
                "easier",
              ]}
              correct={2}
              explanation="Easy ends in consonant + y, so easy → easier."
              hint="Change the final y in easy to i, then add -er."
            />
          </section>

          {/* SECTION 04 */}
          <section className="p05-section">
            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                04 / LONG ADJECTIVES
              </span>

              <h2>Use more + adjective</h2>

              <p>
                For most adjectives with two or more syllables,
                especially longer ones, use{" "}
                <strong>more</strong> before the adjective.
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

                  <h3>more reliable</h3>

                  <p>
                    Beta is{" "}
                    <strong>more reliable than</strong> Alpha.
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

                  <h3>more expensive</h3>

                  <p>
                    Beta is{" "}
                    <strong>more expensive than</strong> Alpha.
                  </p>
                </div>
              </div>

              <div className="p05-formRow">
                <span className="p05-formIcon">
                  <Gauge size={22} />
                </span>

                <div>
                  <span className="p05-formLabel">
                    EFFICIENCY
                  </span>

                  <h3>more efficient</h3>

                  <p>
                    The new machine is{" "}
                    <strong>more efficient than</strong> the old one.
                  </p>
                </div>
              </div>
            </div>

            <div className="p05-note">
              <Lightbulb size={21} />

              <p>
                <strong>Remember:</strong> Say{" "}
                <em>more reliable</em>, not{" "}
                <em>reliabler</em>. Some two-syllable
                adjectives, such as <em>simple</em>,
                can also take <em>-er</em>.
              </p>
            </div>

            <QuickCheck
              number="04"
              question="Supplier B is ___ Supplier A."
              options={[
                "reliabler than",
                "more reliable than",
                "most reliable than",
              ]}
              correct={1}
              explanation="Reliable is a longer adjective, so use more reliable than."
              hint="Use more before reliable, and than to compare two suppliers."
            />
          </section>

          {/* SECTION 05 */}
          <section className="p05-section">
            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                05 / SPECIAL FORMS
              </span>

              <h2>Better and worse</h2>

              <p>
                Some adjectives have irregular comparative forms.
                Don't add -er or more.
              </p>
            </div>

            <div className="p05-comparison">
              <article className="p05-compareCard p05-countable">
                <div className="p05-compareTop">
                  <span className="p05-number">01</span>
                  <span className="p05-miniLabel">
                    GOOD
                  </span>
                </div>

                <div className="p05-visual">
                  <CheckCircle2
                    size={54}
                    strokeWidth={1.5}
                  />
                </div>

                <h3>good → better</h3>

                <p className="p05-example">
                  Beta offers a{" "}
                  <mark>better warranty</mark> than Alpha.
                </p>
              </article>

              <article className="p05-compareCard p05-uncountable">
                <div className="p05-compareTop">
                  <span className="p05-number">02</span>
                  <span className="p05-miniLabel">
                    BAD
                  </span>
                </div>

                <div className="p05-visual">
                  <X size={54} strokeWidth={1.5} />
                </div>

                <h3>bad → worse</h3>

                <p className="p05-example">
                  Alpha's delivery time is{" "}
                  <mark>worse than</mark> Beta's.
                </p>
              </article>
            </div>

            <QuickCheck
              number="05"
              question="The new supplier offers ___ customer service than the old one."
              options={[
                "gooder",
                "better",
                "more good",
              ]}
              correct={1}
              explanation="The comparative of good is better."
              hint="Good has an irregular comparative form."
            />
          </section>

          {/* SECTION 06 */}
          <section className="p05-section">
            <div className="p05-sectionIntro">
              <span className="p05-eyebrow">
                06 / COMMON MISTAKES
              </span>

              <h2>Watch out for these!</h2>
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

          {/* GRAMMAR SUMMARY */}
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
                    <th>Comparative</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Short adjective</td>
                    <td>fast</td>
                    <td>faster than</td>
                  </tr>

                  <tr>
                    <td>Ends in -e</td>
                    <td>large</td>
                    <td>larger than</td>
                  </tr>

                  <tr>
                    <td>Double consonant</td>
                    <td>big</td>
                    <td>bigger than</td>
                  </tr>

                  <tr>
                    <td>Consonant + y</td>
                    <td>easy</td>
                    <td>easier than</td>
                  </tr>

                  <tr>
                    <td>Long adjective</td>
                    <td>reliable</td>
                    <td>more reliable than</td>
                  </tr>

                  <tr>
                    <td>Irregular</td>
                    <td>good / bad</td>
                    <td>better / worse than</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>

        {/* NEXT UP */}
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

            <h2>Ready to compare?</h2>

            <p>
              See how Natalia compares suppliers in real
              workplace conversations.
            </p>

            <PrimaryButton
              onClick={() =>
                navigate("/project05/examples")
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
