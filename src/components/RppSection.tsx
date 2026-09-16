"use client";

import { Code, Star, ExternalLink, Sparkles, Terminal, ShieldAlert } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function RppSection() {
    const GITHUB_REPO_URL = "https://github.com/AyoubCh9807/RockOS";

    const canonicalSnippet = `// Rock Power Script (.rpp) — Official 100 GitHub Stars Goal
// Canonical Overdrive Directive Syntax

rock() {
  metal
}

shred main() {
  riff status = 1;
  kprint("Rock Power Script — Coming Soon!");
  rock() {
    metal
  }
}`;

    return (
        <section id="rpp" className="py-24 bg-[#08080d] relative border-b border-zinc-800/80">
            {/* Background Lighting */}
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/40 border border-amber-900/60 rounded-full text-xs font-mono text-amber-400">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>COMMUNITY MILESTONE • 100 GITHUB STARS GOAL</span>
                    </div>
                    <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase crimson-glow-text">
                        RPP Language (Coming Soon).
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg font-sans">
                        If Rock OS reaches <strong>100 GitHub stars</strong>, an embedded <code className="text-red-400 font-mono">.rpp</code> (Rock Power Script) language will be integrated directly into the operating system.
                    </p>
                </div>

                {/* Coming Soon Status Banner */}
                <div className="mb-12 bg-[#0e0e16] border border-amber-900/60 rounded-2xl p-6 space-y-3 font-mono text-xs sm:text-sm text-zinc-300">
                    <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
                        <ShieldAlert className="w-4 h-4" />
                        <span>DEVELOPMENT STATUS // CURRENTLY BACKING DOWN ON RPP</span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed font-sans">
                        Only a small experimental fraction of the RPP language parser has been implemented so far. Development is currently focused on core kernel stability, window management, and native desktop applications. RPP will be expanded once the OS reaches its 100 GitHub stars milestone!
                    </p>
                </div>

                {/* Showcase Grid */}
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Canonical Overdrive Hero Code Card */}
                    <div className="lg:col-span-7">
                        <div className="metal-card rounded-2xl p-6 sm:p-8 space-y-4 metal-border shadow-2xl">
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 font-mono text-xs">
                                <div className="flex items-center gap-2 text-red-400">
                                    <Code className="w-4 h-4" />
                                    <span>main.rpp</span>
                                </div>
                                <span className="text-amber-400 font-bold bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-900">
                                    COMING SOON
                                </span>
                            </div>

                            <pre className="bg-[#050508] border border-zinc-800 rounded-xl p-5 font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto leading-relaxed selection:bg-red-900">
                                <code>{canonicalSnippet}</code>
                            </pre>

                            <div className="font-mono text-xs text-zinc-500 pt-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-amber-500" />
                                <span>Canonical Overdrive Directive (`rock() {"{ metal }"}`)</span>
                            </div>
                        </div>
                    </div>

                    {/* 100 Stars Milestone Card */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="metal-card rounded-2xl p-6 sm:p-8 space-y-6 metal-border">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-amber-950/50 border border-amber-800 flex items-center justify-center">
                                    <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-extrabold text-2xl text-white uppercase">
                                        100 Stars Goal
                                    </h3>
                                    <span className="font-mono text-xs text-amber-400">STAR THE REPO TO UNLOCK</span>
                                </div>
                            </div>

                            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                                Help Rock OS reach 100 stars on GitHub to unlock full native language support directly inside the kernel environment!
                            </p>

                            <a
                                href={GITHUB_REPO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-black font-mono font-bold text-sm rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2"
                            >
                                <GithubIcon className="w-4 h-4 fill-black" />
                                <span>STAR ROCK OS ON GITHUB</span>
                                <ExternalLink className="w-4 h-4 opacity-70" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
