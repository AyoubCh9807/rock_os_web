"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, RefreshCw, Cpu, Layers, Disc, Zap } from "lucide-react";

interface TerminalLine {
    id: string;
    type: "cmd" | "output" | "system" | "error" | "ai" | "rpp";
    text: string;
}

export default function KernelTerminal() {
    const [inputVal, setInputVal] = useState("");
    const [history, setHistory] = useState<TerminalLine[]>([
        { id: "1", type: "system", text: "[ 0.000000] Rock OS kernel v0.9.4-alpha booting on x86_64..." },
        { id: "2", type: "system", text: "[ 0.001204] Multiboot2 structure parsed at 0x100000. Memory: 64MB low, 4096MB high." },
        { id: "3", type: "system", text: "[ 0.003410] GDT initialized (0x08 Code, 0x10 Data). IDT loaded with 256 gates." },
        { id: "4", type: "system", text: "[ 0.005120] GOP Linear Framebuffer 1920x1080@32bpp mapped at 0xFD000000." },
        { id: "5", type: "system", text: "[ 0.008912] RockFS v1.0 mounted at root '/'. On-device Rock AI initialized." },
        { id: "6", type: "output", text: "Type 'help' or click quick command buttons below to interact with Rock OS kernel." },
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (cmdStr: string) => {
        const trimmed = cmdStr.trim();
        if (!trimmed) return;

        const newHistory: TerminalLine[] = [
            ...history,
            { id: Date.now().toString(), type: "cmd", text: `rockos@metal:~$ ${trimmed}` },
        ];

        const lower = trimmed.toLowerCase();

        if (lower === "clear") {
            setHistory([]);
            setInputVal("");
            return;
        }

        if (lower === "help") {
            newHistory.push({
                id: (Date.now() + 1).toString(),
                type: "output",
                text: `Available Rock OS Kernel Commands:
  • fetch         - Display Rock OS kernel telemetry & ASCII banner
  • ai <query>    - Query on-device transformer AI model inside kernel
  • rpp           - Compile & execute sample RPP code snippet
  • mem           - Inspect Physical & Virtual Memory Allocator (PMM/VMM)
  • gfx           - Framebuffer driver status & window compositor telemetry
  • boot          - Replay full x86_64 Multiboot2 boot sequence
  • clear         - Clear terminal display`,
            });
        } else if (lower === "fetch" || lower === "neofetch") {
            newHistory.push({
                id: (Date.now() + 1).toString(),
                type: "output",
                text: `      __/\__          OS: Rock OS v0.9.4-alpha x86_64
    /    |   \         Kernel: Custom C++20 Monolithic (Ring 0)
   |  (o)|(o) |        Arch: x86_64 Long Mode (APIC, SSE4.2, AVX2)
   |     |    |        Bootloader: Multiboot2 Specification Compliance
   |    / \   |        Memory: 48.2MB / 4096MB (Buddy PMM / Slab Allocator)
   |   /___\  |        Graphics: GOP Double Buffered Linear Framebuffer
    \________/         FS: RockFS Block Journaled VFS
                       Language: C++20, Assembly, RPP (Rock Power Script)
                       AI Engine: On-Device Transformer (16k Vocab, SIMD)`,
            });
        } else if (lower.startsWith("ai")) {
            const query = trimmed.replace(/^ai\s*/i, "").trim() || "what is rock os?";
            newHistory.push({
                id: (Date.now() + 1).toString(),
                type: "ai",
                text: `[ROCK_AI_INFERENCE] Processing prompt: "${query}"
[ATTENTION_LAYERS] Executing 4-head RoPE transformer inside kernel memory space...
► ROCK AI RESPONSE: "Rock OS is built directly on bare metal x86_64 hardware in C++ and Assembly. No Linux runtime, no POSIX bloat. Just raw low-level kernel power and maximum rock energy."`,
            });
        } else if (lower.startsWith("rpp")) {
            newHistory.push({
                id: (Date.now() + 1).toString(),
                type: "rpp",
                text: `[RPP_COMPILER] Parsing RPP source...
┌──────────────────────────────────────┐
│  rock() {                            │
│    metal                             │
│  }                                   │
└──────────────────────────────────────┘
► RPP EXECUTION SUCCESS: Emitted 32 bytes of x86_64 machine code. Overdrive bit engaged!`,
            });
        } else if (lower === "mem" || lower === "memory") {
            newHistory.push({
                id: (Date.now() + 1).toString(),
                type: "output",
                text: `--- PHYSICAL & VIRTUAL MEMORY MAP ---
[PMM Frame Allocator] Total Frames: 1,048,576 | Free: 1,036,410 (4048 MB)
[Kernel Paging] PML4 at 0x1000, PDPT at 0x2000, PD at 0x3000 (Identity Mapped 0-4GB)
[Slab Allocator] Cache 'kmalloc-32': 512 objects | Cache 'kmalloc-256': 128 objects
[Heap Arena] Virtual Range: 0xC0000000 - 0xC4000000 (Status: OK)`,
            });
        } else if (lower === "gfx" || lower === "framebuffer") {
            newHistory.push({
                id: (Date.now() + 1).toString(),
                type: "output",
                text: `--- GOP FRAMEBUFFER & ROCKWM COMPOSITOR ---
Resolution: 1920 x 1080 @ 32 bpp (ARGB8888)
Pitch: 7680 bytes | Physical Address: 0xFD000000
Double Buffering: ACTIVE (Backbuffer at 0x10000000)
RockWM Windows Active: 4 (RockTerm, SysMon, SpectrumAnalyzer, AmpPlayer)
Render Pipeline: Dirty-rect delta redraws @ 60 FPS`,
            });
        } else if (lower === "boot") {
            newHistory.push({
                id: (Date.now() + 1).toString(),
                type: "system",
                text: `[ 0.000000] Multiboot2 entry point reached at 0x0010000c
[ 0.000100] Setting up 64-bit Long Mode page tables...
[ 0.000350] Loading GDT with 64-bit code/data descriptors...
[ 0.000600] Jumped to long mode kernel main (kmain)
[ 0.001100] Interrupt Descriptor Table (IDT) mapped with ISR exceptions 0-31
[ 0.002000] APIC & LAPIC timer calibrated @ 1000 Hz
[ 0.004000] PS/2 Dual Channel Keyboard & Mouse initialized
[ 0.006500] RockFS mounted successfully. Shell environment ready.`,
            });
        } else {
            newHistory.push({
                id: (Date.now() + 1).toString(),
                type: "error",
                text: `Command not found: '${trimmed}'. Type 'help' for available kernel commands.`,
            });
        }

        setHistory(newHistory);
        setInputVal("");
    };

    return (
        <div className="w-full bg-[#0c0c14] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md metal-border">
            {/* Terminal Titlebar */}
            <div className="bg-[#14141f] px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600/80 border border-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-600/80 border border-emerald-500" />
                    <span className="ml-2 font-mono text-xs font-semibold text-zinc-400 flex items-center gap-2">
                        <TerminalIcon className="w-3.5 h-3.5 text-red-500" />
                        rockos_kernel_terminal_x86_64
                    </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500">
                    <span className="hidden sm:inline text-red-400/80">TTY1</span>
                    <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">
                        64-BIT RING 0
                    </span>
                </div>
            </div>

            {/* Terminal Content Body */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm h-72 sm:h-80 overflow-y-auto space-y-2.5 selection:bg-red-900/60 selection:text-red-100">
                {history.map((line) => {
                    if (line.type === "cmd") {
                        return (
                            <div key={line.id} className="text-red-400 font-semibold flex items-start gap-2">
                                <span className="text-zinc-500 font-normal">►</span>
                                <span>{line.text}</span>
                            </div>
                        );
                    }
                    if (line.type === "system") {
                        return (
                            <div key={line.id} className="text-zinc-400 opacity-90">
                                {line.text}
                            </div>
                        );
                    }
                    if (line.type === "ai") {
                        return (
                            <div key={line.id} className="text-amber-400 bg-amber-950/20 border-l-2 border-amber-500 p-2.5 rounded-r my-1 whitespace-pre-wrap">
                                {line.text}
                            </div>
                        );
                    }
                    if (line.type === "rpp") {
                        return (
                            <div key={line.id} className="text-red-400 bg-red-950/30 border-l-2 border-red-500 p-2.5 rounded-r my-1 font-mono whitespace-pre-wrap">
                                {line.text}
                            </div>
                        );
                    }
                    if (line.type === "error") {
                        return (
                            <div key={line.id} className="text-red-400 font-semibold">
                                {line.text}
                            </div>
                        );
                    }
                    return (
                        <div key={line.id} className="text-zinc-300 whitespace-pre-wrap leading-relaxed">
                            {line.text}
                        </div>
                    );
                })}
                <div ref={bottomRef} />
            </div>

            {/* Terminal Command Input Line */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleCommand(inputVal);
                }}
                className="px-4 py-2.5 bg-[#090910] border-t border-zinc-800/80 flex items-center gap-2"
            >
                <span className="font-mono text-xs font-bold text-red-500 flex items-center gap-1">
                    rockos@metal:~$
                </span>
                <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Type a command (e.g., 'help', 'fetch', 'ai what is rock os', 'rpp', 'mem')..."
                    className="flex-1 bg-transparent text-xs sm:text-sm font-mono text-white focus:outline-none placeholder-zinc-600"
                />
                <button
                    type="submit"
                    className="px-2.5 py-1 bg-red-900/40 hover:bg-red-800/60 border border-red-700/60 rounded text-red-300 font-mono text-xs transition-colors"
                >
                    EXEC
                </button>
            </form>

            {/* Quick Command Action Buttons */}
            <div className="bg-[#101018] px-4 py-2 border-t border-zinc-900 flex items-center gap-2 overflow-x-auto text-xs font-mono">
                <span className="text-zinc-500 text-[11px] whitespace-nowrap">QUICK COMMANDS:</span>
                {[
                    { label: "fetch", cmd: "fetch" },
                    { label: "ai query", cmd: "ai what is rock os?" },
                    { label: "rpp script", cmd: "rpp" },
                    { label: "mem map", cmd: "mem" },
                    { label: "gfx status", cmd: "gfx" },
                    { label: "boot log", cmd: "boot" },
                ].map((btn) => (
                    <button
                        key={btn.label}
                        onClick={() => handleCommand(btn.cmd)}
                        className="px-2.5 py-1 bg-zinc-900 hover:bg-red-950/60 hover:text-red-400 border border-zinc-800 hover:border-red-900 rounded text-zinc-400 transition-all whitespace-nowrap text-[11px]"
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
