import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://rockos.dev";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            // Prevent AI web crawlers and scraping bots
            {
                userAgent: [
                    "GPTBot",
                    "ChatGPT-User",
                    "CCBot",
                    "ClaudeBot",
                    "Claude-Web",
                    "Anthropic-ai",
                    "PerplexityBot",
                    "Google-Extended",
                    "ByteSpider",
                    "Diffbot",
                    "FacebookBot",
                ],
                disallow: "/",
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
