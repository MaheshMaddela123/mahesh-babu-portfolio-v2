import "./index.css";

const Projects = () => {
  const projectList = [
    {
      id: 3,
      title: "Digital Detox Tracker",
      tagline: "Wellness Web Application",
      techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
      description:
        "A responsive web application helping users monitor digital habits and set wellness goals. Features a seamless light/dark mode toggle using CSS variables, real-time form validation with Vanilla JS, and dynamic book recommendations via a third-party REST API integrated through a CORS proxy.",
    },
    {
      id: 2,
      title: "Wonderlust - House Rental Platform",
      tagline: "Full-Stack Marketplace",
      techStack: ["EJS", "Express.js", "Node.js", "MongoDB"],
      description:
        "A full-featured rental marketplace built with a clean MVC architecture. It supports property listings, booking flows, robust user authentication, and community reviews. Includes advanced location filtering, dynamic image gallery uploads, and personalized wishlists.",
    },
    {
      id: 1,
      title: "Personal Portfolio",
      tagline: "Reactjs Web Application",
      techStack: ["React.js"],
      description:
        "Developed a responsive portfolio web application to showcase projects and skills using React.js. Implemented component-based architecture, client-side routing with React Router, and optimized performance using Vite. Designed a clean, ensuring cross-device compatibility and reusable components.",
    },
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h2>Featured Projects</h2>
        <p>
          A showcase of my recent web development work and technical
          problem-solving.
        </p>
      </header>

      <div className="projects-list">
        {projectList.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-tagline">{project.tagline}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View Source
                </a>
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
