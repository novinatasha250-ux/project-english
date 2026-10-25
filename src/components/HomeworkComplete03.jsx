
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  MessageSquareText,
  PenLine,
  PartyPopper,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework-complete03.css";

const activities = [
  {
    title: "Teams Messages",
    description: "Workplace conversations",
    icon: MessageSquareText,
  },
  {
    title: "Email Practice",
    description: "Professional communication",
    icon: Mail,
  },
  {
    title: "Office Checklist",
    description: "Describing what is available",
    icon: ClipboardCheck,
  },
  {
    title: "Final Writing Task",
    description: "A workplace update for Oksana",
    icon: PenLine,
  },
];

export default function HomeworkComplete03() {
  const navigate = useNavigate();

  const studentName =
    sessionStorage.getItem("project03StudentName")?.trim() || "";

  const submitted =
    sessionStorage.getItem("project03Submitted") === "true";

  if (!submitted) {
    return (
      <main className="hw03CompletePage">
        <div className="hw03CompleteGate">
          <h1>Almost there!</h1>
          <p>
            Complete and submit your final writing task
            to finish Project 03.
          </p>
          <PrimaryButton
            onClick={() =>
              navigate("/project03/homework/writing")
            }
          >
            Go to writing
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
            PROJECT 03 COMPLETED
          </div>

          <h1>
            Amazing work
            {studentName ? `, ${studentName}` : ""}!
          </h1>

          <p className="hw03CompleteHeroSubtitle">
            You've finished your homework and practised
            using English in real workplace situations.
          </p>

          <div className="hw03CompleteStatus">
            <CheckCircle2 size={21} />
            Homework submission sent
          </div>

        </section>

        {/* ACTIVITIES */}

        <section className="hw03CompleteSection">

          <div className="hw03CompleteSectionHeading">
            <span>YOUR LEARNING JOURNEY</span>
            <h2>Four activities completed!</h2>
            <p>
              Here's what you've worked on in Project 03.
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
            You can describe your workplace
            with confidence.
          </h2>

          <p>
            You've practised talking about what exists,
            what is missing, and what people need.
          </p>

          <div className="hw03CompleteGrammar">
            <span>There is / There are</span>
            <span>Is there / Are there?</span>
            <span>There isn't / There aren't</span>
            <span>A / An / Some / Any</span>
          </div>

        </section>

        {/* FINAL MESSAGE */}

        <section className="hw03CompleteFinal">

          <p className="hw03CompleteFinalTitle">
            A message from Natalia
          </p>

          <h2>Every project is progress. <span>Keep going!</span></h2>

          <p>
            You've taken another step towards using
            English naturally at work. Keep practising,
            and I'll see you in Project 04!
          </p>

          <div className="hw03CompleteSignature">
            With love, Natalia 💜
          </div>

          <div className="hw03CompleteActions">
            <PrimaryButton onClick={() => navigate("/")}>
              Return to Project English
              <ArrowRight size={19} />
            </PrimaryButton>
          </div>

        </section>

      </div>
    </main>
  );
}
