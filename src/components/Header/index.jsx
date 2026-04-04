import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <h4>
          <Link to="/" className="logo">
            Maddela Mahesh Babu
          </Link>
        </h4>
      </div>

      {/* Hamburger Icon (Only visible on mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Navigation Links */}
      <div>
        {/* Dynamically add the 'active' class if the menu is open */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/resume" className="links" onClick={closeMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/skills" className="links" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="links" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
