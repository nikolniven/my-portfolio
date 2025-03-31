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
                Tenacious full-stack graduate. Intensive bootcamp training honed
                not only my coding skills but also my resilience, structured
                problem-solving, and ability to prioritize under pressure.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs, learning by doing is what energies me.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Relentless Learner & Problem Solver</h3>
              <p>
                With a customer-focused background, I bridge the gap between
                technical expertise and effective communication. I craft
                user-centered solutions and perform effectively in collaborative
                environments.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
