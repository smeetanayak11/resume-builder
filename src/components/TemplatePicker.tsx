'use client';

import { useResume } from '@/context/ResumeContext';
import { TemplateType, ColorTheme, COLOR_THEMES } from '@/types/resume';
import { Check } from 'lucide-react';

const templates: { id: TemplateType; name: string; description: string }[] = [
  { id: 'classic', name: 'Classic', description: 'Traditional single-column, serif headings, horizontal rules' },
  { id: 'modern', name: 'Modern', description: 'Two-column with colored sidebar, main content right' },
  { id: 'minimal', name: 'Minimal', description: 'Clean single-column, no borders, generous whitespace' },
];

const colors: { id: ColorTheme; name: string }[] = [
  { id: 'teal', name: 'Teal' },
  { id: 'navy', name: 'Navy' },
  { id: 'burgundy', name: 'Burgundy' },
  { id: 'forest', name: 'Forest' },
  { id: 'charcoal', name: 'Charcoal' },
];

export function TemplatePicker() {
  const { template, setTemplate, colorTheme, setColorTheme } = useResume();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Template</h3>
        <div className="grid grid-cols-3 gap-2">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`relative p-3 rounded-lg border-2 text-left transition-all ${
                template === t.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {template === t.id && (
                <div className="absolute top-1 right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              <div className="w-full h-16 bg-gray-100 rounded mb-2 flex items-center justify-center">
                <TemplateThumbnail type={t.id} />
              </div>
              <p className="text-xs font-medium text-gray-900">{t.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Accent Color</h3>
        <div className="flex gap-2">
          {colors.map((c) => (
            <button
              key={c.id}
              onClick={() => setColorTheme(c.id)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                colorTheme === c.id ? 'border-gray-900 scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: COLOR_THEMES[c.id] }}
              title={c.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TemplateThumbnail({ type }: { type: TemplateType }) {
  if (type === 'classic') {
    return (
      <div className="w-10 h-12 border border-gray-400 p-1">
        <div className="w-full h-2 bg-gray-400 mb-1" />
        <div className="w-3/4 h-1 bg-gray-300 mb-0.5" />
        <div className="w-1/2 h-1 bg-gray-300 mb-1" />
        <div className="w-full h-px bg-gray-400 my-1" />
        <div className="w-full h-1 bg-gray-300 mb-0.5" />
        <div className="w-full h-1 bg-gray-300" />
      </div>
    );
  }

  if (type === 'modern') {
    return (
      <div className="w-10 h-12 border border-gray-400 flex">
        <div className="w-3 h-full bg-gray-400" />
        <div className="flex-1 p-1">
          <div className="w-full h-1 bg-gray-300 mb-0.5" />
          <div className="w-3/4 h-1 bg-gray-300" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-10 h-12 p-1">
      <div className="w-full h-1 bg-gray-300 mb-2" />
      <div className="w-3/4 h-1 bg-gray-300 mb-3" />
      <div className="w-full h-1 bg-gray-300 mb-2" />
      <div className="w-full h-1 bg-gray-300" />
    </div>
  );
}
