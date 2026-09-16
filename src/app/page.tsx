"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechCredibilitySection from "@/components/TechCredibilitySection";
import DesktopShowcase from "@/components/DesktopShowcase";
import RockAiSection from "@/components/RockAiSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import PhilosophySection from "@/components/PhilosophySection";
import MascotSection from "@/components/MascotSection";
import GitHubSection from "@/components/GitHubSection";
import DocsModal from "@/components/DocsModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-red-900 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenDocs={() => setIsDocsOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroSection />
        <TechCredibilitySection />
        <DesktopShowcase />
        <RockAiSection />
        <ArchitectureSection />
        <PhilosophySection />
        <MascotSection />
        <GitHubSection />
      </main>

      {/* Footer */}
      <Footer onOpenDocs={() => setIsDocsOpen(true)} />

      {/* System Documentation Slide-Over / Modal */}
      <DocsModal isOpen={isDocsOpen} onClose={() => setIsDocsOpen(false)} />
    </div>
  );
}
