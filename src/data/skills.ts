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
    name: 'LINUX',
    icon: 'terminal',
    items: ['RHEL 9', 'systemd', 'SELinux', 'SSH'],
    plain: 'Setting up, securing and maintaining Linux servers.',
  },
  {
    id: 'automation',
    number: '02',
    name: 'AUTOMATION',
    icon: 'workflow',
    items: ['Ansible', 'Playbooks', 'Roles'],
    plain: 'Replacing repetitive manual server work with repeatable code.',
  },
  {
    id: 'cloud',
    number: '03',
    name: 'CLOUD',
    icon: 'cloud',
    items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC'],
    plain: 'Running and securing workloads on Amazon Web Services.',
  },
  {
    id: 'containers',
    number: '04',
    name: 'CONTAINERS',
    icon: 'container',
    items: ['Docker', 'Docker Compose'],
    plain: 'Packaging applications so they run the same everywhere.',
  },
  {
    id: 'networking',
    number: '05',
    name: 'NETWORKING',
    icon: 'network',
    items: ['TCP/IP', 'DNS', 'Firewalls'],
    plain: 'Understanding how systems find and talk to each other, and how to control that traffic.',
  },
];
