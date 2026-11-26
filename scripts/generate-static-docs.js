const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const publicRoot = path.join(projectRoot, "public");
const outputRoot = path.join(publicRoot, "docs");
const site = require(path.join(projectRoot, "src", "content", "site.json"));
const docs = require(path.join(projectRoot, "src", "content", "docs.json"));
const baseUrl = site.url;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

const styleBlock = `
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: "Inter", "Segoe UI", sans-serif;
    background: #030712;
    color: #e5e7eb;
    line-height: 1.65;
  }
  .container { max-width: 900px; margin: 0 auto; padding: 32px 20px 64px; }
  a { color: #22d3ee; text-decoration: none; }
  a:hover { color: #67e8f9; }
  h1 { font-size: 2rem; line-height: 1.25; margin: 0 0 14px; }
  h2 { font-size: 1.45rem; line-height: 1.3; margin: 34px 0 12px; }
  h3 { font-size: 1.05rem; margin: 0 0 8px; }
  p { margin: 0 0 12px; color: #cbd5e1; }
  .muted { color: #9ca3af; font-size: 0.95rem; }
  .breadcrumbs { margin: 0 0 20px; font-size: 0.95rem; }
  .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 24px; }
  .card { border: 1px solid #374151; border-radius: 12px; padding: 14px; background: #111827; }
  .faq { border: 1px solid #374151; border-radius: 12px; background: #111827; padding: 14px; margin-bottom: 10px; }
  .cta { display: inline-block; margin: 8px 0 4px; padding: 10px 18px; border-radius: 8px; background: #0891b2; color: #fff; font-weight: 600; }
  .cta:hover { background: #06b6d4; color: #fff; }
</style>
`;

const commonHead = ({ title, description, canonicalUrl, keywords, type, markdownUrl }) => `
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)} | ${site.name}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
${keywords.length ? `<meta name="keywords" content="${escapeHtml(keywords.join(", "))}" />` : ""}
<link rel="canonical" href="${canonicalUrl}" />
${markdownUrl ? `<link rel="alternate" type="text/markdown" href="${markdownUrl}" />` : ""}
<link rel="icon" href="${site.image}" />
<meta name="theme-color" content="#0891b2" />
<meta property="og:type" content="${type}" />
<meta property="og:title" content="${escapeHtml(title)} | ${site.name}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:url" content="${canonicalUrl}" />
<meta property="og:image" content="${site.image}" />
<meta property="og:site_name" content="${site.name}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)} | ${site.name}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${site.image}" />
${styleBlock}
`;

const ctaBlock = `<p><a class="cta" href="/">Open CrossCopy</a></p>
<p class="muted">Free, no sign-up. Open the same link on another device to sync text instantly.</p>`;

const writeFile = (filePath, content) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
};

const docUrl = (doc) => `${baseUrl}/docs/${doc.slug}`;
const docMarkdownUrl = (doc) => `${baseUrl}/docs/${doc.slug}.md`;

const breadcrumb = (article) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Docs", item: `${baseUrl}/docs` },
    ...(article
      ? [{ "@type": "ListItem", position: 3, name: article.title, item: docUrl(article) }]
      : [])
  ]
});

const docsIndexSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.name} Documentation`,
  itemListElement: docs.map((doc, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: docUrl(doc),
    name: doc.title
  }))
};

const docsIndexHtml = `<!doctype html>
<html lang="en">
<head>
${commonHead({
  title: "Documentation",
  description:
    "CrossCopy documentation and guides for clipboard sharing, privacy, troubleshooting, and cross-platform text transfer workflows.",
  canonicalUrl: `${baseUrl}/docs`,
  keywords: ["crosscopy docs", "clipboard guides", "cross device text transfer"],
  type: "website"
})}
${jsonLd(breadcrumb(null))}
${jsonLd(docsIndexSchema)}
</head>
<body>
  <main class="container">
    <p class="breadcrumbs"><a href="/">Home</a> / Docs</p>
    <h1>CrossCopy Documentation</h1>
    <p>Practical guides for copying text across devices quickly, safely, and without app installation.</p>
    ${ctaBlock}
    <section class="card-grid" aria-label="Documentation articles">
      ${docs
        .map(
          (doc) => `<article class="card">
            <h2><a href="/docs/${doc.slug}">${escapeHtml(doc.title)}</a></h2>
            <p>${escapeHtml(doc.summary)}</p>
            <p class="muted">${escapeHtml(doc.readingTime)} read · Updated ${escapeHtml(doc.lastUpdated)}</p>
          </article>`
        )
        .join("\n")}
    </section>
  </main>
</body>
</html>`;

writeFile(path.join(outputRoot, "index.html"), docsIndexHtml);

const docToMarkdown = (article) =>
  [
    `# ${article.title}`,
    "",
    `> ${article.summary}`,
    "",
    `Source: ${docUrl(article)}`,
    `Published: ${article.publishedDate} · Updated: ${article.lastUpdated}`,
    "",
    ...article.sections.flatMap((section) => [`## ${section.heading}`, "", ...section.paragraphs.flatMap((p) => [p, ""])]),
    ...(article.faqs?.length
      ? ["## Frequently Asked Questions", "", ...article.faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""])]
      : [])
  ].join("\n");

for (const article of docs) {
  const canonicalUrl = docUrl(article);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: site.image,
    datePublished: article.publishedDate,
    dateModified: article.lastUpdated,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Person", name: site.author.name, url: site.author.url },
    publisher: { "@type": "Organization", name: site.name, url: `${baseUrl}/`, logo: { "@type": "ImageObject", url: site.image } }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (article.faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  const related = docs.filter((doc) => doc.slug !== article.slug).slice(0, 3);

  const html = `<!doctype html>
<html lang="en">
<head>
${commonHead({
  title: article.title,
  description: article.description,
  canonicalUrl,
  keywords: article.keywords || [],
  type: "article",
  markdownUrl: docMarkdownUrl(article)
})}
<meta property="article:published_time" content="${escapeHtml(article.publishedDate)}" />
<meta property="article:modified_time" content="${escapeHtml(article.lastUpdated)}" />
${jsonLd(articleSchema)}
${jsonLd(breadcrumb(article))}
${article.faqs?.length ? jsonLd(faqSchema) : ""}
</head>
<body>
  <main class="container">
    <p class="breadcrumbs"><a href="/">Home</a> / <a href="/docs">Docs</a> / ${escapeHtml(article.title)}</p>
    <article>
      <h1>${escapeHtml(article.title)}</h1>
      <p>${escapeHtml(article.summary)}</p>
      <p class="muted">${escapeHtml(article.readingTime)} read · Published ${escapeHtml(article.publishedDate)} · Updated ${escapeHtml(article.lastUpdated)} · By <a href="${site.author.url}">${escapeHtml(site.author.name)}</a></p>
      ${article.sections
        .map(
          (section) => `
            <section>
              <h2>${escapeHtml(section.heading)}</h2>
              ${section.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n")}
            </section>
          `
        )
        .join("\n")}
    </article>

    ${ctaBlock}

    ${article.faqs?.length
      ? `<section>
          <h2>Frequently Asked Questions</h2>
          ${article.faqs
            .map(
              (faq) => `<div class="faq">
                  <h3>${escapeHtml(faq.question)}</h3>
                  <p>${escapeHtml(faq.answer)}</p>
                </div>`
            )
            .join("\n")}
        </section>`
      : ""}

    <section>
      <h2>Related Guides</h2>
      <div class="card-grid">
        ${related
          .map(
            (doc) => `<a class="card" href="/docs/${doc.slug}">
                <h3>${escapeHtml(doc.title)}</h3>
                <p>${escapeHtml(doc.summary)}</p>
              </a>`
          )
          .join("\n")}
      </div>
    </section>
  </main>
</body>
</html>`;

  writeFile(path.join(outputRoot, article.slug, "index.html"), html);
  writeFile(path.join(outputRoot, `${article.slug}.md`), docToMarkdown(article));
}

const latestUpdate = docs.map((doc) => doc.lastUpdated).sort().pop();
const sitemapEntries = [
  { loc: `${baseUrl}/`, lastmod: latestUpdate },
  { loc: `${baseUrl}/docs`, lastmod: latestUpdate },
  ...docs.map((doc) => ({ loc: docUrl(doc), lastmod: doc.lastUpdated })),
  { loc: `${baseUrl}/info/privacy` },
  { loc: `${baseUrl}/info/terms` }
];

writeFile(
  path.join(publicRoot, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(({ loc, lastmod }) => `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`)
  .join("\n")}
</urlset>
`
);

const llmsIntro = `# ${site.name}

> ${site.description}

- Website: ${baseUrl}/
- Price: free, no account or sign-up
- Platforms: any modern web browser (Android, iOS, iPadOS, Windows, macOS, Linux, ChromeOS)
- Source code: ${site.github}
- Made by: ${site.author.name} (${site.author.url})

## How it works

1. Visit ${baseUrl}/ and you get a new clipboard with its own short link (for example ${baseUrl}/abcde).
2. Paste or type text into it.
3. Open the same link on another device, or scan the QR code shown on the page. The text syncs in real time as you type.
4. You can also choose your own link by typing any name after the domain, such as ${baseUrl}/yourname.

## Good to know

- Text only, no files or images.
- Anyone who has a clipboard's link can read and edit it. Use the random link for anything sensitive, and press Clear when you're done.
- Text is sent over HTTPS and stored in Firebase Realtime Database until it is cleared.
- Works without installing an app, which makes it handy for shared or work computers.
`;

writeFile(
  path.join(publicRoot, "llms.txt"),
  `${llmsIntro}
## Guides

${docs.map((doc) => `- [${doc.title}](${docMarkdownUrl(doc)}): ${doc.summary}`).join("\n")}

## Optional

- [Full text of all guides](${baseUrl}/llms-full.txt)
- [Privacy policy](${baseUrl}/info/privacy)
- [Terms of service](${baseUrl}/info/terms)
`
);

writeFile(
  path.join(publicRoot, "llms-full.txt"),
  `${llmsIntro}
${docs.map((doc) => `\n---\n\n${docToMarkdown(doc)}`).join("\n")}
`
);

console.log(`Generated ${docs.length + 1} docs pages, ${docs.length} markdown docs, sitemap.xml, llms.txt, llms-full.txt`);
