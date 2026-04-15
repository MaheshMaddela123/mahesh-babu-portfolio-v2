import "./index.css";

const HeroLeftSide = () => {
  return (
    <>
      <div className="main-container">
        <div className="info-container">
          <div className="hello">
            <h2>Hello</h2>
          </div>
          <h1>I'm <span className="username">Maddela Mahesh Babu</span>🙌</h1>
          <p className="para">Front-End Developer & Full Stack Developer</p>
        </div>
        <div className="btn-container">
          <a href="https://drive.google.com/file/d/1Fn93AaCVDkuT0iTEEAoKhkru4i1OecJW/view?usp=sharing" target="_blank">
            <button className="btn1">Download Resume</button>
          </a>
          <button className="btn2">Get in Touch!</button>
        </div>
      </div>
    </>
  );
};
export default HeroLeftSide;
