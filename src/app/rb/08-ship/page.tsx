'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";

export default function ShipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar stepNumber={8} />
      
      <main className="flex-1 flex">
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={8}
            title="Ship"
            description="Deploy your AI Resume Builder to production."
          >
            <div className="prose prose-sm max-w-none">
              <h3>Deployment Options</h3>
              
              <h4>Option 1: Vercel (Recommended)</h4>
              <pre className="bg-gray-100 p-3 rounded text-xs">
{`# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo to Vercel
# for automatic deployments`}
              </pre>

              <h4>Option 2: Netlify</h4>
              <pre className="bg-gray-100 p-3 rounded text-xs">
{`# Build the app
npm run build

# Deploy dist folder to Netlify
# Or connect GitHub repo`}
              </pre>

              <h3>Pre-Deployment Checklist</h3>
              <ul>
                <li>All tests passing</li>
                <li>No console errors</li>
                <li>Environment variables set (if any)</li>
                <li>Build completes successfully</li>
                <li>All routes working</li>
              </ul>

              <h3>Post-Deployment</h3>
              <ul>
                <li>Test live site</li>
                <li>Verify all features work</li>
                <li>Check mobile responsiveness</li>
                <li>Update /proof page with live links</li>
                <li>Copy final submission</li>
              </ul>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg mt-6">
                <p className="text-sm text-green-900 font-medium">
                  Congratulations! You have completed the AI Resume Builder project.
                </p>
              </div>
            </div>
          </StepContent>
        </div>

        <BuildPanel stepId="rb_step_8_artifact" nextStep="/rb/proof" />
      </main>
    </div>
  );
}
