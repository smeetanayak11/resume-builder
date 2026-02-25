'use client';

import { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Plus, Trash2, ChevronDown, ChevronUp, X, AlertCircle } from 'lucide-react';

export function ExperienceForm() {
  const { resumeData, addExperience, updateExperience, removeExperience, checkBulletActionVerb, checkBulletNumbers } = useResume();
  const { experience } = resumeData;
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [bulletInputs, setBulletInputs] = useState<Record<string, string>>({});

  const handleAddExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: '',
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      bullets: [],
    };
    addExperience(newExperience);
    setExpandedId(newExperience.id);
  };

  const handleAddBullet = (expId: string) => {
    const value = bulletInputs[expId]?.trim();
    if (value) {
      const exp = experience.find(e => e.id === expId);
      if (exp) {
        updateExperience(expId, { bullets: [...exp.bullets, value] });
      }
      setBulletInputs(prev => ({ ...prev, [expId]: '' }));
    }
  };

  const handleRemoveBullet = (expId: string, index: number) => {
    const exp = experience.find(e => e.id === expId);
    if (exp) {
      updateExperience(expId, { bullets: exp.bullets.filter((_, i) => i !== index) });
    }
  };

  const getBulletGuidance = (bullet: string) => {
    const issues: string[] = [];
    if (!checkBulletActionVerb(bullet)) {
      issues.push('Start with a strong action verb.');
    }
    if (!checkBulletNumbers(bullet)) {
      issues.push('Add measurable impact (numbers).');
    }
    return issues;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Experience</h3>
        <button
          onClick={handleAddExperience}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Experience
        </button>
      </div>

      <div className="space-y-2">
        {experience.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    {exp.title || 'Untitled Position'}
                    {exp.company && <span className="text-gray-500 font-normal"> at {exp.company}</span>}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeExperience(exp.id);
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
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Job Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
                        placeholder="Software Engineer"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                        placeholder="TechCorp Inc."
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                        placeholder="San Francisco, CA"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                        placeholder="Jan 2020"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                        placeholder="Present"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Achievements</label>
                    <div className="space-y-2">
                      {exp.bullets.map((bullet, index) => {
                        const issues = getBulletGuidance(bullet);
                        return (
                          <div key={index} className="group">
                            <div className="flex items-start gap-2 p-2 bg-gray-50 rounded-md">
                              <span className="text-gray-400 mt-0.5">•</span>
                              <span className="flex-1 text-sm text-gray-700">{bullet}</span>
                              <button
                                onClick={() => handleRemoveBullet(exp.id, index)}
                                className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            {issues.map((issue, idx) => (
                              <p key={idx} className="text-xs text-amber-600 mt-1 ml-4 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {issue}
                              </p>
                            ))}
                          </div>
                        );
                      })}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={bulletInputs[exp.id] || ''}
                          onChange={(e) => setBulletInputs(prev => ({ ...prev, [exp.id]: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddBullet(exp.id);
                            }
                          }}
                          placeholder="Add achievement (press Enter)..."
                          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => handleAddBullet(exp.id)}
                          className="px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
                        >
                          Add
                        </button>
                      </div>
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
