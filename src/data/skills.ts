
export interface SkillModule {
  id: string;
  number: string;
  name: string;
  icon: 'terminal' | 'workflow' | 'cloud' | 'container' | 'network';
  items: string[];
  plain: string;
}

export const skillModules: SkillModule[] = [
  {
    id: 'linux',
    number: '01',
    name: 'LINUX ADMINISTRATION',
    icon: 'terminal',
    items: [
      'RHEL 9',
      'systemd',
      'SELinux',
      'SSH',
      'LVM',
      'File Permissions',
      'Package Management',
    ],
    plain:
      'Installing, configuring, securing and troubleshooting Linux servers.',
  },
  {
    id: 'automation',
    number: '02',
    name: 'AUTOMATION',
    icon: 'workflow',
    items: [
      'Ansible',
      'Playbooks',
      'Roles',
      'Inventories',
      'YAML',
      'Variables',
      'Handlers',
    ],
    plain:
      'Automating repetitive system administration tasks through reusable and maintainable Ansible configurations.',
  },
  {
    id: 'cloud',
    number: '03',
    name: 'AWS CLOUD',
    icon: 'cloud',
    items: [
      'AWS',
      'EC2',
      'S3',
      'IAM',
      'VPC',
      'DynamoDB',
      'Lambda',
      'API Gateway',
    ],
    plain:
      'Understanding AWS infrastructure, core cloud services, access management and serverless architectures.',
  },
  {
    id: 'containers',
    number: '04',
    name: 'CONTAINERS',
    icon: 'container',
    items: [
      'Docker',
      'Docker Compose',
      'Container Images',
      'Volumes',
      'Networking',
    ],
    plain:
      'Building and managing containerized environments for consistent application deployment and development.',
  },
  {
    id: 'networking',
    number: '05',
    name: 'NETWORKING',
    icon: 'network',
    items: [
      'TCP/IP',
      'DNS',
      'Subnetting',
      'Firewalls',
      'HTTP/HTTPS',
      'SSH',
    ],
    plain:
      'Understanding network communication, name resolution, connectivity and traffic control for infrastructure troubleshooting.',
  },
];
