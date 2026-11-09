export interface Certification {
  id: string;
  code: string;
  name: string;
  issuer: string;
  scope: string;
  plain: string; // plain-language explanation for non-technical readers
  /**
   * Official verification link (Red Hat Certification Verification / AWS Credly badge, etc.).
   * TODO: paste the real public verification URL. Left empty on purpose: it is never invented.
   */
  verifyUrl: string;
  /** Official public page describing the certification itself (safe, not a personal credential). */
  infoUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 'rhcsa',
    code: 'RHCSA',
    name: 'Red Hat Certified System Administrator',
    issuer: 'Red Hat',
    scope: 'RHEL 9',
    plain:
      'Hands-on exam proving the ability to install, configure and administer Red Hat Enterprise Linux servers.',
    verifyUrl: '',
    infoUrl: 'https://www.redhat.com/en/services/certification/rhcsa',
  },
  {
    id: 'rhce',
    code: 'RHCE',
    name: 'Red Hat Certified Engineer',
    issuer: 'Red Hat',
    scope: 'Ansible automation',
    plain:
      'Hands-on exam proving the ability to automate Linux administration at scale using Ansible.',
    verifyUrl: '',
    infoUrl: 'https://www.redhat.com/en/services/certification/rhce',
  },
  {
    id: 'clf-c02',
    code: 'CLF-C02',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    scope: 'AWS Cloud fundamentals',
    plain:
      'Foundational AWS certification covering cloud concepts, core services, security, and pricing.',
    verifyUrl: '',
    infoUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
];
