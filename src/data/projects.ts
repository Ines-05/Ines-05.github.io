export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "dev-dashboard",
    title: "DevPulse Analytics",
    description: "Real-time metrics and productivity monitoring dashboard for developer teams with automated alerts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "markdown-docs-engine",
    title: "DocuCraft Engine",
    description: "Fast documentation engine rendering Markdown and MDX with instant client search and syntax highlighting.",
    tags: ["React", "TypeScript", "Markdown", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "task-flow-app",
    title: "FlowTask Kanban",
    description: "Intuitive drag-and-drop workflow and project management tool with offline persistence and keyboard navigation.",
    tags: ["Next.js", "React", "TypeScript", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "api-toolkit",
    title: "APILight Toolkit",
    description: "Minimalist, zero-config API mock server and testing suite for rapid prototyping.",
    tags: ["Node.js", "TypeScript", "REST"],
    githubUrl: "https://github.com",
    featured: false,
  },
];
