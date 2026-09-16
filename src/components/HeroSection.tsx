"use client";

import KernelTerminal from "./KernelTerminal";
import { ChevronRight, Disc, Shield, Cpu, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function HeroSection() {
    const GITHUB_REPO_URL = "https://github.com/AyoubCh9807/RockOS";

    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Background ambient lighting effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-950/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Hero Copy */}
                    <div className="lg:col-span-6 space-y-6 text-left">
                        {/* Status Pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/40 border border-red-900/60 rounded-full text-xs font-mono text-red-400 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span>HANDCRAFTED BARE-METAL C++ & ASSEMBLY OS</span>
                        </div>

                        {/* Primary Headline */}
                        <div className="space-y-2">
                            <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase crimson-glow-text leading-none">
                                ROCK OS
                            </h1>
                            <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-red-500 tracking-wide uppercase">
                                An operating system built from the ground up.
                            </h2>
                        </div>

                        {/* Supporting Copy */}
                        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
                            Rock OS is my hobby 64-bit operating system written in C++ and Assembly. Features direct GOP framebuffer rendering, custom window manager, keyboard/mouse input, shell environment, ATA PIO disk drivers, and physical memory paging.
                        </p>

                        {/* Status Note on Processes */}
                        <div className="p-3.5 bg-red-950/30 border border-red-900/60 rounded-xl font-mono text-xs text-zinc-300 leading-relaxed">
                            <span className="text-red-400 font-bold block mb-1">⚙️ KERNEL INFRASTRUCTURE STATUS:</span>
                            Processes, CPU context switching, and process isolation are mostly implemented in kernel structures, but not currently tested or used by the active desktop. This will be resolved in upcoming kernel revisions.
                        </div>

                        {/* Strong CTAs */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                href="#features"
                                className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-sm rounded-lg border border-red-500/60 shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all hover:shadow-[0_0_35px_rgba(220,38,38,0.7)] flex items-center gap-2 group"
                            >
                                <span>EXPLORE ARCHITECTURE</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href={GITHUB_REPO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-mono font-bold text-sm rounded-lg border border-zinc-700 shadow-lg transition-all flex items-center gap-2 hover:border-zinc-500"
                            >
                                <GithubIcon className="w-4 h-4 text-zinc-300" />
                                <span>VIEW REPO (AyoubCh9807/RockOS)</span>
                            </a>
                        </div>

                        {/* System Telemetry Stats Bar */}
                        <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 text-left font-mono">
                            <div>
                                <span className="block text-xs text-zinc-500 uppercase font-semibold">ARCHITECTURE</span>
                                <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                                    <Cpu className="w-4 h-4 text-red-500" />
                                    x86_64 Long Mode
                                </span>
                            </div>
                            <div>
                                <span className="block text-xs text-zinc-500 uppercase font-semibold">LANGUAGE</span>
                                <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                                    <Disc className="w-4 h-4 text-amber-500" />
                                    C++20 & ASM
                                </span>
                            </div>
                            <div>
                                <span className="block text-xs text-zinc-500 uppercase font-semibold">DEVELOPMENT</span>
                                <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                                    <Sparkles className="w-4 h-4 text-red-500" />
                                    Active (1 Month In)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual: Interactive Kernel Terminal */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative z-10">
                            <KernelTerminal />
                        </div>

                        {/* Decorative background glows */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border border-red-900/30 rounded-xl pointer-events-none -z-10" />
                        <div className="absolute -top-6 -left-6 w-full h-full border border-zinc-800/40 rounded-xl pointer-events-none -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
