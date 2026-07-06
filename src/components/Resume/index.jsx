import "./index.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="action-bar">
        <a
          href="https://drive.google.com/file/d/1Fn93AaCVDkuT0iTEEAoKhkru4i1OecJW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-btn">Download PDF</button>
        </a>
      </div>

      <header className="resume-header">
        <h1>Maddela Mahesh Babu</h1>
        <p>Kadapa, Andhra Pradesh</p>
        <p>maddelamaheshbabu1234@gmail.com | +91 9110305805</p>

        <p>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/MaheshMaddela123"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Detail-oriented Frontend Developer with a strong foundation in
          JavaScript, React.js, and modern web technologies. Experienced in
          developing responsive, user-friendly web applications using reusable
          components, REST API integration, React Router, and Context API.
          Passionate about writing clean, maintainable code and continuously
          learning new technologies to build scalable web applications.
        </p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="job">
          <h3>Frontend Developer</h3>

          <p className="job-details">
            Comfort Floors & Bathrooms Ltd, Ireland | Nov 2024 – Jan 2025
          </p>

          <ul>
            <li>
              Developed a workflow management system that reduced manual work by
              approximately 8 hours per week.
            </li>

            <li>
              Designed responsive UI modules and integrated backend APIs,
              improving usability for over 20 active users.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>

        <div className="job">
          <h3>User Management Dashboard</h3>

          <p className="job-details">
            React.js | Vite | React Router | Context API | CSS3 | REST API
          </p>

          <p>
            Developed a responsive React application that fetches and manages
            user data from the JSONPlaceholder REST API. Implemented real-time
            search, alphabetical sorting, detailed user profile pages, reusable
            components, and global state management using Context API. Designed
            a fully responsive interface optimized for mobile, tablet, and
            desktop devices.
          </p>
        </div>

        <div className="job">
          <h3>Wonderlust – House Rental Platform</h3>

          <p className="job-details">
            Node.js | Express.js | MongoDB | EJS
          </p>

          <p>
            Built a full-stack rental marketplace following the MVC
            architecture. Implemented secure authentication, property listings,
            booking functionality, review management, image uploads,
            location-based filtering, and personalized wishlists to provide a
            seamless rental experience.
          </p>
        </div>

        <div className="job">
          <h3>Personal Portfolio</h3>

          <p className="job-details">
            React.js | Vite | CSS3
          </p>

          <p>
            Developed a modern portfolio website showcasing projects, technical
            skills, and professional experience. Built reusable React
            components, implemented client-side routing with React Router, and
            optimized performance using Vite while ensuring responsiveness
            across all devices.
          </p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>

        <div className="education-item">
          <h3>B.Tech in Computer Science and Engineering</h3>

          <p className="education-details">
            JNTUA College of Engineering, Pulivendula | 2022 – 2025 | CGPA:
            7.25
          </p>
        </div>

        <div className="education-item">
          <h3>Diploma in Computer Engineering</h3>

          <p className="education-details">
            Loyola Polytechnic (YSRR), Pulivendula | 2019 – 2022 | Percentage:
            74.52%
          </p>
        </div>

        <div className="education-item">
          <h3>SSC</h3>

          <p className="education-details">
            Narayana EM School, Vempalli | 2018 – 2019 | GPA: 8.8
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
          <li>React Router</li>
           <li>React Hooks</li>
          <li>Context API</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
          <li>Netlify</li>
          <li>Vercel</li>
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
