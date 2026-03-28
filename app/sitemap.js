import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = "https://www.ammotioncars.com";

const routes = [
  { pathname: "/", changeFrequency: "weekly", priority: 1.0, file: "app/page.js" },
  { pathname: "/services", changeFrequency: "monthly", priority: 0.9, file: "app/services/page.js" },
  { pathname: "/nos-packs", changeFrequency: "monthly", priority: 0.9, file: "app/nos-packs/page.js" },
  { pathname: "/tarifs", changeFrequency: "monthly", priority: 0.8, file: "app/tarifs/page.js" },
  { pathname: "/a-propos", changeFrequency: "monthly", priority: 0.8, file: "app/a-propos/page.js" },
  { pathname: "/contact", changeFrequency: "monthly", priority: 0.9, file: "app/contact/page.js" },
  { pathname: "/evenements", changeFrequency: "monthly", priority: 0.8, file: "app/evenements/page.js" },
  { pathname: "/pages/mentions-legales", changeFrequency: "yearly", priority: 0.3, file: "app/pages/mentions-legales/page.js" },
  { pathname: "/pages/politique-confidentialite", changeFrequency: "yearly", priority: 0.3, file: "app/pages/politique-confidentialite/page.js" },
  { pathname: "/pages/CGU", changeFrequency: "yearly", priority: 0.3, file: "app/pages/CGU/page.js" },
];

async function getLastModified(file) {
  try {
    const fullPath = path.join(process.cwd(), file);
    const stats = await fs.stat(fullPath);
    return stats.mtime;
  } catch {
    return new Date();
  }
}

export default async function sitemap() {
  const entries = await Promise.all(
    routes.map(async (route) => ({
      url: `${baseUrl}${route.pathname}`,
      lastModified: await getLastModified(route.file),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  );

  return entries;
}
