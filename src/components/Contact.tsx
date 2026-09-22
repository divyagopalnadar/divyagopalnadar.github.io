import type { Profile } from '../content/types';
import { Icon } from './Icon';
import styles from './Contact.module.css';

export function Contact({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.panel}>
          <div>
            <h2 id="contact-heading" className={styles.title}>
              Let’s build something people rely on.
            </h2>
            <p className={styles.text}>{profile.contactNote}</p>
          </div>
          <ul role="list" className={styles.channels}>
            <li>
              <a className={styles.channel} href={`mailto:${profile.email}`}>
                <Icon name="mail" />
                {profile.email}
              </a>
            </li>
            <li>
              <a className={styles.channel} href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={16} />
                LinkedIn
              </a>
            </li>
            <li>
              <a className={styles.channel} href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <p className={styles.legal}>
          © {year} {profile.name}. Built with React and TypeScript.
        </p>
      </div>
    </footer>
  );
}
