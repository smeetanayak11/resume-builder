'use client';

import { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Save, RotateCcw, Trash2, Clock, Check } from 'lucide-react';

export function VersionHistory() {
  const { versions, saveVersion, loadVersion, deleteVersion } = useResume();
  const [newVersionName, setNewVersionName] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);
  const [loadedId, setLoadedId] = useState<string | null>(null);

  const handleSave = () => {
    if (newVersionName.trim()) {
      saveVersion(newVersionName.trim());
      setNewVersionName('');
      setShowSaveInput(false);
    }
  };

  const handleLoad = (id: string) => {
    loadVersion(id);
    setLoadedId(id);
    setTimeout(() => setLoadedId(null), 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Version History</h3>
      
      {/* Save New Version */}
      {!showSaveInput ? (
        <button
          onClick={() => setShowSaveInput(true)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors mb-3"
        >
          <Save className="w-3.5 h-3.5" />
          Save Current Version
        </button>
      ) : (
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newVersionName}
            onChange={(e) => setNewVersionName(e.target.value)}
            placeholder="Version name..."
            className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          />
          <button
            onClick={handleSave}
            className="px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      )}

      {/* Versions List */}
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {versions.length === 0 ? (
          <p className="text-xs text-gray-500 text-center py-4">
            No saved versions yet
          </p>
        ) : (
          versions.map((version) => (
            <div
              key={version.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded-md group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-900 truncate">
                  {version.name}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatDate(version.date)}
                </p>
              </div>
              <div className="flex items-center gap-1 ml-2">
                <button
                  onClick={() => handleLoad(version.id)}
                  className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  title="Load version"
                >
                  {loadedId === version.id ? (
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  ) : (
                    <RotateCcw className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={() => deleteVersion(version.id)}
                  className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete version"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {versions.length > 0 && (
        <p className="text-xs text-gray-500 mt-3">
          Last {versions.length} versions saved (max 10)
        </p>
      )}
    </div>
  );
}
