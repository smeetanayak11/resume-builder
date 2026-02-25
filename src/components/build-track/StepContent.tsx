'use client';

import { ReactNode } from 'react';

interface StepContentProps {
  step: number;
  title: string;
  description: string;
  children: ReactNode;
}

export function StepContent({ step, title, description, children }: StepContentProps) {
  return (
    <div className="p-8 max-w-4xl">
      {/* Context Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-gray-900 rounded-full">
            {step}
          </span>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
        <p className="text-gray-600 ml-11">{description}</p>
      </div>

      {/* Content */}
      <div className="ml-11">
        {children}
      </div>
    </div>
  );
}
