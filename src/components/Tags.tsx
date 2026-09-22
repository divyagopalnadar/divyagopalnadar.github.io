import styles from './Tags.module.css';

interface TagsProps {
  items: string[];
  label: string;
}

export function Tags({ items, label }: TagsProps) {
  return (
    <ul role="list" className={styles.tags} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  );
}
