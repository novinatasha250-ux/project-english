
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Factory,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/examples04.css";

// ============================================
// PROJECT 05 — COMPARATIVES
// CHOOSE THE BEST SUPPLIER
// ============================================

const scenarios = [
  {
    number: "01",
    label: "COMPARING PRICES",
    title: "Which offer is cheaper?",
    icon: BadgeDollarSign,
    color: "purple",

    dialogue: [
      {
        speaker: "Oksana",
        text: "Alpha Engineering offers the equipment for $8,000.",
      },
      {
        speaker: "Alexander",
        text: "Beta Industrial wants $9,500. Alpha is cheaper than Beta!",
      },
    ],

    focus: "cheap → cheaper than",

    note:
      "Cheap is a short adjective. Add -er and use than to compare two suppliers.",

    question: "Complete: Beta is ___ Alpha.",

    options: [
      "more expensive than",
      "expensiver than",
      "most expensive than",
    ],

    correct: 0,

    explanation:
      "Expensive is a long adjective, so we use more expensive than.",

    hint:
      "Use more with long adjectives such as expensive.",
  },

  {
    number: "02",
    label: "DELIVERY TIMES",
    title: "We need the equipment soon!",
    icon: Clock3,
    color: "teal",

    dialogue: [
      {
        speaker: "Nikita",
        text: "Alpha can deliver the equipment in 10 days.",
      },
      {
        speaker: "Oksana",
        text: "Beta can deliver it in 6 days. Beta is faster than Alpha.",
      },
    ],

    focus: "fast → faster than",

    note:
      "Fast is a short adjective. Add -er to make faster. Use than to compare two options.",

    question:
      "Complete: Alpha's delivery time is ___ Beta's.",

    options: [
      "longer than",
      "more long than",
      "the longest",
    ],

    correct: 0,

    explanation:
      "Long is a short adjective: long → longer than.",

    hint:
      "For a short adjective such as long, add -er.",
  },

  {
    number: "03",
    label: "EQUIPMENT SIZE",
    title: "Will the machine fit?",
    icon: Factory,
    color: "purple",

    dialogue: [
      {
        speaker: "Alexander",
        text: "The new machine is big. We need more space in the workshop.",
      },
      {
        speaker: "Nikita",
        text: "Yes, it's bigger than our old machine. Let's check the measurements.",
      },
    ],

    focus: "big → bigger than",

    note:
      "For short adjectives such as big, double the final consonant before adding -er: big → bigger.",

    question:
      "Complete: The new machine is ___ the old one.",

    options: [
      "biger than",
      "bigger than",
      "more big than",
    ],

    correct: 1,

    explanation:
      "Big doubles the final consonant: big → bigger.",

    hint:
      "Remember the spelling rule: big has two g's in the comparative form.",
  },

  {
    number: "04",
    label: "WARRANTY AND QUALITY",
    title: "Which supplier is more reliable?",
    icon: ShieldCheck,
    color: "teal",

    dialogue: [
      {
        speaker: "Oksana",
        text: "Alpha offers a 12-month warranty, but Beta offers 24 months.",
      },
      {
        speaker: "Nikita",
        text: "Beta offers a longer warranty. But we need to check which supplier is more reliable.",
      },
    ],

    focus:
      "long → longer / reliable → more reliable",

    note:
      "Use -er with short adjectives such as long. Use more with longer adjectives such as reliable. A longer warranty doesn't automatically mean a supplier is more reliable.",

    question:
      "Complete: We need a ___ supplier.",

    options: [
      "reliabler",
      "more reliable",
      "most reliable",
    ],

    correct: 1,

    explanation:
      "Reliable takes more in the comparative form: more reliable.",

    hint:
      "Reliable is a longer adjective. Use more, not -er.",
  },

  {
    number: "05",
    label: "THE FINAL DECISION",
    title: "Which offer is better?",
    icon: ClipboardCheck,
    color: "purple",

    dialogue: [
      {
        speaker: "Alexander",
        text: "Alpha is cheaper, but Beta is faster and offers a longer warranty.",
      },
      {
        speaker: "Oksana",
        text: "I think Beta is a better choice if we need the equipment urgently.",
      },
    ],

    focus: "good → better / bad → worse",

    note:
      "Good and bad have irregular comparative forms. Say better and worse, not gooder or badder. The best choice depends on what is most important for the project.",

    question:
      "Complete: For urgent orders, Beta is a ___ choice than Alpha.",

    options: [
      "gooder",
      "better",
      "more good",
    ],

    correct: 1,

    explanation:
      "The comparative of good is better.",

    hint:
      "Good is irregular. Its comparative form is better.",
  },
];

// ============================================
// INTERACTIVE SCENARIO CARD
// ============================================

function ScenarioCard({ scenario }) {
  const [selected, setSelected] = useState(null);

  const Icon = scenario.icon;
  const answered = selected !== null;
  const isCorrect = selected === scenario.correct;

  return (
    <article className={`p04e-card p04e-${scenario.color}`}>
      <div className="p04e-cardHeader">
        <div className="p04e-icon">
          <Icon size={27} strokeWidth={1.8} />
        </div>

        <div className="p04e-cardHeading">
          <span className="p04e-eyebrow">
            {scenario.number} / {scenario.label}
          </span>

          <h2>{scenario.title}</h2>
        </div>
      </div>

      {/* WORKPLACE CONVERSATION */}
      <div className="p04e-dialogue">
        {scenario.dialogue.map((line, index) => (
          <div
            key={index}
            className={`p04e-message ${
              index === 0
                ? "p04e-messageLeft"
                : "p04e-messageRight"
            }`}
          >
            <span className="p04e-speaker">
              {line.speaker}
            </span>

            <p>{line.text}</p>
          </div>
        ))}
      </div>

      {/* GRAMMAR EXPLANATION */}
      <div className="p04e-focus">
        <span className="p04e-focusLabel">
          NOTICE THE GRAMMAR
        </span>

        <strong>{scenario.focus}</strong>

        <p>{scenario.note}</p>
      </div>

      {/* INTERACTIVE QUESTION */}
      <div className="p04e-check">
        <span className="p04e-eyebrow">
          YOUR TURN
        </span>

        <h3>{scenario.question}</h3>

        <div className="p04e-answers">
          {scenario.options.map((option, index) => (
            <button
              key={option}
              type="button"
              aria-pressed={selected === index}
              className={`p04e-answer ${
                selected === index
                  ? isCorrect
                    ? "p04e-answerCorrect"
                    : "p04e-answerWrong"
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
            className={`p04e-feedback ${
              isCorrect
                ? "p04e-feedbackCorrect"
                : "p04e-feedbackWrong"
            }`}
            role="status"
          >
            {isCorrect ? (
              <CheckCircle2 size={19} />
            ) : (
              <Lightbulb size={19} />
            )}

            <p>
              <strong>
                {isCorrect ? "Correct!" : "Try again."}
              </strong>{" "}
              {isCorrect
                ? scenario.explanation
                : scenario.hint}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

// ============================================
// EXAMPLES PAGE
// ============================================

export default function Examples05() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card p04e-page">

        {/* BACK BUTTON */}
        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project05/grammar")}
        >
          ← Back
        </button>

        <p className="p04e-projectLabel">
          PROJECT 05 / EXAMPLES
        </p>

        {/* HERO */}
        <header className="p04e-hero">
          <span className="p04e-pill">
            <Sparkles size={15} />
            CHOOSE THE BEST SUPPLIER
          </span>

          <h1>Which supplier is better?</h1>

          <p>
            Oksana, Alexander, and Nikita are working
            together to choose a supplier for new equipment.
            Follow their conversations and see how they use{" "}
            <strong>comparative adjectives</strong>{" "}
            to discuss prices, delivery, equipment,
            and warranties.
          </p>

          <div className="p04e-tags">
            <span>5 situations</span>
            <span>Workplace conversations</span>
            <span>Quick checks</span>
          </div>
        </header>

        {/* PROGRESS */}
        <div
          className="p04e-progress"
          aria-label="Lesson step 2 of 3"
        >
          <span />
          <span className="p04e-progressActive" />
          <span />
        </div>

        <main className="p04e-content">
          <div className="p04e-intro">
            <span className="p04e-eyebrow">
              LET'S PUT GRAMMAR TO WORK
            </span>

            <h2>
              Five situations. One important decision.
            </h2>

            <p>
              Read each conversation, notice the
              comparative forms, and choose the
              correct answer.
            </p>
          </div>

          <div className="p04e-scenarios">
            {scenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.number}
                scenario={scenario}
              />
            ))}
          </div>
        </main>

        {/* NEXT UP */}
        <div className="p04e-next">
          <img
            src="/natalia-examples.png"
            alt="Natalia introducing the practice activities"
            className="p04e-nextNatalia"
          />

          <div className="p04e-nextText">
            <span className="p04e-eyebrow">
              NEXT UP
            </span>

            <h2>Ready to practice?</h2>

            <p>
              You've helped the team compare suppliers.
              Now let's see what you remember!
            </p>

            <PrimaryButton
              onClick={() =>
                navigate("/project05/practice")
              }
            >
              Practice <ArrowRight size={18} />
            </PrimaryButton>
          </div>
        </div>

      </div>
    </div>
  );
}
