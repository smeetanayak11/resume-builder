'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";

export default function LLDPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar stepNumber={5} />
      
      <main className="flex-1 flex">
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={5}
            title="Low Level Design"
            description="Detailed component and data structure specifications."
          >
            <div className="prose prose-sm max-w-none">
              <h3>ATS Score Algorithm</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs">
{`Score Breakdown (max 100):
+10 - Name provided
+10 - Email provided  
+10 - Summary > 50 chars
+15 - Summary 40-120 words
+10 - Summary has action verbs
+15 - Experience with bullets
+10 - Education entry
+10 - 5+ skills total
+10 - At least 1 project
+5  - Phone provided
+5  - LinkedIn provided
+5  - GitHub provided`}
              </pre>
              
              <h3>Bullet Discipline Checks</h3>
              <ul>
                <li>Action verb check: Built, Developed, Designed, Implemented, Led, etc.</li>
                <li>Number check: %, X, k, m, b, any digits</li>
              </ul>

              <h3>Template System</h3>
              <ul>
                <li><strong>Classic:</strong> Serif fonts, horizontal rules, centered header</li>
                <li><strong>Modern:</strong> Two-column, colored sidebar, sans-serif</li>
                <li><strong>Minimal:</strong> Single column, no rules, generous whitespace</li>
              </ul>

              <h3>Color Themes</h3>
              <ul>
                <li>Teal: hsl(168, 60%, 40%)</li>
                <li>Navy: hsl(220, 60%, 35%)</li>
                <li>Burgundy: hsl(345, 60%, 35%)</li>
                <li>Forest: hsl(150, 50%, 30%)</li>
                <li>Charcoal: hsl(0, 0%, 25%)</li>
              </ul>
            </div>
          </StepContent>
        </div>

        <BuildPanel stepId="rb_step_5_artifact" nextStep="/rb/06-build" />
      </main>
    </div>
  );
}
