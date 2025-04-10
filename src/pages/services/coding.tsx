import React from 'react';
import styles from './Common.module.css'; // Importing common CSS styles
const Coding = () => {
  return (
    <div className={styles.pageContainer}> {/* Apply container style */}
      <h2 className={styles.heading}>Programming & Coding</h2> {/* Changed to h2 */}
      <p className={styles.text}>
        I specialize in software development, focusing primarily on C, C++, and PHP for building applications and solving programming challenges. Below is a summary of my experience:
      </p>

      <h2 className={styles.subHeading}>Programming in C</h2> {/* Changed to h2 */}
      <p className={styles.text}>
        During my studies at the Technical University of Mombasa, I learned programming in <strong>C</strong>. I used <strong>Code::Blocks</strong> as my integrated development environment (IDE) to write and test C programs. Here are the key concepts I learned in C:
      </p>
      <ul className={styles.list}> {/* Fixed class name for the list */}
        <li>Writing algorithms and solving problems with basic programming constructs like loops, conditions, and functions.</li>
        <li>Working with arrays, pointers, structures, and dynamic memory management.</li>
        <li>Developing console-based applications to practice problem-solving techniques and concepts.</li>
      </ul>

      <h2 className={styles.subHeading}>Object-Oriented Programming in C++</h2> {/* Changed to h2 */}
      <p className={styles.text}>
        I also studied <strong>C++</strong>, a language that helped me understand <strong>Object-Oriented Programming (OOP)</strong>. I used <strong>Code::Blocks</strong> for C++ development, and some of the key concepts I worked on include:
      </p>
      <ul className={styles.list}> {/* Fixed class name for the list */}
        <li>Designing class-based structures, defining methods, and understanding the concept of objects.</li>
        <li>Implementing OOP principles like inheritance, polymorphism, and encapsulation.</li>
        <li>Creating data structures such as linked lists, stacks, and queues, which are fundamental to many algorithms.</li>
      </ul>

      <h2 className={styles.subHeading}>Database Management with PHP and MySQL</h2> {/* Changed to h2 */}
      <p className={styles.text}>
        I also gained hands-on experience with <strong>PHP</strong> and <strong>MySQL</strong> to create dynamic web applications. Using <strong>XAMPP</strong> as a local server, I developed database-driven applications like library systems. The key concepts I worked on include:
      </p>
      <ul className={styles.list}> {/* Fixed class name for the list */}
        <li>Using <strong>PHP</strong> to interact with a MySQL database for storing and retrieving data.</li>
        <li>Creating dynamic web pages that can accept and display data from a database, such as forms for entering information.</li>
        <li>Designing databases and using SQL queries to insert, update, and delete records, as well as ensuring data integrity.</li>
        <li>Using <strong>phpMyAdmin</strong> for managing MySQL databases, creating tables, and designing the schema for various applications.</li>
      </ul>

      <h2 className={styles.subHeading}>Application Development Tools</h2> {/* Changed to h2 */}
      <p className={styles.text}>
        Throughout my studies, I worked with version control systems like <strong>Git</strong> to manage source code and collaborate with others. I used various IDEs such as <strong>Code::Blocks</strong> and <strong>Visual Studio Code</strong> to write, debug, and deploy my code.
      </p>

      <h2 className={styles.subHeading}>Conclusion</h2> {/* Changed to h2 */}
      <p className={styles.text}>
        With my solid foundation in C, C++, and PHP, along with experience in working with MySQL for database management, I am well-equipped to build efficient applications and contribute to software development projects. I continue to enhance my skills and seek out new challenges to grow as a developer.
      </p>
    </div>
  );
};

export default Coding;
