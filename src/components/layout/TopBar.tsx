'use client';

import { usePathname } from 'next/navigation';

interface TopBarProps {
  projectName?: string;
  stepNumber?: number;
  totalSteps?: number;
  status?: 'active' | 'completed' | 'pending';
}

export function TopBar({
  projectName = 'AI Resume Builder',
  stepNumber = 1,
  totalSteps = 8,
  status = 'active',
}: TopBarProps) {
  const pathname = usePathname();
  const isBuildRoute = pathname?.startsWith('/rb/');

  const getStatusBadge = () => {
    switch (status) {
      case 'completed':
        return (
          <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            Completed
          </span>
        );
      case 'active':
        return (
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            In Progress
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
            Pending
          </span>
        );
    }
  };

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-semibold text-gray-900 tracking-wide">
          {projectName}
        </h1>
      </div>

      {isBuildRoute && (
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-sm text-gray-500">
            Project 3 — Step {stepNumber} of {totalSteps}
          </span>
        </div>
      )}

      <div className="flex items-center gap-4">
        {getStatusBadge()}
      </div>
    </header>
  );
}
