(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ai-resume-builder/src/types/resume.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-resume-builder/src/context/ResumeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResumeProvider",
    ()=>ResumeProvider,
    "useResume",
    ()=>useResume
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-resume-builder/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-resume-builder/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ai-resume-builder/src/types/resume.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ResumeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = 'resumeBuilderData';
const TEMPLATE_KEY = 'resumeBuilderTemplate';
const COLOR_KEY = 'resumeBuilderColor';
const VISIBILITY_KEY = 'resumeBuilderVisibility';
const VERSIONS_KEY = 'resumeBuilderVersions';
function ResumeProvider({ children }) {
    _s();
    const [resumeData, setResumeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RESUME_DATA"]);
    const [template, setTemplateState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('classic');
    const [colorTheme, setColorThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('teal');
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [versions, setVersions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sectionVisibility, setSectionVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        summary: true,
        education: true,
        experience: true,
        projects: true,
        skills: true,
        links: true
    });
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResumeProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem(STORAGE_KEY);
                const savedTemplate = localStorage.getItem(TEMPLATE_KEY);
                const savedColor = localStorage.getItem(COLOR_KEY);
                const savedVisibility = localStorage.getItem(VISIBILITY_KEY);
                const savedVersions = localStorage.getItem(VERSIONS_KEY);
                if (saved) {
                    try {
                        setResumeData(JSON.parse(saved));
                    } catch  {
                        setResumeData(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RESUME_DATA"]);
                    }
                }
                if (savedTemplate && [
                    'classic',
                    'modern',
                    'minimal'
                ].includes(savedTemplate)) {
                    setTemplateState(savedTemplate);
                }
                if (savedColor && [
                    'teal',
                    'navy',
                    'burgundy',
                    'forest',
                    'charcoal'
                ].includes(savedColor)) {
                    setColorThemeState(savedColor);
                }
                if (savedVisibility) {
                    try {
                        setSectionVisibility(JSON.parse(savedVisibility));
                    } catch  {
                    // use defaults
                    }
                }
                if (savedVersions) {
                    try {
                        setVersions(JSON.parse(savedVersions));
                    } catch  {
                    // use empty
                    }
                }
                setIsLoaded(true);
            }
        }
    }["ResumeProvider.useEffect"], []);
    // Save to localStorage on changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResumeProvider.useEffect": ()=>{
            if (isLoaded && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
            }
        }
    }["ResumeProvider.useEffect"], [
        resumeData,
        isLoaded
    ]);
    const setTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[setTemplate]": (newTemplate)=>{
            setTemplateState(newTemplate);
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(TEMPLATE_KEY, newTemplate);
            }
        }
    }["ResumeProvider.useCallback[setTemplate]"], []);
    const setColorTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[setColorTheme]": (newColor)=>{
            setColorThemeState(newColor);
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(COLOR_KEY, newColor);
            }
        }
    }["ResumeProvider.useCallback[setColorTheme]"], []);
    const updatePersonalInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[updatePersonalInfo]": (field, value)=>{
            setResumeData({
                "ResumeProvider.useCallback[updatePersonalInfo]": (prev)=>({
                        ...prev,
                        personalInfo: {
                            ...prev.personalInfo,
                            [field]: value
                        }
                    })
            }["ResumeProvider.useCallback[updatePersonalInfo]"]);
        }
    }["ResumeProvider.useCallback[updatePersonalInfo]"], []);
    const updateSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[updateSummary]": (value)=>{
            setResumeData({
                "ResumeProvider.useCallback[updateSummary]": (prev)=>({
                        ...prev,
                        summary: value
                    })
            }["ResumeProvider.useCallback[updateSummary]"]);
        }
    }["ResumeProvider.useCallback[updateSummary]"], []);
    const updateLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[updateLinks]": (field, value)=>{
            setResumeData({
                "ResumeProvider.useCallback[updateLinks]": (prev)=>({
                        ...prev,
                        links: {
                            ...prev.links,
                            [field]: value
                        }
                    })
            }["ResumeProvider.useCallback[updateLinks]"]);
        }
    }["ResumeProvider.useCallback[updateLinks]"], []);
    const addEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[addEducation]": (education)=>{
            setResumeData({
                "ResumeProvider.useCallback[addEducation]": (prev)=>({
                        ...prev,
                        education: [
                            ...prev.education,
                            education
                        ]
                    })
            }["ResumeProvider.useCallback[addEducation]"]);
        }
    }["ResumeProvider.useCallback[addEducation]"], []);
    const updateEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[updateEducation]": (id, education)=>{
            setResumeData({
                "ResumeProvider.useCallback[updateEducation]": (prev)=>({
                        ...prev,
                        education: prev.education.map({
                            "ResumeProvider.useCallback[updateEducation]": (edu)=>edu.id === id ? {
                                    ...edu,
                                    ...education
                                } : edu
                        }["ResumeProvider.useCallback[updateEducation]"])
                    })
            }["ResumeProvider.useCallback[updateEducation]"]);
        }
    }["ResumeProvider.useCallback[updateEducation]"], []);
    const removeEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[removeEducation]": (id)=>{
            setResumeData({
                "ResumeProvider.useCallback[removeEducation]": (prev)=>({
                        ...prev,
                        education: prev.education.filter({
                            "ResumeProvider.useCallback[removeEducation]": (edu)=>edu.id !== id
                        }["ResumeProvider.useCallback[removeEducation]"])
                    })
            }["ResumeProvider.useCallback[removeEducation]"]);
        }
    }["ResumeProvider.useCallback[removeEducation]"], []);
    const addExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[addExperience]": (experience)=>{
            setResumeData({
                "ResumeProvider.useCallback[addExperience]": (prev)=>({
                        ...prev,
                        experience: [
                            ...prev.experience,
                            experience
                        ]
                    })
            }["ResumeProvider.useCallback[addExperience]"]);
        }
    }["ResumeProvider.useCallback[addExperience]"], []);
    const updateExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[updateExperience]": (id, experience)=>{
            setResumeData({
                "ResumeProvider.useCallback[updateExperience]": (prev)=>({
                        ...prev,
                        experience: prev.experience.map({
                            "ResumeProvider.useCallback[updateExperience]": (exp)=>exp.id === id ? {
                                    ...exp,
                                    ...experience
                                } : exp
                        }["ResumeProvider.useCallback[updateExperience]"])
                    })
            }["ResumeProvider.useCallback[updateExperience]"]);
        }
    }["ResumeProvider.useCallback[updateExperience]"], []);
    const removeExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[removeExperience]": (id)=>{
            setResumeData({
                "ResumeProvider.useCallback[removeExperience]": (prev)=>({
                        ...prev,
                        experience: prev.experience.filter({
                            "ResumeProvider.useCallback[removeExperience]": (exp)=>exp.id !== id
                        }["ResumeProvider.useCallback[removeExperience]"])
                    })
            }["ResumeProvider.useCallback[removeExperience]"]);
        }
    }["ResumeProvider.useCallback[removeExperience]"], []);
    const addProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[addProject]": (project)=>{
            setResumeData({
                "ResumeProvider.useCallback[addProject]": (prev)=>({
                        ...prev,
                        projects: [
                            ...prev.projects,
                            project
                        ]
                    })
            }["ResumeProvider.useCallback[addProject]"]);
        }
    }["ResumeProvider.useCallback[addProject]"], []);
    const updateProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[updateProject]": (id, project)=>{
            setResumeData({
                "ResumeProvider.useCallback[updateProject]": (prev)=>({
                        ...prev,
                        projects: prev.projects.map({
                            "ResumeProvider.useCallback[updateProject]": (proj)=>proj.id === id ? {
                                    ...proj,
                                    ...project
                                } : proj
                        }["ResumeProvider.useCallback[updateProject]"])
                    })
            }["ResumeProvider.useCallback[updateProject]"]);
        }
    }["ResumeProvider.useCallback[updateProject]"], []);
    const removeProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[removeProject]": (id)=>{
            setResumeData({
                "ResumeProvider.useCallback[removeProject]": (prev)=>({
                        ...prev,
                        projects: prev.projects.filter({
                            "ResumeProvider.useCallback[removeProject]": (proj)=>proj.id !== id
                        }["ResumeProvider.useCallback[removeProject]"])
                    })
            }["ResumeProvider.useCallback[removeProject]"]);
        }
    }["ResumeProvider.useCallback[removeProject]"], []);
    const addSkill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[addSkill]": (category, skill)=>{
            setResumeData({
                "ResumeProvider.useCallback[addSkill]": (prev)=>({
                        ...prev,
                        skills: {
                            ...prev.skills,
                            [category]: [
                                ...prev.skills[category],
                                skill
                            ]
                        }
                    })
            }["ResumeProvider.useCallback[addSkill]"]);
        }
    }["ResumeProvider.useCallback[addSkill]"], []);
    const removeSkill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[removeSkill]": (category, skill)=>{
            setResumeData({
                "ResumeProvider.useCallback[removeSkill]": (prev)=>({
                        ...prev,
                        skills: {
                            ...prev.skills,
                            [category]: prev.skills[category].filter({
                                "ResumeProvider.useCallback[removeSkill]": (s)=>s !== skill
                            }["ResumeProvider.useCallback[removeSkill]"])
                        }
                    })
            }["ResumeProvider.useCallback[removeSkill]"]);
        }
    }["ResumeProvider.useCallback[removeSkill]"], []);
    const loadSampleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[loadSampleData]": ()=>{
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
        }
    }["ResumeProvider.useCallback[loadSampleData]"], []);
    const clearData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[clearData]": ()=>{
            setResumeData(__TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_RESUME_DATA"]);
        }
    }["ResumeProvider.useCallback[clearData]"], []);
    // ATS Score Calculation
    const calculateATSScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[calculateATSScore]": ()=>{
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
            const wordCount = summary.trim().split(/\s+/).filter({
                "ResumeProvider.useCallback[calculateATSScore]": (w)=>w.length > 0
            }["ResumeProvider.useCallback[calculateATSScore]"]).length;
            if (wordCount >= 40 && wordCount <= 120) {
                score += 15;
                breakdown.summaryLength = 15;
            }
            // Summary action verbs (+10)
            const hasActionVerb = __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTION_VERBS"].some({
                "ResumeProvider.useCallback[calculateATSScore].hasActionVerb": (verb)=>summary.toLowerCase().includes(verb.toLowerCase())
            }["ResumeProvider.useCallback[calculateATSScore].hasActionVerb"]);
            if (hasActionVerb) {
                score += 10;
                breakdown.summaryVerbs = 10;
            }
            // Experience with bullets (+15)
            const hasExperienceWithBullets = experience.some({
                "ResumeProvider.useCallback[calculateATSScore].hasExperienceWithBullets": (exp)=>exp.bullets.length > 0
            }["ResumeProvider.useCallback[calculateATSScore].hasExperienceWithBullets"]);
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
        }
    }["ResumeProvider.useCallback[calculateATSScore]"], [
        resumeData
    ]);
    const atsScore = calculateATSScore();
    // Improvements
    const getImprovements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[getImprovements]": ()=>{
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
            ].some({
                "ResumeProvider.useCallback[getImprovements].hasNumbers": (item)=>{
                    const text = 'bullets' in item ? item.bullets.join(' ') : item.description;
                    return /\d|%|k|x|X|K|m|M|b|B/.test(text);
                }
            }["ResumeProvider.useCallback[getImprovements].hasNumbers"]);
            if (!hasNumbers) {
                items.push({
                    id: 'numbers',
                    text: 'Add measurable impact (numbers, %, X improvements) to your bullets',
                    priority: 'high'
                });
            }
            const wordCount = summary.trim().split(/\s+/).filter({
                "ResumeProvider.useCallback[getImprovements]": (w)=>w.length > 0
            }["ResumeProvider.useCallback[getImprovements]"]).length;
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
        }
    }["ResumeProvider.useCallback[getImprovements]"], [
        resumeData
    ]);
    const improvements = getImprovements();
    // Bullet validation helpers
    const checkBulletActionVerb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[checkBulletActionVerb]": (bullet)=>{
            const firstWord = bullet.trim().split(/\s+/)[0];
            return __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$src$2f$types$2f$resume$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACTION_VERBS"].some({
                "ResumeProvider.useCallback[checkBulletActionVerb]": (verb)=>verb.toLowerCase() === firstWord?.toLowerCase()
            }["ResumeProvider.useCallback[checkBulletActionVerb]"]);
        }
    }["ResumeProvider.useCallback[checkBulletActionVerb]"], []);
    const checkBulletNumbers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[checkBulletNumbers]": (bullet)=>{
            return /\d|%|k|x|X|K|m|M|b|B/.test(bullet);
        }
    }["ResumeProvider.useCallback[checkBulletNumbers]"], []);
    // Export as text
    const exportAsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[exportAsText]": ()=>{
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
                education.forEach({
                    "ResumeProvider.useCallback[exportAsText]": (edu)=>{
                        text += `${edu.school} - ${edu.degree} in ${edu.field}\n`;
                        text += `${edu.startDate} - ${edu.endDate}\n\n`;
                    }
                }["ResumeProvider.useCallback[exportAsText]"]);
            }
            if (experience.length > 0) {
                text += 'EXPERIENCE\n';
                experience.forEach({
                    "ResumeProvider.useCallback[exportAsText]": (exp)=>{
                        text += `${exp.title} at ${exp.company}\n`;
                        text += `${exp.location} | ${exp.startDate} - ${exp.endDate}\n`;
                        exp.bullets.forEach({
                            "ResumeProvider.useCallback[exportAsText]": (bullet)=>{
                                text += `• ${bullet}\n`;
                            }
                        }["ResumeProvider.useCallback[exportAsText]"]);
                        text += '\n';
                    }
                }["ResumeProvider.useCallback[exportAsText]"]);
            }
            if (projects.length > 0) {
                text += 'PROJECTS\n';
                projects.forEach({
                    "ResumeProvider.useCallback[exportAsText]": (proj)=>{
                        text += `${proj.title}\n`;
                        text += `${proj.description}\n`;
                        if (proj.techStack.length > 0) {
                            text += `Tech: ${proj.techStack.join(', ')}\n`;
                        }
                        text += '\n';
                    }
                }["ResumeProvider.useCallback[exportAsText]"]);
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
        }
    }["ResumeProvider.useCallback[exportAsText]"], [
        resumeData
    ]);
    // Export as JSON
    const exportAsJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[exportAsJSON]": ()=>{
            return JSON.stringify(resumeData, null, 2);
        }
    }["ResumeProvider.useCallback[exportAsJSON]"], [
        resumeData
    ]);
    // Import from JSON
    const importFromJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[importFromJSON]": (json)=>{
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
        }
    }["ResumeProvider.useCallback[importFromJSON]"], []);
    // Reorder functions
    const reorderExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[reorderExperience]": (oldIndex, newIndex)=>{
            setResumeData({
                "ResumeProvider.useCallback[reorderExperience]": (prev)=>{
                    const items = [
                        ...prev.experience
                    ];
                    const [moved] = items.splice(oldIndex, 1);
                    items.splice(newIndex, 0, moved);
                    return {
                        ...prev,
                        experience: items
                    };
                }
            }["ResumeProvider.useCallback[reorderExperience]"]);
        }
    }["ResumeProvider.useCallback[reorderExperience]"], []);
    const reorderProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[reorderProjects]": (oldIndex, newIndex)=>{
            setResumeData({
                "ResumeProvider.useCallback[reorderProjects]": (prev)=>{
                    const items = [
                        ...prev.projects
                    ];
                    const [moved] = items.splice(oldIndex, 1);
                    items.splice(newIndex, 0, moved);
                    return {
                        ...prev,
                        projects: items
                    };
                }
            }["ResumeProvider.useCallback[reorderProjects]"]);
        }
    }["ResumeProvider.useCallback[reorderProjects]"], []);
    const reorderEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[reorderEducation]": (oldIndex, newIndex)=>{
            setResumeData({
                "ResumeProvider.useCallback[reorderEducation]": (prev)=>{
                    const items = [
                        ...prev.education
                    ];
                    const [moved] = items.splice(oldIndex, 1);
                    items.splice(newIndex, 0, moved);
                    return {
                        ...prev,
                        education: items
                    };
                }
            }["ResumeProvider.useCallback[reorderEducation]"]);
        }
    }["ResumeProvider.useCallback[reorderEducation]"], []);
    // Section visibility
    const toggleSectionVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[toggleSectionVisibility]": (section)=>{
            setSectionVisibility({
                "ResumeProvider.useCallback[toggleSectionVisibility]": (prev)=>{
                    const updated = {
                        ...prev,
                        [section]: !prev[section]
                    };
                    localStorage.setItem(VISIBILITY_KEY, JSON.stringify(updated));
                    return updated;
                }
            }["ResumeProvider.useCallback[toggleSectionVisibility]"]);
        }
    }["ResumeProvider.useCallback[toggleSectionVisibility]"], []);
    // Version history
    const saveVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[saveVersion]": (name)=>{
            const newVersion = {
                id: Date.now().toString(),
                name,
                date: new Date().toISOString(),
                data: resumeData
            };
            setVersions({
                "ResumeProvider.useCallback[saveVersion]": (prev)=>{
                    const updated = [
                        newVersion,
                        ...prev
                    ].slice(0, 10); // Keep last 10
                    localStorage.setItem(VERSIONS_KEY, JSON.stringify(updated));
                    return updated;
                }
            }["ResumeProvider.useCallback[saveVersion]"]);
        }
    }["ResumeProvider.useCallback[saveVersion]"], [
        resumeData
    ]);
    const loadVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[loadVersion]": (id)=>{
            const version = versions.find({
                "ResumeProvider.useCallback[loadVersion].version": (v)=>v.id === id
            }["ResumeProvider.useCallback[loadVersion].version"]);
            if (version) {
                setResumeData(version.data);
            }
        }
    }["ResumeProvider.useCallback[loadVersion]"], [
        versions
    ]);
    const deleteVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResumeProvider.useCallback[deleteVersion]": (id)=>{
            setVersions({
                "ResumeProvider.useCallback[deleteVersion]": (prev)=>{
                    const updated = prev.filter({
                        "ResumeProvider.useCallback[deleteVersion].updated": (v)=>v.id !== id
                    }["ResumeProvider.useCallback[deleteVersion].updated"]);
                    localStorage.setItem(VERSIONS_KEY, JSON.stringify(updated));
                    return updated;
                }
            }["ResumeProvider.useCallback[deleteVersion]"]);
        }
    }["ResumeProvider.useCallback[deleteVersion]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResumeContext.Provider, {
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
_s(ResumeProvider, "BPmd+l7SjhCBB6y946VQaaL/UtA=");
_c = ResumeProvider;
function useResume() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ResumeContext);
    if (context === undefined) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
}
_s1(useResume, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ResumeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ai-resume-builder/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/ai-resume-builder/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/ai-resume-builder/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/ai-resume-builder/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2d$resume$2d$builder$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/ai-resume-builder/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/ai-resume-builder/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=ai-resume-builder_f3718566._.js.map