"use client";

import { useState } from "react";
import { X, BookOpen, Terminal, HardDrive, Code, Cpu, Copy, Check, ExternalLink } from "lucide-react";
import GithubIcon from "./GithubIcon";

interface DocsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DocsModal({ isOpen, onClose }: DocsModalProps) {
    const [activeTab, setActiveTab] = useState<"readme" | "techstack" | "roadmap" | "commands">("readme");
    const [copiedCode, setCopiedCode] = useState(false);

    if (!isOpen) return null;

    const GITHUB_REPO_URL = "https://github.com/AyoubCh9807/RockOS";

    const readmeContent = `# 🪨 Rock OS
> A 64-bit operating system built from scratch in C++ and x86 assembly.

🎸 Rock. Metal. Code.

Rock OS is my hobby operating system project, built from scratch to understand what actually happens underneath the software we use every day.
No massive team. No existing desktop environment. No prebuilt kernel.
Just me, C++, assembly, a lot of debugging, and an unreasonable amount of rock music.

## What is Rock OS?
Rock OS started as a small kernel experiment and has grown into a 64-bit OS with:
- 🖥️ A graphical desktop & custom window manager
- 🎨 Framebuffer graphics (direct ARGB blitting)
- ⌨️ PS/2 Keyboard input & 🖱️ PS/2 Mouse input
- 📋 Taskbar & 🖼️ Custom wallpapers
- 💻 Custom terminal and shell environment
- 💾 ATA PIO storage driver
- 🧠 Physical memory management (PMM bitmap) & Paging (PML4→PDPT→PD→PT)
- 📄 Experimental filesystem infrastructure
- ⚙️ Process and context-switching infrastructure (in kernel codebase)
- 🎲 Native GUI apps (Dice, DVD bouncing app, Paint app, Tyrant utility)

## Processes Notice
Rock OS already contains process control blocks, CPU register context tracking (RAX-R15, RIP, RSP, RFLAGS), page tables, and scheduler ticks in the kernel code.
Currently, process infrastructure is not tested nor used by the desktop environment as development is focused on desktop polish, window management, and application stability. This will be resolved in future updates.`;

    const techstackContent = `## 🛠️ Tech Stack & Architecture

| Component | Technology / Implementation |
|---|---|
| Main language | C++20 |
| Low-level code | x86_64 Assembly (NASM) |
| Architecture | x86-64 Long Mode |
| Bootloader | GRUB (Multiboot2 specification) |
| Virtual machine | QEMU / Bochs / Bare Metal |
| Graphics | Linear GOP Framebuffer |
| Input | PS/2 keyboard (IRQ1) + mouse (IRQ12) |
| Storage | ATA PIO Mode |
| Memory | Physical frames bitmap + 4-level paging + kernel heap |
| GUI & WM | Custom RockWM window compositor |
| Shell | Custom Rock Shell |
| Filesystem | Custom / experimental inode block layer |`;

    const commandsContent = `## 💻 Built-in Rock Shell Commands

The Rock OS terminal shell features 25+ commands:

cat         - Read file contents
cd          - Change current directory
clear       - Clear screen buffer
echo        - Print string text
grep        - Pattern match text
head / tail - View top or bottom lines
mkdir/rmdir - Directory management
rm / touch  - File removal and creation
pwd         - Print working directory
calc        - Evaluate math expression (e.g. calc 5 + 3 + 7 * 8)
date        - Display system timestamp
uptime      - View kernel uptime ticks
whoami      - Print active user identity
fortune     - Print random rock quote
seq         - Generate number sequence
repeat      - Repeat input string`;

    const roadmapContent = `## 🗺️ Rock OS Roadmap

### Kernel
- [ ] Expand process lifecycle management & integrate into userspace
- [ ] Improve scheduler & memory management
- [ ] Additional hardware drivers & kernel diagnostics

### Filesystem
- [ ] Expand persistent directories & file operations
- [ ] Storage abstraction layer

### Desktop & Applications
- [ ] Window management polish & input routing
- [ ] Additional native GUI apps & utilities

### Community Goal ⭐
- ⭐ If Rock OS reaches 100 GitHub stars, an embedded .rpp programming language will be integrated into the OS!`;

    const currentCode =
        activeTab === "readme"
            ? readmeContent
            : activeTab === "techstack"
                ? techstackContent
                : activeTab === "commands"
                    ? commandsContent
                    : roadmapContent;

    const handleCopy = () => {
        navigator.clipboard.writeText(currentCode);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-[#0c0c14] border border-red-900/60 rounded-2xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto metal-border">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-red-600 transition-all"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-red-500" />
                        <div>
                            <h3 className="font-heading font-extrabold text-2xl text-white uppercase">
                                Official Rock OS Documentation
                            </h3>
                            <span className="font-mono text-xs text-red-400">PULLED DIRECTLY FROM GITHUB REPO</span>
                        </div>
                    </div>
                    <a
                        href={GITHUB_REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 rounded font-mono text-xs"
                    >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>OPEN REPO</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                </div>

                {/* Docs Navigation Tabs */}
                <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3 overflow-x-auto font-mono text-xs">
                    {[
                        { id: "readme", label: "01. README.md", icon: BookOpen },
                        { id: "techstack", label: "02. Tech Stack", icon: Cpu },
                        { id: "commands", label: "03. Shell Commands", icon: Terminal },
                        { id: "roadmap", label: "04. Roadmap", icon: Code },
                    ].map((tab) => {
                        const IconC = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all whitespace-nowrap ${isActive
                                        ? "bg-red-600 text-white font-bold border border-red-500 shadow-[0_0_12px_rgba(220,38,38,0.3)]"
                                        : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                                    }`}
                            >
                                <IconC className="w-3.5 h-3.5" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Code / Docs Viewer */}
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                    <div className="flex items-center justify-between text-zinc-400">
                        <span className="text-red-400 font-bold">// OFFICIAL GITHUB REPOSITORY SPECIFICATION</span>
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                        >
                            {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            <span>{copiedCode ? "COPIED" : "COPY DOCS"}</span>
                        </button>
                    </div>
                    <pre className="bg-[#050508] border border-zinc-800 rounded-xl p-5 text-zinc-200 overflow-x-auto leading-relaxed selection:bg-red-900 font-sans sm:font-mono text-xs sm:text-sm whitespace-pre-wrap">
                        <code>{currentCode}</code>
                    </pre>
                </div>

                {/* Modal Action Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-zinc-800 font-mono text-xs">
                    <span className="text-zinc-500">ROCK OS REPOSITORY DOCUMENTATION</span>
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold rounded-lg transition-colors"
                    >
                        CLOSE DOCS
                    </button>
                </div>
            </div>
        </div>
    );
}
