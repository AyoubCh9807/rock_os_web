"use client";

import { useState } from "react";
import { Star, GitFork, Terminal, Code, Copy, Check, ExternalLink, ShieldCheck, User } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function GitHubSection() {
    const [copiedClone, setCopiedClone] = useState(false);
    const [copiedBuild, setCopiedBuild] = useState(false);

    const GITHUB_REPO_URL = "https://github.com/AyoubCh9807/RockOS";
    const GITHUB_USER_URL = "https://github.com/AyoubCh9807";

    const cloneCmd = "git clone https://github.com/AyoubCh9807/RockOS.git";
    const buildCmd = "make iso && qemu-system-x86_64 -cdrom build/rockos.iso";

    const handleCopy = (text: string, type: "clone" | "build") => {
        navigator.clipboard.writeText(text);
        if (type === "clone") {
            setCopiedClone(true);
            setTimeout(() => setCopiedClone(false), 2000);
        } else {
            setCopiedBuild(true);
            setTimeout(() => setCopiedBuild(false), 2000);
        }
    };

    return (
        <section id="github" className="py-24 bg-[#08080d] relative border-b border-zinc-800/80">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Callout Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/60 rounded-full text-xs font-mono text-red-400">
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>OPEN SOURCE OPERATING SYSTEM</span>
                    </div>
                    <h2 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-white uppercase crimson-glow-text">
                        Build it. Break it. Repeat.
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg font-sans">
                        Rock OS is completely open source built by <strong>AyoubCh9807</strong>. Inspect the kernel source code, file bug reports, or build your own custom OS utilities.
                    </p>
                </div>

                {/* Quick Commands & Repo Link Cards */}
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Clone & Run Snippets */}
                    <div className="lg:col-span-7 space-y-4 font-mono text-xs sm:text-sm">
                        {/* Command 1: Git Clone */}
                        <div className="bg-[#050508] border border-zinc-800 rounded-xl p-4 space-y-2">
                            <div className="flex items-center justify-between text-zinc-400 text-xs">
                                <span>01. CLONE THE REPOSITORY</span>
                                <button
                                    onClick={() => handleCopy(cloneCmd, "clone")}
                                    className="flex items-center gap-1 text-red-400 hover:text-red-300"
                                >
                                    {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copiedClone ? "COPIED" : "COPY COMMAND"}
                                </button>
                            </div>
                            <pre className="text-red-300 bg-black p-3 rounded border border-zinc-900 overflow-x-auto">
                                <code>{cloneCmd}</code>
                            </pre>
                        </div>

                        {/* Command 2: Build & QEMU */}
                        <div className="bg-[#050508] border border-zinc-800 rounded-xl p-4 space-y-2">
                            <div className="flex items-center justify-between text-zinc-400 text-xs">
                                <span>02. BUILD ISO & LAUNCH IN QEMU</span>
                                <button
                                    onClick={() => handleCopy(buildCmd, "build")}
                                    className="flex items-center gap-1 text-red-400 hover:text-red-300"
                                >
                                    {copiedBuild ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copiedBuild ? "COPIED" : "COPY COMMAND"}
                                </button>
                            </div>
                            <pre className="text-amber-300 bg-black p-3 rounded border border-zinc-900 overflow-x-auto">
                                <code>{buildCmd}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Right: CTA Actions */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="metal-card rounded-2xl p-6 sm:p-8 space-y-6 metal-border">
                            <h3 className="font-heading font-extrabold text-2xl text-white uppercase">
                                Join Development
                            </h3>
                            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                                Explore the C++ kernel code, test desktop window features, report bugs, or star the repository to reach the 100 stars milestone!
                            </p>

                            <div className="space-y-3">
                                <a
                                    href={GITHUB_REPO_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-sm rounded-lg border border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all flex items-center justify-center gap-2"
                                >
                                    <GithubIcon className="w-4 h-4" />
                                    <span>STAR REPO (AyoubCh9807/RockOS)</span>
                                    <ExternalLink className="w-4 h-4 opacity-70" />
                                </a>

                                <a
                                    href={GITHUB_USER_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-mono font-bold text-xs rounded-lg border border-zinc-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    <User className="w-4 h-4 text-red-400" />
                                    <span>VIEW DEVELOPER PROFILE (@AyoubCh9807)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
