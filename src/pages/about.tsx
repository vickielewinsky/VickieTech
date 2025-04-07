/* src/pages/about.tsx */
const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I'm a passionate web developer with a strong foundation in front-end and back-end technologies. I'm constantly learning new skills and strive to improve my technical expertise.
      </p>

      <div className="about-list">
        <div className="about-item">
          <h2>Education</h2>
          <p>
            Currently pursuing a diploma in Computer Science at the Technical University of Mombasa, where I have gained practical experience in web development, programming, and database management.
          </p>
        </div>

        <div className="about-item reverse">
          <h2>Career Focus</h2>
          <p>
            Aiming to specialize in full-stack development and gain experience in both front-end and back-end technologies, working on challenging and impactful projects.
          </p>
        </div>

        <div className="about-item">
          <h2>Skills</h2>
          <p>
            Proficient in HTML, CSS, JavaScript, React, and Python. Familiar with Django for backend development and databases like MySQL and PostgreSQL.
          </p>
        </div>

        <div className="about-item reverse">
          <h2>Hobbies</h2>
          <p>
            Outside of tech, I enjoy reading fiction, experimenting with cooking new recipes, and participating in computer science-related educational events.
          </p>
        </div>

        <div className="about-item">
          <h2>Goals</h2>
          <p>
            I aim to work in a dynamic, fast-paced environment where I can apply my skills to real-world challenges while continuously improving as a developer.
          </p>
        </div>

        <div className="about-item reverse">
          <h2>Contact</h2>
          <ul>
            <li>Email: lewinskyvictoria45@gmail.com</li>
            <li>Phone: +254799692055</li>
            <li>LinkedIn: linkedin.com/in/vickielewinsky</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
