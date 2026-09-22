import type { Project } from '../content/types';
import { Icon } from './Icon';
import { Tags } from './Tags';
import styles from './Projects.module.css';

export function Projects({ items }: { items: Project[] }) {
  return (
    <ul role="list" className={styles.list}>
      {items.map((project) => (
        <li key={project.id}>
          <article
            className={`${styles.card} ${project.image ? '' : styles.compact}`}
            aria-labelledby={`${project.id}-title`}
          >
            {project.image && (
              <div className={styles.media}>
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className={styles.body}>
              <p className={styles.year}>
                {project.year}
                {project.context && ` · ${project.context}`}
              </p>
              <h3 id={`${project.id}-title`} className={styles.title}>
                {project.title}
              </h3>
              <p className={styles.summary}>{project.summary}</p>
              <ul className={styles.highlights}>
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Tags items={project.stack} label={`${project.title} tech stack`} />
              <div className={styles.links}>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <Icon name="arrowUpRight" size={16} />
                    <span className="visually-hidden">
                      {' '}
                      for {project.title} (opens in a new tab)
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
