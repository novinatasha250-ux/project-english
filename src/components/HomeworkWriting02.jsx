
import PrimaryButton from "./ui/PrimaryButton";
import { SquarePen } from "lucide-react";

export default function HomeworkWriting02({
  writing,
  setWriting,
  studentName,
  setStudentName,
  onSubmit,
  submitting = false,
}) {
  return (
    <div className="writingCard">

      <div className="sectionTitle">
        <SquarePen
          size={36}
          strokeWidth={2.2}
          className="sectionIcon"
        />
        <h2>Final Writing Task</h2>
      </div>

      <p className="homeworkIntro">
        Read the email and write a reply.
      </p>

      <div className="emailCard">

        <div className="emailHeader">
          <p>
            <strong>From:</strong> Anna
          </p>
          <p>
            <strong>Subject:</strong> Office Visit
          </p>
        </div>

        <div className="emailBody">
          <p>Hi,</p>

          <p>
            I'm visiting your office next week,
            but I don't know where to go.
          </p>

          <p>
            Where is your office? Where should
            I meet you? What day and time
            should I arrive?
          </p>

          <p>Thanks for your help!</p>
          <p>Anna</p>
        </div>

      </div>

      <div className="writingTask">

        <h3>Your task</h3>

        <p>Reply to Anna.</p>

        <ul>
          <li>Say where your office is.</li>
          <li>Explain where Anna should meet you.</li>
          <li>Suggest a day and time for her visit.</li>
          <li>
            Use <strong>AT, ON and IN</strong>
            {" "}where appropriate.
          </li>
        </ul>

        <p>
          <strong>Write 4–6 sentences.</strong>
        </p>

      </div>

      <div className="emailCard">

        <div className="emailHeader">
          <p>
            <strong>To:</strong> Anna
          </p>
          <p>
            <strong>Subject:</strong> Re: Office Visit
          </p>
        </div>

        <div className="emailBody">
          <p>Hi Anna,</p>

          <textarea
            className="writingBox"
            rows={8}
            value={writing}
            onChange={(e) => setWriting(e.target.value)}
            placeholder="Write your email here..."
          />

          <p>Best,</p>

          <input
            className="answerInput"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Your name"
          />
        </div>

      </div>

      <div className="homeworkButton">
        <PrimaryButton
          onClick={onSubmit}
        >
          {submitting ? "Submitting..." : "Submit"}
        </PrimaryButton>
      </div>

    </div>
  );
}
