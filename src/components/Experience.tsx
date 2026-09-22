import type { Role } from '../content/types';
import styles from './Experience.module.css';

export function Experience({ roles }: { roles: Role[] }) {
  return (
    <ol role="list" className={styles.timeline}>
      {roles.map((role) => (
        <li key={role.id} className={styles.role}>
          <p className={styles.dates}>
            {role.start} – {role.end}
          </p>
          <div>
            <h3 className={styles.title}>
              {role.title} <span className={styles.company}>· {role.company}</span>
            </h3>
            <p className={styles.location}>{role.location}</p>
            <ul className={styles.highlights}>
              {role.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
