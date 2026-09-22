import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Section } from './components/Section';
import { SiteHeader } from './components/SiteHeader';
import { Skills } from './components/Skills';
import {
  caseStudies,
  certifications,
  education,
  experience,
  metrics,
  profile,
  projects,
  skills,
} from './content/profile';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader name={profile.name} theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero profile={profile} metrics={metrics} />

        <Section
          id="work"
          eyebrow="01 / Selected work"
          title="Products I’ve shipped at scale"
          intro="Proprietary work, so no source links, but these are the systems I designed and delivered and what they changed for the business."
        >
          <CaseStudies items={caseStudies} />
        </Section>

        <Section
          id="projects"
          eyebrow="02 / Projects"
          title="Recent builds, from ML models to storefronts"
          intro="Graduate coursework and side projects where I work end to end, from training and evaluating models to shipping the interface."
        >
          <Projects items={projects} />
        </Section>

        <Section id="experience" eyebrow="03 / Experience" title="Ten years, three companies">
          <Experience roles={experience} />
        </Section>

        <Section id="skills" eyebrow="04 / Toolkit" title="Skills and education">
          <Skills groups={skills} education={education} certifications={certifications} />
        </Section>
      </main>

      <Contact profile={profile} />
    </>
  );
}
