
export default function Hero() {
  return (
    <div className="homeHeroArea">
      <header className="homeBrand">
        <h1 className="logo">Project English</h1>

        <p className="motto">
          Learn • Communicate • Grow
        </p>
      </header>

      <section className="hero">
        <div className="homeHeroImage">
          <img
            src="/natalia-wave.gif"
            alt="Natalia welcoming students"
            className="heroCharacter"
          />
        </div>

        <div className="heroText">
          <span className="homeHeroEyebrow">
            YOUR ENGLISH JOURNEY
          </span>

          <h2>Welcome back!</h2>

          <p>Ready for today's project?</p>
        </div>
      </section>
    </div>
  );
}
