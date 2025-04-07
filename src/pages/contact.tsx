// src/components/Contact.tsx
const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-intro">
        I would love to hear from you! Feel free to reach out for collaboration, inquiries, or just to say hello.
      </p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul className="contact-list">
          <li className="contact-item">
            <strong>Phone:</strong> +254 799 692055
          </li>
          <li className="contact-item">
            <strong>Email:</strong>{" "}
            <a href="mailto:lewinskyvictoria45@gmail.com" className="contact-link">
              lewinskyvictoria45@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vickie-lewinsky-038474291"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              www.linkedin.com/in/vickie-lewinsky-038474291
            </a>
          </li>
          <li className="contact-item">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/vickielewinsky/VickieTech"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              https://github.com/vickielewinsky/VickieTech
            </a>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <h2>Social Media</h2>
        <p>Feel free to connect with me through my online profiles:</p>
        <ul className="contact-list">
          <li className="contact-item">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vickie-lewinsky-038474291"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Vickie Lewinsky
            </a>
          </li>
          <li className="contact-item">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/vickielewinsky"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              VickieTech
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
