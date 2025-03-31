import React from 'react';

import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = (props) => {
  const project = props.project;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Demo
          </a>
        )}
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Source
        </a>
      </div>
    </div>
  );
};
