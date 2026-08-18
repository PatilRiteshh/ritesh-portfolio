export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  architecture: {
    frontend?: string;
    backend: string;
    database: string;
    securityOrTools?: string;
    flowDescription: string;
  };
  challenges: string[];
  colorTheme: {
    bgGradient: string;
    cardBorder: string;
    badgeBg: string;
    accentColor: string;
    glowColor: string;
  };
  githubUrl: string;
  liveUrl?: string;
  disclaimer?: string;
  type: 'backend' | 'fullstack' | 'security' | 'ai';
  mockupType: 'pg' | 'legal' | 'soc';
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  stage: number;
  title: string;
  phase: string;
  description: string;
  skills: string[];
  icon: string;
  status: 'completed' | 'in-progress' | 'mastering';
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: string;
  accent: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  username: string;
}
