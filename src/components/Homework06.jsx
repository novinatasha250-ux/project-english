
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ClipboardCheck,
  Clock3,
  Factory,
  FilePenLine,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework05.css";

// ============================================
// PROJECT 06 — HOMEWORK
// MISSION 02: THE PRODUCTION CHALLENGE
// ============================================

const activities = [
  {
    number: "01",
    icon: Factory,
    title: "Explore the Machines",
    description:
      "Study three machines and identify the fastest, cheapest, and most reliable options.",
    detail: "Equipment specifications",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "The Production Meeting",
    description:
      "Help Oksana, Alexander, and Nikita discuss the best equipment for different situations.",
    detail: "Workplace conversations",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Check the Equipment Report",
    description:
      "Find and correct superlative adjective mistakes in a report prepared by a colleague.",
    detail: "Grammar corrections",
  },
  {
    number: "04",
    icon: FilePenLine,
    title: "Your Final Decision",
    description:
      "Recommend one machine for the new production line and explain your choice.",
    detail: "Writing task",
  },
];

export default function Homework06() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState(
    () =>
      sessionStorage.getItem("project06StudentName") || ""
  );

  const [showNameError, setShowNameError] = useState(false);

  function startHomework() {
    const name = studentName.trim();

    if (!name) {
      setShowNameError(true);
      return;
    }

    sessionStorage.setItem("project06StudentName", name);

    navigate("/project06/homework/machines");
  }

  return (
    <div className="app">
      <div className="card p03h-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project06")}
        >
          ← Back
        </button>

        <p className="p03h-projectLabel">
          PROJECT 06 / HOMEWORK
        </p>

        {/* HERO */}

        <header className="p03h-hero">
          <div className="p03h-heroText">

            <span className="p03h-pill">
              <Sparkles size={16} />
              YOUR ENGINEERING MISSION
            </span>

            <h1>
              The Production
              <span> Challenge!</span>
            </h1>

            <p>
              Practise{" "}
              <strong>superlative adjectives</strong>{" "}
              while helping an engineering team
              select the best machine for a
              new production line.
            </p>

            <div className="p03h-heroTags">
              <span>A2 Grammar</span>

              <span>
                <Clock3 size={15} />
                20–25 minutes
              </span>

              <span>4 activities</span>
            </div>
          </div>

          <img
            src="/natalia-engineer.png"
            alt="Natalia dressed as an engineer"
            className="p03h-heroNatalia"
          />
        </header>

        {/* MISSION INTRODUCTION */}

        <section className="p03h-intro p05h-mission">

          <span className="p03h-eyebrow">
            YOUR MISSION
          </span>

          <h2>
            A new production line needs equipment!
          </h2>

          <p>
            Oksana, Alexander, and Nikita are
            preparing a new production line
            at their factory.
          </p>

          <p>
            They have three machines to consider:{" "}
            <strong>Compact 100</strong>,{" "}
            <strong>Flex 200</strong>, and{" "}
            <strong>Power 300</strong>.
          </p>

          <p>
            Each machine has different advantages.
            One is the cheapest, another is
            the fastest, and another is
            the most reliable.
          </p>

          <p>
            Your job is to analyse the equipment
            specifications, help the team
            discuss their options, check a
            colleague's report, and recommend
            the best machine for the new
            production line.
          </p>

        </section>

        {/* HOMEWORK ACTIVITIES */}

        <section className="p03h-activities">

          <div className="p03h-sectionHeading">

            <span className="p03h-eyebrow">
              YOUR HOMEWORK PLAN
            </span>

            <h2>
              Four tasks. One important decision.
            </h2>

            <p>
              Complete the activities in order
              to help the engineering team
              make its final recommendation.
            </p>

          </div>

          <div className="p03h-activityGrid">

            {activities.map((activity) => {
              const ActivityIcon = activity.icon;

              return (
                <div
                  className="p03h-activityCard"
                  key={activity.number}
                >

                  <div className="p03h-activityTop">

                    <span className="p03h-activityNumber">
                      {activity.number}
                    </span>

                    <div className="p03h-activityIcon">
                      <ActivityIcon size={25} />
                    </div>

                  </div>

                  <h3>{activity.title}</h3>

                  <p>{activity.description}</p>

                  <span className="p03h-activityDetail">
                    {activity.detail}
                  </span>

                </div>
              );
            })}

          </div>
        </section>

        {/* GRAMMAR REMINDER */}

        <section className="p03h-reminder">

          <div className="p03h-reminderHeading">
            <Sparkles size={21} />
            <h3>Grammar you'll practise</h3>
          </div>

          <div className="p03h-reminderGrid">

            <div>
              <strong>
                Short adjectives: -est
              </strong>

              <span>
                Fast → the fastest,
                cheap → the cheapest,
                small → the smallest
              </span>
            </div>

            <div>
              <strong>
                Spelling changes
              </strong>

              <span>
                Big → the biggest,
                heavy → the heaviest,
                large → the largest
              </span>
            </div>

            <div>
              <strong>
                Long adjectives: the most
              </strong>

              <span>
                The most expensive,
                the most efficient,
                the most reliable
              </span>
            </div>

            <div>
              <strong>
                Irregular superlatives
              </strong>

              <span>
                Good → the best,
                bad → the worst
              </span>
            </div>

          </div>
        </section>

        {/* START HOMEWORK */}

        <section className="p03h-start">

          <span className="p03h-eyebrow">
            BEFORE YOU START
          </span>

          <h2>
            Ready for the production challenge?
          </h2>

          <p>
            Enter your name so Natalia can
            identify your completed work.
          </p>

          <div className="p03h-nameField">

            <label htmlFor="p06h-studentName">
              Your name
            </label>

            <input
              id="p06h-studentName"
              type="text"
              value={studentName}
              placeholder="Enter your name"
              autoComplete="name"
              onChange={(event) => {
                setStudentName(event.target.value);
                setShowNameError(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  startHomework();
                }
              }}
            />

            {showNameError && (
              <span className="p03h-error">
                Please enter your name
                before continuing.
              </span>
            )}

          </div>

          <PrimaryButton onClick={startHomework}>
            Start Homework
            <ArrowRight size={18} />
          </PrimaryButton>

        </section>

      </div>
    </div>
  );
}
