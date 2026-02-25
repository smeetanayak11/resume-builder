'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";
import { Check, Square } from "lucide-react";
import { useState } from "react";

const testCases = [
  { id: 1, text: "All form sections save to localStorage" },
  { id: 2, text: "Live preview updates in real-time" },
  { id: 3, text: "Template switching preserves data" },
  { id: 4, text: "Color theme persists after refresh" },
  { id: 5, text: "ATS score calculates correctly" },
  { id: 6, text: "Score updates live on edit" },
  { id: 7, text: "Export buttons work (copy/download)" },
  { id: 8, text: "Empty states handled gracefully" },
  { id: 9, text: "Mobile responsive layout works" },
  { id: 10, text: "No console errors on any page" },
];

export default function TestPage() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleTest = (id: number) => {
    setCompleted(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar stepNumber={7} />
      
      <main className="flex-1 flex">
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={7}
            title="Testing"
            description="Verify all features work correctly."
          >
            <div className="prose prose-sm max-w-none">
              <h3>Test Checklist</h3>
              <p className="text-gray-600">
                Click each item to mark it as tested. All items must pass before shipping.
              </p>

              <div className="space-y-2 mt-4">
                {testCases.map((test) => {
                  const isCompleted = completed.includes(test.id);
                  return (
                    <button
                      key={test.id}
                      onClick={() => toggleTest(test.id)}
                      className={`w-full flex items-center gap-3 p-3 text-left rounded-lg border transition-all ${
                        isCompleted
                          ? 'bg-green-50 border-green-200'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${isCompleted ? 'text-green-900' : 'text-gray-700'}`}>
                        {test.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900 font-medium">
                  Progress: {completed.length} / {testCases.length} tests passed
                </p>
                <div className="mt-2 h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all"
                    style={{ width: `${(completed.length / testCases.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </StepContent>
        </div>

        <BuildPanel stepId="rb_step_7_artifact" nextStep="/rb/08-ship" />
      </main>
    </div>
  );
}
