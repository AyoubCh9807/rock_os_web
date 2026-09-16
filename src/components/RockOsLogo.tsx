"use client";

import Image from "next/image";
import { Disc } from "lucide-react";

interface RockOsLogoProps {
    size?: "sm" | "md" | "lg";
    customImageSrc?: string; // Optional user image path once set up
}

export default function RockOsLogo({ size = "md", customImageSrc }: RockOsLogoProps) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-14 h-14",
    };

    const iconSizes = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-7 h-7",
    };

    if (customImageSrc) {
        return (
            <div className={`relative ${sizeClasses[size]} rounded overflow-hidden border border-red-900/80`}>
                <Image src={customImageSrc} alt="Rock OS Logo" fill className="object-contain" />
            </div>
        );
    }

    return (
        <div
            className={`relative ${sizeClasses[size]} rounded bg-[#0e0e14] border border-red-900/60 flex items-center justify-center group-hover:border-red-600 transition-colors shadow-inner overflow-hidden`}
            title="Rock OS Logo Placeholder (Set custom image in RockOsLogo.tsx)"
        >
            <Disc className={`${iconSizes[size]} text-red-600 group-hover:rotate-180 transition-transform duration-700`} />
            <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
    );
}
