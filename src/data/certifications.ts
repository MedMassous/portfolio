export interface Certification {
  id: string;
  code: string;
  name: string;
  issuer: string;
  scope: string;
  plain: string; // plain-language explanation for non-technical readers
  /**
   * Official verification link (Red Hat Certification Verification / AWS Credly badge, etc.).
   * Public Credly verification URL. Leave empty if none exists: it is never invented.
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
    scope: 'RHEL 9 administration',
    plain:
      'Hands-on certification validating the ability to install, configure and manage Red Hat Enterprise Linux systems.',
    verifyUrl: 'https://www.credly.com/badges/07623716-ce8c-4b42-b3d8-b7ddaf61db20',
    infoUrl: 'https://www.redhat.com/en/services/certification/rhcsa',
  },
  {
    id: 'rhce',
    code: 'RHCE',
    name: 'Red Hat Certified Engineer',
    issuer: 'Red Hat',
    scope: 'Ansible automation',
    plain:
      'Hands-on certification validating the ability to automate Linux system administration using Ansible.',
    verifyUrl: 'https://www.credly.com/badges/2a290e1d-6aa2-44cc-8a69-985816845055',
    infoUrl: 'https://www.redhat.com/en/services/certification/rhce',
  },
  {
    id: 'clf-c02',
    code: 'CLF-C02',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    scope: 'AWS Cloud fundamentals',
    plain:
      'Foundational certification covering AWS Cloud concepts, core services, security, architecture and pricing.',
    verifyUrl: 'https://www.credly.com/badges/88efa5dd-6c7c-4c06-9e72-798bbf46a98c',
    infoUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
];
