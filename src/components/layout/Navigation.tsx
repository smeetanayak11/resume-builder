'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/builder', label: 'Builder' },
  { href: '/preview', label: 'Preview' },
  { href: '/proof', label: 'Proof' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-6">
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              pathname === item.href
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
