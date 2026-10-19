
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PartyPopper, CheckCircle2 } from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import CalendarQuestions02 from "./CalendarQuestions02";
import HomeworkWriting02 from "./HomeworkWriting02";

import "../styles/learn/homework.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwEHJ_Ned3ZRvj8LdPILREkmszw8kWyOcQjTknfdYmcgsSIqXamOvnscstFv_q_POaG/exec";

const events = [
  { day: 2, time: "09:00", title: "Design Review", location: "Meeting Room A", color: "purple" },
  { day: 4, time: "14:00", title: "Client Meeting", location: "Conference Room B", color: "blue" },
  { day: 6, time: "11:00", title: "Safety Training", location: "Second Floor", color: "green" },
  { day: 9, time: "09:00", title: "Design Review", location: "Meeting Room A", color: "purple" },
  { day: 11, time: "14:00", title: "Client Meeting", location: "Conference Room B", color: "blue" },
  { day: 13, time: "12:30", title: "Team Lunch", location: "Company Cafeteria", color: "green" },
  { day: 16, time: "10:00", title: "Site Visit", location: "Main Entrance", color: "orange" },
  { day: 18, time: "14:00", title: "Client Meeting", location: "Conference Room B", color: "blue" },
  { day: 20, time: "15:00", title: "Project Update", location: "Meeting Room A", color: "purple" },
];

export default function HomeworkCalendar02() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(["", "", ""]);
  const [writing, setWriting] = useState("");
  const [studentName, setStudentName] = useState(
    () => sessionStorage.getItem("project02StudentName") || ""
  );

  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) {
      window.scrollTo(0, 0);
    }
  }, [completed]);

  async function submitHomework() {
    if (submitting) return;

    if (!studentName.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!writing.trim()) {
      alert("Please complete the writing task.");
      return;
    }

    if (answers.some((answer) => !answer.trim())) {
      alert("Please answer all calendar questions.");
      return;
    }

    const data = {
      student: studentName.trim(),
      project: "Project 02",
      q1: answers[0],
      q2: answers[1],
      q3: answers[2],
      writing,
      email: writing,
    };

    setSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      // With no-cors, the browser cannot confirm
      // whether Google Sheets saved the submission.
      setCompleted(true);

    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (completed) {
    return (
      <div className="app">
        <div className="card completionCard">

          <img
            src="/natalia-celebrating.png"
            alt="Natalia celebrating"
            className="completionNatalia"
          />

          <div className="sectionTitle">
            <PartyPopper
              size={36}
              strokeWidth={2.2}
              className="sectionIcon"
            />
            <h1>Project Complete!</h1>
          </div>

          <p className="completionSubtitle">
            Congratulations! You have completed{" "}
            <strong>Project 02.</strong>
          </p>

          <div className="completionChecklist">
            {[
              "Teams Messages",
              "Email Practice",
              "Project Calendar",
              "Final Writing Task",
            ].map((item) => (
              <div className="completionItem" key={item}>
                <CheckCircle2
                  size={22}
                  className="completionCheck"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="completionMessage">
            You've practised using{" "}
            <strong>AT, ON and IN</strong>{" "}
            to talk about places and time
            in everyday workplace situations.
          </p>

          <p className="completionSignature">
            Great work! See you in Project 03!
            <br />
            <span>— Natalia</span>
          </p>

          <PrimaryButton onClick={() => navigate("/")}>
            Return Home →
          </PrimaryButton>

        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="card">

        <button
          className="backButton"
          onClick={() =>
            navigate("/project02/homework/email")
          }
        >
          ← Back
        </button>

        <p className="projectLabel">Project 02</p>
        <h1 className="lessonTitle">Homework</h1>
        <p className="lessonSubtitle">
          📅 Project Calendar
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="activeDot"></span>
          <span className="activeDot"></span>
          <span className="progressDot"></span>
        </div>

        <div className="calendarCard">
          <h2 className="calendarMonth">
            November 2026
          </h2>

          <div className="calendarGrid">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map(
              (day) => (
                <div className="calendarHeading" key={day}>
                  {day}
                </div>
              )
            )}

            {Array.from({ length: 30 }, (_, i) => i + 1)
              .filter((day) => {
                const weekday = new Date(
                  2026, 10, day
                ).getDay();

                return weekday >= 1 && weekday <= 5;
              })
              .map((day) => {
                const event = events.find(
                  (item) => item.day === day
                );

                return (
                  <div className="calendarCell" key={day}>
                    <div className="calendarDate">
                      {day}
                    </div>

                    {event && (
                      <div
                        className={`calendarEvent ${event.color}`}
                      >
                        {event.time}
                        <br />
                        {event.title}
                        <br />
                        {event.location}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        <CalendarQuestions02
          answers={answers}
          setAnswers={setAnswers}
        />

        <div id="project02-writing">
          <HomeworkWriting02
            writing={writing}
            setWriting={setWriting}
            studentName={studentName}
            setStudentName={setStudentName}
            onSubmit={submitHomework}
            submitting={submitting}
          />
        </div>

      </div>
    </div>
  );
}
