'use client';

import { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { X, Sparkles, Loader2 } from 'lucide-react';

const SUGGESTED_SKILLS = {
  technical: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'GraphQL', 'Python', 'AWS'],
  soft: ['Team Leadership', 'Problem Solving', 'Communication', 'Adaptability'],
  tools: ['Git', 'Docker', 'AWS', 'Kubernetes', 'Jest', 'Figma', 'VS Code'],
};

export function SkillsForm() {
  const { resumeData, addSkill, removeSkill } = useResume();
  const { skills } = resumeData;
  const [inputs, setInputs] = useState({ technical: '', soft: '', tools: '' });
  const [loading, setLoading] = useState(false);

  const handleAddSkill = (category: keyof typeof skills) => {
    const value = inputs[category].trim();
    if (value && !skills[category].includes(value)) {
      addSkill(category, value);
      setInputs(prev => ({ ...prev, [category]: '' }));
    }
  };

  const handleKeyDown = (category: keyof typeof skills, e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill(category);
    }
  };

  const handleSuggestSkills = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    Object.entries(SUGGESTED_SKILLS).forEach(([category, skillList]) => {
      skillList.forEach(skill => {
        if (!skills[category as keyof typeof skills].includes(skill)) {
          addSkill(category as keyof typeof skills, skill);
        }
      });
    });
    
    setLoading(false);
  };

  const categories: { key: keyof typeof skills; label: string }[] = [
    { key: 'technical', label: 'Technical Skills' },
    { key: 'soft', label: 'Soft Skills' },
    { key: 'tools', label: 'Tools & Technologies' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Skills</h3>
        <button
          onClick={handleSuggestSkills}
          disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Sparkles className="w-3.5 h-3.5" />
          )}
          Suggest Skills
        </button>
      </div>

      {categories.map(({ key, label }) => (
        <div key={key} className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-gray-700">{label}</label>
            <span className="text-xs text-gray-500">({skills[key].length})</span>
          </div>
          
          <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-md min-h-[42px]">
            {skills[key].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-white border border-gray-200 rounded-full"
              >
                {skill}
                <button
                  onClick={() => removeSkill(key, skill)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={inputs[key]}
              onChange={(e) => setInputs(prev => ({ ...prev, [key]: e.target.value }))}
              onKeyDown={(e) => handleKeyDown(key, e)}
              placeholder="Type and press Enter..."
              className="flex-1 min-w-[120px] bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
