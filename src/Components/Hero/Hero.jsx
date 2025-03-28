import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nikol</h1>
        <p className={styles.description}>
          After completing a web development bootcamp, I discovered my passion
          for tech. With a background in customer-oriented roles, I bring strong
          communication and teamwork skills. I’m always eager to learn and grow,
          ready to contribute effectively in collaborative environments.
          <br></br> Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ntopalusi@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/Nikol_005-preview-3.jpg')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
