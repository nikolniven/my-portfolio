import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nikol</h1>
        <p className={styles.description}>
          After completing a web development bootcamp, my passion for tech
          deepened even further. Problem-solving is my strength, it’s not just a
          skill but a mindset. <br></br>My background, built on years of
          self-sufficiency and hard work, reflects my adaptability and
          determination. I’m always eager to learn and grow, ready to contribute
          effectively in collaborative environments.
          <br></br> Reach out to connect!
        </p>
      </div>
      <img
        src={getImageUrl('hero/Nikol_005-preview-3.jpg')}
        alt="Hero image of me"
        className={styles.heroImg}
      />{' '}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlurContainer}>
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
