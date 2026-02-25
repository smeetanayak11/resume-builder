'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";

export default function HLDPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar stepNumber={4} />
      
      <main className="flex-1 flex">
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={4}
            title="High Level Design"
            description="Define the user flows and page structure."
          >
            <div className="prose prose-sm max-w-none">
              <h3>Routes</h3>
              <ul>
                <li><strong>/</strong> - Landing page with CTA</li>
                <li><strong>/builder</strong> - Two-column form + preview layout</li>
                <li><strong>/preview</strong> - Full preview with export options</li>
                <li><strong>/proof</strong> - Project submission status</li>
              </ul>
              
              <h3>Build Track Routes</h3>
              <ul>
                <li><strong>/rb/01-problem</strong> - Problem definition</li>
                <li><strong>/rb/02-market</strong> - Market analysis</li>
                <li><strong>/rb/03-architecture</strong> - System architecture</li>
                <li><strong>/rb/04-hld</strong> - High level design (this step)</li>
                <li><strong>/rb/05-lld</strong> - Low level design</li>
                <li><strong>/rb/06-build</strong> - Implementation</li>
                <li><strong>/rb/07-test</strong> - Testing checklist</li>
                <li><strong>/rb/08-ship</strong> - Deployment</li>
                <li><strong>/rb/proof</strong> - Final submission</li>
              </ul>

              <h3>User Flow</h3>
              <ol>
                <li>User lands on homepage</li>
                <li>Clicks "Start Building" → /builder</li>
                <li>Fills in resume details (auto-saved)</li>
                <li>Sees live preview and ATS score</li>
                <li>Goes to /preview for export</li>
                <li>Prints or copies resume</li>
              </ol>
            </div>
          </StepContent>
        </div>

        <BuildPanel stepId="rb_step_4_artifact" nextStep="/rb/05-lld" />
      </main>
    </div>
  );
}
