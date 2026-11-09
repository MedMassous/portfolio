/**
 * Conceptual map of how the technologies relate. These are NOT live servers.
 * Descriptions only claim what is factual: certifications held and projects listed.
 */
export interface TopologyNode {
  id: string;
  label: string;
  sub: string;
  x: number; // position in a 800x420 viewBox
  y: number;
  description: string;
  related?: { label: string; href: string }[];
}

export interface TopologyEdge {
  from: string;
  to: string;
  label: string;
}

export const topologyNodes: TopologyNode[] = [
  {
    id: 'linux',
    label: 'Linux / RHEL',
    sub: 'foundation',
    x: 400,
    y: 330,
    description:
      'The foundation. Certified as a Red Hat Certified System Administrator (RHCSA) on RHEL 9: services with systemd, access control with SELinux, remote access with SSH.',
  },
  {
    id: 'ansible',
    label: 'Ansible',
    sub: 'automation',
    x: 150,
    y: 200,
    description:
      'Automation on top of Linux. Certified as a Red Hat Certified Engineer (RHCE) for Ansible automation. A planned project will turn RHEL 9 configuration into playbooks and roles.',
    related: [{ label: 'ansible-linux-automation (planned)', href: '/projects/ansible-linux-automation/' }],
  },
  {
    id: 'aws',
    label: 'AWS',
    sub: 'cloud',
    x: 650,
    y: 200,
    description:
      'Cloud platform. Holds the AWS Certified Cloud Practitioner (CLF-C02). Learning and practising core services such as EC2, S3, IAM and VPC.',
  },
  {
    id: 'docker',
    label: 'Docker',
    sub: 'containers',
    x: 400,
    y: 90,
    description:
      'Packaging applications into containers with Docker and Docker Compose. Used in the CloudOps-Manager project, which is currently in progress.',
    related: [{ label: 'cloudops-manager (in progress)', href: '/projects/cloudops-manager/' }],
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    sub: 'troubleshooting',
    x: 690,
    y: 360,
    description:
      'Knowing what a system is doing and why it fails: reading logs, checking services and narrowing down the cause. This is the troubleshooting mindset behind every other node.',
  },
];

export const topologyEdges: TopologyEdge[] = [
  { from: 'linux', to: 'ansible', label: 'automated by' },
  { from: 'linux', to: 'docker', label: 'runs' },
  { from: 'docker', to: 'aws', label: 'deployed on' },
  { from: 'ansible', to: 'aws', label: 'provisions' },
  { from: 'linux', to: 'monitoring', label: 'observed by' },
  { from: 'aws', to: 'monitoring', label: 'observed by' },
];
