'use client';

import { useResume } from '@/context/ResumeContext';

export function SummaryForm() {
  const { resumeData, updateSummary } = useResume();
  const { summary } = resumeData;

  const wordCount = summary.trim().split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Professional Summary</h3>
        <span className={`text-xs ${
          wordCount >= 40 && wordCount <= 120 ? 'text-green-600' : 'text-gray-500'
        }`}>
          {wordCount} words
        </span>
      </div>
      
      <textarea
        value={summary}
        onChange={(e) => updateSummary(e.target.value)}
        placeholder="Write a compelling summary of your professional background and key achievements..."
        rows={5}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
      
      <p className="text-xs text-gray-500">
        Target: 40-120 words. Highlight your key achievements and skills.
      </p>
    </div>
  );
}
