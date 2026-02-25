'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Upload, Copy, ExternalLink, Check, AlertCircle } from 'lucide-react';

interface BuildPanelProps {
  stepId: string;
  nextStep: string;
}

export function BuildPanel({ stepId, nextStep }: BuildPanelProps) {
  const [artifact, setArtifact] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'worked' | 'error'>('idle');
  const [copying, setCopying] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Store reference to uploaded file
      setArtifact(file.name);
      localStorage.setItem(stepId, file.name);
    }
  };

  const handleCopyPrompt = () => {
    const prompt = `Build this step of the AI Resume Builder project. Follow the design system and implement all required features.`;
    navigator.clipboard.writeText(prompt);
    setCopying(true);
    setTimeout(() => setCopying(false), 2000);
  };

  const canProceed = artifact !== null;

  return (
    <div className="w-[30%] bg-gray-50 border-l border-gray-200 flex flex-col">
      {/* Context Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="text-sm font-semibold text-gray-900">Build Panel</h2>
        <p className="text-xs text-gray-500 mt-1">Follow the instructions and upload your artifact</p>
      </div>

      {/* Main Build Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Copy Prompt */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Copy This Into Lovable
          </label>
          <textarea
            readOnly
            value="Build this step of the AI Resume Builder project. Follow the design system and implement all required features."
            className="w-full h-24 px-3 py-2 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-md resize-none mb-2"
          />
          <button
            onClick={handleCopyPrompt}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            {copying ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Build Link */}
        <a
          href="https://lovable.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Build in Lovable
        </a>

        {/* Artifact Upload */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Upload Artifact
          </label>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            accept="image/*,.pdf,.txt,.md"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 px-3 py-4 text-xs font-medium text-gray-600 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors"
          >
            <Upload className="w-4 h-4" />
            {artifact || 'Click to upload screenshot/file'}
          </button>
        </div>

        {/* Status */}
        <div className="flex gap-2">
          <button
            onClick={() => setStatus('worked')}
            className={`flex-1 py-2 text-xs font-medium rounded-md transition-colors ${
              status === 'worked'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            It Worked
          </button>
          <button
            onClick={() => setStatus('error')}
            className={`flex-1 py-2 text-xs font-medium rounded-md transition-colors ${
              status === 'error'
                ? 'bg-red-100 text-red-800 border border-red-300'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Error
          </button>
        </div>

        {status === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-red-700">
              Please describe the error and try again, or proceed to the next step.
            </p>
          </div>
        )}
      </div>

      {/* Proof Footer */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <Link
          href={nextStep}
          className={`w-full flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            canProceed
              ? 'text-white bg-gray-900 hover:bg-gray-800'
              : 'text-gray-400 bg-gray-100 cursor-not-allowed'
          }`}
          onClick={(e) => !canProceed && e.preventDefault()}
        >
          Next Step
        </Link>
        {!canProceed && (
          <p className="text-xs text-gray-500 text-center mt-2">
            Upload an artifact to proceed
          </p>
        )}
      </div>
    </div>
  );
}
