"use client";

import { useState } from "react";
import { Cpu, HardDrive, Terminal, Layout, Layers, ShieldAlert, Radio, Wrench, Sparkles, X, Code, Check, ExternalLink } from "lucide-react";
import GithubIcon from "./GithubIcon";

interface TechModule {
    id: string;
    title: string;
    category: string;
    tagline: string;
    icon: any;
    status: "Implemented" | "In Infrastructure" | "In Development" | "Experimental";
    description: string;
    snippetTitle: string;
    snippet: string;
    details: string[];
}

export default function TechCredibilitySection() {
    const [selectedModule, setSelectedModule] = useState<TechModule | null>(null);

    const modules: TechModule[] = [
        {
            id: "kernel_core",
            title: "64-Bit Monolithic Kernel",
            category: "CORE KERNEL",
            tagline: "Multiboot2 GRUB entry & 64-bit Long Mode in C++20",
            icon: Cpu,
            status: "Implemented",
            description:
                "Initializes hardware from GRUB/Multiboot2, sets up GDT/IDT interrupt gates, handles ISR exceptions, APIC timer ticks, and port I/O.",
            snippetTitle: "kernel/core/kernel.cpp",
            snippet: `extern "C" void kmain(uint32_t magic, uint32_t addr) {
    if (magic != MULTIBOOT2_BOOTLOADER_MAGIC) return;
    gdt_init();
    idt_init();
    pmm_init((multiboot_tag_mmap*)addr);
    vmm_init();
    fb_init();
    kprintf("[KERNEL] Rock OS 64-bit Kernel Initialized.\\n");
}`,
            details: [
                "Multiboot2 protocol compliance",
                "256 Interrupt Service Routine (ISR) exception gates",
                "APIC and Programmable Interval Timer (PIT)",
                "Handcrafted C++ freestanding environment without stdlib dependencies",
            ],
        },
        {
            id: "processes",
            title: "Process & Context Infrastructure",
            category: "PROCESS SCHEDULER",
            tagline: "CPU Register Contexts & Task State Structures",
            icon: Layers,
            status: "In Infrastructure",
            description:
                "Contains Process Control Block (PCB) structures, CPU register tracking (RAX-R15, RIP, RSP, RFLAGS), page tables, and scheduler ticks. NOTE: Processes, context switching, and process isolation are mostly implemented in kernel infrastructure but not tested nor used by the desktop environment currently. This will be resolved in future updates.",
            snippetTitle: "kernel/process/process.hpp",
            snippet: `struct cpu_context_t {
    uint64_t rax, rbx, rcx, rdx;
    uint64_t rsi, rdi, rbp;
    uint64_t r8, r9, r10, r11, r12, r13, r14, r15;
    uint64_t rip, rsp, rflags;
};

struct process_t {
    uint32_t pid;
    uint32_t state; // READY, RUNNING, BLOCKED
    cpu_context_t context;
    uint64_t page_directory_cr3;
};`,
            details: [
                "Processes & context switching infrastructure mostly implemented",
                "Currently not tested nor used by the active desktop environment",
                "Full register context preservation for x86_64",
                "Scheduled for full integration in upcoming kernel updates",
            ],
        },
        {
            id: "memory_paging",
            title: "Physical Memory & Paging",
            category: "MEMORY MANAGEMENT",
            tagline: "Bitmap Frame Allocator & PML4→PDPT→PD→PT Paging",
            icon: HardDrive,
            status: "Implemented",
            description:
                "Custom Physical Memory Manager (PMM) tracking 4KiB page frames with bitmap allocation, plus Virtual Memory Manager (VMM) managing 4-level x86_64 paging tables and kernel heap.",
            snippetTitle: "kernel/process/page_table.hpp",
            snippet: `void vmm_map_page(uint64_t virt, uint64_t phys, uint32_t flags) {
    uint64_t pml4_idx = (virt >> 39) & 0x1FF;
    uint64_t pdpt_idx = (virt >> 30) & 0x1FF;
    uint64_t pd_idx   = (virt >> 21) & 0x1FF;
    uint64_t pt_idx   = (virt >> 12) & 0x1FF;

    pml4_t* pml4 = (pml4_t*)get_active_cr3();
    pml4->entries[pml4_idx] = phys | flags | PAGE_PRESENT;
}`,
            details: [
                "Bitmap-based physical frame allocation",
                "4-level x86_64 page table translation (PML4, PDPT, PD, PT)",
                "Kernel heap allocator for dynamic data structures",
                "Page fault ISR handler with faulting address logging",
            ],
        },
        {
            id: "gop_framebuffer",
            title: "GOP Framebuffer Graphics",
            category: "GRAPHICS LAYER",
            tagline: "Direct 32bpp Linear Framebuffer & Primitives",
            icon: Layout,
            status: "Implemented",
            description:
                "Fast linear framebuffer graphics engine supporting double-buffered ARGB pixel operations, rectangles, custom fonts, wallpapers, and GUI surfaces.",
            snippetTitle: "boot/graphics.hpp",
            snippet: `void fb_draw_pixel(uint32_t x, uint32_t y, uint32_t color) {
    if (x >= fb_width || y >= fb_height) return;
    uint32_t* backbuffer = (uint32_t*)fb_back_address;
    backbuffer[y * fb_pitch_pixels + x] = color;
}

void fb_swap_buffers() {
    memcpy((void*)fb_front_address, (void*)fb_back_address, fb_size_bytes);
}`,
            details: [
                "GOP 1920x1080 32-bit linear ARGB framebuffer",
                "Double-buffered backbuffer swap to prevent tearing",
                "Custom font blitting & dirty rect clipping",
                "Fast 32-bit pixel and rectangle drawing primitives",
            ],
        },
        {
            id: "window_manager",
            title: "Custom Window Manager",
            category: "DESKTOP COMPOSITOR",
            tagline: "Window Focus, Titlebars, Taskbar & Mouse Events",
            icon: Layout,
            status: "Implemented",
            description:
                "Tracks application window stack, active window focus, window dragging, titlebar controls, dialog popups, taskbar state, and mouse hover events.",
            snippetTitle: "kernel/gui/window_manager.hpp",
            snippet: `void wm_render_desktop() {
    fb_draw_wallpaper(current_wallpaper);
    for (auto* win : active_windows) {
        wm_draw_window_decorations(win);
        win->render_client_area();
    }
    wm_draw_taskbar();
    wm_draw_mouse_cursor(mouse_x, mouse_y);
    fb_swap_buffers();
}`,
            details: [
                "Focus switching and active window border glow",
                "Titlebar controls, close buttons, and window decorations",
                "Taskbar containing active application icons",
                "Mouse cursor overlay and input event routing",
            ],
        },
        {
            id: "terminal_shell",
            title: "Custom Shell & Commands",
            category: "COMMAND INTERFACE",
            tagline: "Command parsing, math evaluator & 25+ built-in utilities",
            icon: Terminal,
            status: "In Development",
            description:
                "Shell execution logic, command dispatch, and math evaluation backend are fully implemented in kernel code. The shell terminal UI is currently in development and refactoring.",
            snippetTitle: "kernel/shell/shell.hpp",
            snippet: `void shell_execute(const char* cmdline) {
    char** args = parse_cmdline(cmdline);
    if (strcmp(args[0], "calc") == 0) {
        int64_t result = eval_math_expression(args + 1);
        kprintf("Result: %ld\\n", result);
    } else if (strcmp(args[0], "cat") == 0) {
        rockfs_read_and_print(args[1]);
    }
}`,
            details: [
                "Backend shell execution logic & command dispatch completed",
                "Graphical terminal UI currently in active development / refactoring",
                "Math evaluator supporting complex infix expressions (`calc 5 + 3 * 8`)",
                "Utilities: `cat`, `cd`, `echo`, `grep`, `pwd`, `uptime`, `fortune`, `seq`, `whoami`",
            ],
        },
        {
            id: "native_apps",
            title: "Native GUI Applications",
            category: "USERLAND APPS",
            tagline: "Dice, Bouncing DVD, Paint & Tyrant Utilities",
            icon: Wrench,
            status: "Implemented",
            description:
                "Built-in native desktop applications showcasing GUI rendering and input handling: Dice roll simulator, bouncing DVD animation, pixel Paint app, and Tyrant phrase generator.",
            snippetTitle: "kernel/gui/apps/dvd_app.hpp",
            snippet: `void dvd_app_update(window_t* win) {
    dvd_x += dvd_vx;
    dvd_y += dvd_vy;
    if (dvd_x <= 0 || dvd_x + 80 >= win->width) { dvd_vx = -dvd_vx; dvd_color = rand_color(); }
    if (dvd_y <= 0 || dvd_y + 40 >= win->height) { dvd_vy = -dvd_vy; dvd_color = rand_color(); }
    win->draw_text("ROCK OS!", dvd_x, dvd_y, dvd_color);
}`,
            details: [
                "Dice App for testing window rendering and state",
                "Bouncing DVD App with color shifts on edge collision",
                "Paint App for testing mouse drawing & canvas updates",
                "Tyrant phrase generator app for experimental output",
            ],
        },
        {
            id: "ata_storage",
            title: "ATA PIO Disk Driver",
            category: "STORAGE DRIVER",
            tagline: "Direct Hardware Port I/O Disk Sector Read/Write",
            icon: HardDrive,
            status: "Implemented",
            description:
                "Low-level ATA PIO mode storage driver communicating with hard disk controllers over primary and secondary I/O ports (0x1F0-0x1F7).",
            snippetTitle: "kernel/storage/disk.hpp",
            snippet: `void ata_read_sector(uint32_t lba, uint8_t* buffer) {
    outb(0x1F6, 0xE0 | ((lba >> 24) & 0x0F));
    outb(0x1F2, 1);
    outb(0x1F3, (uint8_t)lba);
    outb(0x1F4, (uint8_t)(lba >> 8));
    outb(0x1F5, (uint8_t)(lba >> 16));
    outb(0x1F7, 0x20); // READ SECTORS
    ata_wait_ready();
    insw(0x1F0, buffer, 256);
}`,
            details: [
                "Direct ATA PIO sector read & write operations",
                "LBA28 addressing mode for block storage access",
                "Master & Slave IDE drive detection",
                "Foundation for persistent block storage and filesystems",
            ],
        },
        {
            id: "ps2_input",
            title: "PS/2 Keyboard & Mouse Driver",
            category: "INPUT SUBSYSTEM",
            tagline: "IRQ1 Scancodes & IRQ12 Packet Decoding",
            icon: Radio,
            status: "Implemented",
            description:
                "Interrupt-driven input drivers decoding PS/2 keyboard scancode sets into ASCII characters and PS/2 3-byte mouse packets into X/Y screen coordinates.",
            snippetTitle: "kernel/drivers/keyboard.hpp",
            snippet: `void isr_mouse_handler() {
    uint8_t status = inb(0x64);
    if (status & 0x01) {
        uint8_t data = inb(0x60);
        mouse_buffer[mouse_cycle++] = data;
        if (mouse_cycle == 3) {
            wm_process_mouse_packet(mouse_buffer[0], mouse_buffer[1], mouse_buffer[2]);
            mouse_cycle = 0;
        }
    }
}`,
            details: [
                "IRQ1 keyboard ISR scancode decoder with modifier keys (Shift, Alt, Ctrl)",
                "IRQ12 mouse packet decoder tracking relative delta X/Y and button states",
                "Hardware port 0x60 & 0x64 status register handshake",
                "Direct queueing to desktop window manager input handler",
            ],
        },
        {
            id: "filesystem",
            title: "Experimental Filesystem",
            category: "FILESYSTEM LAYER",
            tagline: "Block Storage, Inode Metadata & Directory Trees",
            icon: HardDrive,
            status: "Experimental",
            description:
                "Experimental filesystem layer incorporating inodes, block allocation maps, file metadata, sector indexing, and directory structures for persistent files.",
            snippetTitle: "kernel/storage/file_system.hpp",
            snippet: `struct rockfs_inode_t {
    uint32_t file_size;
    uint32_t flags;
    uint32_t direct_blocks[12];
};

int rockfs_read_file(const char* path, void* out_buf) {
    rockfs_inode_t inode = find_inode_by_path(path);
    for (int i = 0; i < inode.file_size / BLOCK_SIZE; ++i) {
        ata_read_sector(inode.direct_blocks[i], (uint8_t*)out_buf + i * BLOCK_SIZE);
    }
    return 0;
}`,
            details: [
                "Custom inode-based filesystem design",
                "Directory entry mapping and file path resolution",
                "Sector block allocation bitmap",
                "Active work continuing on file operations and reliability",
            ],
        },
        {
            id: "rock_ai",
            title: "Rock OS AI Simulator",
            category: "EXPERIMENTAL EMBEDDED AI",
            tagline: "On-Device Inference & Kernel Dispatch Concept",
            icon: Sparkles,
            status: "Experimental",
            description:
                "On-device inference concept exploring zero-overhead natural language kernel command dispatching directly inside system memory.",
            snippetTitle: "kernel/ai/rock_ai.hpp",
            snippet: `void ai_dispatch_prompt(const char* prompt) {
    ai_intent_t intent = ai_parse_tokens(prompt);
    if (intent.action == ACTION_KILL_PROCESS) {
        kprintf("[AI DISPATCH] Target PID %d\\n", intent.target_pid);
    }
}`,
            details: [
                "In-kernel prompt-to-syscall translation pipeline concept",
                "Fast token parsing and command intent extraction",
                "Demonstrated in interactive website AI simulator",
                "Experimental ongoing research area",
            ],
        },
        {
            id: "rpp_lang",
            title: "RPP Scripting Language (Soon)",
            category: "ROADMAP (100 STARS GOAL)",
            tagline: "Rock Power Script • Coming Soon",
            icon: Code,
            status: "Experimental",
            description:
                "Milestone project for Rock OS. Planned embedded scripting language inside the OS upon reaching 100 GitHub stars. Only a small foundation implemented currently.",
            snippetTitle: "kernel/rpp/grammar.rpp",
            snippet: `// RPP Language - 100 GitHub Stars Goal (Coming Soon)
rock() {
  metal
}

shred main() {
  kprint("Rock Power Script");
}`,
            details: [
                "Official 100 GitHub Stars community milestone goal",
                "Planned native embedded scripting language inside Rock OS",
                "Currently backing down on implementation to focus on kernel/desktop polish",
                "Coming soon in future release milestone",
            ],
        },
    ];

    return (
        <section id="features" className="py-24 bg-[#08080d] relative border-b border-zinc-800/80">
            {/* Background ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-950/15 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/60 rounded-full text-xs font-mono text-red-400">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>BUILT FROM THE METAL UP • 12 KERNEL MODULES</span>
                    </div>
                    <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase crimson-glow-text">
                        Technical Architecture.
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg font-sans">
                        Inspect the core subsystems built into Rock OS. Click any module below to view the kernel source structure and specifications.
                    </p>
                </div>

                {/* Process Infrastructure Status Callout Banner */}
                <div className="mb-12 bg-[#0e0e16] border border-red-900/60 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Layers className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="space-y-1.5 font-mono text-xs sm:text-sm text-zinc-300">
                        <div className="flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider">
                            <span>SYSTEM ARCHITECTURE NOTICE // PROCESSES & CONTEXT SWITCHING</span>
                        </div>
                        <p className="text-zinc-300 leading-relaxed font-sans text-xs sm:text-sm">
                            Process structures, CPU register tracking, and context switching infrastructure are mostly implemented in the kernel code, but are <strong>not currently tested nor used by the desktop environment</strong>. Active development is currently focused on desktop polish, window management, and application stability. Process integration will be resolved in future updates.
                        </p>
                    </div>
                </div>

                {/* 12 Technical Modules Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((m) => {
                        const IconComp = m.icon;
                        return (
                            <div
                                key={m.id}
                                onClick={() => setSelectedModule(m)}
                                className="metal-card rounded-2xl p-6 space-y-4 metal-border hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                                            {m.category}
                                        </span>
                                        <span
                                            className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${m.status === "Implemented"
                                                ? "bg-emerald-950/80 text-emerald-400 border-emerald-800"
                                                : m.status === "In Infrastructure" || m.status === "In Development"
                                                    ? "bg-amber-950/80 text-amber-400 border-amber-800"
                                                    : "bg-red-950/80 text-red-400 border-red-800"
                                                }`}
                                        >
                                            {m.status}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-red-950/50 border border-red-900/60 flex items-center justify-center group-hover:border-red-600 transition-colors shrink-0">
                                            <IconComp className="w-5 h-5 text-red-500" />
                                        </div>
                                        <h3 className="font-heading font-bold text-lg text-white group-hover:text-red-400 transition-colors">
                                            {m.title}
                                        </h3>
                                    </div>

                                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                                        {m.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between font-mono text-xs text-red-400 group-hover:text-red-300">
                                    <span>INSPECT SUBSYSTEM →</span>
                                    <span className="text-zinc-600 text-[10px]">{m.snippetTitle}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Module Inspector Modal */}
            {selectedModule && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-[#0c0c14] border border-red-900/60 rounded-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto metal-border">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedModule(null)}
                            className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-red-600 transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header */}
                        <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800 flex items-center justify-center">
                                <selectedModule.icon className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <span className="font-mono text-xs text-red-400">{selectedModule.category}</span>
                                <h3 className="font-heading font-extrabold text-2xl text-white uppercase">
                                    {selectedModule.title}
                                </h3>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                            {selectedModule.description}
                        </p>

                        {/* Sneak Peek Code Disclaimer Notice */}
                        <div className="bg-amber-950/20 border border-amber-900/50 rounded-xl p-3 font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between text-amber-300 gap-2">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-amber-400 uppercase shrink-0">⚡ SNEAK PEEK:</span>
                                <span>Code snippet below is an illustrative preview excerpt of the kernel subsystem logic.</span>
                            </div>
                        </div>

                        {/* Code Snippet */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                                <span className="text-red-400">// {selectedModule.snippetTitle}</span>
                                <span>KERNEL C++ IMPLEMENTATION PREVIEW</span>
                            </div>
                            <pre className="bg-[#050508] border border-zinc-800 rounded-xl p-4 font-mono text-xs text-zinc-200 overflow-x-auto leading-relaxed">
                                <code>{selectedModule.snippet}</code>
                            </pre>
                        </div>

                        {/* Technical Bullet Points */}
                        <div className="space-y-2">
                            <span className="font-mono text-xs font-bold text-zinc-400 uppercase">// Subsystem Highlights</span>
                            <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-zinc-300">
                                {selectedModule.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Modal Action */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-zinc-800 font-mono text-xs">
                            <a
                                href="https://github.com/AyoubCh9807/RockOS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-red-600 text-zinc-200 hover:text-white rounded-lg transition-all flex items-center justify-center gap-2 font-bold"
                            >
                                <GithubIcon className="w-4 h-4 text-white" />
                                <span>VIEW FULL CODE ON GITHUB</span>
                                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                            </a>
                            <button
                                onClick={() => setSelectedModule(null)}
                                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold rounded-lg transition-colors"
                            >
                                CLOSE INSPECTOR
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
