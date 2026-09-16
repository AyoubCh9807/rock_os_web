"use client";

import { Disc, Terminal, Heart, User } from "lucide-react";
import GithubIcon from "./GithubIcon";
import RockOsLogo from "./RockOsLogo";

interface FooterProps {
    onOpenDocs: () => void;
}

export default function Footer({ onOpenDocs }: FooterProps) {
    const GITHUB_REPO_URL = "https://github.com/AyoubCh9807/RockOS";
    const GITHUB_USER_URL = "https://github.com/AyoubCh9807";

    return (
        <footer className="bg-[#050508] border-t border-zinc-800/80 pt-16 pb-12 relative z-10 text-zinc-400 font-mono text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Brand Info */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <RockOsLogo size="md" />
                            <span className="font-heading font-black text-2xl text-white tracking-wider uppercase crimson-glow-text">
                                ROCK OS
                            </span>
                        </div>
                        <p className="text-zinc-400 font-sans text-sm max-w-sm leading-relaxed">
                            “A 64-bit operating system built from scratch in C++ and x86 assembly.”
                            <br />
                            Built by <a href={GITHUB_USER_URL} target="_blank" rel="noopener noreferrer" className="text-red-400 underline">AyoubCh9807</a>.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-800 rounded text-emerald-400 font-mono text-[11px]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>KERNEL STATUS: ONLINE & ACTIVE</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-3">
                        <span className="text-white font-bold uppercase tracking-wider block border-b border-zinc-900 pb-2">
                            Navigation
                        </span>
                        <ul className="space-y-2">
                            <li>
                                <a href="#features" className="hover:text-red-400 transition-colors">
                                    Technical Architecture
                                </a>
                            </li>
                            <li>
                                <a href="#desktop" className="hover:text-red-400 transition-colors">
                                    Desktop & Apps
                                </a>
                            </li>
                            <li>
                                <a href="#architecture" className="hover:text-red-400 transition-colors">
                                    Layer Flow
                                </a>
                            </li>
                            <li>
                                <a href="#rpp" className="hover:text-red-400 transition-colors">
                                    RPP Language (Soon)
                                </a>
                            </li>
                            <li>
                                <a href="#philosophy" className="hover:text-red-400 transition-colors">
                                    Manifesto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Developer / Project Links */}
                    <div className="md:col-span-4 space-y-3">
                        <span className="text-white font-bold uppercase tracking-wider block border-b border-zinc-900 pb-2">
                            Resources & Repository
                        </span>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href={GITHUB_REPO_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                                >
                                    <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                                    <span>GitHub Repo (AyoubCh9807/RockOS)</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={GITHUB_USER_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-400 transition-colors flex items-center gap-1.5 text-red-400"
                                >
                                    <User className="w-3.5 h-3.5" />
                                    <span>Developer Profile (@AyoubCh9807)</span>
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={onOpenDocs}
                                    className="hover:text-red-400 transition-colors flex items-center gap-1.5 text-left"
                                >
                                    <Terminal className="w-3.5 h-3.5 text-red-500" />
                                    <span>Official Repo README & Docs</span>
                                </button>
                            </li>
                            <li>
                                <a
                                    href={`${GITHUB_REPO_URL}/issues`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-400 transition-colors"
                                >
                                    Issue Tracker & Tasks
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
                    <div>
                        © {new Date().getFullYear()} Rock OS by AyoubCh9807. Open source hobby operating system project.
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Rock. Metal. Code. 🤘</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
