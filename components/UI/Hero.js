

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h2 className="hero__signature">Navi Israel</h2>
        <h1 className="hero__position">Im a UI/UX developer.</h1>
        <div className="hero__other-positions">
          <div className="hero__line" />
          <div className="hero__titles">
            <h3>UI Engineer</h3>
            <span>•</span>
            <h3>Frontend Developer</h3>
            <span>•</span>
            <h3>Email Developer</h3>
          </div>
          <div className="hero__line" />
        </div>
        <div className="hero__btn">
          <a>
            <button id="hero__btn-portfolio" className="hero__btn-text">
              View My Portfolio
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
