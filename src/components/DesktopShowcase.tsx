"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Layers, Sparkles, Disc, Palette, Terminal } from "lucide-react";

interface ShowcaseApp {
    id: string;
    name: string;
    tagline: string;
    category: string;
    status: "Functional" | "In Development / Preview" | "In Development / Broken";
    description: string;
    imagePlaceholderText: string;
    customImageSrc?: string;
    icon: any;
    techSpecs: string[];
}

export default function DesktopShowcase() {
    const [activeAppId, setActiveAppId] = useState<string>("rock_ai");

    const apps: ShowcaseApp[] = [
        {
            id: "rock_ai",
            name: "Rock AI (Chat with Rock AI)",
            tagline: "Chat assistant integration: Still in development, preview available",
            category: "EMBEDDED AI",
            status: "In Development / Preview",
            description:
                "An embedded C++ AI chat experience. While full system integration is still under active development, previewing prompt interactions is available within the OS environment.",
            imagePlaceholderText: "PNG PREVIEW UNAVAILABLE — COMING SOON",
            customImageSrc: "", // Set custom image path here e.g. /images/rock_ai.png
            icon: Sparkles,
            techSpecs: [
                "100% C++ implementation (zero Python dependencies)",
                "Prompt token parsing and natural language interaction",
                "Direct GUI window chat thread rendering",
                "Experimental preview currently accessible",
            ],
        },
        {
            id: "dvd",
            name: "Bouncing DVD App",
            tagline: "Bouncing 'Rock OS!' animation and boundary collision physics",
            category: "ANIMATION DEMO",
            status: "Functional",
            description:
                "A classic bouncing logo application. Moves across window boundaries, shifting colors on edge contact to validate frame rates and dirty rectangle invalidation.",
            imagePlaceholderText: "PNG PREVIEW UNAVAILABLE — COMING SOON",
            customImageSrc: "", // Set custom image path here e.g. /images/dvd.png
            icon: Disc,
            techSpecs: [
                "2D velocity vector physics loop",
                "Color spectrum shifting on window edge contact",
                "Continuous 60 FPS window surface refresh",
                "Simple, stupid, and beautiful",
            ],
        },
        {
            id: "matrix",
            name: "Matrix Code Rain App",
            tagline: "Digital green code rain effect running inside a GUI window",
            category: "VISUAL EFFECT",
            status: "Functional",
            description:
                "A visual application rendering streams of digital green characters dropping down a window canvas, testing fast text blitting and vertical scrolling buffers.",
            imagePlaceholderText: "PNG PREVIEW UNAVAILABLE — COMING SOON",
            customImageSrc: "", // Set custom image path here e.g. /images/matrix.png
            icon: Terminal,
            techSpecs: [
                "Random character glyph stream generation",
                "Fading green color intensity buffers",
                "Fast custom font pixel blitting",
                "Smooth multi-column animation loop",
            ],
        },
        {
            id: "paint",
            name: "Paint Application",
            tagline: "Pixel drawing canvas: Currently broken",
            category: "CREATIVE UTILITY",
            status: "In Development / Broken",
            description:
                "A pixel-based drawing application. Currently broken and undergoing active refactoring to fix mouse event buffer synchronization and canvas redraw bugs.",
            imagePlaceholderText: "PNG PREVIEW UNAVAILABLE — COMING SOON",
            customImageSrc: "",
            icon: Palette,
            techSpecs: [
                "Pixel coordinate array mapping (under repair)",
                "Mouse drag coordinate handling",
                "Marked for full rewrite in upcoming update",
            ],
        },
    ];

    const currentApp = apps.find((a) => a.id === activeAppId) || apps[0];
    const AppIcon = currentApp.icon;

    return (
        <section id="desktop" className="py-24 bg-[#0a0a0f] relative border-b border-zinc-800/80">
            {/* Background Lighting */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/60 rounded-full text-xs font-mono text-red-400">
                        <Monitor className="w-3.5 h-3.5" />
                        <span>DESKTOP SHOWCASE & APPLICATIONS</span>
                    </div>
                    <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase crimson-glow-text">
                        Desktop & Applications.
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg font-sans">
                        Explore native GUI applications built for the Rock OS window manager.
                    </p>
                </div>

                {/* Process Infrastructure Status Banner */}
                <div className="mb-12 bg-[#0e0e16] border border-amber-900/60 rounded-2xl p-5 flex items-start gap-4 shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Layers className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
                        <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
                            <span>PROCESS ISOLATION & CONTEXT SWITCHING STATUS</span>
                        </div>
                        <p className="text-zinc-300 leading-relaxed font-sans text-xs sm:text-sm">
                            Processes, context switching, and process isolation are mostly implemented in the kernel code, but are <strong>not currently tested nor used by the desktop environment</strong>. Active development is focused heavily on desktop polish, window management, and application stability. This will be resolved in future updates.
                        </p>
                    </div>
                </div>

                {/* App Selector Tabs */}
                <div className="flex items-center justify-center gap-2 flex-wrap mb-10 font-mono text-xs">
                    {apps.map((app) => {
                        const IconC = app.icon;
                        const isActive = activeAppId === app.id;
                        return (
                            <button
                                key={app.id}
                                onClick={() => setActiveAppId(app.id)}
                                className={`px-4 py-2.5 rounded-xl border flex items-center gap-2 transition-all duration-200 cursor-pointer ${isActive
                                    ? "bg-red-950/60 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                                    : "bg-[#0e0e16] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                                    }`}
                            >
                                <IconC className={`w-4 h-4 ${isActive ? "text-red-400" : "text-zinc-500"}`} />
                                <span>{app.name}</span>
                                {app.status === "In Development / Broken" && (
                                    <span className="text-[10px] text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded border border-amber-900">
                                        Broken
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Active Application Screenshot Post & Details */}
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Screenshot Container */}
                    <div className="lg:col-span-7">
                        <div className="metal-card rounded-2xl p-4 sm:p-5 border border-zinc-800 space-y-3 shadow-2xl relative overflow-hidden">
                            {/* Screenshot Frame Header */}
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-xs">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-600/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-amber-600/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-emerald-600/80 inline-block" />
                                    <span className="text-zinc-400 font-bold ml-2">// {currentApp.name}</span>
                                </div>
                                <span
                                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${currentApp.status === "Functional"
                                        ? "bg-emerald-950 text-emerald-400 border-emerald-800"
                                        : currentApp.status === "In Development / Preview"
                                            ? "bg-amber-950 text-amber-400 border-amber-800"
                                            : "bg-red-950 text-red-400 border-red-800"
                                        }`}
                                >
                                    {currentApp.status}
                                </span>
                            </div>

                            {/* Screenshot Image Frame with Empty Image Placeholder */}
                            <div className="relative aspect-[16/10] w-full rounded-xl bg-[#050508] border border-zinc-800/80 overflow-hidden flex flex-col items-center justify-center p-4 text-center group">
                                {currentApp.customImageSrc ? (
                                    <Image src={currentApp.customImageSrc} alt={currentApp.name} fill className="object-cover" />
                                ) : (
                                    <div className="relative w-full h-full flex flex-col items-center justify-center space-y-3">
                                        <Image
                                            src="/images/placeholder.svg"
                                            alt="Screenshot Placeholder"
                                            fill
                                            className="object-contain p-2 opacity-30 group-hover:opacity-50 transition-opacity"
                                        />
                                        <div className="relative z-10 bg-[#09090e]/95 border border-amber-900/60 rounded-xl p-4 backdrop-blur-md max-w-md pointer-events-none text-center space-y-2 shadow-xl">
                                            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800 mx-auto flex items-center justify-center">
                                                <AppIcon className="w-5 h-5 text-amber-400" />
                                            </div>
                                            <span className="font-heading font-extrabold text-sm text-white block uppercase">
                                                {currentApp.name}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/80 border border-amber-800 text-amber-400 rounded-full font-mono text-[11px] font-bold">
                                                <span>📸 PNG PREVIEW UNAVAILABLE • COMING SOON</span>
                                            </span>
                                            <p className="font-mono text-[10px] text-zinc-400 leading-relaxed">
                                                Official PNG screenshot previews for this application will be uploaded in an upcoming release.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Application Details Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-2">
                            <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-widest">
                // {currentApp.category}
                            </span>
                            <h3 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase flex items-center gap-2">
                                {currentApp.name}
                            </h3>
                            <p className="text-zinc-300 font-mono text-xs text-amber-400 font-medium">
                                "{currentApp.tagline}"
                            </p>
                        </div>

                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                            {currentApp.description}
                        </p>

                        {/* Technical Capabilities */}
                        <div className="space-y-2 bg-[#0e0e16] border border-zinc-800 rounded-xl p-5 font-mono text-xs">
                            <span className="font-bold text-zinc-400 uppercase tracking-wider block border-b border-zinc-800 pb-2">
                                Technical Highlights
                            </span>
                            <ul className="space-y-2 pt-1 text-zinc-300">
                                {currentApp.techSpecs.map((spec, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-red-500 shrink-0 font-bold">►</span>
                                        <span>{spec}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
