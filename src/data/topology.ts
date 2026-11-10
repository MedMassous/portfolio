
/**
 * Conceptual map of how the technologies and skills relate.
 * These are NOT live servers or a deployed infrastructure topology.
 * Descriptions only claim verified certifications, skills and project work.
 */
export interface TopologyNode {
  id: string;
  label: string;
  sub: string;
  x: number;
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
      'The foundation of infrastructure administration. RHCSA-certified on RHEL 9, with knowledge of system services using systemd, access control with SELinux, storage management, permissions and remote administration using SSH.',
  },
  {
    id: 'ansible',
    label: 'Ansible',
    sub: 'automation',
    x: 150,
    y: 200,
    description:
      'Automating Linux administration through reusable playbooks, roles and configuration management. RHCE-certified in Ansible automation, with a planned RHEL 9 automation project.',
    related: [
      {
        label: 'ansible-linux-automation (planned)',
        href: '/projects/ansible-linux-automation/',
      },
    ],
  },
  {
    id: 'aws',
    label: 'AWS',
    sub: 'cloud infrastructure',
    x: 650,
    y: 200,
    description:
      'Cloud fundamentals backed by the AWS Certified Cloud Practitioner (CLF-C02). Familiar with core services including EC2, S3, IAM, VPC and serverless architecture concepts.',
    related: [
      {
        label: 'Doura (in progress)',
        href: '/projects/doura/',
      },
    ],
  },
  {
    id: 'docker',
    label: 'Docker',
    sub: 'containerization',
    x: 400,
    y: 90,
    description:
      'Containerizing applications and managing multi-container development environments using Docker and Docker Compose. Applied in the CloudOps Manager project.',
    related: [
      {
        label: 'cloudops-manager (in progress)',
        href: '/projects/cloudops-manager/',
      },
    ],
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    sub: 'troubleshooting',
    x: 690,
    y: 360,
    description:
      'An infrastructure troubleshooting approach: inspecting system logs, checking service status, identifying connectivity issues and investigating failures across Linux and cloud environments.',
  },
];

export const topologyEdges: TopologyEdge[] = [
  { from: 'linux', to: 'ansible', label: 'automated with' },
  { from: 'linux', to: 'docker', label: 'hosts workloads' },
  { from: 'docker', to: 'aws', label: 'cloud deployment concepts' },
  { from: 'ansible', to: 'linux', label: 'configures' },
  { from: 'linux', to: 'monitoring', label: 'troubleshooting' },
  { from: 'aws', to: 'monitoring', label: 'troubleshooting' },
];
