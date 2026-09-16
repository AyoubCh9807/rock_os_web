"use client";

import { Sparkles, Brain, Cpu, Code, ShieldCheck, Eye, Terminal } from "lucide-react";

export default function RockAiSection() {
    return (
        <section id="ai" className="py-24 bg-[#08080d] relative border-b border-zinc-800/80">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/15 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/60 rounded-full text-xs font-mono text-red-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI DEVELOPMENT & EMBEDDED C++ RESEARCH</span>
                    </div>
                    <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase crimson-glow-text">
                        Rock OS & AI.
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg font-sans">
                        How artificial intelligence is used to accelerate kernel development, plus early research into embedded C++ AI models.
                    </p>
                </div>

                {/* 3 Core Principles Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 font-mono text-xs sm:text-sm">
                    {/* Pillar 1: 100% C++, No Python */}
                    <div className="metal-card rounded-2xl p-6 space-y-4 metal-border">
                        <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800 flex items-center justify-center">
                            <Code className="w-5 h-5 text-red-500" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-white uppercase">
                            100% Native C++ (No Python)
                        </h3>
                        <p className="text-zinc-400 leading-relaxed font-sans text-xs sm:text-sm">
                            All AI integration and research in Rock OS is written entirely in freestanding C++. There are zero Python runtime dependencies or heavy external wrappers.
                        </p>
                    </div>

                    {/* Pillar 2: AI Developed by AI */}
                    <div className="metal-card rounded-2xl p-6 space-y-4 metal-border">
                        <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800 flex items-center justify-center">
                            <Brain className="w-5 h-5 text-amber-400" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-white uppercase">
                            Most of the AI Was Developed by AI
                        </h3>
                        <p className="text-zinc-400 leading-relaxed font-sans text-xs sm:text-sm">
                            I leverage artificial intelligence efficiently and smartly for architecture design, algorithm structuring, and debugging assistance.
                        </p>
                    </div>

                    {/* Pillar 3: Handcrafted Bare Metal Parts */}
                    <div className="metal-card rounded-2xl p-6 space-y-4 metal-border">
                        <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800 flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-white uppercase">
                            Handcrafted Low-Level Core
                        </h3>
                        <p className="text-zinc-400 leading-relaxed font-sans text-xs sm:text-sm">
                            While AI helps with high-level logic, the most tedious bare-metal components—such as PS/2 keyboard/mouse drivers, GDT/IDT ISR gates, and memory frame allocators—are handcrafted directly.
                        </p>
                    </div>
                </div>

                {/* Mysterious Teaser Box */}
                <div className="metal-card rounded-2xl p-8 sm:p-10 border border-red-900/60 text-center space-y-4 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-800 rounded-full text-xs font-mono text-red-400">
                        <Eye className="w-3.5 h-3.5" />
                        <span>AI ARCHITECTURE STATUS</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white uppercase">
                        AI Subsystem Work In Progress
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
                        The full embedded AI architecture is currently under active research and refactoring. Diagrams and interactive simulators have been temporarily hidden until the C++ inference engine matures.
                    </p>
                    <div className="pt-2 font-mono text-sm text-amber-400 font-bold crimson-glow-text">
                        "BIG plans are coming soon..." 🤘
                    </div>
                </div>
            </div>
        </section>
    );
}
