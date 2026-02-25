'use client';

import { TopBar } from "@/components/layout/TopBar";
import { Navigation } from "@/components/layout/Navigation";
import { PersonalInfoForm } from "@/components/forms/PersonalInfoForm";
import { SummaryForm } from "@/components/forms/SummaryForm";
import { SkillsForm } from "@/components/forms/SkillsForm";
import { ProjectsForm } from "@/components/forms/ProjectsForm";
import { ExperienceForm } from "@/components/forms/ExperienceForm";
import { EducationForm } from "@/components/forms/EducationForm";
import { LinksForm } from "@/components/forms/LinksForm";
import { ResumePreview } from "@/components/preview/ResumePreview";
import { ATSScore } from "@/components/ATSScore";
import { TemplatePicker } from "@/components/TemplatePicker";
import { DataManager } from "@/components/DataManager";
import { SectionVisibility } from "@/components/SectionVisibility";
import { VersionHistory } from "@/components/VersionHistory";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { useResume } from "@/context/ResumeContext";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { RotateCcw, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BuilderPage() {
  const { loadSampleData, clearData, saveVersion, exportAsJSON } = useResume();
  const router = useRouter();

  useKeyboardShortcuts([
    { key: 's', ctrl: true, handler: () => saveVersion('Quick Save') },
    { key: 'e', ctrl: true, handler: () => {
      const json = exportAsJSON();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `resume-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }},
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      <main className="flex-1 flex">
        {/* Left Panel - Forms */}
        <div className="w-[45%] overflow-y-auto">
          <div className="p-6 space-y-6 max-w-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Resume Details</h2>
              <div className="flex gap-2">
                <button
                  onClick={loadSampleData}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Load Sample Data
                </button>
                <button
                  onClick={clearData}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Clear
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <section className="bg-white rounded-lg border border-gray-200 p-5">
                <PersonalInfoForm />
              </section>

              <section className="bg-white rounded-lg border border-gray-200 p-5">
                <SummaryForm />
              </section>

              <section className="bg-white rounded-lg border border-gray-200 p-5">
                <LinksForm />
              </section>

              <section className="bg-white rounded-lg border border-gray-200 p-5">
                <EducationForm />
              </section>

              <section className="bg-white rounded-lg border border-gray-200 p-5">
                <ExperienceForm />
              </section>

              <section className="bg-white rounded-lg border border-gray-200 p-5">
                <ProjectsForm />
              </section>

              <section className="bg-white rounded-lg border border-gray-200 p-5">
                <SkillsForm />
              </section>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-[55%] bg-gray-100 border-l border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <TemplatePicker />
              <ATSScore />
              <SectionVisibility />
              <VersionHistory />
              <DataManager />
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ResumePreview />
              </div>
            </div>
          </div>
        </div>
      </main>
      <KeyboardShortcuts />
    </div>
  );
}
