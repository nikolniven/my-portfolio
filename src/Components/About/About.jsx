import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack</h3>
              <p>
                Tenacious full-stack graduate. I’ve always pushed myself to the
                limit, and when I decided to change my path, I went all in,
                constantly learning and mastering new technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Relentless Learner & Problem Solver</h3>
              <p>
                With years of experience in customer-focused roles, I blend
                interpersonal and technical skills to collaborate effectively
                and build user-centered solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
