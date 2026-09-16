"use client";

import { useState } from "react";
import { Layers, Cpu, Radio, HardDrive, Layout, Monitor, ChevronDown } from "lucide-react";

interface LayerInfo {
    id: string;
    name: string;
    sub: string;
    icon: any;
    color: string;
    borderColor: string;
    details: {
        role: string;
        files: string[];
        registers: string;
        specs: string;
    };
}

export default function ArchitectureSection() {
    const [activeLayer, setActiveLayer] = useState<string>("kernel");

    const layers: LayerInfo[] = [
        {
            id: "desktop_apps",
            name: "Desktop & Native Applications",
            sub: "RockDesktop, Bouncing DVD, Matrix Rain, Paint (Broken)",
            icon: Monitor,
            color: "text-red-400 bg-red-950/30",
            borderColor: "border-red-800/80",
            details: {
                role: "Provides userland GUI interface, window focus event management, application render loops, and taskbar status bar.",
                files: ["kernel/desktop/desktop.hpp", "kernel/gui/apps/dvd_app.hpp", "kernel/gui/apps/matrix_app.hpp"],
                registers: "Userland General Registers (RAX, RBX, RCX, RDX)",
                specs: "Native C++ binaries, double-buffered ARGB framebuffer rendering",
            },
        },
        {
            id: "gfx_wm",
            name: "Graphics & Window Manager",
            icon: Layout,
            sub: "GOP Linear Framebuffer & RockWM Compositor",
            color: "text-red-400 bg-red-950/30",
            borderColor: "border-red-800/80",
            details: {
                role: "Direct GOP linear framebuffer driver with dirty-region compositing for smooth 60 FPS window redraws.",
                files: ["boot/graphics.hpp", "kernel/gui/window_manager.hpp", "kernel/data/font.hpp"],
                registers: "Framebuffer Base MSR (0xFD000000)",
                specs: "1920x1080 @ 32bpp, double buffer swap, dirty rect clipping",
            },
        },
        {
            id: "mem_fs_drivers",
            name: "Memory / Filesystem / Drivers",
            sub: "PMM Bitmap, VMM Paging, ATA PIO, PS/2 Drivers",
            icon: HardDrive,
            color: "text-red-400 bg-red-950/30",
            borderColor: "border-red-800/80",
            details: {
                role: "Manages physical page frame allocation, virtual page tables, ATA PIO disk sector reads, and PS/2 keyboard/mouse interrupt queues.",
                files: ["kernel/process/frame_allocator.hpp", "kernel/process/page_table.hpp", "kernel/storage/file_system.hpp", "kernel/drivers/keyboard.hpp"],
                registers: "CR3 (Page Directory Base), CR2 (Fault Addr)",
                specs: "4KB Page frame allocator, 4-level PML4→PDPT→PD→PT paging hierarchy, IRQ1 & IRQ12 scancodes",
            },
        },
        {
            id: "kernel",
            name: "Kernel Core (Ring 0)",
            sub: "Monolithic C++ Kernel, GDT/IDT Interrupt Gates, Multitasking Infrastructure",
            icon: Cpu,
            color: "text-red-500 bg-red-950/50",
            borderColor: "border-red-600",
            details: {
                role: "Core Ring 0 execution environment. Handles 256 ISR exception gates, APIC timers, and process/context-switching structures (not currently active in desktop). NOTE: System calls (syscalls) are not implemented yet and planned for future kernel updates.",
                files: ["kernel/core/kernel.cpp", "kernel/core/kernel.hpp", "kernel/core/idt.hpp", "kernel/process/process.hpp"],
                registers: "CR0 (Protected Mode), EFER (Long Mode), RFLAGS",
                specs: "C++20 freestanding, 256 ISR gates, APIC timer @ 1000Hz (Syscalls planned for future)",
            },
        },
        {
            id: "bootloader",
            name: "Bootloader & Entry",
            sub: "Multiboot2 Specification Protocol & ELF Loader",
            icon: Radio,
            color: "text-amber-400 bg-amber-950/30",
            borderColor: "border-amber-800/80",
            details: {
                role: "Initializes hardware environment from GRUB/Multiboot2, parses memory maps, sets up 64-bit Long Mode, and jumps to kmain.",
                files: ["boot/loader.s", "boot/multiboot2.hpp", "boot/link.ld", "isodir/boot/grub/grub.cfg"],
                registers: "EAX (0x36d76289 Multiboot Magic), EBX (Multiboot Addr)",
                specs: "GRUB2 compliance, 64-bit long mode jump",
            },
        },
        {
            id: "hardware",
            name: "x86_64 Bare Metal Hardware",
            sub: "CPU (Intel/AMD), RAM, GOP Framebuffer, APIC, Storage",
            icon: Cpu,
            color: "text-zinc-400 bg-zinc-900",
            borderColor: "border-zinc-700",
            details: {
                role: "Physical or virtualized hardware layer (QEMU, Bochs, Bare Metal x86_64 PC).",
                files: ["my_os.iso", "disk.img", "manual.sh"],
                registers: "Hardware Bus & I/O Ports (0x60, 0x64, 0x1F0-0x1F7)",
                specs: "x86_64 CPU with Long Mode support, 64MB+ RAM, VBE/GOP Video",
            },
        },
    ];

    const current = layers.find((l) => l.id === activeLayer) || layers[3];

    return (
        <section id="architecture" className="py-24 bg-[#0a0a0f] relative border-b border-zinc-800/80">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/15 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/60 rounded-full text-xs font-mono text-red-400">
                        <Layers className="w-3.5 h-3.5" />
                        <span>LAYERED SYSTEM ARCHITECTURE</span>
                    </div>
                    <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase crimson-glow-text">
                        System Architecture.
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg font-sans">
                        From low-level CPU registers and bootloader protocols up to framebuffer compositing and native desktop applications. Click any layer below to inspect details.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Layer Flow Stack Column */}
                    <div className="lg:col-span-6 space-y-3">
                        {layers.map((layer, index) => {
                            const IconComp = layer.icon;
                            const isSelected = activeLayer === layer.id;
                            return (
                                <div key={layer.id} className="relative">
                                    <button
                                        onClick={() => setActiveLayer(layer.id)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${isSelected
                                            ? `${layer.borderColor} bg-red-950/30 shadow-[0_0_20px_rgba(220,38,38,0.2)]`
                                            : "border-zinc-800 bg-[#0e0e16] hover:border-zinc-700 hover:bg-[#12121e]"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${layer.color} border border-zinc-700/50`}>
                                                <IconComp className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className={`font-heading font-bold text-sm sm:text-base block ${isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                                                    {layer.name}
                                                </span>
                                                <span className="font-mono text-xs text-zinc-500 block">{layer.sub}</span>
                                            </div>
                                        </div>
                                        {isSelected && (
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#dc2626] animate-pulse" />
                                        )}
                                    </button>

                                    {/* Down Arrow connector between layers except last */}
                                    {index < layers.length - 1 && (
                                        <div className="flex justify-center my-1 opacity-30">
                                            <ChevronDown className="w-4 h-4 text-zinc-500" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Active Layer Inspector Panel */}
                    <div className="lg:col-span-6 sticky top-28">
                        <div className="metal-card rounded-2xl p-6 sm:p-8 space-y-6 metal-border">
                            {/* Header */}
                            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${current.color} border border-red-900/60`}>
                                    <current.icon className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-extrabold text-2xl text-white uppercase">
                                        {current.name}
                                    </h3>
                                    <span className="font-mono text-xs text-red-400">LAYER INSPECTOR</span>
                                </div>
                            </div>

                            {/* Role */}
                            <div className="space-y-1">
                                <span className="font-mono text-xs font-bold text-zinc-400 uppercase">// Layer Responsibility</span>
                                <p className="text-zinc-300 text-sm leading-relaxed font-sans">{current.details.role}</p>
                            </div>

                            {/* Specs */}
                            <div className="space-y-1">
                                <span className="font-mono text-xs font-bold text-zinc-400 uppercase">// Technical Specifications</span>
                                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 font-mono text-xs text-red-400">
                                    {current.details.specs}
                                </div>
                            </div>

                            {/* Registers & Hardware State */}
                            <div className="space-y-1">
                                <span className="font-mono text-xs font-bold text-zinc-400 uppercase">// Hardware & MSR Registers</span>
                                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 font-mono text-xs text-amber-400">
                                    {current.details.registers}
                                </div>
                            </div>

                            {/* Source Files */}
                            <div className="space-y-2">
                                <span className="font-mono text-xs font-bold text-zinc-400 uppercase">// Relevant Code Files</span>
                                <div className="space-y-1.5 font-mono text-xs">
                                    {current.details.files.map((file) => (
                                        <div key={file} className="flex items-center gap-2 bg-[#050508] border border-zinc-800/80 rounded px-3 py-1.5 text-zinc-300">
                                            <span className="text-red-500">►</span>
                                            <span>{file}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
