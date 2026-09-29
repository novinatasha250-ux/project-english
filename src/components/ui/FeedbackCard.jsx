import PrimaryButton from "./PrimaryButton";

export default function FeedbackCard({
  correct,
  title,
  explanation,
  answer,
  answers,
  nextLabel,
  onNext,
  hideButton = false,
}) {

  const multipleAnswers =
    Array.isArray(answers)
      ? answers.filter(Boolean)
      : [];

  return (

    <div className="feedbackCard">

      <div className="feedbackLeft">

        <div className="feedbackNataliaWrapper">

          {correct ? (

            <img
              src="/confetti.png"
              alt=""
              className="confetti"
            />

          ) : (

            <img
              src="/thinking-swirl.png"
              alt=""
              className="thinkingSwirl"
            />

          )}

          <img
            src={
              correct
                ? "/natalia-correct.png"
                : "/natalia-wrong.png"
            }
            alt="Natalia"
            className="feedbackNatalia"
          />

        </div>

      </div>

      <div className="feedbackRight">

        <h2 className={correct ? "feedbackSuccess" : "feedbackAlmost"}>
          {title}
        </h2>

        {!correct && (answer || multipleAnswers.length > 0) && (

          <div className="feedbackAnswer">

            {multipleAnswers.length > 0 ? (

              <>

                <p className="feedbackAnswerTitle">
                  Correct answers:
                </p>

                <div className="feedbackAnswerList">

                  {multipleAnswers.map((item) => (

                    <p
                      key={item}
                      className="feedbackAnswerItem"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />

                  ))}

                </div>

              </>

            ) : (

              <p className="feedbackAnswerInline">

                <strong>Correct answer:</strong>

                <span
                  className="feedbackBadge"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />

              </p>

            )}

          </div>

        )}

        {explanation && (

          <p className="feedbackExplanation">
            {explanation}
          </p>

        )}

        {!hideButton && (

          <PrimaryButton onClick={onNext}>
            {nextLabel}
          </PrimaryButton>

        )}

      </div>

    </div>

  );

}