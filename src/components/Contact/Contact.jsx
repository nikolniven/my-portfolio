import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {/* <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a
            href="mailto:ntopalusic@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ntopalusic@gmail.com
          </a>
        </li> */}
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt="LinkedIn icon"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a href="https://www.linkedin.com/in/nikol-topalusic/">
            linkedin.com/nikoltopalusic
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
          <a
            href="https://github.com/nikolniven"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/nikolniven
          </a>
        </li>
      </ul>
    </footer>
  );
};
