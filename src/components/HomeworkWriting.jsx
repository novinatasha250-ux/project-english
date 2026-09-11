import PrimaryButton from "./ui/PrimaryButton";

export default function HomeworkWriting({
  writing,
  setWriting,
  studentName,
  setStudentName,
  onSubmit
}) {

  return (

    <div className="nextLessonCard">

      <h2>✍️ Final Writing Task</h2>

      <p className="homeworkIntro">
        Read the email and write a reply.
      </p>

      <div className="emailCard">

        <div className="emailHeader">

          <p><strong>From:</strong> Anna</p>

          <p><strong>Subject:</strong> Meeting</p>

        </div>

        <div className="emailBody">

          <p>Hi,</p>

          <p>
            Are you available to meet
            <strong> on Wednesday at 2:00 pm</strong> to discuss the new project?
          </p>

          <p>Please let me know.</p>

          <p>Thanks!</p>

          <p>Anna</p>

        </div>

      </div>

      <div className="writingTask">

        <h3>Your task</h3>

        <p>
          Reply to Anna.
        </p>

        <ul>

          <li>Politely decline the meeting.</li>

          <li>Explain why.</li>

          <li>Suggest another day and time from the Project Calendar.</li>

        </ul>

        <p>
          <strong>Write 4–6 sentences.</strong>
        </p>

      </div>

      <div className="emailCard">

        <div className="emailHeader">

          <p><strong>To:</strong> Anna</p>

          <p><strong>Subject:</strong> Re: Meeting</p>

        </div>

        <div className="emailBody">

          <p>Hi Anna,</p>

          <textarea
  className="writingBox"
  rows="8"
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

        <PrimaryButton onClick={onSubmit}>

          Submit

        </PrimaryButton>

      </div>

    </div>

  );

}