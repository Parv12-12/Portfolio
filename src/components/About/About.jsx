import React from "react";
import aImage from '../../assets/about/aboutImage.png'
import cursor from '../../assets/about/uiIcon.png'


import styles from "./About.module.css";


const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a dedicated front-end developer with a passion for crafting seamless and engaging digital experiences. My approach combines creativity, problem-solving, and attention to detail, ensuring that every project I work on is both visually appealing and highly functional.
                I thrive in environments where innovation meets collaboration, bringing ideas to life through thoughtful design and efficient solutions. Continuously eager to learn and grow, I am always exploring new technologies and refining my approach to development.
                Currently seeking opportunities to contribute to dynamic teams, take on exciting challenges, and build products that leave a lasting impact. Let’s connect and create something extraordinary!

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About
