
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Gauge,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/examples04.css";

// ============================================
// PROJECT 06 — SUPERLATIVES
// CHOOSE THE BEST EQUIPMENT
// ============================================

const scenarios = [
  {
    number: "01",
    label: "COMPARING PRICES",
    title: "Which machine is the cheapest?",
    icon: BadgeDollarSign,
    color: "purple",

    dialogue: [
      {
        speaker: "Oksana",
        text: "We have three offers. Compact 100 costs $12,000, Flex 200 costs $16,000, and Power 300 costs $22,000.",
      },
      {
        speaker: "Alexander",
        text: "Compact 100 is the cheapest machine. Power 300 is the most expensive.",
      },
    ],

    focus:
      "cheap → the cheapest / expensive → the most expensive",

    note:
      "Use the + -est with short adjectives such as cheap. Use the most with longer adjectives such as expensive.",

    question:
      "Complete: Power 300 is ___ machine.",

    options: [
      "the expensivest",
      "the most expensive",
      "more expensive than",
    ],

    correct: 1,

    explanation:
      "Expensive is a longer adjective, so we say the most expensive.",

    hint:
      "We are comparing three machines. Use the most with expensive.",
  },

  {
    number: "02",
    label: "PRODUCTION SPEED",
    title: "We need to produce more!",
    icon: Gauge,
    color: "teal",

    dialogue: [
      {
        speaker: "Nikita",
        text: "Compact 100 produces 40 units per hour. Flex 200 produces 60, and Power 300 produces 90.",
      },
      {
        speaker: "Oksana",
        text: "Power 300 is the fastest machine. It can produce the most units per hour.",
      },
    ],

    focus:
      "fast → the fastest / many → the most",

    note:
      "Fast is a short adjective, so we add -est. The most can also describe the largest number or amount.",

    question:
      "Complete: Compact 100 is ___ machine.",

    options: [
      "the slowest",
      "the most slow",
      "slower than",
    ],

    correct: 0,

    explanation:
      "Compact 100 has the lowest production speed. Slow → the slowest.",

    hint:
      "Slow is a short adjective. Add -est to describe the machine with the lowest speed.",
  },

  {
    number: "03",
    label: "MACHINE WEIGHT",
    title: "Can we move this machine?",
    icon: Factory,
    color: "purple",

    dialogue: [
      {
        speaker: "Alexander",
        text: "Compact 100 weighs 450 kg, Flex 200 weighs 650 kg, and Power 300 weighs 900 kg.",
      },
      {
        speaker: "Nikita",
        text: "Power 300 is the heaviest. Compact 100 is the lightest, so it may be easier to move.",
      },
    ],

    focus:
      "heavy → the heaviest / light → the lightest",

    note:
      "For adjectives ending in a consonant + y, change y to i and add -est. For short adjectives such as light, simply add -est.",

    question:
      "Complete: Power 300 is ___ machine.",

    options: [
      "the heavyest",
      "the most heavy",
      "the heaviest",
    ],

    correct: 2,

    explanation:
      "Heavy ends in consonant + y, so heavy becomes the heaviest.",

    hint:
      "Change the final y in heavy to i before adding -est.",
  },

  {
    number: "04",
    label: "RELIABILITY",
    title: "Which machine can we trust?",
    icon: ShieldCheck,
    color: "teal",

    dialogue: [
      {
        speaker: "Oksana",
        text: "The reliability ratings are 92% for Compact 100, 97% for Flex 200, and 95% for Power 300.",
      },
      {
        speaker: "Alexander",
        text: "Flex 200 is the most reliable. It has the highest reliability rating.",
      },
    ],

    focus:
      "reliable → the most reliable / high → the highest",

    note:
      "Use the most with reliable. For the short adjective high, add -est. A higher reliability rating means better performance in this fictional comparison.",

    question:
      "Complete: Flex 200 has ___ reliability rating.",

    options: [
      "the highest",
      "the most high",
      "higher than",
    ],

    correct: 0,

    explanation:
      "High is a short adjective: high → the highest.",

    hint:
      "Use the superlative of high because we are comparing three ratings.",
  },

  {
    number: "05",
    label: "THE FINAL DECISION",
    title: "What's the best choice?",
    icon: ClipboardCheck,
    color: "purple",

    dialogue: [
      {
        speaker: "Nikita",
        text: "Power 300 is the fastest, but it is also the most expensive and the heaviest.",
      },
      {
        speaker: "Oksana",
        text: "Flex 200 is the most reliable. Compact 100 is the cheapest. Which machine is the best for our factory?",
      },
      {
        speaker: "Alexander",
        text: "It depends on our priorities. If reliability is the most important factor, I'd choose Flex 200.",
      },
    ],

    focus:
      "good → the best / important → the most important",

    note:
      "Good has an irregular superlative form: the best. There isn't always one best option for every situation. The choice depends on your priorities.",

    question:
      "Complete: If reliability is our priority, Flex 200 is ___ choice.",

    options: [
      "the goodest",
      "the best",
      "the most good",
    ],

    correct: 1,

    explanation:
      "The superlative of good is the best. Flex 200 has the highest reliability rating.",

    hint:
      "Good is irregular. Remember: good → better → the best.",
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
              index % 2 === 0
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

export default function Examples06() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card p04e-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project06/grammar")}
        >
          ← Back
        </button>

        <p className="p04e-projectLabel">
          PROJECT 06 / EXAMPLES
        </p>

        {/* HERO */}

        <header className="p04e-hero">
          <span className="p04e-pill">
            <Sparkles size={15} />
            CHOOSE THE BEST EQUIPMENT
          </span>

          <h1>Which machine is the best?</h1>

          <p>
            Oksana, Alexander, and Nikita are choosing
            new equipment for their factory.
            Follow their conversations and see how
            they use <strong>superlative adjectives</strong>{" "}
            to discuss price, speed, weight, and reliability.
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
              superlative forms, and choose the
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
              You've helped the team compare
              three machines. Now let's see
              what you remember about superlatives!
            </p>

            <PrimaryButton
              onClick={() =>
                navigate("/project06/practice")
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
