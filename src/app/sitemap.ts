import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.updatedIso);
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/download/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.4 },
  ];
}
