import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rock OS: 64-bit Operating System Built from Scratch in C++ & Assembly",
  description:
    "Rock OS is a 64-bit operating system built from scratch in C++ and x86 assembly by AyoubCh9807. Features GOP framebuffer graphics, custom window manager, ATA storage driver, keyboard and mouse drivers.",
  keywords: [
    "Rock OS",
    "AyoubCh9807",
    "operating system from scratch",
    "C++ operating system",
    "custom operating system",
    "hobby operating system",
    "open source operating system",
    "x86_64 operating system",
    "operating system kernel",
    "OS development",
    "build an operating system",
    "Multiboot2 kernel",
    "QEMU operating system",
  ],
  authors: [{ name: "AyoubCh9807", url: "https://github.com/AyoubCh9807" }],
  creator: "AyoubCh9807",
  publisher: "AyoubCh9807",
  metadataBase: new URL("https://rockos.dev"),
  alternates: {
    canonical: "https://rockos.dev",
  },
  openGraph: {
    title: "Rock OS: Built from the Metal Up",
    description:
      "A 64-bit operating system built from scratch in C++ and x86 assembly by AyoubCh9807.",
    url: "https://rockos.dev",
    siteName: "Rock OS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock OS: Operating System Built From Scratch",
    description:
      "64-bit operating system built from scratch in C++ and assembly by AyoubCh9807.",
    creator: "@AyoubCh9807",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        name: "Rock OS",
        codeRepository: "https://github.com/AyoubCh9807/RockOS",
        programmingLanguage: ["C++20", "x86_64 Assembly"],
        runtimePlatform: "x86_64 Bare Metal / QEMU / Bochs",
        targetProduct: {
          "@type": "OperatingSystem",
          name: "Rock OS",
          operatingSystem: "Rock OS (x86_64)",
        },
        author: {
          "@type": "Person",
          name: "AyoubCh9807",
          url: "https://github.com/AyoubCh9807",
        },
        description:
          "A 64-bit operating system built from scratch in C++ and assembly by AyoubCh9807.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable} ${inter.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090b] text-zinc-200 antialiased selection:bg-red-900 selection:text-white relative min-h-screen flex flex-col font-sans overflow-x-hidden">
        {/* Subtle noise pattern */}
        <div className="fixed inset-0 noise-bg pointer-events-none opacity-40 z-50" />
        {/* CRT Scanline overlay */}
        <div className="fixed inset-0 crt-overlay opacity-30 z-50 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
