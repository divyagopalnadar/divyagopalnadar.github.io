import { NAV_ITEMS } from '../content/navigation';
import type { Theme } from '../hooks/useTheme';
import { Icon } from './Icon';
import styles from './SiteHeader.module.css';

interface SiteHeaderProps {
  name: string;
  theme: Theme;
  onToggleTheme: () => void;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function SiteHeader({ name, theme, onToggleTheme }: SiteHeaderProps) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            {initials(name)}
          </span>
          <span>{name}</span>
        </a>

        <nav aria-label="Primary" className={styles.nav}>
          <ul role="list" className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label={`Switch to ${nextTheme} theme`}
          title={`Switch to ${nextTheme} theme`}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
      </div>
    </header>
  );
}
