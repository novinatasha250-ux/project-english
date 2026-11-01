
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Coffee,
  Hotel,
  Lightbulb,
  Luggage,
  Plane,
  Sparkles
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/examples04.css";

const scenarios = [
  {
    number: "01",
    label: "PACKING FOR SHANGHAI",
    title: "Is everything packed?",
    icon: Luggage,
    color: "purple",
    dialogue: [
      {
        speaker: "Natalia",
        text: "I have two suitcases and some luggage to check in."
      },
      {
        speaker: "Anna",
        text: "Do you have all the documents for the client meeting?"
      }
    ],
    focus: "Suitcases / documents = countable; luggage = uncountable",
    note: "We can count suitcases and documents, but not luggage. We say some luggage, not two luggages.",
    question: "Which sentence is correct?",
    options: [
      "I have two luggages.",
      "I have two suitcases."
    ],
    correct: 1,
    explanation:
      "Suitcase is countable. Luggage is uncountable."
  },
  {
    number: "02",
    label: "AT THE AIRPORT",
    title: "Before boarding",
    icon: Plane,
    color: "teal",
    dialogue: [
      {
        speaker: "Natalia",
        text: "Do we have any time to get some coffee?"
      },
      {
        speaker: "Anna",
        text: "Yes, but we don't have much time before boarding."
      }
    ],
    focus: "Any / some / much + uncountable nouns",
    note: "We often use any in questions, some in positive statements, and much with uncountable nouns such as time.",
    question: "Complete: We don't have ___ time.",
    options: ["many", "much"],
    correct: 1,
    explanation:
      "Time is uncountable, so we use much."
  },
  {
    number: "03",
    label: "AT THE HOTEL",
    title: "Checking in",
    icon: Hotel,
    color: "purple",
    dialogue: [
      {
        speaker: "Natalia",
        text: "Is there any water in the room?"
      },
      {
        speaker: "Receptionist",
        text: "Yes, there is some water. There are also four towels."
      }
    ],
    focus: "Some water / four towels",
    note: "Water is uncountable, but towels are countable. We can say four towels, but not four waters when talking about water as a substance.",
    question: "Complete: There are four ___ in the bathroom.",
    options: ["towels", "water"],
    correct: 0,
    explanation:
      "Towels is a plural countable noun."
  },
  {
    number: "04",
    label: "THE CLIENT MEETING",
    title: "An important discussion",
    icon: BriefcaseBusiness,
    color: "teal",
    dialogue: [
      {
        speaker: "Client",
        text: "We have many questions about the new project."
      },
      {
        speaker: "Natalia",
        text: "Of course. We can give you some information and advice."
      }
    ],
    focus: "Many questions / some information / some advice",
    note: "Questions are countable. Information and advice are uncountable, so we don't normally add -s to them.",
    question: "Which sentence is correct?",
    options: [
      "We need some advices.",
      "We need some advice."
    ],
    correct: 1,
    explanation:
      "Advice is uncountable. Say some advice or a piece of advice."
  },
  {
    number: "05",
    label: "BEFORE THE FLIGHT HOME",
    title: "Room for souvenirs?",
    icon: ClipboardList,
    color: "purple",
    dialogue: [
      {
        speaker: "Anna",
        text: "Did you buy many souvenirs in Shanghai?"
      },
      {
        speaker: "Natalia",
        text: "Just a few! I have very little space left in my suitcase."
      }
    ],
    focus: "A few + plural countable / a little + uncountable",
    note: "Use a few with countable nouns such as souvenirs. Use a little with uncountable nouns such as space.",
    question: "Complete: I have ___ space left.",
    options: ["a few", "a little"],
    correct: 1,
    explanation:
      "Space is uncountable here, so we use a little."
  }
];

function ScenarioCard({ scenario }) {
  const [selected, setSelected] = useState(null);
  const Icon = scenario.icon;
  const answered = selected !== null;
  const correct = selected === scenario.correct;

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

      <div className="p04e-focus">
        <span className="p04e-focusLabel">
          NOTICE THE GRAMMAR
        </span>
        <strong>{scenario.focus}</strong>
        <p>{scenario.note}</p>
      </div>

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
              className={`p04e-answer ${
                selected === index
                  ? correct
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
              correct
                ? "p04e-feedbackCorrect"
                : "p04e-feedbackWrong"
            }`}
            role="status"
          >
            {correct ? (
              <CheckCircle2 size={19} />
            ) : (
              <Lightbulb size={19} />
            )}

            <p>
              <strong>
                {correct ? "Correct!" : "Try again."}
              </strong>{" "}
              {correct
                ? scenario.explanation
                : "Think about whether the noun is countable or uncountable."}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Examples04() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="card p04e-page">
        <button
          className="backButton"
          onClick={() => navigate("/project04/grammar")}
        >
          ← Back
        </button>

        <p className="p04e-projectLabel">
          PROJECT 04 / EXAMPLES
        </p>

        <header className="p04e-hero">
          <span className="p04e-pill">
            <Sparkles size={15} />
            MISSION SHANGHAI
          </span>

          <h1>English on a business trip</h1>

          <p>
            Follow Natalia from packing her suitcase
            to meeting a client in Shanghai.
            See how we use{" "}
            <strong>countable and uncountable nouns</strong>{" "}
            in real situations.
          </p>

          <div className="p04e-tags">
            <span>5 situations</span>
            <span>Short conversations</span>
            <span>Quick checks</span>
          </div>
        </header>

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

            <h2>Five stops. One business trip.</h2>

            <p>
              Read the conversations, notice the grammar,
              and choose the correct answer.
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

        <div className="p04e-next">
          <img
            src="/natalia-travel.png"
            alt="Natalia ready for the next stage"
            className="p04e-nextNatalia"
          />

          <div className="p04e-nextText">
            <span className="p04e-eyebrow">
              NEXT UP
            </span>

            <h2>Ready to practice?</h2>

            <p>
              You've helped Natalia prepare for Shanghai.
              Now let's see what you remember!
            </p>

            <PrimaryButton
              onClick={() => navigate("/project04/practice")}
            >
              Practice <ArrowRight size={18} />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
