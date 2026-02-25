module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/ai-resume-builder/src/types/resume.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_VERBS",
    ()=>ACTION_VERBS,
    "COLOR_THEMES",
    ()=>COLOR_THEMES,
    "DEFAULT_RESUME_DATA",
    ()=>DEFAULT_RESUME_DATA
]);
const COLOR_THEMES = {
    teal: 'hsl(168, 60%, 40%)',
    navy: 'hsl(220, 60%, 35%)',
    burgundy: 'hsl(345, 60%, 35%)',
    forest: 'hsl(150, 50%, 30%)',
    charcoal: 'hsl(0, 0%, 25%)'
};
const ACTION_VERBS = [
    'Built',
    'Developed',
    'Designed',
    'Implemented',
    'Led',
    'Improved',
    'Created',
    'Optimized',
    'Automated',
    'Managed',
    'Architected',
    'Engineered',
    'Delivered',
    'Launched',
    'Spearheaded',
    'Pioneered',
    'Streamlined',
    'Transformed',
    'Achieved',
    'Collaborated',
    'Coordinated',
    'Directed',
    'Established',
    'Expanded',
    'Generated',
    'Headed',
    'Initiated',
    'Integrated',
    'Maintained',
    'Negotiated',
    'Operated',
    'Planned',
    'Produced',
    'Reduced',
    'Resolved',
    'Revamped',
    'Saved',
    'Trained',
    'Upgraded',
    'Utilized',
    'Validated',
    'Won'
];
const DEFAULT_RESUME_DATA = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
        location: ''
    },
    summary: '',
    education: [],
    experience: [],
    projects: [],
    skills: {
        technical: [],
        soft: [],
        tools: []
    },
    links: {
        github: '',
        linkedin: '',
        website: ''
    }
};
}),
"[project]/ai-resume-builder/src/context/ResumeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResumeProvider",
    ()=>ResumeProvider,
    "useResume",
    ()=>useResume
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-resume-builder/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-resume-builder/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-resume-builder/src/types/resume.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const ResumeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = 'resumeBuilderData';
const TEMPLATE_KEY = 'resumeBuilderTemplate';
const COLOR_KEY = 'resumeBuilderColor';
const VISIBILITY_KEY = 'resumeBuilderVisibility';
const VERSIONS_KEY = 'resumeBuilderVersions';
function ResumeProvider({ children }) {
    const [resumeData, setResumeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RESUME_DATA"]);
    const [template, setTemplateState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('classic');
    const [colorTheme, setColorThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('teal');
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [versions, setVersions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sectionVisibility, setSectionVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        summary: true,
        education: true,
        experience: true,
        projects: true,
        skills: true,
        links: true
    });
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Save to localStorage on changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        resumeData,
        isLoaded
    ]);
    const setTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newTemplate)=>{
        setTemplateState(newTemplate);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const setColorTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newColor)=>{
        setColorThemeState(newColor);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const updatePersonalInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((field, value)=>{
        setResumeData((prev)=>({
                ...prev,
                personalInfo: {
                    ...prev.personalInfo,
                    [field]: value
                }
            }));
    }, []);
    const updateSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setResumeData((prev)=>({
                ...prev,
                summary: value
            }));
    }, []);
    const updateLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((field, value)=>{
        setResumeData((prev)=>({
                ...prev,
                links: {
                    ...prev.links,
                    [field]: value
                }
            }));
    }, []);
    const addEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((education)=>{
        setResumeData((prev)=>({
                ...prev,
                education: [
                    ...prev.education,
                    education
                ]
            }));
    }, []);
    const updateEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, education)=>{
        setResumeData((prev)=>({
                ...prev,
                education: prev.education.map((edu)=>edu.id === id ? {
                        ...edu,
                        ...education
                    } : edu)
            }));
    }, []);
    const removeEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setResumeData((prev)=>({
                ...prev,
                education: prev.education.filter((edu)=>edu.id !== id)
            }));
    }, []);
    const addExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((experience)=>{
        setResumeData((prev)=>({
                ...prev,
                experience: [
                    ...prev.experience,
                    experience
                ]
            }));
    }, []);
    const updateExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, experience)=>{
        setResumeData((prev)=>({
                ...prev,
                experience: prev.experience.map((exp)=>exp.id === id ? {
                        ...exp,
                        ...experience
                    } : exp)
            }));
    }, []);
    const removeExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setResumeData((prev)=>({
                ...prev,
                experience: prev.experience.filter((exp)=>exp.id !== id)
            }));
    }, []);
    const addProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((project)=>{
        setResumeData((prev)=>({
                ...prev,
                projects: [
                    ...prev.projects,
                    project
                ]
            }));
    }, []);
    const updateProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, project)=>{
        setResumeData((prev)=>({
                ...prev,
                projects: prev.projects.map((proj)=>proj.id === id ? {
                        ...proj,
                        ...project
                    } : proj)
            }));
    }, []);
    const removeProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setResumeData((prev)=>({
                ...prev,
                projects: prev.projects.filter((proj)=>proj.id !== id)
            }));
    }, []);
    const addSkill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((category, skill)=>{
        setResumeData((prev)=>({
                ...prev,
                skills: {
                    ...prev.skills,
                    [category]: [
                        ...prev.skills[category],
                        skill
                    ]
                }
            }));
    }, []);
    const removeSkill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((category, skill)=>{
        setResumeData((prev)=>({
                ...prev,
                skills: {
                    ...prev.skills,
                    [category]: prev.skills[category].filter((s)=>s !== skill)
                }
            }));
    }, []);
    const loadSampleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResumeData({
            personalInfo: {
                name: 'Alex Johnson',
                email: 'alex.johnson@email.com',
                phone: '+1 (555) 123-4567',
                location: 'San Francisco, CA'
            },
            summary: 'Full-stack developer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and delivering impactful solutions. Led teams of 3-5 developers and improved application performance by 40%.',
            education: [
                {
                    id: '1',
                    school: 'University of California, Berkeley',
                    degree: 'Bachelor of Science',
                    field: 'Computer Science',
                    startDate: '2015',
                    endDate: '2019'
                }
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
                        'Mentored 4 junior developers and conducted 50+ code reviews'
                    ]
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
                        'Implemented CI/CD pipeline reducing deployment time by 75%'
                    ]
                }
            ],
            projects: [
                {
                    id: '1',
                    title: 'E-commerce Platform',
                    description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
                    techStack: [
                        'React',
                        'Node.js',
                        'PostgreSQL',
                        'Stripe'
                    ],
                    liveUrl: 'https://example-shop.com',
                    githubUrl: 'https://github.com/alex/shop'
                },
                {
                    id: '2',
                    title: 'Task Management App',
                    description: 'Collaborative task manager with real-time updates and team analytics dashboard.',
                    techStack: [
                        'TypeScript',
                        'Next.js',
                        'Prisma',
                        'Socket.io'
                    ],
                    liveUrl: '',
                    githubUrl: 'https://github.com/alex/tasks'
                }
            ],
            skills: {
                technical: [
                    'JavaScript',
                    'TypeScript',
                    'React',
                    'Node.js',
                    'Python',
                    'PostgreSQL',
                    'GraphQL'
                ],
                soft: [
                    'Leadership',
                    'Communication',
                    'Problem Solving',
                    'Team Collaboration'
                ],
                tools: [
                    'Git',
                    'Docker',
                    'AWS',
                    'Kubernetes',
                    'Jest',
                    'Figma'
                ]
            },
            links: {
                github: 'https://github.com/alexjohnson',
                linkedin: 'https://linkedin.com/in/alexjohnson',
                website: 'https://alexjohnson.dev'
            }
        });
    }, []);
    const clearData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResumeData(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_RESUME_DATA"]);
    }, []);
    // ATS Score Calculation
    const calculateATSScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
            github: 0
        };
        const suggestions = [];
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
        const wordCount = summary.trim().split(/\s+/).filter((w)=>w.length > 0).length;
        if (wordCount >= 40 && wordCount <= 120) {
            score += 15;
            breakdown.summaryLength = 15;
        }
        // Summary action verbs (+10)
        const hasActionVerb = __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_VERBS"].some((verb)=>summary.toLowerCase().includes(verb.toLowerCase()));
        if (hasActionVerb) {
            score += 10;
            breakdown.summaryVerbs = 10;
        }
        // Experience with bullets (+15)
        const hasExperienceWithBullets = experience.some((exp)=>exp.bullets.length > 0);
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
            suggestions: suggestions.slice(0, 3)
        };
    }, [
        resumeData
    ]);
    const atsScore = calculateATSScore();
    // Improvements
    const getImprovements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const items = [];
        const { summary, experience, projects, skills } = resumeData;
        if (projects.length < 2) {
            items.push({
                id: 'projects',
                text: 'Add at least 2 projects to showcase your work',
                priority: 'high'
            });
        }
        const hasNumbers = [
            ...experience,
            ...projects
        ].some((item)=>{
            const text = 'bullets' in item ? item.bullets.join(' ') : item.description;
            return /\d|%|k|x|X|K|m|M|b|B/.test(text);
        });
        if (!hasNumbers) {
            items.push({
                id: 'numbers',
                text: 'Add measurable impact (numbers, %, X improvements) to your bullets',
                priority: 'high'
            });
        }
        const wordCount = summary.trim().split(/\s+/).filter((w)=>w.length > 0).length;
        if (wordCount < 40) {
            items.push({
                id: 'summary',
                text: 'Expand your summary (target 40-120 words)',
                priority: 'medium'
            });
        }
        const totalSkills = skills.technical.length + skills.soft.length + skills.tools.length;
        if (totalSkills < 8) {
            items.push({
                id: 'skills',
                text: `Add more skills (target 8+, currently ${totalSkills})`,
                priority: 'medium'
            });
        }
        if (experience.length === 0) {
            items.push({
                id: 'experience',
                text: 'Add internship or project work experience',
                priority: 'high'
            });
        }
        return items.slice(0, 3);
    }, [
        resumeData
    ]);
    const improvements = getImprovements();
    // Bullet validation helpers
    const checkBulletActionVerb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((bullet)=>{
        const firstWord = bullet.trim().split(/\s+/)[0];
        return __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTION_VERBS"].some((verb)=>verb.toLowerCase() === firstWord?.toLowerCase());
    }, []);
    const checkBulletNumbers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((bullet)=>{
        return /\d|%|k|x|X|K|m|M|b|B/.test(bullet);
    }, []);
    // Export as text
    const exportAsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
            education.forEach((edu)=>{
                text += `${edu.school} - ${edu.degree} in ${edu.field}\n`;
                text += `${edu.startDate} - ${edu.endDate}\n\n`;
            });
        }
        if (experience.length > 0) {
            text += 'EXPERIENCE\n';
            experience.forEach((exp)=>{
                text += `${exp.title} at ${exp.company}\n`;
                text += `${exp.location} | ${exp.startDate} - ${exp.endDate}\n`;
                exp.bullets.forEach((bullet)=>{
                    text += `• ${bullet}\n`;
                });
                text += '\n';
            });
        }
        if (projects.length > 0) {
            text += 'PROJECTS\n';
            projects.forEach((proj)=>{
                text += `${proj.title}\n`;
                text += `${proj.description}\n`;
                if (proj.techStack.length > 0) {
                    text += `Tech: ${proj.techStack.join(', ')}\n`;
                }
                text += '\n';
            });
        }
        const allSkills = [
            ...skills.technical,
            ...skills.soft,
            ...skills.tools
        ];
        if (allSkills.length > 0) {
            text += `SKILLS\n${allSkills.join(', ')}\n`;
        }
        return text;
    }, [
        resumeData
    ]);
    // Export as JSON
    const exportAsJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return JSON.stringify(resumeData, null, 2);
    }, [
        resumeData
    ]);
    // Import from JSON
    const importFromJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((json)=>{
        try {
            const data = JSON.parse(json);
            // Basic validation
            if (data.personalInfo && data.skills) {
                setResumeData(data);
                return true;
            }
            return false;
        } catch  {
            return false;
        }
    }, []);
    // Reorder functions
    const reorderExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((oldIndex, newIndex)=>{
        setResumeData((prev)=>{
            const items = [
                ...prev.experience
            ];
            const [moved] = items.splice(oldIndex, 1);
            items.splice(newIndex, 0, moved);
            return {
                ...prev,
                experience: items
            };
        });
    }, []);
    const reorderProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((oldIndex, newIndex)=>{
        setResumeData((prev)=>{
            const items = [
                ...prev.projects
            ];
            const [moved] = items.splice(oldIndex, 1);
            items.splice(newIndex, 0, moved);
            return {
                ...prev,
                projects: items
            };
        });
    }, []);
    const reorderEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((oldIndex, newIndex)=>{
        setResumeData((prev)=>{
            const items = [
                ...prev.education
            ];
            const [moved] = items.splice(oldIndex, 1);
            items.splice(newIndex, 0, moved);
            return {
                ...prev,
                education: items
            };
        });
    }, []);
    // Section visibility
    const toggleSectionVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((section)=>{
        setSectionVisibility((prev)=>{
            const updated = {
                ...prev,
                [section]: !prev[section]
            };
            localStorage.setItem(VISIBILITY_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);
    // Version history
    const saveVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((name)=>{
        const newVersion = {
            id: Date.now().toString(),
            name,
            date: new Date().toISOString(),
            data: resumeData
        };
        setVersions((prev)=>{
            const updated = [
                newVersion,
                ...prev
            ].slice(0, 10); // Keep last 10
            localStorage.setItem(VERSIONS_KEY, JSON.stringify(updated));
            return updated;
        });
    }, [
        resumeData
    ]);
    const loadVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const version = versions.find((v)=>v.id === id);
        if (version) {
            setResumeData(version.data);
        }
    }, [
        versions
    ]);
    const deleteVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setVersions((prev)=>{
            const updated = prev.filter((v)=>v.id !== id);
            localStorage.setItem(VERSIONS_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResumeContext.Provider, {
        value: {
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
            deleteVersion
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/ai-resume-builder/src/context/ResumeContext.tsx",
        lineNumber: 674,
        columnNumber: 5
    }, this);
}
function useResume() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ResumeContext);
    if (context === undefined) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
}
}),
"[project]/ai-resume-builder/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/ai-resume-builder/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/ai-resume-builder/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/ai-resume-builder/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/ai-resume-builder/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e4f0b249._.js.map