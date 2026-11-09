
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Bot,
  ClipboardCheck,
  Clock3,
  FilePenLine,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework05.css";

// ============================================
// PROJECT 05 — HOMEWORK
// MISSION 01: UPGRADE THE FACTORY
// ============================================

const activities = [
  {
    number: "01",
    icon: Bot,
    title: "Meet the Robots",
    description:
      "Compare CompactBot and PowerBot using their technical specifications.",
    detail: "Robot comparison",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "The Engineering Meeting",
    description:
      "Help Oksana, Alexander, and Nikita discuss the two robots.",
    detail: "Workplace conversations",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Fix the Technical Report",
    description:
      "Find and correct comparative adjective mistakes in a report prepared by a colleague.",
    detail: "Grammar corrections",
  },
  {
    number: "04",
    icon: FilePenLine,
    title: "Your Final Recommendation",
    description:
      "Choose the best robot for the factory and explain your decision.",
    detail: "Writing task",
  },
];

export default function Homework05() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState(
    () =>
      sessionStorage.getItem("project05StudentName") || ""
  );

  const [showNameError, setShowNameError] = useState(false);

  function startHomework() {
    const name = studentName.trim();

    if (!name) {
      setShowNameError(true);
      return;
    }

    sessionStorage.setItem("project05StudentName", name);

    navigate("/project05/homework/robots");
  }

  return (
    <div className="app">
      <div className="card p03h-page">

        {/* BACK BUTTON */}

        <button
          type="button"
          className="backButton"
          onClick={() => navigate("/project05")}
        >
          ← Back
        </button>

        <p className="p03h-projectLabel">
          PROJECT 05 / HOMEWORK
        </p>

        {/* ====================================
            HERO
            ==================================== */}

        <header className="p03h-hero">
          <div className="p03h-heroText">

            <span className="p03h-pill">
              <Sparkles size={16} />
              YOUR ENGINEERING MISSION
            </span>

            <h1>
              Upgrade the
              <span> Factory!</span>
            </h1>

            <p>
              Practise{" "}
              <strong>comparative adjectives</strong>{" "}
              while helping an engineering team
              choose a new industrial robot.
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

          {/* ENGINEER NATALIA */}

          <img
            src="/natalia-engineer.png"
            alt="Natalia dressed as an engineer"
            className="p03h-heroNatalia"
          />
        </header>

        {/* ====================================
            MISSION INTRODUCTION
            ==================================== */}

        <section className="p03h-intro p05h-mission">

          <span className="p03h-eyebrow">
            YOUR MISSION
          </span>

          <h2>
            The factory needs an upgrade!
          </h2>

          <p>
            Oksana, Alexander, and Nikita work at an
            engineering company. Their factory needs
            a new industrial robot to improve
            production.
          </p>

          <p>
            They are considering two options:{" "}
            <strong>CompactBot</strong>, a smaller
            and cheaper robot, and{" "}
            <strong>PowerBot</strong>, a larger
            and faster robot.
          </p>

          <p>
            Your job is to help the team compare
            the machines, check a technical
            report prepared by a colleague,
            and recommend the better option
            for the factory.
          </p>

        </section>

        {/* ====================================
            HOMEWORK ACTIVITIES
            ==================================== */}

        <section className="p03h-activities">

          <div className="p03h-sectionHeading">

            <span className="p03h-eyebrow">
              YOUR HOMEWORK PLAN
            </span>

            <h2>
              Four tasks. One factory upgrade.
            </h2>

            <p>
              Complete the activities in order
              to help the team make its decision.
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

        {/* ====================================
            GRAMMAR REMINDER
            ==================================== */}

        <section className="p03h-reminder">

          <div className="p03h-reminderHeading">
            <Sparkles size={21} />
            <h3>Grammar you'll practise</h3>
          </div>

          <div className="p03h-reminderGrid">

            <div>
              <strong>
                Short adjectives: -er
              </strong>

              <span>
                Fast → faster, small → smaller,
                cheap → cheaper
              </span>
            </div>

            <div>
              <strong>
                Spelling changes
              </strong>

              <span>
                Big → bigger, heavy → heavier,
                large → larger
              </span>
            </div>

            <div>
              <strong>
                Long adjectives: more
              </strong>

              <span>
                More expensive, more efficient,
                more reliable
              </span>
            </div>

            <div>
              <strong>
                Irregular comparatives
              </strong>

              <span>
                Good → better, bad → worse
              </span>
            </div>

          </div>
        </section>

        {/* ====================================
            START HOMEWORK
            ==================================== */}

        <section className="p03h-start">

          <span className="p03h-eyebrow">
            BEFORE YOU START
          </span>

          <h2>
            Ready to upgrade the factory?
          </h2>

          <p>
            Enter your name so Natalia can
            identify your completed work.
          </p>

          <div className="p03h-nameField">

            <label htmlFor="p05h-studentName">
              Your name
            </label>

            <input
              id="p05h-studentName"
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
