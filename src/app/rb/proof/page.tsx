'use client';

import { TopBar } from "@/components/layout/TopBar";
import { BuildPanel } from "@/components/build-track/BuildPanel";
import { StepContent } from "@/components/build-track/StepContent";
import Link from "next/link";

export default function RBProofPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      
      <main className="flex-1 flex">
        <div className="w-[70%] overflow-y-auto">
          <StepContent
            step={0}
            title="Build Track Complete"
            description="Review your progress and submit the project."
          >
            <div className="prose prose-sm max-w-none">
              <h3>Project Submission</h3>
              <p>
                You have completed all 8 steps of the AI Resume Builder build track. 
                Navigate to the main proof page to submit your project.
              </p>

              <Link
                href="/proof"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors mt-4"
              >
                Go to Submission Page
              </Link>

              <h3 className="mt-8">Build Track Summary</h3>
              <ul>
                <li>01 - Problem Definition</li>
                <li>02 - Market Analysis</li>
                <li>03 - System Architecture</li>
                <li>04 - High Level Design</li>
                <li>05 - Low Level Design</li>
                <li>06 - Implementation</li>
                <li>07 - Testing</li>
                <li>08 - Deployment</li>
              </ul>
            </div>
          </StepContent>
        </div>

        <div className="w-[30%] bg-gray-50 border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200 bg-white">
            <h2 className="text-sm font-semibold text-gray-900">Build Track Complete</h2>
          </div>
          <div className="flex-1 p-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-900 font-medium">
                All steps completed!
              </p>
              <p className="text-xs text-green-700 mt-1">
                Navigate to /proof to submit your project.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
