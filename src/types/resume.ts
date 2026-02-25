export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skills {
  technical: string[];
  soft: string[];
  tools: string[];
}

export interface Links {
  github: string;
  linkedin: string;
  website: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  links: Links;
}

export type TemplateType = 'classic' | 'modern' | 'minimal';

export type ColorTheme = 'teal' | 'navy' | 'burgundy' | 'forest' | 'charcoal';

export const COLOR_THEMES: Record<ColorTheme, string> = {
  teal: 'hsl(168, 60%, 40%)',
  navy: 'hsl(220, 60%, 35%)',
  burgundy: 'hsl(345, 60%, 35%)',
  forest: 'hsl(150, 50%, 30%)',
  charcoal: 'hsl(0, 0%, 25%)',
};

export const ACTION_VERBS = [
  'Built', 'Developed', 'Designed', 'Implemented', 'Led', 'Improved', 'Created',
  'Optimized', 'Automated', 'Managed', 'Architected', 'Engineered', 'Delivered',
  'Launched', 'Spearheaded', 'Pioneered', 'Streamlined', 'Transformed', 'Achieved',
  'Collaborated', 'Coordinated', 'Directed', 'Established', 'Expanded', 'Generated',
  'Headed', 'Initiated', 'Integrated', 'Maintained', 'Negotiated', 'Operated',
  'Planned', 'Produced', 'Reduced', 'Resolved', 'Revamped', 'Saved', 'Trained',
  'Upgraded', 'Utilized', 'Validated', 'Won'
];

export const DEFAULT_RESUME_DATA: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
  },
  summary: '',
  education: [],
  experience: [],
  projects: [],
  skills: {
    technical: [],
    soft: [],
    tools: [],
  },
  links: {
    github: '',
    linkedin: '',
    website: '',
  },
};

export interface ATSScore {
  score: number;
  maxScore: number;
  breakdown: {
    name: number;
    email: number;
    summary: number;
    summaryLength: number;
    summaryVerbs: number;
    experience: number;
    education: number;
    skills: number;
    project: number;
    phone: number;
    linkedin: number;
    github: number;
  };
  suggestions: string[];
}

export interface ImprovementItem {
  id: string;
  text: string;
  priority: 'high' | 'medium' | 'low';
}
