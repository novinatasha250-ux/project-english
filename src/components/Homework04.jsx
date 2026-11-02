
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  BriefcaseBusiness,
  ClipboardCheck,
  Clock3,
  Hotel,
  Luggage,
  Mail,
  Sparkles
} from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/homework03.css";

const activities = [
  {
    number: "01",
    icon: Luggage,
    title: "Packing for Shanghai",
    description:
      "Help Natalia pack her suitcase and prepare her documents.",
    detail: "Packing checklist"
  },
  {
    number: "02",
    icon: Hotel,
    title: "Arriving in Shanghai",
    description:
      "Complete conversations at the airport and hotel.",
    detail: "Travel conversations"
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Meeting the client",
    description:
      "Choose the correct words in a business meeting.",
    detail: "Grammar in context"
  },
  {
    number: "04",
    icon: Mail,
    title: "An email from Shanghai",
    description:
      "Write a short email about the business trip.",
    detail: "Writing task"
  }
];

export default function Homework04() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState(
    () => sessionStorage.getItem("project04StudentName") || ""
  );

  const [showNameError, setShowNameError] = useState(false);

  function startHomework() {
    const name = studentName.trim();

    if (!name) {
      setShowNameError(true);
      return;
    }

    sessionStorage.setItem("project04StudentName", name);
    navigate("/project04/homework/packing");
  }

  return (
    <div className="app">
      <div className="card p03h-page">
        <button
          className="backButton"
          onClick={() => navigate("/project04")}
        >
          ← Back
        </button>

        <p className="p03h-projectLabel">
          PROJECT 04 / HOMEWORK
        </p>

        {/* HERO */}

        <header className="p03h-hero">
          <div className="p03h-heroText">
            <span className="p03h-pill">
              <Sparkles size={16} />
              YOUR SHANGHAI MISSION
            </span>

            <h1>
              Ready for
              <span> Shanghai?</span>
            </h1>

            <p>
              Practise <strong>countable and uncountable
              nouns</strong> while helping Natalia prepare
              for an important business trip to Shanghai.
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
            src="/natalia-travel.png"
            alt="Natalia with her suitcase, ready to travel"
            className="p03h-heroNatalia"
          />
        </header>

        {/* INTRODUCTION */}

        <section className="p03h-intro">
          <span className="p03h-eyebrow">
            YOUR MISSION
          </span>

          <h2>A business trip to Shanghai</h2>

          <p>
            Natalia is travelling to Shanghai for an
            important meeting with a client. She needs
            to pack her luggage, check into a hotel,
            prepare for a meeting, and send an email
            to her colleagues.
          </p>

          <p>
            Help Natalia complete four activities using
            the grammar you've learned in Project 04.
          </p>
        </section>

        {/* ACTIVITIES */}

        <section className="p03h-activities">
          <div className="p03h-sectionHeading">
            <span className="p03h-eyebrow">
              YOUR HOMEWORK PLAN
            </span>

            <h2>Four tasks. One business trip.</h2>

            <p>
              Complete the activities in order.
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
              <strong>Countable nouns</strong>
              <span>
                A suitcase, two tickets, three documents
              </span>
            </div>

            <div>
              <strong>Uncountable nouns</strong>
              <span>
                Luggage, information, advice, time
              </span>
            </div>

            <div>
              <strong>some / any</strong>
              <span>
                Positive sentences, questions, and negatives
              </span>
            </div>

            <div>
              <strong>much / many / a few / a little</strong>
              <span>
                Talking about quantities
              </span>
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
            <label htmlFor="p04h-studentName">
              Your name
            </label>

            <input
              id="p04h-studentName"
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
