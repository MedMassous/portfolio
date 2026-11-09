/**
 * Single source of truth for personal details.
 * Anything marked TODO is NOT known to the site author and must be filled in
 * before publishing. `npm run build` prints a warning for every TODO left.
 */
export const profile = {
  name: 'Mohamed Massous',
  slug: 'mohamed-massous',
  title: 'Cloud Infrastructure Management Engineering Student',
  tagline:
    'Building, automating and troubleshooting the infrastructure behind modern systems.',
  status: 'OPEN TO INTERNSHIP',
  school: 'TEK-UP University',
  country: 'Tunisia',
  studies: 'IT Engineering Student',

  // TODO: replace with your public contact details.
  email: 'TODO-your-email@example.com',
  github: 'https://github.com/TODO-your-github-username',
  linkedin: 'https://www.linkedin.com/in/TODO-your-linkedin-handle',

  // TODO: place your CV at public/cv/Mohamed-Massous-CV.pdf (or change this path).
  cvPath: '/cv/Mohamed-Massous-CV.pdf',

  siteUrl: 'https://mohamed-massous.pages.dev',
  description:
    'Portfolio of Mohamed Massous, a Cloud Infrastructure Management Engineering student at TEK-UP University (Tunisia) focused on Linux administration, infrastructure automation, AWS and troubleshooting. RHCSA, RHCE and AWS Certified Cloud Practitioner.',
} as const;

export const focusAreas = [
  'Linux Administration',
  'Infrastructure Automation',
  'AWS Cloud',
  'Troubleshooting',
] as const;

export const careerTargets = [
  'Cloud Support Engineer',
  'Junior Cloud Engineer',
  'Junior DevOps Engineer',
] as const;
