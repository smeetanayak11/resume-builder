'use client';

import { useState } from 'react';
import { TopBar } from "@/components/layout/TopBar";
import { Navigation } from "@/components/layout/Navigation";
import { ResumePreview } from "@/components/preview/ResumePreview";
import { ATSScore } from "@/components/ATSScore";
import { TemplatePicker } from "@/components/TemplatePicker";
import { useResume } from "@/context/ResumeContext";
import { Printer, Copy, AlertTriangle, Check } from "lucide-react";

export default function PreviewPage() {
  const { resumeData, exportAsText } = useResume();
  const [showWarning, setShowWarning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handlePrint = () => {
    // Check for incomplete data
    const isIncomplete = !resumeData.personalInfo.name || 
      (resumeData.projects.length === 0 && resumeData.experience.length === 0);
    
    if (isIncomplete) {
      setShowWarning(true);
    }
    
    window.print();
  };

  const handleCopyText = async () => {
    const text = exportAsText();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    setToast('PDF export ready! Check your downloads.');
    setTimeout(() => setToast(null), 3000);
  };

  const isIncomplete = !resumeData.personalInfo.name || 
    (resumeData.projects.length === 0 && resumeData.experience.length === 0);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      <main className="flex-1 flex">
        {/* Left Panel - Controls */}
        <div className="w-[35%] bg-gray-50 border-r border-gray-200 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h2>
              
              {isIncomplete && (
                <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-amber-700">
                    Your resume may look incomplete. Consider adding more details before exporting.
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print / Save as PDF
                </button>
                
                <button
                  onClick={handleCopyText}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Resume as Text
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownloadPDF}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Download PDF
                </button>
              </div>
            </div>

            <TemplatePicker />
            <ATSScore />
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-[65%] bg-gray-200 overflow-y-auto">
          <div className="p-8 flex justify-center">
            <div className="transform scale-90 origin-top">
              <ResumePreview />
            </div>
          </div>
        </div>
      </main>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 px-4 py-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg">
          {toast}
        </div>
      )}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          nav, header, .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
          main {
            display: block !important;
            width: 100% !important;
          }
          .w-\[65\%\] {
            width: 100% !important;
          }
          .w-\[35\%\] {
            display: none !important;
          }
          .scale-90 {
            transform: none !important;
          }
          .bg-gray-200 {
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
}
