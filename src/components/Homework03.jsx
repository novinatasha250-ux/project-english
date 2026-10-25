
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ClipboardCheck,
  Clock3,
  Mail,
  MessageSquare,
  PencilLine,
  Sparkles
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework03.css";

const activities = [
  {
    number: "01",
    icon: MessageSquare,
    title: "A busy Monday",
    description: "Complete realistic workplace messages.",
    detail: "Teams messages"
  },
  {
    number: "02",
    icon: Mail,
    title: "Preparing for visitors",
    description: "Help write an email about the office.",
    detail: "Email practice"
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Office inspection",
    description: "Find out what's available and what's missing.",
    detail: "Office checklist"
  },
  {
    number: "04",
    icon: PencilLine,
    title: "Report a problem",
    description: "Write a short message to your manager.",
    detail: "Writing task"
  }
];

export default function Homework03() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState(
    () => sessionStorage.getItem("project03StudentName") || ""
  );

  const [showNameError, setShowNameError] = useState(false);

  function startHomework() {
    const name = studentName.trim();

    if (!name) {
      setShowNameError(true);
      return;
    }

    sessionStorage.setItem("project03StudentName", name);
    navigate("/project03/homework/teams");
  }

  return (
    <div className="app">
      <div className="card p03h-page">

        <button
          className="backButton"
          onClick={() => navigate("/project03")}
        >
          ← Back
        </button>

        <p className="p03h-projectLabel">
          PROJECT 03 / HOMEWORK
        </p>

        {/* HERO */}

        <header className="p03h-hero">

          <div className="p03h-heroText">

            <span className="p03h-pill">
              <Sparkles size={16} />
              YOUR WORKPLACE CHALLENGE
            </span>

            <h1>
              What's going on
              <span> at work?</span>
            </h1>

            <p>
              Use <strong>there is / there are</strong> to
              describe everyday situations, ask questions,
              and report problems at work.
            </p>

            <div className="p03h-heroTags">
              <span>A2 Grammar</span>
              <span>
                <Clock3 size={15} />
                15–20 minutes
              </span>
              <span>4 activities</span>
            </div>

          </div>

          <img
            src="/natalia-homework.png"
            alt="Natalia"
            className="p03h-heroNatalia"
          />

        </header>

        {/* INTRODUCTION */}

        <section className="p03h-intro">

          <span className="p03h-eyebrow">
            YOUR MISSION
          </span>

          <h2>English for real work situations</h2>

          <p>
            Imagine you're having a busy day at the office.
            There are messages to answer, visitors to prepare
            for, and a few problems to solve.
          </p>

          <p>
            Complete the four activities and use the grammar
            you've learned in Project 03.
          </p>

        </section>

        {/* ACTIVITIES */}

        <section className="p03h-activities">

          <div className="p03h-sectionHeading">

            <span className="p03h-eyebrow">
              YOUR HOMEWORK PLAN
            </span>

            <h2>Four tasks. One busy day.</h2>

            <p>
              Work through the activities in order.
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
              <strong>There is / There are</strong>
              <span>Singular and plural</span>
            </div>

            <div>
              <strong>a / an</strong>
              <span>Singular countable nouns</span>
            </div>

            <div>
              <strong>some / any</strong>
              <span>Positive and negative sentences</span>
            </div>

            <div>
              <strong>Is there / Are there?</strong>
              <span>Questions and short answers</span>
            </div>

          </div>

        </section>

        {/* START */}

        <section className="p03h-start">

          <span className="p03h-eyebrow">
            BEFORE YOU START
          </span>

          <h2>Ready for your homework?</h2>

          <p>
            Enter your name so your teacher can identify
            your completed work.
          </p>

          <div className="p03h-nameField">

            <label htmlFor="p03h-studentName">
              Your name
            </label>

            <input
              id="p03h-studentName"
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
                Please enter your name before continuing.
              </span>
            )}

          </div>

          <PrimaryButton onClick={startHomework}>
            Start Homework <ArrowRight size={18} />
          </PrimaryButton>

        </section>

      </div>
    </div>
  );
}
