import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import { NAV_ITEMS } from './content/navigation';
import { profile, projects } from './content/profile';
import { THEME_STORAGE_KEY } from './hooks/useTheme';

describe('<App />', () => {
  it('renders a single h1 with the headline', () => {
    render(<App />);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(profile.headline);
  });

  it('has a landmark for every primary nav target', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    for (const item of NAV_ITEMS) {
      const link = within(nav).getByRole('link', { name: item.label });
      expect(link).toHaveAttribute('href', `#${item.id}`);
      expect(document.getElementById(item.id)).not.toBeNull();
    }
  });

  it('renders every project with its outbound links', () => {
    render(<App />);
    for (const project of projects) {
      const card = screen.getByRole('article', { name: project.title });
      for (const link of project.links) {
        const anchor = within(card).getByRole('link', { name: new RegExp(link.label) });
        expect(anchor).toHaveAttribute('href', link.href);
        expect(anchor).toHaveAttribute('rel', 'noreferrer');
      }
    }
  });

  it('offers email as the primary call to action', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute(
      'href',
      `mailto:${profile.email}`,
    );
  });

  it('toggles and persists the theme', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(document.documentElement.dataset.theme).toBe('light');

    await user.click(screen.getByRole('button', { name: /switch to dark theme/i }));

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(screen.getByRole('button', { name: /switch to light theme/i })).toBeInTheDocument();
  });

  it('restores a saved theme on load', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    render(<App />);
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
