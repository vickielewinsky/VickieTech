import React from 'react';
import styles from './Common.module.css'; // In every component like Coding, WebDevelopment, etc.

const WebDevelopment = () => {
  return (
    <div className={styles.pageContainer}> {/* Apply container style */}
      <h2 className={styles.heading}>Web Development</h2> {/* Changed to h2 */}
      <p className={styles.text}>
        I have gained extensive experience in web development, both during my studies at the Technical University of Mombasa and through practical work at Swahilipot Hub. Below is an overview of my expertise in creating modern, responsive websites and applications using a variety of technologies.
      </p>

      <h2 className={styles.subHeading}>University Experience: HTML, CSS, and JavaScript</h2>
      <p className={styles.text}>
        During my studies, I was introduced to the foundational technologies for web development:
      </p>
      <ul className={styles.text}>
        <li><strong>HTML:</strong> I learned how to structure web pages, using semantic tags to ensure accessibility and SEO optimization.</li>
        <li><strong>CSS:</strong> I mastered styling techniques, from basic layouts to more advanced concepts like Flexbox and CSS Grid. I also worked on making websites responsive to different screen sizes using media queries.</li>
        <li><strong>JavaScript:</strong> I gained hands-on experience in client-side scripting with JavaScript. I learned how to manipulate the DOM, handle user events, and make web pages interactive.</li>
      </ul>

      <h2 className={styles.subHeading}>Swahilipot Hub: Advanced Web Technologies</h2>
      <p className={styles.text}>
        At Swahilipot Hub, I expanded my skill set and worked with more advanced tools and frameworks for building dynamic web applications. This includes:
      </p>
      <ul className={styles.text}>
        <li><strong>Strapi:</strong> I learned how to use Strapi, a headless CMS, to create and manage APIs. This allowed me to efficiently build backend systems that interact seamlessly with front-end frameworks.</li>
        <li><strong>TypeScript:</strong> I used TypeScript to enhance the quality and maintainability of the code, adding strong typing to my JavaScript applications, which improved error detection and made my code more robust.</li>
        <li><strong>Bootstrap:</strong> I leveraged Bootstrap to quickly build responsive and user-friendly interfaces. With its pre-built grid system and component library, I was able to focus on the design and user experience.</li>
        <li><strong>Next.js:</strong> I used Next.js for building server-side rendered (SSR) React applications, providing fast performance and better SEO by pre-rendering pages. I gained experience with routing, dynamic content loading, and API routes in Next.js.</li>
        <li><strong>Vite:</strong> I worked with Vite for its fast development environment, taking advantage of its hot module replacement (HMR) to speed up the front-end development process.</li>
        <li><strong>Git & GitHub:</strong> I am proficient in using Git for version control, managing code repositories, branching, and collaborating with others. I used GitHub to host repositories, manage pull requests, and handle continuous integration/deployment (CI/CD) workflows.</li>
      </ul>

      <h2 className={styles.subHeading}>Conclusion</h2>
      <p className={styles.text}>
        My web development journey has been a blend of strong foundational knowledge from university and advanced practical experience at Swahilipot. From building static websites with HTML, CSS, and JavaScript, to creating dynamic web applications using modern frameworks and tools like Strapi, Next.js, and Vite, I have developed the skills to create efficient, responsive, and scalable web solutions.
      </p>
    </div>
  );
};

export default WebDevelopment;
