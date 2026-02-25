'use client';

import { useState } from 'react';
import { Keyboard, X } from 'lucide-react';

const shortcuts = [
  { key: 'Ctrl + S', description: 'Save current version' },
  { key: 'Ctrl + P', description: 'Print / Export PDF' },
  { key: 'Ctrl + E', description: 'Export as JSON' },
  { key: 'Ctrl + ?', description: 'Show keyboard shortcuts' },
];

export function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
        title="Keyboard shortcuts"
      >
        <Keyboard className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Keyboard Shortcuts</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                {shortcuts.map((shortcut) => (
                  <div key={shortcut.key} className="flex items-center justify-between">
                    <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-300 rounded">
                      {shortcut.key}
                    </kbd>
                    <span className="text-sm text-gray-600">{shortcut.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
