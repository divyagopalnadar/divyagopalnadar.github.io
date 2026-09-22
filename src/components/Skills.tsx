import type { Education, SkillGroup } from '../content/types';
import { Tags } from './Tags';
import styles from './Skills.module.css';

interface SkillsProps {
  groups: SkillGroup[];
  education: Education[];
  certifications: string[];
}

export function Skills({ groups, education, certifications }: SkillsProps) {
  return (
    <div className={styles.layout}>
      <dl className={styles.groups}>
        {groups.map((group) => (
          <div key={group.label} className={styles.group}>
            <dt className={styles.label}>{group.label}</dt>
            <dd>
              <Tags items={group.items} label={group.label} />
            </dd>
          </div>
        ))}
      </dl>

      <aside className={styles.aside} aria-label="Education and certifications">
        <h3 className={styles.asideTitle}>Education</h3>
        <ul role="list" className={styles.entries}>
          {education.map((entry) => (
            <li key={entry.school}>
              <p className={styles.degree}>{entry.degree}</p>
              <p className={styles.meta}>
                {entry.school} · {entry.date}
              </p>
              {entry.detail && <p className={styles.detail}>{entry.detail}</p>}
            </li>
          ))}
        </ul>

        <h3 className={styles.asideTitle}>Certifications &amp; awards</h3>
        <ul role="list" className={styles.entries}>
          {certifications.map((cert) => (
            <li key={cert} className={styles.meta}>
              {cert}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
