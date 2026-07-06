import "./index.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <section className="about-intro">
          <h1 className="heading">About Me</h1>
          <p className="main-text">
            I am a passionate <strong>Frontend Developer</strong> (aspiring Full
            Stack Developer) with a strong interest in building modern,
            responsive, and user-friendly web applications using React.js,
            JavaScript, and modern web technologies. I enjoy creating intuitive
            user interfaces, integrating REST APIs, and writing clean,
            maintainable code.
          </p>
        </section>

        <section className="about-projects">
          <h2 className="sub-heading">Projects</h2>

          <div className="project-grid">
            <div className="project-entry">
              <h3>User Management Dashboard</h3>
              <p>
                A responsive React application that fetches and manages user
                data from the JSONPlaceholder API with real-time search,
                alphabetical sorting, detailed user profiles, and Context API
                for global state management.
              </p>
            </div>

            <div className="project-entry">
              <h3>Wonderlust Rental Platform</h3>
              <p>
                A full-stack rental marketplace built with Node.js, Express.js,
                MongoDB, and EJS featuring user authentication, property
                listings, reviews, image uploads, and location-based filtering.
              </p>
            </div>

            <div className="project-entry">
              <h3>Personal Portfolio</h3>
              <p>
                A responsive portfolio website built with React.js, Vite, and
                React Router to showcase my projects, technical skills, and
                experience with a clean and modern user interface.
              </p>
            </div>
          </div>
        </section>

        <footer className="about-footer">
          <p>
            I specialize in building responsive web applications, integrating
            REST APIs, and developing reusable React components with a strong
            focus on performance, accessibility, and user experience. I am
            committed to continuous learning and staying up to date with modern
            frontend development practices.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
