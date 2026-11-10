
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
  name: string;
  type: string;
  stack: string[];
  status: ProjectStatus;

  /** false = hidden everywhere until the owner verifies the facts. */
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

    stack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Docker',
    ],

    status: 'in-progress',
    published: true,

    summary:
      'A centralized web application for managing infrastructure resources through a dashboard, REST API and role-based access.',

    overview: [
      'CloudOps Manager is a web application designed to centralize the management of infrastructure resources through a single interface.',

      'The project uses Next.js and TypeScript for the frontend, NestJS for the backend API, PostgreSQL for data storage and Docker Compose for containerized development.',

      'The application is currently under development, with frontend functionality, backend integration and deployment still being worked on.',
    ],

    goals: [
      'Design and build a centralized interface for infrastructure resource management.',
      'Understand multi-service application architecture and containerization with Docker.',
      'Implement API integration, database management and role-based access control.',
      'Explore deployment and operational practices for cloud-hosted applications.',
    ],

    repoUrl: 'https://github.com/MedMassous/cloudops-manager',

    note:
      'Work in progress. Features, backend integration and deployment are still under development.',
  },

  {
    slug: 'doura',
    name: 'DOURA',
    type: 'AWS SERVERLESS APPLICATION',

    stack: [
      'AWS',
      'AWS Lambda',
      'Amazon API Gateway',
      'DynamoDB',
      'REST API',
    ],

    status: 'in-progress',
    published: true,

    summary:
      'A serverless AWS application designed to modernize public-service queues through remote ticketing and queue tracking.',

    overview: [
      'Doura is a smart virtual queue platform designed for Tunisian public services, addressing the long waiting times experienced in traditional physical queues.',

      'The platform aims to let citizens obtain queue tickets remotely, follow their position and reduce unnecessary waiting at public offices.',

      'The project explores a serverless AWS architecture using services such as Lambda, API Gateway and DynamoDB to support application functionality and data management.',
    ],

    goals: [
      'Design and understand a serverless cloud architecture using AWS services.',
      'Model real-world queue management requirements using DynamoDB.',
      'Work with REST APIs and cloud application integration.',
      'Explore infrastructure as code, deployment and testing practices.',
    ],

    repoUrl:
      'https://github.com/Houssemchabbeh/Doura-Smart-Virtual-Queue-Platform-for-Public-Services',

    note:
      'Work in progress. Implementation and project scope are still evolving.',
  },

  {
    slug: 'ansible-linux-automation',
    name: 'ANSIBLE-LINUX-AUTOMATION',
    type: 'CONFIGURATION MANAGEMENT',

    stack: [
      'RHEL 9',
      'Ansible',
      'Linux',
      'YAML',
    ],

    status: 'planned',
    published: false,

    summary:
      'A planned project to automate Linux server configuration and administration using Ansible.',

    overview: [
      'This project is planned as a practical demonstration of Linux administration and configuration management using Red Hat Enterprise Linux 9 and Ansible.',

      'The objective is to transform repetitive server administration tasks into reusable, version-controlled automation playbooks and roles.',
    ],

    goals: [
      'Automate baseline configuration and administration of RHEL 9 servers.',
      'Develop reusable Ansible roles and structured playbooks.',
      'Manage system users, services, packages and configurations through automation.',
      'Document automation workflows and troubleshooting procedures.',
    ],

    note:
      'Planned. Development has not started yet.',
  },
];

/**
 * Only projects explicitly approved for publication appear on the website.
 */
export const publishedProjects = projects.filter(
  (project) => project.published,
);

/**
 * Generate unique technology filters from published, active projects.
 * Planned projects are excluded.
 */
export const allStackTags = Array.from(
  new Set(
    publishedProjects
      .filter((project) => project.status !== 'planned')
      .flatMap((project) => project.stack),
  ),
).sort((a, b) => a.localeCompare(b));
