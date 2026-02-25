'use client';

import { useResume } from '@/context/ResumeContext';
import { Eye, EyeOff } from 'lucide-react';

const sections = [
  { key: 'summary', label: 'Summary' },
  { key: 'education', label: 'Education' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'skills', label: 'Skills' },
  { key: 'links', label: 'Links' },
];

export function SectionVisibility() {
  const { sectionVisibility, toggleSectionVisibility } = useResume();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Section Visibility</h3>
      
      <div className="space-y-2">
        {sections.map((section) => {
          const isVisible = sectionVisibility[section.key];
          return (
            <button
              key={section.key}
              onClick={() => toggleSectionVisibility(section.key)}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                isVisible
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-gray-50 text-gray-500 border border-gray-200'
              }`}
            >
              <span>{section.label}</span>
              {isVisible ? (
                <Eye className="w-3.5 h-3.5" />
              ) : (
                <EyeOff className="w-3.5 h-3.5" />
              )}
            </button>
          );
        })}
      </div>
      
      <p className="text-xs text-gray-500 mt-3">
        Toggle sections to show/hide them in your resume preview.
      </p>
    </div>
  );
}
