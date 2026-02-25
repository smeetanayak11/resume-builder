'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";

export default function BuildPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar stepNumber={6} />
      
      <main className="flex-1 flex">
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={6}
            title="Implementation"
            description="Build the AI Resume Builder application."
          >
            <div className="prose prose-sm max-w-none">
              <h3>Project Setup</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs">
{`npx create-next-app@latest ai-resume-builder
  --typescript
  --tailwind
  --eslint
  --app
  --src-dir
  --import-alias "@/*"
  
npm install lucide-react clsx tailwind-merge`}
              </pre>
              
              <h3>File Structure</h3>
              <pre className="bg-gray-100 p-3 rounded text-xs">
{`src/
  app/
    page.tsx              # Landing page
    builder/page.tsx      # Resume builder
    preview/page.tsx      # Preview & export
    proof/page.tsx        # Submission status
    rb/
      01-problem/page.tsx
      02-market/page.tsx
      ...
  components/
    layout/
      TopBar.tsx
      Navigation.tsx
    forms/
      PersonalInfoForm.tsx
      SummaryForm.tsx
      ExperienceForm.tsx
      EducationForm.tsx
      ProjectsForm.tsx
      SkillsForm.tsx
      LinksForm.tsx
    preview/
      ResumePreview.tsx
    build-track/
      BuildPanel.tsx
      StepContent.tsx
  context/
    ResumeContext.tsx
  types/
    resume.ts
  lib/
    utils.ts`}
              </pre>

              <h3>Key Features Implemented</h3>
              <ul>
                <li>Auto-save to localStorage</li>
                <li>Live preview with 3 templates</li>
                <li>ATS scoring (0-100)</li>
                <li>Bullet discipline guidance</li>
                <li>Skills accordion with categories</li>
                <li>Projects with tech stack tags</li>
                <li>Export (Print/PDF + Copy text)</li>
                <li>Color theme picker</li>
              </ul>
            </div>
          </StepContent>
        </div>

        <BuildPanel stepId="rb_step_6_artifact" nextStep="/rb/07-test" />
      </main>
    </div>
  );
}
