import './index.css';

const Skills = () => {
    // Focused exclusively on your frontend tech stack
    const frontendSkills = [
        "HTML5", 
        "CSS3", 
        "JavaScript (ES6+)", 
        "React.js", 
        "TailwindCSS", 
        "Bootstrap"
    ];

    return (
        <div className="skills-page-container">
            <header className="skills-header">
                <h2>Frontend Skills</h2>
                <p>My core expertise in building responsive, accessible, and interactive user interfaces.</p>
            </header>

            <div className="frontend-skills-wrapper">
                <ul className="skill-tags large-tags">
                    {frontendSkills.map((skill, idx) => (
                        <li key={idx} className="skill-tag">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;