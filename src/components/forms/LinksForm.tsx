'use client';

import { useResume } from '@/context/ResumeContext';
import { Github, Linkedin, Globe } from 'lucide-react';

export function LinksForm() {
  const { resumeData, updateLinks } = useResume();
  const { links } = resumeData;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">Links</h3>
      
      <div className="space-y-3">
        <div>
          <label className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
            <Github className="w-3.5 h-3.5" />
            GitHub
          </label>
          <input
            type="url"
            value={links.github}
            onChange={(e) => updateLinks('github', e.target.value)}
            placeholder="https://github.com/username"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </label>
          <input
            type="url"
            value={links.linkedin}
            onChange={(e) => updateLinks('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
            <Globe className="w-3.5 h-3.5" />
            Personal Website
          </label>
          <input
            type="url"
            value={links.website}
            onChange={(e) => updateLinks('website', e.target.value)}
            placeholder="https://yourwebsite.com"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}
