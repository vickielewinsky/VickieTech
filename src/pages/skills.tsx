/* src/pages/skills.tsx */
const Skills = () => {
  return (
    <div className="skills-page">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-intro">
        I possess a diverse range of technical skills, focused on web design, development, and database management. I am continually learning to grow into a well-rounded developer. Here are my key skills:
      </p>

      <div className="skills-list">
        <div className="skills-item">
          <h2>Web Design & Development</h2>
          <p>
            Proficient in designing and developing websites using HTML, CSS, JavaScript, and React. Experience with Bootstrap for responsive design and TailwindCSS for custom styling.
          </p>
        </div>

        <div className="skills-item reverse">
          <h2>Database Management</h2>
          <p>
            Skilled in creating and managing MySQL databases. I design structures, perform queries, and ensure data integrity for apps.
          </p>
        </div>

        <div className="skills-item">
          <h2>Programming & Coding</h2>
          <p>
            Strong foundation in JavaScript, TypeScript, and Python. Experience with Django for backend development and full-stack projects.
          </p>
        </div>

        <div className="skills-item reverse">
          <h2>Troubleshooting & Solutions Deployment</h2>
          <p>
            Skilled at debugging code, solving problems, and deploying solutions using Git, GitHub, and various platforms.
          </p>
        </div>

        <div className="skills-item">
          <h2>Version Control</h2>
          <p>
            Experienced with Git and GitHub for managing code repositories, collaborating with teams, and maintaining code integrity.
          </p>
        </div>

        <div className="skills-item reverse">
          <h2>Other Skills</h2>
          <ul>
            <li>Time management, meeting deadlines</li>
            <li>Fluent in English and Kiswahili (written and spoken)</li>
            <li>Collaboration and teamwork in dynamic environments</li>
          </ul>
        </div>

        {/* Swahilipot Hub Section */}
        <div className="skills-item">
          <h2>Swahilipot Hub Foundation</h2>
          <p>
            I gained hands-on experience in tech projects. I practiced frontend and backend development.
          </p>
          <p>
            I improved my Git and GitHub skills. I also learned how to work in a team and meet deadlines.
          </p>
          <p>
            My communication got better through daily interactions and group work.
          </p>
          <p>
            I sincerely thank Swahilipot Hub Foundation for providing a supportive environment that helped me grow and sharpen my technical and interpersonal skills.
          </p>
          <img src="/image.png" alt="Swahilipot Hub Proof" className="skills-proof-img" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
