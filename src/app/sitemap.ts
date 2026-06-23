import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/mdx";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://avade.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE}/historia`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/procesos`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/hazte-socio`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/libreria`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/quienes-somos`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/aviso-legal`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/privacidad`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/cookies`, changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  const blogPages = getAllPostSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
