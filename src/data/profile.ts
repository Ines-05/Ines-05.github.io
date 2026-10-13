export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  about: string;
  avatarUrl?: string;
  location: string;
  socials: SocialLinks;
  skills: {
    category: string;
    items: string[];
  }[];
}

export const profile: ProfileData = {
  name: "Alex Dev",
  role: "Full-Stack Engineer & Open Source Enthusiast",
  bio: "I design and build performant web applications, craft clean user interfaces, and write technical guides.",
  about: "Welcome to my corner of the web! I specialize in React, Next.js, TypeScript, and modern cloud architectures. When I am not building web apps, I write in-depth articles breaking down software concepts and exploring emerging tech.",
  location: "Earth 🌍",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "mailto:hello@example.com",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "State Management"],
    },
    {
      category: "Backend & DBs",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git & GitHub", "GitHub Actions", "Docker", "Vercel", "Linux", "VS Code"],
    },
  ],
};
