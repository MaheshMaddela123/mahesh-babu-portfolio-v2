import { useState } from "react";
import "./index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been simulated.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page-container">
      <header className="contact-header">
        <h2>Get In Touch</h2>
        <p>Have a question or want to work together? Leave a message!</p>
      </header>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul className="info-list">
            <li>
              <strong>Location:</strong>
              <span>Kadapa, Andhra Pradesh, India</span>
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:maddelamaheshbabu1234@gmail.com">
                maddelamaheshbabu1234@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>
              <a href="tel:+919110305805">+91 9110305805</a>
            </li>
          </ul>

          <div className="social-links">
            <a
              href="https://github.com/MaheshMaddela123"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-babu-maddela/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of your message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
