import React from 'react';
import styles from './Common.module.css'; // Importing common CSS styles

const DatabaseManagement = () => {
  return (
    <div className={styles.pageContainer}> {/* Apply the container style */}
      <h2 className={styles.heading}>Database Management</h2> {/* Updated to h2 */}
      <p className={styles.text}>
        I specialize in creating scalable and efficient database solutions using industry-standard tools. Below is a summary of my experience:
      </p>

      <h2 className={styles.subheading}>Using XAMPP and phpMyAdmin</h2>
      <p className={styles.text}>
        During my studies, I gained hands-on experience with <strong>XAMPP</strong> and <strong>phpMyAdmin</strong> for local web development and managing MySQL databases.
      </p>
      <ul className={styles.list}>
        <li><strong>XAMPP</strong>: Local server for running PHP-based applications.</li>
        <li><strong>phpMyAdmin</strong>: Tool for managing MySQL databases, creating tables, and performing CRUD operations.</li>
      </ul>

      <h2 className={styles.subheading}>Building Database-Driven Applications</h2>
      <p className={styles.text}>
        One of my major projects was developing a <strong>library management system</strong>, where I implemented a relational database using MySQL.
      </p>
      <ul className={styles.list}>
        <li>Designed a database with tables like books, patrons, and loans.</li>
        <li>Developed PHP forms to interact with the database for adding, updating, and deleting records.</li>
        <li>Used MySQL queries for data retrieval, such as searching books and generating overdue reports.</li>
      </ul>

      <h2 className={styles.subheading}>MySQL Database Management</h2>
      <p className={styles.text}>
        I have proficiency in <strong>MySQL</strong>, an open-source relational database system. Below are some of the key skills I developed:
      </p>
      <ul className={styles.list}>
        <li>Created normalized schemas to reduce redundancy and improve integrity.</li>
        <li>Implemented primary and foreign key relationships to maintain referential integrity.</li>
        <li>Used SQL queries for data manipulation (e.g., SELECT, INSERT, UPDATE, DELETE).</li>
        <li>Optimized queries using indexing and advanced filtering operations like JOIN and GROUP BY.</li>
      </ul>

      <h2 className={styles.subheading}>Hands-On Experience with Form Handling</h2>
      <p className={styles.text}>
        I have practical experience in creating dynamic web forms to interact with databases:
      </p>
      <ul className={styles.list}>
        <li>Form validation to ensure data integrity.</li>
        <li>Handling user input for operations like adding books and updating user details.</li>
        <li>Displaying dynamic data on web pages, such as books in the library or loan statuses.</li>
      </ul>

      <h2 className={styles.subheading}>Database Design & Optimization</h2>
      <p className={styles.text}>
        I focused on designing efficient databases and optimizing queries to enhance performance:
      </p>
      <ul className={styles.list}>
        <li>Designed table schemas with normalization to improve data consistency.</li>
        <li>Optimized queries using indexing and query techniques for faster execution.</li>
        <li>Created stored procedures and triggers to automate tasks like overdue reminders.</li>
      </ul>

      <h2 className={styles.subheading}>Conclusion</h2>
      <p className={styles.text}>
        With my experience in <strong>XAMPP</strong>, <strong>phpMyAdmin</strong>, and <strong>MySQL</strong>, I can build, manage, and optimize relational databases for web applications, ensuring performance, integrity, and scalability.
      </p>
    </div>
  );
};

export default DatabaseManagement;
