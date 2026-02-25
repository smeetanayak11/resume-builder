'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";

export default function MarketPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar stepNumber={2} />
      
      <main className="flex-1 flex">
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={2}
            title="Market Analysis"
            description="Research the resume builder market and identify your competitive advantage."
          >
            <div className="prose prose-sm max-w-none">
              <h3>Market Landscape</h3>
              <p>
                The online resume builder market includes established players like:
              </p>
              <ul>
                <li><strong>Canva</strong> - Design-focused, not ATS-optimized</li>
                <li><strong>Resume.io</strong> - Template-based, limited AI features</li>
                <li><strong>Zety</strong> - Content suggestions, expensive</li>
                <li><strong>Teal</strong> - Job tracking + resume builder</li>
              </ul>
              
              <h3>Differentiation</h3>
              <p>
                Your AI Resume Builder focuses on:
              </p>
              <ul>
                <li>Real-time ATS scoring (deterministic, not AI)</li>
                <li>Bullet discipline guidance</li>
                <li>Live preview with multiple templates</li>
                <li>Clean, distraction-free writing experience</li>
              </ul>
            </div>
          </StepContent>
        </div>

        <BuildPanel stepId="rb_step_2_artifact" nextStep="/rb/03-architecture" />
      </main>
    </div>
  );
}
