
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FilePenLine,
  MessageSquareText,
  PartyPopper,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework-complete03.css";

// ============================================
// PROJECT 06 — HOMEWORK COMPLETE
// ============================================

const activities = [
  {
    title: "Explore the Machines",
    description: "Identifying the best technical specifications",
    icon: Factory,
  },
  {
    title: "The Production Meeting",
    description: "Discussing equipment with colleagues",
    icon: MessageSquareText,
  },
  {
    title: "Check the Equipment Report",
    description: "Correcting superlative adjectives",
    icon: ClipboardCheck,
  },
  {
    title: "Your Final Decision",
    description: "Recommending the most suitable machine",
    icon: FilePenLine,
  },
];

export default function HomeworkComplete06() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project06StudentName")?.trim() || "";

  const submitted =
    sessionStorage.getItem("project06Submitted") === "true";

  if (!submitted) {
    return (
      <main className="hw03CompletePage">
        <div className="hw03CompleteGate">
          <h1>Almost there!</h1>

          <p>
            Complete and submit your final decision
            to finish Project 06.
          </p>

          <PrimaryButton
            onClick={() =>
              navigate("/project06/homework/recommendation")
            }
          >
            Go to final decision
            <ArrowRight size={19} />
          </PrimaryButton>
        </div>
      </main>
    );
  }

  return (
    <main className="hw03CompletePage">
      <div className="hw03CompleteContainer">

        {/* CELEBRATION */}

        <section className="hw03CompleteHero">
          <div className="hw03CompleteDecoration hw03CompleteDecorationOne" />
          <div className="hw03CompleteDecoration hw03CompleteDecorationTwo" />

          <div className="hw03CompleteImageWrap">
            <span className="hw03CompleteSparkle hw03CompleteSparkleLeft">
              ✦
            </span>

            <img
              src="/natalia-celebrating.png"
              alt="Natalia celebrating"
              className="hw03CompleteNatalia"
            />

            <span className="hw03CompleteSparkle hw03CompleteSparkleRight">
              ✨
            </span>
          </div>

          <div className="hw03CompleteBadge">
            <PartyPopper size={18} />
            PROJECT 06 COMPLETED
          </div>

          <h1>
            Amazing work
            {studentName ? `, ${studentName}` : ""}!
          </h1>

          <p className="hw03CompleteHeroSubtitle">
            You've completed The Production Challenge
            and practised choosing the best equipment
            for a factory using English.
          </p>

          <div className="hw03CompleteStatus">
            <CheckCircle2 size={21} />
            Homework submission request sent
          </div>
        </section>

        {/* ACTIVITIES */}

        <section className="hw03CompleteSection">
          <div className="hw03CompleteSectionHeading">
            <span>YOUR LEARNING JOURNEY</span>

            <h2>Four activities completed!</h2>

            <p>
              Here's what you've worked on in Project 06.
            </p>
          </div>

          <div className="hw03CompleteActivityGrid">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div
                  className="hw03CompleteActivity"
                  key={activity.title}
                >
                  <div className="hw03CompleteActivityIcon">
                    <Icon size={25} />
                  </div>

                  <div className="hw03CompleteActivityText">
                    <span className="hw03CompleteActivityNumber">
                      ACTIVITY {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>

                  <CheckCircle2
                    size={23}
                    className="hw03CompleteActivityCheck"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* LEARNING SUMMARY */}

        <section className="hw03CompleteLearning">
          <div className="hw03CompleteLearningIcon">
            <Sparkles size={27} />
          </div>

          <span>LOOK WHAT YOU CAN DO!</span>

          <h2>
            You can identify the best equipment
            and explain your decisions.
          </h2>

          <p>
            You've practised analysing machine
            specifications, discussing factory
            priorities, correcting grammar mistakes,
            and recommending the most suitable option.
          </p>

          <div className="hw03CompleteGrammar">
            <span>The cheapest / The fastest</span>
            <span>The lightest / The heaviest</span>
            <span>The most reliable</span>
            <span>The best / The worst</span>
          </div>
        </section>

        {/* FINAL MESSAGE */}

        <section className="hw03CompleteFinal">
          <p className="hw03CompleteFinalTitle">
            A message from Natalia
          </p>

          <h2>
            Another mission complete.{" "}
            <span>Keep growing!</span>
          </h2>

          <p>
            Every time you practise English,
            you become more confident communicating
            at work. Keep learning, and I'll see you
            in our next project!
          </p>

          <div className="hw03CompleteSignature">
            With love, Natalia 💜
          </div>

          <div className="hw03CompleteActions">
            <PrimaryButton
              onClick={() => navigate("/")}
            >
              Return to Project English
              <ArrowRight size={19} />
            </PrimaryButton>
          </div>
        </section>

      </div>
    </main>
  );
}
