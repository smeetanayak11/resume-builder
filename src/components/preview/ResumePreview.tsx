'use client';

import { useResume } from '@/context/ResumeContext';
import { TemplateType, COLOR_THEMES } from '@/types/resume';
import { Github, Linkedin, Globe, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function ResumePreview() {
  const { resumeData, template, colorTheme, sectionVisibility } = useResume();
  const accentColor = COLOR_THEMES[colorTheme];

  const renderTemplate = () => {
    const props = { data: resumeData, accentColor, sectionVisibility };
    switch (template) {
      case 'modern':
        return <ModernTemplate {...props} />;
      case 'minimal':
        return <MinimalTemplate {...props} />;
      default:
        return <ClassicTemplate {...props} />;
    }
  };

  return (
    <div className="bg-white shadow-lg" style={{ minHeight: '297mm', width: '210mm' }}>
      {renderTemplate()}
    </div>
  );
}

function ClassicTemplate({ data, accentColor, sectionVisibility }: { data: typeof DEFAULT_RESUME_DATA; accentColor: string; sectionVisibility: Record<string, boolean> }) {
  const { personalInfo, summary, education, experience, projects, skills, links } = data;
  const allSkills = [...skills.technical, ...skills.soft, ...skills.tools];

  return (
    <div className="p-8 font-serif">
      {/* Header */}
      <div className="text-center border-b-2 pb-4 mb-4" style={{ borderColor: accentColor }}>
        {personalInfo.name && (
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ color: accentColor }}>
            {personalInfo.name}
          </h1>
        )}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {personalInfo.location}
            </span>
          )}
          {links.linkedin && (
            <a href={links.linkedin} className="flex items-center gap-1 hover:underline" style={{ color: accentColor }}>
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          )}
          {links.github && (
            <a href={links.github} className="flex items-center gap-1 hover:underline" style={{ color: accentColor }}>
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {sectionVisibility.summary && summary && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b" style={{ borderColor: accentColor }}>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {sectionVisibility.experience && experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b" style={{ borderColor: accentColor }}>
            Experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-600">{exp.startDate} – {exp.endDate}</span>
                </div>
                <p className="text-sm text-gray-700">{exp.company}{exp.location && `, ${exp.location}`}</p>
                {exp.bullets.length > 0 && (
                  <ul className="mt-1 space-y-1">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-gray-700 pl-4 relative">
                        <span className="absolute left-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {sectionVisibility.education && education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b" style={{ borderColor: accentColor }}>
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                  <span className="text-sm text-gray-600">{edu.startDate} – {edu.endDate}</span>
                </div>
                <p className="text-sm text-gray-700">{edu.degree} in {edu.field}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {sectionVisibility.projects && projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b" style={{ borderColor: accentColor }}>
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{proj.title}</h3>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} className="text-gray-400 hover:text-gray-600">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-700">{proj.description}</p>
                {proj.techStack.length > 0 && (
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Tech:</span> {proj.techStack.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {sectionVisibility.skills && allSkills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 pb-1 border-b" style={{ borderColor: accentColor }}>
            Skills
          </h2>
          <p className="text-sm text-gray-700">{allSkills.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

function ModernTemplate({ data, accentColor, sectionVisibility }: { data: typeof DEFAULT_RESUME_DATA; accentColor: string; sectionVisibility: Record<string, boolean> }) {
  const { personalInfo, summary, education, experience, projects, skills, links } = data;

  return (
    <div className="flex min-h-full">
      {/* Sidebar */}
      <div className="w-1/3 p-6 text-white" style={{ backgroundColor: accentColor }}>
        {personalInfo.name && (
          <h1 className="text-2xl font-bold mb-4">{personalInfo.name}</h1>
        )}

        <div className="space-y-2 text-sm mb-6">
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
          )}
          {links.linkedin && (
            <a href={links.linkedin} className="flex items-center gap-2 hover:opacity-80">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          )}
          {links.github && (
            <a href={links.github} className="flex items-center gap-2 hover:opacity-80">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>

        {/* Skills in sidebar */}
        {sectionVisibility.skills && (skills.technical.length > 0 || skills.soft.length > 0 || skills.tools.length > 0) && (
          <div>
            <h2 className="text-lg font-bold mb-3 border-b border-white/30 pb-1">Skills</h2>
            {skills.technical.length > 0 && (
              <div className="mb-3">
                <h3 className="font-semibold text-sm mb-1">Technical</h3>
                <p className="text-xs opacity-90">{skills.technical.join(', ')}</p>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div className="mb-3">
                <h3 className="font-semibold text-sm mb-1">Soft Skills</h3>
                <p className="text-xs opacity-90">{skills.soft.join(', ')}</p>
              </div>
            )}
            {skills.tools.length > 0 && (
              <div>
                <h3 className="font-semibold text-sm mb-1">Tools</h3>
                <p className="text-xs opacity-90">{skills.tools.join(', ')}</p>
              </div>
            )}
          </div>
        )}

        {/* Education in sidebar */}
        {sectionVisibility.education && education.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3 border-b border-white/30 pb-1">Education</h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-semibold text-sm">{edu.school}</h3>
                  <p className="text-xs opacity-90">{edu.degree}</p>
                  <p className="text-xs opacity-75">{edu.startDate} – {edu.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white">
        {/* Summary */}
        {sectionVisibility.summary && summary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2" style={{ color: accentColor }}>
              Professional Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {sectionVisibility.experience && experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3" style={{ color: accentColor }}>Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-sm text-gray-600">{exp.company} | {exp.startDate} – {exp.endDate}</p>
                  {exp.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-gray-700 pl-4 relative">
                          <span className="absolute left-0" style={{ color: accentColor }}>•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {sectionVisibility.projects && projects.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: accentColor }}>Projects</h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{proj.title}</h3>
                    {proj.githubUrl && (
                      <a href={proj.githubUrl} className="text-gray-400 hover:text-gray-600">
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-700">{proj.description}</p>
                  {proj.techStack.length > 0 && (
                    <p className="text-sm text-gray-600 mt-1">{proj.techStack.join(' • ')}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MinimalTemplate({ data, accentColor, sectionVisibility }: { data: typeof DEFAULT_RESUME_DATA; accentColor: string; sectionVisibility: Record<string, boolean> }) {
  const { personalInfo, summary, education, experience, projects, skills, links } = data;
  const allSkills = [...skills.technical, ...skills.soft, ...skills.tools];

  return (
    <div className="p-10 font-sans">
      {/* Header */}
      <div className="mb-8">
        {personalInfo.name && (
          <h1 className="text-4xl font-light text-gray-900 mb-3 tracking-tight">{personalInfo.name}</h1>
        )}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {links.linkedin && <a href={links.linkedin} className="hover:text-gray-900 transition-colors">LinkedIn</a>}
          {links.github && <a href={links.github} className="hover:text-gray-900 transition-colors">GitHub</a>}
        </div>
      </div>

      {/* Summary */}
      {sectionVisibility.summary && summary && (
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {sectionVisibility.experience && experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-400">{exp.startDate} – {exp.endDate}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{exp.company}</p>
                {exp.bullets.length > 0 && (
                  <ul className="space-y-1">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-gray-600 pl-3 relative">
                        <span className="absolute left-0 text-gray-300">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {sectionVisibility.education && education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-medium text-gray-900">{edu.school}</h3>
                  <p className="text-sm text-gray-500">{edu.degree} in {edu.field}</p>
                </div>
                <span className="text-sm text-gray-400">{edu.startDate} – {edu.endDate}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {sectionVisibility.projects && projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Projects</h2>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="font-medium text-gray-900 mb-1">{proj.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{proj.description}</p>
                {proj.techStack.length > 0 && (
                  <p className="text-sm text-gray-400">{proj.techStack.join(', ')}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {sectionVisibility.skills && allSkills.length > 0 && (
        <div>
          <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Skills</h2>
          <p className="text-sm text-gray-600">{allSkills.join('  ·  ')}</p>
        </div>
      )}
    </div>
  );
}

// Import for type reference
import { DEFAULT_RESUME_DATA } from '@/types/resume';
