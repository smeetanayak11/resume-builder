'use client';

import { useResume } from '@/context/ResumeContext';

export function ATSScore() {
  const { atsScore, improvements } = useResume();
  const { score, suggestions } = atsScore;

  const getScoreColor = () => {
    if (score <= 40) return 'text-red-600';
    if (score <= 70) return 'text-amber-600';
    return 'text-green-600';
  };

  const getScoreLabel = () => {
    if (score <= 40) return 'Needs Work';
    if (score <= 70) return 'Getting There';
    return 'Strong Resume';
  };

  const getScoreBg = () => {
    if (score <= 40) return 'stroke-red-600';
    if (score <= 70) return 'stroke-amber-600';
    return 'stroke-green-600';
  };

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">ATS Readiness Score</h3>
      
      <div className="flex items-center gap-6">
        {/* Circular Progress */}
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              className={getScoreBg()}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.3s ease' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-2xl font-bold ${getScoreColor()}`}>{score}</span>
            <span className="text-xs text-gray-500">/100</span>
          </div>
        </div>

        <div>
          <p className={`text-sm font-medium ${getScoreColor()}`}>{getScoreLabel()}</p>
          <p className="text-xs text-gray-500 mt-1">Based on ATS best practices</p>
        </div>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-700 mb-2">Quick wins:</p>
          <ul className="space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Top 3 Improvements */}
      {improvements.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-700 mb-2">Top 3 Improvements:</p>
          <ul className="space-y-2">
            {improvements.map((item) => (
              <li
                key={item.id}
                className="text-xs text-gray-600 flex items-start gap-2 p-2 bg-gray-50 rounded"
              >
                <span className={`mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  item.priority === 'high' ? 'bg-red-400' : 'bg-amber-400'
                }`} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
