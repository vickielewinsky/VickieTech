import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I'm a passionate web developer with a strong foundation in front-end and back-end technologies.
        I'm constantly learning new skills and strive to improve my technical expertise.
      </p>

      <div className="about-list">
        <div className="about-item">
          <h2 className="section-title">Education</h2>
          <p>
            Currently pursuing a diploma in Computer Science at the Technical University of Mombasa.
          </p>
        </div>

        <div className="about-item">
          <h2 className="section-title">Career Focus</h2>
          <p>Aiming to specialize in full-stack development and work on impactful projects.</p>
        </div>

        <div className="about-item">
          <h2 className="section-title">Skills</h2>
          <p>
            Proficient in HTML, CSS, JavaScript, React, and Python. Familiar with Django for backend development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
