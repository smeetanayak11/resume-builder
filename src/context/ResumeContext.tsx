'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  ResumeData,
  DEFAULT_RESUME_DATA,
  TemplateType,
  ColorTheme,
  ATSScore,
  ImprovementItem,
  ACTION_VERBS,
} from '@/types/resume';

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  updatePersonalInfo: (field: keyof ResumeData['personalInfo'], value: string) => void;
  updateSummary: (value: string) => void;
  updateLinks: (field: keyof ResumeData['links'], value: string) => void;
  addEducation: (education: ResumeData['education'][0]) => void;
  updateEducation: (id: string, education: Partial<ResumeData['education'][0]>) => void;
  removeEducation: (id: string) => void;
  addExperience: (experience: ResumeData['experience'][0]) => void;
  updateExperience: (id: string, experience: Partial<ResumeData['experience'][0]>) => void;
  removeExperience: (id: string) => void;
  addProject: (project: ResumeData['projects'][0]) => void;
  updateProject: (id: string, project: Partial<ResumeData['projects'][0]>) => void;
  removeProject: (id: string) => void;
  addSkill: (category: keyof ResumeData['skills'], skill: string) => void;
  removeSkill: (category: keyof ResumeData['skills'], skill: string) => void;
  loadSampleData: () => void;
  clearData: () => void;
  template: TemplateType;
  setTemplate: (template: TemplateType) => void;
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  atsScore: ATSScore;
  improvements: ImprovementItem[];
  checkBulletActionVerb: (bullet: string) => boolean;
  checkBulletNumbers: (bullet: string) => boolean;
  exportAsText: () => string;
  exportAsJSON: () => string;
  importFromJSON: (json: string) => boolean;
  reorderExperience: (oldIndex: number, newIndex: number) => void;
  reorderProjects: (oldIndex: number, newIndex: number) => void;
  reorderEducation: (oldIndex: number, newIndex: number) => void;
  sectionVisibility: Record<string, boolean>;
  toggleSectionVisibility: (section: string) => void;
  saveVersion: (name: string) => void;
  versions: Version[];
  loadVersion: (id: string) => void;
  deleteVersion: (id: string) => void;
}

interface Version {
  id: string;
  name: string;
  date: string;
  data: ResumeData;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

const STORAGE_KEY = 'resumeBuilderData';
const TEMPLATE_KEY = 'resumeBuilderTemplate';
const COLOR_KEY = 'resumeBuilderColor';
const VISIBILITY_KEY = 'resumeBuilderVisibility';
const VERSIONS_KEY = 'resumeBuilderVersions';

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>(DEFAULT_RESUME_DATA);
  const [template, setTemplateState] = useState<TemplateType>('classic');
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('teal');
  const [isLoaded, setIsLoaded] = useState(false);
  const [versions, setVersions] = useState<Version[]>([]);
  const [sectionVisibility, setSectionVisibility] = useState<Record<string, boolean>>({
    summary: true,
    education: true,
    experience: true,
    projects: true,
    skills: true,
    links: true,
  });

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedTemplate = localStorage.getItem(TEMPLATE_KEY) as TemplateType;
      const savedColor = localStorage.getItem(COLOR_KEY) as ColorTheme;
      const savedVisibility = localStorage.getItem(VISIBILITY_KEY);
      const savedVersions = localStorage.getItem(VERSIONS_KEY);
      
      if (saved) {
        try {
          setResumeData(JSON.parse(saved));
        } catch {
          setResumeData(DEFAULT_RESUME_DATA);
        }
      }
      
      if (savedTemplate && ['classic', 'modern', 'minimal'].includes(savedTemplate)) {
        setTemplateState(savedTemplate);
      }
      
      if (savedColor && ['teal', 'navy', 'burgundy', 'forest', 'charcoal'].includes(savedColor)) {
        setColorThemeState(savedColor);
      }

      if (savedVisibility) {
        try {
          setSectionVisibility(JSON.parse(savedVisibility));
        } catch {
          // use defaults
        }
      }

      if (savedVersions) {
        try {
          setVersions(JSON.parse(savedVersions));
        } catch {
          // use empty
        }
      }
      
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
    }
  }, [resumeData, isLoaded]);

  const setTemplate = useCallback((newTemplate: TemplateType) => {
    setTemplateState(newTemplate);
    if (typeof window !== 'undefined') {
      localStorage.setItem(TEMPLATE_KEY, newTemplate);
    }
  }, []);

  const setColorTheme = useCallback((newColor: ColorTheme) => {
    setColorThemeState(newColor);
    if (typeof window !== 'undefined') {
      localStorage.setItem(COLOR_KEY, newColor);
    }
  }, []);

  const updatePersonalInfo = useCallback((field: keyof ResumeData['personalInfo'], value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  }, []);

  const updateSummary = useCallback((value: string) => {
    setResumeData(prev => ({ ...prev, summary: value }));
  }, []);

  const updateLinks = useCallback((field: keyof ResumeData['links'], value: string) => {
    setResumeData(prev => ({
      ...prev,
      links: { ...prev.links, [field]: value },
    }));
  }, []);

  const addEducation = useCallback((education: ResumeData['education'][0]) => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, education],
    }));
  }, []);

  const updateEducation = useCallback((id: string, education: Partial<ResumeData['education'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, ...education } : edu
      ),
    }));
  }, []);

  const removeEducation = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id),
    }));
  }, []);

  const addExperience = useCallback((experience: ResumeData['experience'][0]) => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, experience],
    }));
  }, []);

  const updateExperience = useCallback((id: string, experience: Partial<ResumeData['experience'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, ...experience } : exp
      ),
    }));
  }, []);

  const removeExperience = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id),
    }));
  }, []);

  const addProject = useCallback((project: ResumeData['projects'][0]) => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
  }, []);

  const updateProject = useCallback((id: string, project: Partial<ResumeData['projects'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === id ? { ...proj, ...project } : proj
      ),
    }));
  }, []);

  const removeProject = useCallback((id: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id),
    }));
  }, []);

  const addSkill = useCallback((category: keyof ResumeData['skills'], skill: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: [...prev.skills[category], skill],
      },
    }));
  }, []);

  const removeSkill = useCallback((category: keyof ResumeData['skills'], skill: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter(s => s !== skill),
      },
    }));
  }, []);

  const loadSampleData = useCallback(() => {
    setResumeData({
      personalInfo: {
        name: 'Alex Johnson',
        email: 'alex.johnson@email.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
      },
      summary: 'Full-stack developer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and delivering impactful solutions. Led teams of 3-5 developers and improved application performance by 40%.',
      education: [
        {
          id: '1',
          school: 'University of California, Berkeley',
          degree: 'Bachelor of Science',
          field: 'Computer Science',
          startDate: '2015',
          endDate: '2019',
        },
      ],
      experience: [
        {
          id: '1',
          company: 'TechCorp Inc.',
          title: 'Senior Software Engineer',
          location: 'San Francisco, CA',
          startDate: '2021',
          endDate: 'Present',
          bullets: [
            'Led development of microservices architecture serving 1M+ users',
            'Reduced API response time by 60% through query optimization',
            'Mentored 4 junior developers and conducted 50+ code reviews',
          ],
        },
        {
          id: '2',
          company: 'StartupXYZ',
          title: 'Software Engineer',
          location: 'Palo Alto, CA',
          startDate: '2019',
          endDate: '2021',
          bullets: [
            'Built React frontend with 99.9% uptime over 2 years',
            'Implemented CI/CD pipeline reducing deployment time by 75%',
          ],
        },
      ],
      projects: [
        {
          id: '1',
          title: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
          techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
          liveUrl: 'https://example-shop.com',
          githubUrl: 'https://github.com/alex/shop',
        },
        {
          id: '2',
          title: 'Task Management App',
          description: 'Collaborative task manager with real-time updates and team analytics dashboard.',
          techStack: ['TypeScript', 'Next.js', 'Prisma', 'Socket.io'],
          liveUrl: '',
          githubUrl: 'https://github.com/alex/tasks',
        },
      ],
      skills: {
        technical: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
        soft: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration'],
        tools: ['Git', 'Docker', 'AWS', 'Kubernetes', 'Jest', 'Figma'],
      },
      links: {
        github: 'https://github.com/alexjohnson',
        linkedin: 'https://linkedin.com/in/alexjohnson',
        website: 'https://alexjohnson.dev',
      },
    });
  }, []);

  const clearData = useCallback(() => {
    setResumeData(DEFAULT_RESUME_DATA);
  }, []);

  // ATS Score Calculation
  const calculateATSScore = useCallback((): ATSScore => {
    const { personalInfo, summary, education, experience, projects, skills, links } = resumeData;
    let score = 0;
    const breakdown = {
      name: 0,
      email: 0,
      summary: 0,
      summaryLength: 0,
      summaryVerbs: 0,
      experience: 0,
      education: 0,
      skills: 0,
      project: 0,
      phone: 0,
      linkedin: 0,
      github: 0,
    };
    const suggestions: string[] = [];

    // Name (+10)
    if (personalInfo.name.trim()) {
      score += 10;
      breakdown.name = 10;
    } else {
      suggestions.push('Add your name (+10 points)');
    }

    // Email (+10)
    if (personalInfo.email.trim()) {
      score += 10;
      breakdown.email = 10;
    } else {
      suggestions.push('Add your email address (+10 points)');
    }

    // Summary > 50 chars (+10)
    if (summary.length > 50) {
      score += 10;
      breakdown.summary = 10;
    } else {
      suggestions.push('Add a professional summary (50+ characters) (+10 points)');
    }

    // Summary length 40-120 words (+15)
    const wordCount = summary.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount >= 40 && wordCount <= 120) {
      score += 15;
      breakdown.summaryLength = 15;
    }

    // Summary action verbs (+10)
    const hasActionVerb = ACTION_VERBS.some(verb =>
      summary.toLowerCase().includes(verb.toLowerCase())
    );
    if (hasActionVerb) {
      score += 10;
      breakdown.summaryVerbs = 10;
    }

    // Experience with bullets (+15)
    const hasExperienceWithBullets = experience.some(exp => exp.bullets.length > 0);
    if (hasExperienceWithBullets) {
      score += 15;
      breakdown.experience = 15;
    } else {
      suggestions.push('Add work experience with bullet points (+15 points)');
    }

    // Education (+10)
    if (education.length > 0) {
      score += 10;
      breakdown.education = 10;
    } else {
      suggestions.push('Add your education (+10 points)');
    }

    // Skills >= 5 (+10)
    const totalSkills = skills.technical.length + skills.soft.length + skills.tools.length;
    if (totalSkills >= 5) {
      score += 10;
      breakdown.skills = 10;
    } else {
      suggestions.push(`Add more skills (${5 - totalSkills} more needed) (+10 points)`);
    }

    // Project (+10)
    if (projects.length > 0) {
      score += 10;
      breakdown.project = 10;
    } else {
      suggestions.push('Add at least one project (+10 points)');
    }

    // Phone (+5)
    if (personalInfo.phone.trim()) {
      score += 5;
      breakdown.phone = 5;
    }

    // LinkedIn (+5)
    if (links.linkedin.trim()) {
      score += 5;
      breakdown.linkedin = 5;
    }

    // GitHub (+5)
    if (links.github.trim()) {
      score += 5;
      breakdown.github = 5;
    }

    return {
      score: Math.min(score, 100),
      maxScore: 100,
      breakdown,
      suggestions: suggestions.slice(0, 3),
    };
  }, [resumeData]);

  const atsScore = calculateATSScore();

  // Improvements
  const getImprovements = useCallback((): ImprovementItem[] => {
    const items: ImprovementItem[] = [];
    const { summary, experience, projects, skills } = resumeData;

    if (projects.length < 2) {
      items.push({
        id: 'projects',
        text: 'Add at least 2 projects to showcase your work',
        priority: 'high',
      });
    }

    const hasNumbers = [...experience, ...projects].some(item => {
      const text = 'bullets' in item ? item.bullets.join(' ') : item.description;
      return /\d|%|k|x|X|K|m|M|b|B/.test(text);
    });

    if (!hasNumbers) {
      items.push({
        id: 'numbers',
        text: 'Add measurable impact (numbers, %, X improvements) to your bullets',
        priority: 'high',
      });
    }

    const wordCount = summary.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount < 40) {
      items.push({
        id: 'summary',
        text: 'Expand your summary (target 40-120 words)',
        priority: 'medium',
      });
    }

    const totalSkills = skills.technical.length + skills.soft.length + skills.tools.length;
    if (totalSkills < 8) {
      items.push({
        id: 'skills',
        text: `Add more skills (target 8+, currently ${totalSkills})`,
        priority: 'medium',
      });
    }

    if (experience.length === 0) {
      items.push({
        id: 'experience',
        text: 'Add internship or project work experience',
        priority: 'high',
      });
    }

    return items.slice(0, 3);
  }, [resumeData]);

  const improvements = getImprovements();

  // Bullet validation helpers
  const checkBulletActionVerb = useCallback((bullet: string): boolean => {
    const firstWord = bullet.trim().split(/\s+/)[0];
    return ACTION_VERBS.some(verb =>
      verb.toLowerCase() === firstWord?.toLowerCase()
    );
  }, []);

  const checkBulletNumbers = useCallback((bullet: string): boolean => {
    return /\d|%|k|x|X|K|m|M|b|B/.test(bullet);
  }, []);

  // Export as text
  const exportAsText = useCallback((): string => {
    const { personalInfo, summary, education, experience, projects, skills, links } = resumeData;
    let text = '';

    text += `${personalInfo.name}\n`;
    text += `${personalInfo.email}${personalInfo.phone ? ' | ' + personalInfo.phone : ''}\n`;
    if (personalInfo.location) text += `${personalInfo.location}\n`;
    if (links.linkedin) text += `${links.linkedin}\n`;
    if (links.github) text += `${links.github}\n`;
    text += '\n';

    if (summary) {
      text += `SUMMARY\n${summary}\n\n`;
    }

    if (education.length > 0) {
      text += 'EDUCATION\n';
      education.forEach(edu => {
        text += `${edu.school} - ${edu.degree} in ${edu.field}\n`;
        text += `${edu.startDate} - ${edu.endDate}\n\n`;
      });
    }

    if (experience.length > 0) {
      text += 'EXPERIENCE\n';
      experience.forEach(exp => {
        text += `${exp.title} at ${exp.company}\n`;
        text += `${exp.location} | ${exp.startDate} - ${exp.endDate}\n`;
        exp.bullets.forEach(bullet => {
          text += `• ${bullet}\n`;
        });
        text += '\n';
      });
    }

    if (projects.length > 0) {
      text += 'PROJECTS\n';
      projects.forEach(proj => {
        text += `${proj.title}\n`;
        text += `${proj.description}\n`;
        if (proj.techStack.length > 0) {
          text += `Tech: ${proj.techStack.join(', ')}\n`;
        }
        text += '\n';
      });
    }

    const allSkills = [...skills.technical, ...skills.soft, ...skills.tools];
    if (allSkills.length > 0) {
      text += `SKILLS\n${allSkills.join(', ')}\n`;
    }

    return text;
  }, [resumeData]);

  // Export as JSON
  const exportAsJSON = useCallback((): string => {
    return JSON.stringify(resumeData, null, 2);
  }, [resumeData]);

  // Import from JSON
  const importFromJSON = useCallback((json: string): boolean => {
    try {
      const data = JSON.parse(json);
      // Basic validation
      if (data.personalInfo && data.skills) {
        setResumeData(data);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  // Reorder functions
  const reorderExperience = useCallback((oldIndex: number, newIndex: number) => {
    setResumeData(prev => {
      const items = [...prev.experience];
      const [moved] = items.splice(oldIndex, 1);
      items.splice(newIndex, 0, moved);
      return { ...prev, experience: items };
    });
  }, []);

  const reorderProjects = useCallback((oldIndex: number, newIndex: number) => {
    setResumeData(prev => {
      const items = [...prev.projects];
      const [moved] = items.splice(oldIndex, 1);
      items.splice(newIndex, 0, moved);
      return { ...prev, projects: items };
    });
  }, []);

  const reorderEducation = useCallback((oldIndex: number, newIndex: number) => {
    setResumeData(prev => {
      const items = [...prev.education];
      const [moved] = items.splice(oldIndex, 1);
      items.splice(newIndex, 0, moved);
      return { ...prev, education: items };
    });
  }, []);

  // Section visibility
  const toggleSectionVisibility = useCallback((section: string) => {
    setSectionVisibility(prev => {
      const updated = { ...prev, [section]: !prev[section] };
      localStorage.setItem(VISIBILITY_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Version history
  const saveVersion = useCallback((name: string) => {
    const newVersion: Version = {
      id: Date.now().toString(),
      name,
      date: new Date().toISOString(),
      data: resumeData,
    };
    setVersions(prev => {
      const updated = [newVersion, ...prev].slice(0, 10); // Keep last 10
      localStorage.setItem(VERSIONS_KEY, JSON.stringify(updated));
      return updated;
    });
  }, [resumeData]);

  const loadVersion = useCallback((id: string) => {
    const version = versions.find(v => v.id === id);
    if (version) {
      setResumeData(version.data);
    }
  }, [versions]);

  const deleteVersion = useCallback((id: string) => {
    setVersions(prev => {
      const updated = prev.filter(v => v.id !== id);
      localStorage.setItem(VERSIONS_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        updatePersonalInfo,
        updateSummary,
        updateLinks,
        addEducation,
        updateEducation,
        removeEducation,
        addExperience,
        updateExperience,
        removeExperience,
        addProject,
        updateProject,
        removeProject,
        addSkill,
        removeSkill,
        loadSampleData,
        clearData,
        template,
        setTemplate,
        colorTheme,
        setColorTheme,
        atsScore,
        improvements,
        checkBulletActionVerb,
        checkBulletNumbers,
        exportAsText,
        exportAsJSON,
        importFromJSON,
        reorderExperience,
        reorderProjects,
        reorderEducation,
        sectionVisibility,
        toggleSectionVisibility,
        saveVersion,
        versions,
        loadVersion,
        deleteVersion,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
