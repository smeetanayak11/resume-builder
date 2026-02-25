'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";

export default function ProblemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar stepNumber={1} />
      
      <main className="flex-1 flex">
        {/* Main Workspace - 70% */}
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={1}
            title="Problem Definition"
            description="Define the core problem your AI Resume Builder solves."
          >
            <div className="prose prose-sm max-w-none">
              <h3>The Problem</h3>
              <p>
                Job seekers struggle to create resumes that pass Applicant Tracking Systems (ATS) 
                and catch recruiters attention. Most resumes are:
              </p>
              <ul>
                <li>Poorly formatted for ATS parsing</li>
                <li>Missing key skills and keywords</li>
                <li>Lacking measurable achievements</li>
                <li>Not optimized for the specific job</li>
              </ul>
              
              <h3>Your Task</h3>
              <p>
                Document the problem statement and user pain points. Research and define 
                who your target users are and what specific challenges they face.
              </p>
            </div>
          </StepContent>
        </div>

        {/* Build Panel - 30% */}
        <BuildPanel stepId="rb_step_1_artifact" nextStep="/rb/02-market" />
      </main>
    </div>
  );
}
