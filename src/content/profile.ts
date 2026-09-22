/**
 * All site copy lives here so content changes never touch component code.
 */
import type {
  CaseStudy,
  Education,
  Metric,
  Profile,
  Project,
  Role,
  SkillGroup,
} from './types';

const GITHUB_USER = 'divyagopalnadar';

export const profile: Profile = {
  name: 'Divya Gopal',
  role: 'Senior Frontend Engineer · AI/ML',
  location: 'San Francisco, CA',
  availability: 'Open to senior frontend and AI/ML engineering roles',
  headline: 'I build data-heavy, AI-powered products that people rely on every day.',
  summary:
    'Ten years of shipping enterprise SaaS, the last four on Fortinet security products. ' +
    'I designed and shipped the frontend of the FortiSIEM data exploration suite, which added more than $2M ' +
    'in revenue, and shipped LLM features to production. I’m finishing an M.S. in Computer Science ' +
    'with a concentration in AI and ML.',
  contactNote:
    'I’m looking for senior frontend and AI/ML engineering roles, especially on LLM products, ' +
    'ML-backed tools and interfaces for complex data. Email is the fastest way to reach me.',
  email: 'divyagopalnadar@gmail.com',
  linkedin: 'https://www.linkedin.com/in/divyagopalnadar',
  github: `https://github.com/${GITHUB_USER}`,
};

export const metrics: Metric[] = [
  { value: '10+', label: 'years building enterprise SaaS' },
  { value: '$2M+', label: 'revenue from the FortiSIEM exploration suite' },
  { value: '90%', label: 'faster privacy request processing at Morae' },
  { value: '~30%', label: 'team delivery velocity gain at Fortinet' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'fortisiem-exploration',
    org: 'Fortinet · FortiSIEM',
    title: 'Data exploration suite',
    summary:
      'Federated Search, ClickHouse-backed query filtering and a SQL Console, so SOC analysts can ' +
      'query and slice very large security datasets from one place.',
    outcome: 'More than $2M in incremental product revenue.',
    highlights: [
      'Designed and shipped the frontend from design through release',
      'Kept large result sets responsive while filtering and paging',
      'Built reusable query and table components that later features adopted',
    ],
    stack: ['Angular', 'TypeScript', 'ClickHouse', 'SQL'],
  },
  {
    id: 'fortiai-assistant',
    org: 'Fortinet · FortiAI',
    title: 'Prompt-driven analyst assistant',
    summary:
      'An in-product assistant for security analysts. Answers from Azure OpenAI-backed services ' +
      'stream into the UI token by token over WebSockets.',
    outcome: 'LLM features shipped to production for SOC teams.',
    highlights: [
      'Streaming response rendering over WebSockets',
      'Redesigned the Parsers module end to end for AI-assisted parser creation',
      'Integrated FortiSOAR playbooks so analysts never leave FortiSIEM',
    ],
    stack: ['Angular', 'Azure OpenAI', 'WebSockets'],
  },
  {
    id: 'morae-dsar',
    org: 'Morae',
    title: 'Privacy-compliance automation platform',
    summary:
      'A platform that automates data subject access requests (DSARs), with self-service onboarding ' +
      'and a workflow view that shows each request’s status from start to finish.',
    outcome: '90% faster processing and about 74% lower operating cost.',
    highlights: [
      'Designed and delivered the platform on the MEAN stack',
      'Workflow visualization cut operational effort by about 70%',
      'Shipped from design to release with QA and DevOps',
    ],
    stack: ['Angular', 'Node.js', 'Express', 'MongoDB'],
  },
];

export const projects: Project[] = [
  {
    id: 'cerop',
    title: 'CEROP Risk Console',
    year: 2026,
    context: 'Team of four · AIT 506 Machine Learning, Westcliff University',
    summary:
      'Cross-Border Enterprise Risk & Operations Predictor. Two separate models, one for a ' +
      'counterparty’s financial distress (6,819 firms, 3.23% bankrupt) and one for an order’s ' +
      'late-delivery risk (171,962 orders), shown side by side in a decision console.',
    highlights: [
      'Designed and built the decision console; every figure links to the notebook cell or report table it came from',
      'Integrated both cleaned layers into one leakage-safe pipeline and tested the GSCPI macro assumption (monthly r = −0.06, not supported)',
      'Calibrated cutoff of 0.39 raised late-delivery recall from 0.63 to 0.85 on the sealed test set',
    ],
    stack: ['Random Forest', 'XGBoost', 'React 19', 'TypeScript', 'SVG charts', 'Vitest'],
    image: {
      src: '/projects/cerop.jpg',
      alt: 'CEROP Risk Console overview comparing the financial layer, 25 of 44 bankrupt firms caught, with the operations layer, 84.9% of late orders caught',
    },
    links: [
      { label: 'Live console', href: 'https://divyagopalnadar.github.io/cerop-console/' },
      { label: 'Source', href: `https://github.com/${GITHUB_USER}/cerop-console` },
    ],
  },
  {
    id: 'aurel-studio',
    title: 'Aurél Studio',
    year: 2026,
    summary:
      'A storefront for a fictional quiet-luxury clothing and accessories label. Pages are ' +
      'server-rendered from a real database, with size and colour selection, a persistent bag ' +
      'and an admin panel over a REST API.',
    highlights: [
      'Server components read from Prisma; admin writes revalidate the prebuilt pages',
      'Image pipeline serves real photos when present and generated placeholders otherwise',
      'Warm light and dark themes on CSS-variable tokens, with hydration-safe theme and cart state',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Prisma', 'sharp'],
    image: {
      src: '/projects/aurel-studio.jpg',
      alt: 'Aurél Studio home page with the headline Quiet pieces, made to be lived in, and a featured wool overcoat',
    },
    links: [
      { label: 'Live demo', href: `https://${GITHUB_USER}.github.io/aurel-studio/` },
      { label: 'Source', href: `https://github.com/${GITHUB_USER}/aurel-studio` },
    ],
  },
  {
    id: 'harvest-lane',
    title: 'Harvest Lane',
    year: 2026,
    context: 'Rebuilt from VitaPure (2020)',
    summary:
      'A fresh-produce and gifting storefront, first built in 2020 with Angular 13, jQuery and ' +
      'Bootstrap, and rebuilt as a standalone, zoneless Angular 22 app with signals.',
    highlights: [
      'Signal-based cart persisted to localStorage, URL-driven search and filters, accessible CDK drawers',
      'Lazy routes and @defer keep the initial bundle near 103 kB; images cut from 15 MB to 0.3 MB of WebP',
      '35 Vitest tests and a Playwright smoke test gate every GitHub Pages deploy',
    ],
    stack: ['Angular 22', 'Signals', 'Signal Forms', 'Angular CDK', 'SCSS', 'Vitest', 'Playwright'],
    image: {
      src: '/projects/harvest-lane.jpg',
      alt: 'Harvest Lane home page with the headline A wide variety of different fruits and a smoothie hero image',
    },
    links: [
      { label: 'Live demo', href: `https://${GITHUB_USER}.github.io/harvest-lane/` },
      { label: 'Source', href: `https://github.com/${GITHUB_USER}/harvest-lane` },
    ],
  },
  {
    id: 'nft-minter',
    title: 'NFT Minter',
    year: 2023,
    summary:
      'A Solana NFT minting dApp that connects browser wallets through the Solana wallet adapter.',
    highlights: ['Wallet connection and transaction flow', 'Chakra UI component layer'],
    stack: ['Next.js', 'TypeScript', 'Solana web3.js', 'Chakra UI'],
    links: [{ label: 'Source', href: `https://github.com/${GITHUB_USER}/nft-minter` }],
  },
];

export const experience: Role[] = [
  {
    id: 'fortinet',
    company: 'Fortinet',
    title: 'Senior Software Developer',
    location: 'Sunnyvale, CA',
    start: 'Nov 2022',
    end: 'Aug 2026',
    highlights: [
      'Designed and shipped FortiSIEM’s data exploration suite, adding more than $2M in revenue.',
      'Shipped FortiAI’s analyst assistant with real-time streaming over WebSockets.',
      'Migrated core modules from AngularJS to Angular during a full product redesign.',
      'Led frontend initiatives and mentored engineers; team velocity rose about 30%.',
    ],
  },
  {
    id: 'morae',
    company: 'Morae',
    title: 'Senior Software Developer',
    location: 'Bangalore, India',
    start: 'Nov 2019',
    end: 'Jun 2022',
    highlights: [
      'Built a DSAR automation platform: 90% faster processing, about 74% lower cost.',
      'Self-service onboarding and workflow views reduced operational effort by about 70%.',
      'Cut time to market by about 20% on enterprise SaaS features.',
    ],
  },
  {
    id: 'wipro',
    company: 'Wipro Technologies',
    title: 'Senior Project Engineer',
    location: 'Bangalore, India',
    start: 'Dec 2014',
    end: 'Nov 2019',
    highlights: [
      'Improved performance about 35% for GE Transportation apps through AWS migrations.',
      'Reduced recurring production incidents about 70% for Shell; mentored 4 engineers.',
      'Delivered responsive interfaces for 25+ Thames Water enterprise applications.',
    ],
  },
];

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS', 'SQL'] },
  {
    label: 'Frontend',
    items: ['Angular', 'React', 'Next.js', 'Material UI', 'Component libraries'],
  },
  { label: 'Data visualization', items: ['Highcharts', 'D3.js', 'Large-dataset rendering'] },
  {
    label: 'AI & ML',
    items: [
      'Azure OpenAI',
      'LLM product UX',
      'Response streaming',
      'Supervised learning',
      'XGBoost',
      'Model evaluation',
    ],
  },
  { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Prisma'] },
  { label: 'Practices', items: ['Unit & E2E testing', 'Code review', 'Mentoring', 'AWS'] },
];

export const education: Education[] = [
  {
    school: 'Westcliff University',
    degree: 'M.S. Computer Science, AI & ML concentration',
    location: 'San Francisco, CA',
    date: 'Expected Dec 2026',
    detail: 'Machine Learning, Deep Learning, NLP, Big Data Analytics, Information Security',
  },
  {
    school: 'SJB Institute of Technology',
    degree: 'B.E. Electrical and Electronics Engineering',
    location: 'Bangalore, India',
    date: 'Jun 2014',
  },
];

export const certifications: string[] = [
  'IBM Certified Application Developer, Cloud Platform V2',
  'CAST Highlight',
  'Star Performer Award, Morae (2021)',
];
