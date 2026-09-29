import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PartyPopper, CheckCircle2 } from "lucide-react";

import PrimaryButton from "./ui/PrimaryButton";
import CalendarQuestions from "./CalendarQuestions";
import HomeworkWriting from "./HomeworkWriting";

import "../styles/learn.css";

export default function HomeworkCalendar() {

  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  const [writing, setWriting] = useState("");

  const [results, setResults] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) {
      window.scrollTo(0, 0);
    }
  }, [completed]);

  const submitHomework = async () => {

    const data = {
      student: studentName,
      project: "Project 01",
      q1: answer1,
      q2: answer2,
      q3: answer3,
      writing,
      email: writing,
    };

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbwEHJ_Ned3ZRvj8LdPILREkmszw8kWyOcQjTknfdYmcgsSIqXamOvnscstFv_q_POaG/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      setCompleted(true);

    } catch (error) {

      alert("❌ Something went wrong.");
      console.log(error);

    }

  };

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
          Congratulations! You have completed <strong>Project 01.</strong>
        </p>

        <div className="completionChecklist">

          <div className="completionItem">

            <CheckCircle2
              size={22}
              className="completionCheck"
            />

            <span>Teams Messages</span>

          </div>

          <div className="completionItem">

            <CheckCircle2
              size={22}
              className="completionCheck"
            />

            <span>Email Practice</span>

          </div>

          <div className="completionItem">

            <CheckCircle2
              size={22}
              className="completionCheck"
            />

            <span>Project Calendar</span>

          </div>

          <div className="completionItem">

            <CheckCircle2
              size={22}
              className="completionCheck"
            />

            <span>Final Writing Task</span>

          </div>

        </div>

        <p className="completionMessage">
          You can now confidently use
          <strong> IN</strong>,
          <strong> ON</strong> and
          <strong> AT</strong>
          {" "}in everyday workplace situations.
        </p>

        <p className="completionSignature">
          See you in Project 02!
          <br />
          <span>— Natalia</span>
        </p>

        <PrimaryButton
          onClick={() => navigate("/")}
        >
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
          onClick={() => navigate("/project01/homework/email")}
        >
          ← Back
        </button>

        <p className="projectLabel">
          Project 01
        </p>

        <h1 className="lessonTitle">
          Homework
        </h1>

        <p className="lessonSubtitle">
          📅 Project Calendar
        </p>

        <div className="lessonProgress">
          <span className="activeDot"></span>
          <span className="activeDot"></span>
          <span className="activeDot"></span>
          <span></span>
        </div>

        <div className="calendarCard">

          <h2 className="calendarMonth">
            September 2026
          </h2>

          <div className="calendarGrid">

            <div className="calendarHeading">Mon</div>
            <div className="calendarHeading">Tue</div>
            <div className="calendarHeading">Wed</div>
            <div className="calendarHeading">Thu</div>
            <div className="calendarHeading">Fri</div>
                        {/* Week 1 */}

            <div className="calendarCell"><div className="calendarDate">1</div></div>
            <div className="calendarCell"><div className="calendarDate">2</div></div>

            <div className="calendarCell">
              <div className="calendarDate">3</div>
              <div className="calendarEvent blue">
                14:00<br />
                Client Meeting
              </div>
            </div>

            <div className="calendarCell"><div className="calendarDate">4</div></div>
            <div className="calendarCell"><div className="calendarDate">5</div></div>

            {/* Week 2 */}

            <div className="calendarCell">
              <div className="calendarDate">8</div>
              <div className="calendarEvent purple">
                09:00<br />
                Design Review
              </div>
            </div>

            <div className="calendarCell"><div className="calendarDate">9</div></div>

            <div className="calendarCell">
              <div className="calendarDate">10</div>
              <div className="calendarEvent blue">
                14:00<br />
                Client Meeting
              </div>
            </div>

            <div className="calendarCell"><div className="calendarDate">11</div></div>

            <div className="calendarCell">
              <div className="calendarDate">12</div>
              <div className="calendarEvent green">
                12:30<br />
                Team Lunch
              </div>
            </div>

            {/* Week 3 */}

            <div className="calendarCell">
              <div className="calendarDate">15</div>
              <div className="calendarEvent purple">
                09:00<br />
                Design Review
              </div>
            </div>

            <div className="calendarCell">
              <div className="calendarDate">16</div>
              <div className="calendarEvent orange">
                10:00<br />
                Site Visit
              </div>
            </div>

            <div className="calendarCell">
              <div className="calendarDate">17</div>
              <div className="calendarEvent blue">
                14:00<br />
                Client Meeting
              </div>
            </div>

            <div className="calendarCell"><div className="calendarDate">18</div></div>
            <div className="calendarCell"><div className="calendarDate">19</div></div>

            {/* Week 4 */}

            <div className="calendarCell">
              <div className="calendarDate">22</div>
              <div className="calendarEvent purple">
                09:00<br />
                Design Review
              </div>
            </div>

            <div className="calendarCell"><div className="calendarDate">23</div></div>

            <div className="calendarCell">
              <div className="calendarDate">24</div>
              <div className="calendarEvent blue">
                14:00<br />
                Client Meeting
              </div>
            </div>

            <div className="calendarCell"><div className="calendarDate">25</div></div>

            <div className="calendarCell">
              <div className="calendarDate">26</div>
              <div className="calendarEvent green">
                16:00<br />
                Safety Training
              </div>
            </div>
                        {/* Week 5 */}

            <div className="calendarCell">
              <div className="calendarDate">29</div>
              <div className="calendarEvent purple">
                11:00<br />
                Project Update
              </div>
            </div>

            <div className="calendarCell">
              <div className="calendarDate">30</div>
              <div className="calendarEvent blue">
                15:00<br />
                Budget Meeting
              </div>
            </div>

            <div className="calendarCell"></div>
            <div className="calendarCell"></div>
            <div className="calendarCell"></div>

          </div>

        </div>

        <CalendarQuestions
          answer1={answer1}
          setAnswer1={setAnswer1}
          answer2={answer2}
          setAnswer2={setAnswer2}
          answer3={answer3}
          setAnswer3={setAnswer3}
          results={results}
          setResults={setResults}
          attempts={attempts}
          setAttempts={setAttempts}
        />

        <HomeworkWriting
          writing={writing}
          setWriting={setWriting}
          studentName={studentName}
          setStudentName={setStudentName}
          onSubmit={submitHomework}
        />
              </div>

    </div>

  );

}
