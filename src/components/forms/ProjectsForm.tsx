'use client';

import { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Plus, Trash2, ChevronDown, ChevronUp, X, AlertCircle } from 'lucide-react';

export function ProjectsForm() {
  const { resumeData, addProject, updateProject, removeProject, checkBulletActionVerb, checkBulletNumbers } = useResume();
  const { projects } = resumeData;
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [techInputs, setTechInputs] = useState<Record<string, string>>({});

  const handleAddProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: '',
      description: '',
      techStack: [],
      liveUrl: '',
      githubUrl: '',
    };
    addProject(newProject);
    setExpandedId(newProject.id);
  };

  const handleAddTech = (projectId: string) => {
    const value = techInputs[projectId]?.trim();
    if (value) {
      const project = projects.find(p => p.id === projectId);
      if (project && !project.techStack.includes(value)) {
        updateProject(projectId, { techStack: [...project.techStack, value] });
      }
      setTechInputs(prev => ({ ...prev, [projectId]: '' }));
    }
  };

  const handleRemoveTech = (projectId: string, tech: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      updateProject(projectId, { techStack: project.techStack.filter(t => t !== tech) });
    }
  };

  const getBulletGuidance = (text: string) => {
    const issues: string[] = [];
    if (!checkBulletActionVerb(text)) {
      issues.push('Start with a strong action verb.');
    }
    if (!checkBulletNumbers(text)) {
      issues.push('Add measurable impact (numbers).');
    }
    return issues;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Projects</h3>
        <button
          onClick={handleAddProject}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Project
        </button>
      </div>

      <div className="space-y-2">
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;
          const descIssues = project.description ? getBulletGuidance(project.description) : [];

          return (
            <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    {project.title || 'Untitled Project'}
                  </span>
                  {descIssues.length > 0 && !isExpanded && (
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeProject(project.id);
                    }}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="p-4 space-y-4 bg-white">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Project Title</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => updateProject(project.id, { title: e.target.value })}
                      placeholder="E-commerce Platform"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Description
                      <span className="text-gray-400 font-normal ml-1">({project.description.length}/200)</span>
                    </label>
                    <textarea
                      value={project.description}
                      onChange={(e) => updateProject(project.id, { description: e.target.value.slice(0, 200) })}
                      placeholder="Describe your project and its impact..."
                      rows={3}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                    {descIssues.map((issue, idx) => (
                      <p key={idx} className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {issue}
                      </p>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Tech Stack</label>
                    <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-md min-h-[42px] mb-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-white border border-gray-200 rounded-full"
                        >
                          {tech}
                          <button
                            onClick={() => handleRemoveTech(project.id, tech)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                      <input
                        type="text"
                        value={techInputs[project.id] || ''}
                        onChange={(e) => setTechInputs(prev => ({ ...prev, [project.id]: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddTech(project.id);
                          }
                        }}
                        placeholder="Add tech..."
                        className="flex-1 min-w-[80px] bg-transparent text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Live URL (optional)</label>
                      <input
                        type="url"
                        value={project.liveUrl}
                        onChange={(e) => updateProject(project.id, { liveUrl: e.target.value })}
                        placeholder="https://..."
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">GitHub URL (optional)</label>
                      <input
                        type="url"
                        value={project.githubUrl}
                        onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
                        placeholder="https://github.com/..."
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
