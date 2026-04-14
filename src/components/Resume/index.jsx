import "./index.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="action-bar">
        <a
          href="https://drive.google.com/file/d/1iNdLgRrFEiHvXfvZZzvIkTIe9DbP9scf/view?usp=drive_link"
          target="_blank"
        >
          <button className="download-btn">Download PDF</button>
        </a>
      </div>

      <header className="resume-header">
        <h1>Maddela Mahesh Babu</h1>
        <p>Kadapa, AP | maddelamaheshbabu1234@gmail.com | +91 9110305805</p>
        <p>LinkedIn | GitHub</p>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Detail-oriented Computer Science B.Tech graduate with strong
          proficiency in HTML, CSS, and JavaScript, and a solid foundation in
          core programming principles. Skilled in building responsive,
          user-friendly web applications and writing clean, maintainable code.
          Quick learner with the ability to adapt to new technologies and
          frameworks.
        </p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="job">
          <h3>Frontend Developer</h3>
          <p className="job-details">
            Tech Kshatriyas, Vijayawada | Jan 2025 - Mar 2025
          </p>
          <ul>
            <li>
              Developed the official company website using Next.js and
              TypeScript, achieving a 92/100 Google PageSpeed score.
            </li>
            <li>
              Built modular and reusable UI components using TailwindCSS, which
              improved development efficiency by 25% and ensured consistent
              design across the application.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Frontend Developer</h3>
          <p className="job-details">
            Comfort Floors & Bathrooms Ltd, Ireland | Nov 2024 - Jan 2025
          </p>
          <ul>
            <li>
              Developed a workflow management system that reduced manual
              operations by approximately 8 hours per week.
            </li>
            <li>
              Designed and implemented responsive UI modules along with backend
              integrations, supporting more than 20 active users and enhancing
              overall system usability.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>

        <div className="job">
          <h3>Digital Detox Tracker</h3>
          <p className="job-details">HTML, CSS, JavaScript, REST APIs</p>
          <p>
            This responsive web application helps users monitor their digital
            habits and set personalized wellness goals. It utilizes CSS
            variables to provide a seamless light and dark mode toggle. Under
            the hood, it relies on vanilla JavaScript to handle real-time form
            validation and usage tracking. Additionally, it integrates a
            third-party REST API through a proxy to bypass CORS restrictions,
            delivering dynamic book recommendations as healthy alternatives to
            screen time.
          </p>
        </div>

        <div className="job">
          <h3>Wonderlust - House Rental Platform</h3>
          <p className="job-details">EJS, Express, Node.js, MongoDB</p>
          <p>
            Wonderlust is a full-featured rental marketplace built with a clean
            MVC architecture. It supports a complete property listing and
            booking flow, robust user authentication, and community reviews. To
            enhance the user experience and platform navigation, the application
            includes advanced location filtering, dynamic image gallery uploads,
            personalized wishlists, and secure booking logic.
          </p>
        </div>

        <div className="job">
          <h3>Personal Portfolio</h3>
          <p className="job-details">Reactjs</p>
          <p>
            Developed a responsive portfolio web application to showcase
            projects and skills using React.js. Implemented component-based
            architecture, client-side routing with React Router, and optimized
            performance using Vite. Designed a clean, ensuring cross-device
            compatibility and reusable components.
          </p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>B.Tech in Computer Science and Engineering</h3>
          <p className="education-details">
            JNTUA College of Engineering, Pulivendula | 2022 - 2025 | CGPA: 7.25
          </p>
        </div>
        <div className="education-item">
          <h3>Diploma in Computer Engineering</h3>
          <p className="education-details">
            Loyola Polytechnic (YSRR), Pulivendula | 2019 - 2022 | Percentage:
            74.52%
          </p>
        </div>
        <div className="education-item">
          <h3>SSC</h3>
          <p className="education-details">
            Narayana EM School, Vempalli | 2018 - 2019 | GPA: 8.8
          </p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Render & Netlify</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>NPTEL: Privacy and Security in Online Social Media</li>
          <li>NPTEL: Social Innovation in Industry 4.0</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
