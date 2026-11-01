import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, CheckCircle2, CircleHelp, Lightbulb, Sparkles, X, Plane, BriefcaseBusiness, Luggage, Users } from "lucide-react";
import PrimaryButton from "./ui/PrimaryButton";
import "../styles/learn/lesson04.css";

function QuickCheck({ number, question, options, correct, explanation }) {
  const [selected, setSelected] = useState(null);
  const answered = selected !== null;
  const isCorrect = selected === correct;
  return (
    <div className="p04-check">
      <div className="p04-checkTop"><span className="p04-eyebrow">QUICK CHECK {number}</span><CircleHelp size={19} /></div>
      <h3>{question}</h3>
      <div className="p04-options">
        {options.map((option, index) => (
          <button type="button" key={option} aria-pressed={selected === index}
            className={`p04-option ${selected === index ? (isCorrect ? "p04-optionCorrect" : "p04-optionWrong") : ""}`}
            onClick={() => setSelected(index)}>
            <span>{String.fromCharCode(65 + index)}</span>{option}
          </button>
        ))}
      </div>
      {answered && (
        <div className={`p04-feedback ${isCorrect ? "p04-feedbackCorrect" : "p04-feedbackWrong"}`} role="status">
          {isCorrect ? <CheckCircle2 size={20} /> : <Lightbulb size={20} />}
          <p><strong>{isCorrect ? "Exactly!" : "Not quite. Try again!"}</strong> {isCorrect ? explanation : "Check whether the noun is countable or uncountable, then choose again."}</p>
        </div>
      )}
    </div>
  );
}

const mistakes = [
  ["I have two luggages.", "I have two suitcases. / I have some luggage."],
  ["We need many equipment.", "We need a lot of equipment."],
  ["How many information do we have?", "How much information do we have?"],
  ["There isn't some water.", "There isn't any water."],
];

export default function Learn04() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="card p04-page">
        <button type="button" className="backButton" onClick={() => navigate("/project04")}>← Back</button>
        <p className="p04-projectLabel">PROJECT 04 / GRAMMAR</p>
        <header className="p04-hero">
          <div className="p04-heroText">
            <span className="p04-pill"><Sparkles size={15} /> A2 GRAMMAR GUIDE</span>
            <h1>Mission <span>Shanghai</span></h1>
            <p className="p04-heroLead">Natalia is flying to Shanghai for a business trip. Help her pack, travel, and prepare for an important client meeting!</p>
            <div className="p04-heroTags"><span>Countable &amp; uncountable</span><span>Some / any</span><span>Much / many</span></div>
          </div>
          <img src="/natalia-travel.png" alt="Natalia with her passport and suitcase, ready for Shanghai" className="p04-heroNatalia" />
        </header>
        <div className="p04-progress" aria-label="Lesson step 1 of 3"><span className="p04-progressActive" /><span /><span /></div>
        <main className="p04-content">
          <section className="p04-section">
            <div className="p04-sectionIntro"><span className="p04-eyebrow">01 / PACKING FOR SHANGHAI</span><h2>Can we count it?</h2><p>Some things can be counted one by one. Others are usually treated as a whole.</p></div>
            <div className="p04-comparison">
              <article className="p04-compareCard p04-countable"><div className="p04-compareTop"><span className="p04-number">01</span><span className="p04-miniLabel">COUNTABLE</span></div><div className="p04-visual"><BriefcaseBusiness size={58} strokeWidth={1.5} /></div><h3>One, two, three…</h3><p className="p04-pattern">a document → three documents</p><p className="p04-example">Natalia packed <mark>two chargers</mark> and <mark>three shirts</mark>.</p><p className="p04-small">Other examples: tickets, laptops, suitcases, meetings.</p></article>
              <article className="p04-compareCard p04-uncountable"><div className="p04-compareTop"><span className="p04-number">02</span><span className="p04-miniLabel">UNCOUNTABLE</span></div><div className="p04-visual"><Luggage size={58} strokeWidth={1.5} /></div><h3>Not counted individually</h3><p className="p04-pattern">some luggage · some equipment</p><p className="p04-example">Natalia needs <mark>some information</mark> about the hotel.</p><p className="p04-small">Other examples: water, money, advice, traffic.</p></article>
            </div>
            <div className="p04-note"><Lightbulb size={21} /><p><strong>Remember:</strong> Uncountable nouns usually have no plural <strong>-s</strong>. Say <em>some luggage</em>, not <em>two luggages</em>. To count it, use a unit: <em>two pieces of luggage</em>.</p></div>
            <QuickCheck number="01" question="Natalia needs ___ before her flight." options={["three informations", "some information", "an information"]} correct={1} explanation="Information is uncountable, so 'some information' is correct." />
          </section>
          <section className="p04-section">
            <div className="p04-sectionIntro"><span className="p04-eyebrow">02 / AT THE AIRPORT</span><h2>How much? How many?</h2><p>Choose the question based on the noun, not the situation.</p></div>
            <div className="p04-ruleGrid">
              <div className="p04-ruleCard"><span className="p04-ruleBadge">MANY</span><h3>How many + plural noun?</h3><p><strong>How many suitcases</strong> do you have?</p><p>I have <strong>two suitcases</strong>.</p></div>
              <div className="p04-ruleCard"><span className="p04-ruleBadge">MUCH</span><h3>How much + uncountable noun?</h3><p><strong>How much luggage</strong> do you have?</p><p>Not <strong>much luggage</strong>.</p></div>
              <div className="p04-ruleCard"><span className="p04-ruleBadge">A LOT</span><h3>A lot of + both types</h3><p>We have <strong>a lot of documents</strong>.</p><p>We have <strong>a lot of equipment</strong>.</p></div>
            </div>
            <div className="p04-note"><Plane size={21} /><p><strong>At check-in:</strong> You can ask <em>How many bags?</em> because bags are countable, or <em>How much luggage?</em> because luggage is uncountable.</p></div>
            <QuickCheck number="02" question="___ luggage is Natalia taking to Shanghai?" options={["How many", "How much", "How a few"]} correct={1} explanation="Luggage is uncountable, so we ask 'How much luggage?'" />
          </section>
          <section className="p04-section">
            <div className="p04-sectionIntro"><span className="p04-eyebrow">03 / THE CLIENT MEETING</span><h2>Some or any?</h2><p>Natalia checks the meeting room before the clients arrive.</p></div>
            <div className="p04-formRows">
              <div className="p04-formRow"><span className="p04-formIcon"><Check size={22} /></span><div><span className="p04-formLabel">POSITIVE</span><h3>Some</h3><p>We have <strong>some documents</strong> and <strong>some water</strong>.</p></div></div>
              <div className="p04-formRow"><span className="p04-formIcon"><CircleHelp size={22} /></span><div><span className="p04-formLabel">QUESTION</span><h3>Any</h3><p>Do we have <strong>any extra chairs</strong>?</p></div></div>
              <div className="p04-formRow"><span className="p04-formIcon"><X size={22} /></span><div><span className="p04-formLabel">NEGATIVE</span><h3>Any</h3><p>We don't have <strong>any coffee</strong>.</p></div></div>
            </div>
            <div className="p04-note"><Lightbulb size={21} /><p><strong>Useful exception:</strong> We often use <em>some</em> when offering or requesting something: <em>Would you like some water?</em></p></div>
            <QuickCheck number="03" question="Natalia asks: 'Do we have ___ extra chairs for the clients?'" options={["some", "any", "much"]} correct={1} explanation="In a neutral question, we usually use 'any'. Chairs are countable and plural." />
          </section>
          <section className="p04-section">
            <div className="p04-sectionIntro"><span className="p04-eyebrow">04 / FINAL PREPARATIONS</span><h2>A few or a little?</h2><p>Both mean a small amount, but they go with different nouns.</p></div>
            <div className="p04-questionGrid">
              <div className="p04-questionCard"><span className="p04-formLabel">COUNTABLE</span><h3>A few + plural noun</h3><p><Users size={18} /> We have <strong>a few minutes</strong> before the meeting.</p></div>
              <div className="p04-questionCard"><span className="p04-formLabel">UNCOUNTABLE</span><h3>A little + uncountable noun</h3><p><BriefcaseBusiness size={18} /> We need <strong>a little more time</strong>.</p></div>
            </div>
            <QuickCheck number="04" question="We still have ___ time before the client arrives." options={["a few", "a little", "many"]} correct={1} explanation="Time is uncountable in this sentence, so 'a little time' is correct." />
          </section>
          <section className="p04-section"><div className="p04-sectionIntro"><span className="p04-eyebrow">05 / COMMON MISTAKES</span><h2>Watch out for these!</h2></div><div className="p04-mistakes">{mistakes.map(([wrong, right]) => <div className="p04-mistake" key={wrong}><p><X size={18} /> {wrong}</p><p><Check size={18} /> {right}</p></div>)}</div></section>
          <section className="p04-summary"><span className="p04-eyebrow">YOUR GRAMMAR CHEAT SHEET</span><h2>At a glance</h2><div className="p04-tableWrap"><table><thead><tr><th>Expression</th><th>Countable</th><th>Uncountable</th></tr></thead><tbody><tr><td>Quantity question</td><td>How many bags?</td><td>How much luggage?</td></tr><tr><td>Positive</td><td>Some documents</td><td>Some equipment</td></tr><tr><td>Negative / question</td><td>Any chairs</td><td>Any water</td></tr><tr><td>Small quantity</td><td>A few minutes</td><td>A little time</td></tr><tr><td>Large quantity</td><td>A lot of meetings</td><td>A lot of work</td></tr></tbody></table></div></section>
        </main>
        <div className="p04-next"><img src="/natalia-travel.png" alt="Natalia ready for the next stage" className="p04-nextNatalia" /><div className="p04-nextText"><span className="p04-eyebrow">NEXT UP</span><h2>Ready for Shanghai?</h2><p>See how Natalia uses these expressions during her business trip.</p><PrimaryButton onClick={() => navigate("/project04/examples")}>Examples <ArrowRight size={18} /></PrimaryButton></div></div>
      </div>
    </div>
  );
}
