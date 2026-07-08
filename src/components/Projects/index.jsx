import "./index.css";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Wonderlust - House Rental Platform",
      tagline: "Full-Stack Marketplace",
      techStack: ["EJS", "Express.js", "Node.js", "MongoDB"],
      description:
        "A full-featured rental marketplace built with a clean MVC architecture. It supports property listings, booking flows, secure user authentication, community reviews, advanced location filtering, image uploads, and personalized wishlists.",
      liveLink: "https://wunderlust-ck0m.onrender.com/listings",
      githubLink: "https://github.com/MaheshMaddela123/Wonderlust",
    },
    {
      id: 2,
      title: "User Management Dashboard",
      tagline: "React Web Application",
      techStack: [
        "React.js",
        "Vite",
        "React Router",
        "Context API",
        "CSS3",
        "REST API",
      ],
      description:
        "A responsive React application that fetches and manages user data from the JSONPlaceholder API. Implemented real-time search, alphabetical sorting, detailed user profile pages, global state management using Context API, reusable components, and a fully responsive interface with custom CSS.",
      liveLink: "https://user-dashboard-1pxf.vercel.app/",
      githubLink: "https://github.com/MaheshMaddela123/user-dashboard",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      tagline: "React Portfolio Website",
      techStack: ["React.js", "Vite", "CSS3"],
      description:
        "Developed a responsive portfolio website to showcase my projects, technical skills, and professional experience. Built using reusable React components, client-side routing with React Router, modern UI design principles, and optimized performance with Vite for a seamless user experience across all devices.",
      liveLink: "https://mahesh-babu-portfolio-v3.onrender.com",
      githubLink: "https://github.com/MaheshMaddela123/Portfolio",
    },
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h2>Featured Projects</h2>
        <p>
          A showcase of my recent web development projects demonstrating
          frontend, full-stack, and responsive web application development
          skills.
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

              <div className="project-links">
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
