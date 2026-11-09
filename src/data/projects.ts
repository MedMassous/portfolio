/**
 * Project status is deliberately strict. Never mark something `completed`
 * unless it is finished, and never publish a project until its status is verified.
 */
export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'lab';

export const statusLabels: Record<ProjectStatus, string> = {
  completed: 'COMPLETED',
  'in-progress': 'IN PROGRESS',
  planned: 'PLANNED',
  lab: 'LEARNING LAB',
};

export interface Project {
  slug: string;
  name: string; // shown as the registry record id
  type: string;
  stack: string[];
  status: ProjectStatus;
  /** false = hidden everywhere (home, case study, sitemap) until the owner verifies the facts. */
  published: boolean;
  /** One plain-language sentence a non-technical recruiter can understand. */
  summary: string;
  /** Plain-language paragraphs for the case-study page. */
  overview: string[];
  goals: string[];
  /** Real repository / demo links only. Leave undefined if none exist yet. */
  repoUrl?: string;
  demoUrl?: string;
  /** Free text shown in the record's "NOTES" row. */
  note?: string;
}

export const projects: Project[] = [
  {
    slug: 'cloudops-manager',
    name: 'CLOUDOPS-MANAGER',
    type: 'INFRASTRUCTURE MANAGEMENT',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    status: 'in-progress',
    published: true,
    summary:
      'A web application for managing cloud infrastructure, currently under development.',
    overview: [
      'CloudOps-Manager is a web application that is being built to help manage cloud infrastructure from a single interface.',
      'It combines a Next.js front end, a NestJS API, a PostgreSQL database and Docker containers, and is an opportunity to practise full-stack development alongside infrastructure thinking.',
    ],
    goals: [
      'Practise designing and containerising a multi-service application.',
      'Model infrastructure data in a relational database.',
      'Apply operations thinking (configuration, deployment, observability) to a real application.',
    ],
    repoUrl: 'https://github.com/MedMassous/cloudops-manager',
    note: 'Work in progress. Scope and features are still evolving.',
  },
  {
    slug: 'ansible-linux-automation',
    name: 'ANSIBLE-LINUX-AUTOMATION',
    type: 'CONFIGURATION MANAGEMENT',
    stack: ['RHEL 9', 'Ansible'],
    status: 'planned',
    published: true,
    summary:
      'A planned project to automate the setup and hardening of Linux servers with Ansible.',
    overview: [
      'This project has not started yet. It is planned as a hands-on way to apply Ansible to Red Hat Enterprise Linux 9 administration.',
      'The idea is to turn repeatable server configuration tasks into version-controlled playbooks and roles.',
    ],
    goals: [
      'Automate baseline configuration of RHEL 9 servers.',
      'Structure automation with reusable roles.',
      'Keep everything in Git so changes are reviewable and repeatable.',
    ],
    note: 'Planned. No code has been published yet.',
  },
  {
    slug: 'doura',
    name: 'DOURA',
    type: 'AWS APPLICATION',
    stack: ['AWS', 'DynamoDB', 'REST API'],
    status: 'in-progress',
    published: true,
    summary:
      'A serverless platform that lets citizens take a ticket remotely for public services instead of queuing in person.',
    overview: [
      'Doura is a smart virtual queue platform for public services, aimed at Tunisian public offices where people can spend hours in physical queues without knowing how long they will wait.',
      'Instead of waiting on site, citizens take a ticket remotely, follow their position and estimated wait time, and are notified when their turn comes. It is built as a serverless cloud application on AWS, using DynamoDB for data and a REST API.',
    ],
    goals: [
      'Design a serverless architecture on AWS (Lambda, DynamoDB, REST API).',
      'Model a real-world public-service problem: queues, tickets and wait-time estimates.',
      'Practise infrastructure as code and testing on a cloud application.',
    ],
    repoUrl: 'https://github.com/Houssemchabbeh/Doura-Smart-Virtual-Queue-Platform-for-Public-Services',
    note: 'Work in progress. Scope and features are still evolving.',
  },
];

export const publishedProjects = projects.filter((p) => p.published);

export const allStackTags = Array.from(
  new Set(publishedProjects.flatMap((p) => p.stack)),
).sort((a, b) => a.localeCompare(b));
