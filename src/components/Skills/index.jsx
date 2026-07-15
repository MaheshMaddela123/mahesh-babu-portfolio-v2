import "./index.css";

const Skills = () => {
  const skills = {
    "Programming Languages": [
      "JavaScript (ES6+)",
      "Python",
    ],
    Frontend: [
      "React.js",
      "React Hooks",
      "React Router",
      "Context API",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "Responsive Design",
    ],
    "Databases": [
      "SQLite",
    ],
    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Netlify",
      "Vercel",
    ],
  };

  return (
    <div className="skills-page-container">
      <header className="skills-header">
        <h2>Technical Skills</h2>
        <p>
          Technologies and tools I use to build scalable and responsive web
          applications.
        </p>
      </header>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="frontend-skills-wrapper">
          <h3 className="skill-category-title">{category}</h3>
          <ul className="skill-tags large-tags">
            {skillList.map((skill) => (
              <li key={skill} className="skill-tag">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
