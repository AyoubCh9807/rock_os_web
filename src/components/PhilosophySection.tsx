"use client";

import { ShieldAlert, Cpu, Wrench, Compass, Terminal, Check } from "lucide-react";

export default function PhilosophySection() {
    const pillars = [
        {
            title: "Learning by Building",
            desc: "The best way to truly understand an operating system isn't reading about paging tables or GDT structures in a textbook: it's writing the C++ and Assembly code that handles page frames and memory management yourself.",
            icon: Cpu,
        },
        {
            title: "Low-Level Systems",
            desc: "No third-party standard libraries, no Linux kernel runtimes, no hidden magic abstraction layers. Everything in Rock OS is forged directly against x86_64 hardware specifications.",
            icon: Wrench,
        },
        {
            title: "Authentic Experimentation",
            desc: "Rock OS is an active playground for exploring kernels, memory paging algorithms, linear framebuffer double buffering, custom window compositing, and embedded C++ AI research.",
            icon: Compass,
        },
        {
            title: "Gradual Evolution",
            desc: "Systems engineering is an incremental craft. Rock OS evolves commit by commit, driver by driver, moving steadily from bare metal bootloader tags to a responsive windowed desktop.",
            icon: Terminal,
        },
    ];

    return (
        <section id="philosophy" className="py-24 bg-[#08080d] relative border-b border-zinc-800/80">
            {/* Background ambient red glow */}
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-950/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/60 rounded-full text-xs font-mono text-red-400">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>PROJECT MANIFESTO • NO CORPORATE FLUFF</span>
                    </div>
                    <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase crimson-glow-text">
                        Development Philosophy.
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg font-sans">
                        Rock OS isn't a venture-backed commercial product or a marketing pitch. It is a genuine, low-level engineering project built to understand systems from the ground up.
                    </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {pillars.map((p, idx) => {
                        const IconC = p.icon;
                        return (
                            <div key={idx} className="metal-card rounded-xl p-6 space-y-4 metal-border">
                                <div className="w-10 h-10 rounded-lg bg-red-950/50 border border-red-900/60 flex items-center justify-center">
                                    <IconC className="w-5 h-5 text-red-500" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-white uppercase">
                                    {p.title}
                                </h3>
                                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                                    {p.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Side-by-side Comparison Matrix */}
                <div className="bg-[#0e0e16] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl metal-border">
                    <h3 className="font-heading font-bold text-xl text-white uppercase mb-6 text-center">
                        Rock OS Craft vs. Corporate Hype
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 font-mono text-xs sm:text-sm">
                        {/* Left: Rock OS Philosophy */}
                        <div className="space-y-4 bg-[#08080f] border border-red-900/50 rounded-xl p-5">
                            <span className="font-bold text-red-400 uppercase tracking-widest block border-b border-red-900/60 pb-2">
                                ✓ THE ROCK OS WAY
                            </span>
                            <ul className="space-y-3 text-zinc-300">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <span>Handcrafted C++20 & x86_64 Assembly for direct hardware interaction.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <span>Built from scratch: Custom PMM bitmap allocator, GOP Framebuffer, and RockWM.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <span>Transparent source code: Every interrupt vector and memory tag is inspectable.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <span>Open community invitation: Build it, break it, fix it, and learn together.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right: What we avoid */}
                        <div className="space-y-4 bg-[#08080f] border border-zinc-800 rounded-xl p-5">
                            <span className="font-bold text-zinc-500 uppercase tracking-widest block border-b border-zinc-800 pb-2">
                                ✕ WHAT WE REFUSE TO DO
                            </span>
                            <ul className="space-y-3 text-zinc-500">
                                <li className="flex items-start gap-2">
                                    <span className="text-zinc-600 font-bold shrink-0">✕</span>
                                    <span>No corporate buzzwords ("disruptive ecosystem", "next-gen AI platform").</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-zinc-600 font-bold shrink-0">✕</span>
                                    <span>No hidden Linux runtime layers pretending to be a custom OS.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-zinc-600 font-bold shrink-0">✕</span>
                                    <span>No fake user counts, fake performance benchmarks, or fabricated testimonials.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-zinc-600 font-bold shrink-0">✕</span>
                                    <span>No commercial locks or proprietary licensing games.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
