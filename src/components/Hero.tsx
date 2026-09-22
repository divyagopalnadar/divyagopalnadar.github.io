import type { Metric, Profile } from '../content/types';
import { Icon } from './Icon';
import styles from './Hero.module.css';

interface HeroProps {
  profile: Profile;
  metrics: Metric[];
}

export function Hero({ profile, metrics }: HeroProps) {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        {profile.availability && (
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.availability} · {profile.location}
          </p>
        )}

        <h1 id="hero-heading" className={styles.title}>
          <span className={styles.name}>
            {profile.name}, {profile.role}
          </span>
          {profile.headline}
        </h1>

        <p className={styles.summary}>{profile.summary}</p>

        <div className={styles.actions}>
          <a className={`${styles.button} ${styles.primary}`} href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            Get in touch
          </a>
          <a className={styles.button} href="#work">
            See my work
          </a>
          {profile.resumeUrl && (
            <a className={styles.button} href={profile.resumeUrl} download>
              <Icon name="download" />
              Résumé
            </a>
          )}
          <span className={styles.social}>
            <a className={styles.iconLink} href={profile.github} aria-label="GitHub profile">
              <Icon name="github" size={20} />
            </a>
            <a className={styles.iconLink} href={profile.linkedin} aria-label="LinkedIn profile">
              <Icon name="linkedin" size={18} />
            </a>
          </span>
        </div>

        <dl className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <dt className={styles.metricLabel}>{metric.label}</dt>
              <dd className={styles.metricValue}>{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
