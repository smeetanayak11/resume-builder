'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar stepNumber={3} />
      
      <main className="flex-1 flex">
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={3}
            title="System Architecture"
            description="Design the high-level architecture of the AI Resume Builder."
          >
            <div className="prose prose-sm max-w-none">
              <h3>Tech Stack</h3>
              <ul>
                <li><strong>Framework:</strong> Next.js 14 (App Router)</li>
                <li><strong>Language:</strong> TypeScript</li>
                <li><strong>Styling:</strong> Tailwind CSS</li>
                <li><strong>State:</strong> React Context + localStorage</li>
                <li><strong>Icons:</strong> Lucide React</li>
              </ul>
              
              <h3>Core Components</h3>
              <ul>
                <li><strong>ResumeContext:</strong> Global state management</li>
                <li><strong>Form Components:</strong> Personal info, experience, education, projects, skills</li>
                <li><strong>Preview Components:</strong> Classic, Modern, Minimal templates</li>
                <li><strong>ATS Scoring:</strong> Deterministic scoring engine</li>
                <li><strong>Export System:</strong> Print/PDF and text copy</li>
              </ul>

              <h3>Data Model</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs">
{`ResumeData {
  personalInfo: { name, email, phone, location }
  summary: string
  education: Education[]
  experience: Experience[]
  projects: Project[]
  skills: { technical, soft, tools }
  links: { github, linkedin, website }
}`}
              </pre>
            </div>
          </StepContent>
        </div>

        <BuildPanel stepId="rb_step_3_artifact" nextStep="/rb/04-hld" />
      </main>
    </div>
  );
}
