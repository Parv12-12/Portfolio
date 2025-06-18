import React from "react";
import hero from '../../assets/hero/heroImage.png'
import resume from '../../assets/hero/parv.pdf'


import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Parv,</h1>
        <p className={styles.description}>
          I'm a passionate Front-End Developer eager to build immersive and user-friendly web applications. Reach out if you'd like to learn more!
        </p>
        <div className={styles.heroBtn}>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={resume} download="Parv_Goswami_Resume.pdf" target="_blank" rel="noreferrer" className={styles.contactBtn}>
          Download Resume 
        </a>
        </div>
      </div>
      <img
        src={hero}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero