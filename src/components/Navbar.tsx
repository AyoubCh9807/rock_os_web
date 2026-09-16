"use client";

import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import GithubIcon from "./GithubIcon";
import RockOsLogo from "./RockOsLogo";

interface NavbarProps {
    onOpenDocs: () => void;
}

export default function Navbar({ onOpenDocs }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const GITHUB_REPO_URL = "https://github.com/AyoubCh9807/RockOS";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["features", "desktop", "ai", "architecture", "philosophy", "mascots", "github"];
            const scrollPos = window.scrollY + 200;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
            if (window.scrollY < 300) setActiveSection("home");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "Desktop", href: "#desktop" },
        { name: "Rock AI", href: "#ai" },
        { name: "Architecture", href: "#architecture" },
        { name: "Philosophy", href: "#philosophy" },
        { name: "Lore", href: "#mascots" },
        { name: "Docs", onClick: onOpenDocs },
        { name: "GitHub", href: "#github" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? "bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Brand Logo & Placeholder */}
                <a
                    href="#home"
                    className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-lg p-1"
                >
                    <RockOsLogo size="md" />
                    <div className="flex flex-col">
                        <span className="font-heading font-extrabold text-xl tracking-wider text-white group-hover:text-red-500 transition-colors flex items-center gap-2">
                            ROCK OS
                            <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_#dc2626]" />
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest -mt-1">
                            x86_64 Kernel
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-1 bg-zinc-900/70 border border-zinc-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.name.toLowerCase().split(" ")[0];
                        if (link.onClick) {
                            return (
                                <button
                                    key={link.name}
                                    onClick={link.onClick}
                                    className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all flex items-center gap-1.5 cursor-pointer"
                                >
                                    <BookOpen className="w-3.5 h-3.5 text-red-500" />
                                    {link.name}
                                </button>
                            );
                        }
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-all ${isActive
                                        ? "text-red-400 bg-red-950/40 border border-red-900/50 shadow-[0_0_12px_rgba(220,38,38,0.2)]"
                                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                                    }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </nav>

                {/* Telemetry pill & GitHub button */}
                <div className="hidden lg:flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-800/80 rounded font-mono text-[11px] text-zinc-400">
                        <span className="inline-flex items-center gap-1 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            ONLINE
                        </span>
                        <span className="text-zinc-700">|</span>
                        <span className="text-zinc-400">RING 0</span>
                    </div>

                    <a
                        href={GITHUB_REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold rounded border border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.7)]"
                    >
                        <GithubIcon className="w-4 h-4" />
                        <span>GITHUB</span>
                    </a>
                </div>

                {/* Mobile menu toggle button */}
                <div className="md:hidden flex items-center gap-2">
                    <a
                        href={GITHUB_REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-300 hover:text-white"
                    >
                        <GithubIcon className="w-5 h-5" />
                    </a>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0c0c12] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="font-mono text-[11px] text-red-500 uppercase tracking-widest px-3 py-1 border-b border-zinc-900 mb-2">
            // Navigation Menu
                    </div>
                    {navLinks.map((link) => {
                        if (link.onClick) {
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        link.onClick?.();
                                        setMobileMenuOpen(false);
                                    }}
                                    className="w-full text-left px-3 py-2 text-sm font-mono text-zinc-300 hover:text-red-400 hover:bg-zinc-900 rounded flex items-center gap-2"
                                >
                                    <BookOpen className="w-4 h-4 text-red-500" />
                                    {link.name}
                                </button>
                            );
                        }
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 text-sm font-mono text-zinc-300 hover:text-red-400 hover:bg-zinc-900 rounded"
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
