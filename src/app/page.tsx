import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Build a Resume That Gets Read.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Create a professional, ATS-optimized resume with our intelligent builder. 
            Real-time preview, smart suggestions, and beautiful templates.
          </p>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Building
          </Link>
        </div>
      </main>
    </div>
  );
}
