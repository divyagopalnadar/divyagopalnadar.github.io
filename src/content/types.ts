export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  /** Short availability line shown above the headline. Omit to hide it. */
  availability?: string;
  headline: string;
  summary: string;
  /** Closing pitch in the contact panel: what roles you want and how to reach you. */
  contactNote: string;
  email: string;
  linkedin: string;
  github: string;
  /** Path or URL to a résumé PDF. Omit to hide the résumé button. */
  resumeUrl?: string;
}

export interface Metric {
  value: string;
  label: string;
}

/** Proprietary work described as a case study; there is no public code. */
export interface CaseStudy {
  id: string;
  org: string;
  title: string;
  summary: string;
  outcome: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  id: string;
  title: string;
  year: number;
  /** Where the work happened, e.g. a course or team. Omit for solo side projects. */
  context?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  image?: { src: string; alt: string };
  links: Link[];
}

export interface Role {
  id: string;
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  date: string;
  detail?: string;
}
