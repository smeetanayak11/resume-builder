'use client';

import { useState } from 'react';
import { TopBar } from "@/components/layout/TopBar";
import { Navigation } from "@/components/layout/Navigation";
import { Check, Circle, Copy } from "lucide-react";

const steps = [
  { id: '01', name: 'Problem', path: '/rb/01-problem' },
  { id: '02', name: 'Market', path: '/rb/02-market' },
  { id: '03', name: 'Architecture', path: '/rb/03-architecture' },
  { id: '04', name: 'HLD', path: '/rb/04-hld' },
  { id: '05', name: 'LLD', path: '/rb/05-lld' },
  { id: '06', name: 'Build', path: '/rb/06-build' },
  { id: '07', name: 'Test', path: '/rb/07-test' },
  { id: '08', name: 'Ship', path: '/rb/08-ship' },
];

export default function ProofPage() {
  const [links, setLinks] = useState({
    lovable: '',
    github: '',
    deploy: '',
  });
  const [stepStatus, setStepStatus] = useState<Record<string, 'pending' | 'completed'>>({
    '01': 'completed',
    '02': 'completed',
    '03': 'completed',
    '04': 'completed',
    '05': 'completed',
    '06': 'completed',
    '07': 'completed',
    '08': 'pending',
  });
  const [copied, setCopied] = useState(false);

  const handleCopySubmission = () => {
    const submission = `
AI Resume Builder - Final Submission

Lovable Link: ${links.lovable || 'Not provided'}
GitHub Link: ${links.github || 'Not provided'}
Deploy Link: ${links.deploy || 'Not provided'}

Step Completion Status:
${steps.map(s => `${s.id}. ${s.name}: ${stepStatus[s.id] === 'completed' ? '✓' : '○'}`).join('\n')}
    `.trim();
    
    navigator.clipboard.writeText(submission);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      <main className="flex-1 max-w-4xl mx-auto w-full p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Project Proof & Submission</h1>

        {/* Step Status */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Build Track Progress</h2>
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  stepStatus[step.id] === 'completed'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                {stepStatus[step.id] === 'completed' ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
                <div>
                  <p className="text-xs text-gray-500">Step {step.id}</p>
                  <p className={`text-sm font-medium ${
                    stepStatus[step.id] === 'completed' ? 'text-green-900' : 'text-gray-700'
                  }`}>
                    {step.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Links */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Project Links</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Lovable Project Link</label>
              <input
                type="url"
                value={links.lovable}
                onChange={(e) => setLinks(prev => ({ ...prev, lovable: e.target.value }))}
                placeholder="https://lovable.dev/projects/..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">GitHub Repository</label>
              <input
                type="url"
                value={links.github}
                onChange={(e) => setLinks(prev => ({ ...prev, github: e.target.value }))}
                placeholder="https://github.com/username/repo"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Deployed Application</label>
              <input
                type="url"
                value={links.deploy}
                onChange={(e) => setLinks(prev => ({ ...prev, deploy: e.target.value }))}
                placeholder="https://your-app.vercel.app"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopySubmission}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied to Clipboard!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Final Submission
            </>
          )}
        </button>
      </main>
    </div>
  );
}
