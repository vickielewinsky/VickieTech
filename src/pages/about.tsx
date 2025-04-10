import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I'm a passionate web developer with a strong foundation in front-end and back-end technologies. 
        I'm constantly learning new skills and strive to improve my technical expertise. I believe in the power of 
        technology to solve real-world problems and am excited to be part of this ever-evolving field.
      </p>

      <div className="about-list">
        <div className="about-item">
          <h2 className="section-title">Education</h2>
          <p>
            Currently pursuing a diploma in Computer Science at the Technical University of Mombasa. I have gained 
            a solid understanding of algorithms, data structures, and programming languages, preparing me for real-world 
            development challenges.
          </p>
        </div>

        <div className="about-item">
          <h2 className="section-title">Career Focus</h2>
          <p>
            Aiming to specialize in full-stack development, with a strong interest in building scalable and performant 
            web applications. My goal is to work on projects that have a positive impact on society and help businesses 
            achieve their objectives through effective software solutions.
          </p>
        </div>

        <div className="about-item">
          <h2 className="section-title">Skills</h2>
          <p>
            Proficient in HTML, CSS, JavaScript, React, and Python. Familiar with Django for backend development, and 
            have hands-on experience with tools like Git, VS Code, and deployment platforms such as Heroku and Netlify.
            Always eager to learn new technologies and stay updated with industry trends.
          </p>
        </div>

        <div className="about-item">
          <h2 className="section-title">Hobbies & Interests</h2>
          <p>
            Outside of programming, I enjoy reading fiction books, experimenting with new recipes in the kitchen, 
            and attending tech events to network and learn from others. I also love working on personal projects to 
            challenge myself and explore new technologies.
          </p>
        </div>

        <div className="about-item">
          <h2 className="section-title">Core Values</h2>
          <p>
            I value teamwork, integrity, and continuous improvement. I believe in the importance of clear communication 
            and collaboration in achieving great results. In my work, I strive for excellence and always look for ways 
            to grow both professionally and personally.
          </p>
        </div>

        <div className="about-item">
          <h2 className="section-title">Professional Goal</h2>
          <p>
            My ultimate goal is to work in an environment where I can apply my skills to real-world problems, 
            collaborate with diverse teams, and continuously improve as a developer. I hope to contribute to innovative 
            projects that have a positive societal impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
