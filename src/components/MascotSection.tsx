"use client";

import { Disc, HelpCircle, Eye, ShieldAlert, Sparkles } from "lucide-react";

export default function MascotSection() {
    return (
        <section id="mascots" className="py-24 bg-[#0a0a0f] relative border-b border-zinc-800/80">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/60 rounded-full text-xs font-mono text-red-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>SHROUDED IN MYSTERY</span>
                    </div>
                    <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase crimson-glow-text">
                        Project Lore & Mascots.
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg font-sans">
                        The characters and mascots of Rock OS are currently shrouded in secrecy. Design and lore work are happening behind closed doors...
                    </p>
                </div>

                {/* Mysterious Lore Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="metal-card rounded-2xl p-8 sm:p-12 border border-red-900/60 space-y-8 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="w-20 h-20 rounded-2xl bg-red-950/60 border border-red-800/80 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                            <Eye className="w-10 h-10 text-red-500 animate-pulse" />
                        </div>

                        <div className="space-y-3 max-w-2xl mx-auto">
                            <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-widest block">
                // CLASSIFIED KERNEL ARCHIVES
                            </span>
                            <h3 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase">
                                Something Heavy Is Brewing.
                            </h3>
                            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                                No mascots have been revealed to the public domain yet. The character universe is currently under active creative development alongside the operating system.
                            </p>
                        </div>

                        {/* Mysterious Teaser Box */}
                        <div className="bg-[#050508] border border-zinc-800 rounded-xl p-6 font-mono text-xs sm:text-sm text-amber-400 max-w-xl mx-auto space-y-2">
                            <span className="text-zinc-500 block uppercase font-bold">// TRANSMISSION RECEIVED</span>
                            <p className="text-white text-base font-bold crimson-glow-text">
                                "BIG plans are coming soon..." 🤘
                            </p>
                        </div>

                        <div className="font-mono text-xs text-zinc-500 flex items-center justify-center gap-2 pt-2">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                            <span>STAY TUNED FOR REVEALS IN UPCOMING RELEASES</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
