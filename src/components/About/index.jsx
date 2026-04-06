import "./index.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <section className="about-intro">
          <h1 className="heading">About Me</h1>
          <p className="main-text">
            I am a passionate <strong>Frontend Developer</strong> (aspiring Full Stack Developer)
            with a strong interest in building modern, responsive, and
            user-friendly web applications.
          </p>
        </section>

        <section className="about-projects">
          <h2 className="sub-heading">Projects</h2>
          <div className="project-grid">
            <div className="project-entry">
              <h3>Digital Detox Tracker</h3>
              <p>A web app designed to manage screen time and tasks using HTML, CSS, and JavaScript.</p>
            </div>
            <div className="project-entry">
              <h3>Wonderlust Rental Platform</h3>
              <p>A full-featured rental site built with EJS, Node.js, Express, and MongoDB.</p>
            </div>
            <div className="project-entry">
              <h3>Personal Portfolio</h3>
              <p>Showcase projects and skills built with React.js.</p>
            </div>
          </div>
        </section>

        <footer className="about-footer">
          <p>
            I specialize in UI design and performance optimization. I am dedicated to 
            continuous learning and staying aligned with industry standards.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;