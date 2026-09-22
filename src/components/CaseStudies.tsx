import type { CaseStudy } from '../content/types';
import { Tags } from './Tags';
import styles from './CaseStudies.module.css';

export function CaseStudies({ items }: { items: CaseStudy[] }) {
  return (
    <ul role="list" className={styles.grid}>
      {items.map((study) => (
        <li key={study.id}>
          <article className={styles.card} aria-labelledby={`${study.id}-title`}>
            <p className={styles.org}>{study.org}</p>
            <h3 id={`${study.id}-title`} className={styles.title}>
              {study.title}
            </h3>
            <p className={styles.summary}>{study.summary}</p>
            <p className={styles.outcome}>{study.outcome}</p>
            <ul className={styles.highlights}>
              {study.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className={styles.footer}>
              <Tags items={study.stack} label={`${study.title} tech stack`} />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
