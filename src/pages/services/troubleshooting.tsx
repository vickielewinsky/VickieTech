import React from 'react';
import styles from './Common.module.css'; // Importing the common CSS styles

const Troubleshooting = () => {
  return (
    <div className={styles.pageContainer}> {/* Apply container style */}
      <h2 className={styles.heading}>Troubleshooting</h2> {/* Changed to h2 */}
      <p className={styles.text}>
        I specialize in diagnosing and resolving technical issues, from fixing bugs in web apps to improving performance. My experience includes troubleshooting errors on the Swahilipot official website and conducting thorough investigations to fix underlying problems.
      </p>
      <p className={styles.text}>
        I&apos;m proficient in debugging JavaScript, analyzing server-side errors, resolving database issues, and optimizing code. I work with tools like browser developer tools, error logs, and Git to ensure efficient issue resolution.
      </p>
      <p className={styles.text}>
        Whether it&apos;s resolving errors, optimizing performance, or fixing broken features, I have the expertise to ensure your systems run smoothly.
      </p>
    </div>
  );
};

export default Troubleshooting;
