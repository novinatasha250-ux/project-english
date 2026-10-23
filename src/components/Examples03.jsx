
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  Coffee,
  Lightbulb,
  MonitorX,
  Sparkles,
  Trash2
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/examples03.css";

const scenarios = [
  {
    number: "01",
    label: "A MESSY OFFICE",
    title: "What a mess!",
    icon: Trash2,
    color: "purple",
    dialogue: [
      {
        speaker: "Anna",
        text: "There's a big mess on my desk!"
      },
      {
        speaker: "Max",
        text: "Yes, and there are papers everywhere."
      }
    ],
    focus: "There's = There is",
    note: "We use a with a singular countable noun: a big mess.",
    question: "Which sentence is correct?",
    options: [
      "There are a big mess.",
      "There is a big mess."
    ],
    correct: 1,
    explanation: "A big mess is singular, so we use there is."
  },
  {
    number: "02",
    label: "TOO MUCH WORK",
    title: "Too many tasks!",
    icon: BriefcaseBusiness,
    color: "teal",
    dialogue: [
      {
        speaker: "Anna",
        text: "There are too many tasks on my list!"
      },
      {
        speaker: "Max",
        text: "I know. There isn't enough time to finish everything."
      }
    ],
    focus: "There are + too many + plural noun",
    note: "Use too many with plural countable nouns, but enough time with the uncountable noun time.",
    question: "Complete: There ___ too many emails today.",
    options: ["is", "are"],
    correct: 1,
    explanation: "Emails is plural, so we use there are."
  },
  {
    number: "03",
    label: "BEFORE A MEETING",
    title: "A technical problem",
    icon: MonitorX,
    color: "purple",
    dialogue: [
      {
        speaker: "Anna",
        text: "Is there a problem with the projector?"
      },
      {
        speaker: "Max",
        text: "Yes, there is. And there aren't any spare cables."
      }
    ],
    focus: "Is there...? / There aren't any...",
    note: "Use is there for singular questions and aren't any for negative plural sentences.",
    question: "Complete: ___ there any spare cables?",
    options: ["Is", "Are"],
    correct: 1,
    explanation: "Cables is plural, so the question begins with Are there."
  },
  {
    number: "04",
    label: "THE OFFICE KITCHEN",
    title: "No coffee left!",
    icon: Coffee,
    color: "teal",
    dialogue: [
      {
        speaker: "Anna",
        text: "Is there any coffee left?"
      },
      {
        speaker: "Max",
        text: "No, there isn't. But there's some tea."
      }
    ],
    focus: "Any in questions / some in positives",
    note: "Coffee and tea are uncountable here, so we use is, not are.",
    question: "Complete: There ___ some tea in the kitchen.",
    options: ["is", "are"],
    correct: 0,
    explanation: "Tea is uncountable, so we use there is."
  },
  {
    number: "05",
    label: "THE DEADLINE",
    title: "Only two days left!",
    icon: CalendarClock,
    color: "purple",
    dialogue: [
      {
        speaker: "Anna",
        text: "There are only two days left before the deadline!"
      },
      {
        speaker: "Max",
        text: "And there's still a lot of work to do."
      }
    ],
    focus: "There are + plural / There's + uncountable",
    note: "Days is plural. Work is uncountable, so we say there's a lot of work.",
    question: "Complete: There ___ still a lot of work to do.",
    options: ["is", "are"],
    correct: 0,
    explanation: "Work is uncountable, so we use there is."
  }
];

function ScenarioCard({ scenario }) {
  const [selected, setSelected] = useState(null);
  const Icon = scenario.icon;
  const answered = selected !== null;
  const correct = selected === scenario.correct;

  return (
    <article className={`p03e-card p03e-${scenario.color}`}>
      <div className="p03e-cardHeader">
        <div className="p03e-icon">
          <Icon size={27} strokeWidth={1.8} />
        </div>

        <div className="p03e-cardHeading">
          <span className="p03e-eyebrow">
            {scenario.number} / {scenario.label}
          </span>
          <h2>{scenario.title}</h2>
        </div>
      </div>

      <div className="p03e-dialogue">
        {scenario.dialogue.map((line, index) => (
          <div
            className={`p03e-message ${
              index === 0 ? "p03e-messageLeft" : "p03e-messageRight"
            }`}
            key={index}
          >
            <span className="p03e-speaker">{line.speaker}</span>
            <p>{line.text}</p>
          </div>
        ))}
      </div>

      <div className="p03e-focus">
        <span className="p03e-focusLabel">NOTICE THE GRAMMAR</span>
        <strong>{scenario.focus}</strong>
        <p>{scenario.note}</p>
      </div>

      <div className="p03e-check">
        <span className="p03e-eyebrow">YOUR TURN</span>
        <h3>{scenario.question}</h3>

        <div className="p03e-answers">
          {scenario.options.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`p03e-answer ${
                selected === index
                  ? correct
                    ? "p03e-answerCorrect"
                    : "p03e-answerWrong"
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
            className={`p03e-feedback ${
              correct ? "p03e-feedbackCorrect" : "p03e-feedbackWrong"
            }`}
            role="status"
          >
            {correct ? (
              <CheckCircle2 size={19} />
            ) : (
              <Lightbulb size={19} />
            )}
            <p>
              <strong>{correct ? "Correct!" : "Try again."}</strong>{" "}
              {correct
                ? scenario.explanation
                : "Check whether the noun is singular, plural, or uncountable."}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Examples03() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card p03e-page">

        <button
          className="backButton"
          onClick={() => navigate("/project03/grammar")}
        >
          ← Back
        </button>

        <p className="p03e-projectLabel">
          PROJECT 03 / EXAMPLES
        </p>

        <header className="p03e-hero">
          <span className="p03e-pill">
            <Sparkles size={15} />
            REAL WORKPLACE ENGLISH
          </span>

          <h1>English in real life</h1>

          <p>
            From messy desks to impossible deadlines.
            See how we use <strong>there is</strong> and{" "}
            <strong>there are</strong> in everyday work situations.
          </p>

          <div className="p03e-tags">
            <span>5 situations</span>
            <span>Short conversations</span>
            <span>Quick checks</span>
          </div>
        </header>

        <div className="p03e-progress" aria-label="Lesson step 2 of 3">
          <span />
          <span className="p03e-progressActive" />
          <span />
        </div>

        <main className="p03e-content">
          <div className="p03e-intro">
            <span className="p03e-eyebrow">
              LET'S PUT GRAMMAR TO WORK
            </span>
            <h2>Five situations. Real English.</h2>
            <p>
              Read the conversations, notice the grammar,
              and choose the correct answer.
            </p>
          </div>

          <div className="p03e-scenarios">
            {scenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.number}
                scenario={scenario}
              />
            ))}
          </div>
        </main>

        <div className="p03e-next">
          <img
            src="/natalia-examples.png"
            alt="Natalia"
            className="p03e-nextNatalia"
          />

          <div className="p03e-nextText">
            <span className="p03e-eyebrow">NEXT UP</span>
            <h2>Ready to practice?</h2>
            <p>
              You've seen the grammar in real situations.
              Now let's see what you remember!
            </p>

            <PrimaryButton
              onClick={() => navigate("/project03/practice")}
            >
              Practice <ArrowRight size={18} />
            </PrimaryButton>
          </div>
        </div>

      </div>
    </div>
  );
}
