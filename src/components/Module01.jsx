import "../styles/module.css";
import PrimaryButton from "./ui/PrimaryButton";

export default function Module01({
  onBack,
  onOpenGrammar,
  onOpenHomework,
}) {
  return (
    <div className="modulePage">

      <button
        className="backButton"
        onClick={onBack}
      >
        ← Back
      </button>

      <p className="projectLabel">
        Project 01
      </p>

      <h1 className="moduleTitle">
        Time & Place
      </h1>

      <p className="moduleSubtitle">
        AT • ON • IN
      </p>

      {/* Grammar */}

      <div className="resourceCard">

        <div>
          <h2>📚 Lesson</h2>
<p>Grammar • Examples • Quiz</p>
        </div>

        <PrimaryButton
          onClick={onOpenGrammar}
        >
          Open
        </PrimaryButton>

      </div>

      {/* Homework */}

      <div className="resourceCard">

        <div>
          <h2>📝 Homework</h2>
          <p>Extra practice</p>
        </div>

        <PrimaryButton
          onClick={onOpenHomework}
        >
          Open
        </PrimaryButton>

      </div>

    </div>
  );
}