import React from "react";
import email from '../../assets/contact/emailIcon.png'
import linkedin from '../../assets/contact/linkedinIcon.png'
import github from '../../assets/contact/githubIcon.png'
import styles from "./Contact.module.css";

 const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:parvgoswami833@gmail.com" target="_blank">parvgoswami833@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/parv-goswami-1aa156234/" target="_blank">linkedin.com/parv-goswami</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/Parv12-12" target="_blank">github.com/Parv</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact