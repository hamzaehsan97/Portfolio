import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = join(projectRoot, "dist");
const serverEntry = pathToFileURL(join(projectRoot, ".prerender", "entry-server.js")).href;
const { render, routeMetadata, routes } = await import(serverEntry);
const template = await readFile(join(outputDir, "index.html"), "utf8");

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function withMetadata(html, pathname, metadata) {
  const canonical = `https://hamzaehsan.com${pathname}`;
  const title = escapeAttribute(metadata.title);
  const description = escapeAttribute(metadata.description);

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`);
}

async function writeRoute(pathname, metadata) {
  const rendered = render(pathname);
  const html = withMetadata(
    template.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`),
    pathname,
    metadata,
  );
  const destination = pathname === "/" ? join(outputDir, "index.html") : join(outputDir, pathname, "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

for (const pathname of routes) {
  await writeRoute(pathname, routeMetadata[pathname]);
}

const notFound = withMetadata(
  template.replace('<div id="root"></div>', `<div id="root">${render("/404/")}</div>`),
  "/404/",
  {
    title: "Page not found — Hamza Ehsan",
    description: "The requested page could not be found.",
  },
).replace(
  '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
  '<meta name="robots" content="noindex, follow" />',
);
await writeFile(join(outputDir, "404.html"), notFound);
await rm(join(projectRoot, ".prerender"), { recursive: true, force: true });
