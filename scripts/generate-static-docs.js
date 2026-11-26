const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const docsPath = path.join(projectRoot, "src", "content", "docs.json");
const outputRoot = path.join(projectRoot, "public", "docs");
const baseUrl = "https://crosscopy.xyz";

const docs = JSON.parse(fs.readFileSync(docsPath, "utf8"));

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

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
</style>
`;

const commonHead = (title, description, canonicalUrl, keywords) => `
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)} | CrossCopy</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<meta name="keywords" content="${escapeHtml(keywords.join(", "))}" />
<link rel="canonical" href="${canonicalUrl}" />
<meta property="og:type" content="article" />
<meta property="og:title" content="${escapeHtml(title)} | CrossCopy" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:url" content="${canonicalUrl}" />
<meta property="og:site_name" content="CrossCopy" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)} | CrossCopy" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
${styleBlock}
`;

const writeFile = (filePath, content) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
};

const breadcrumb = (article) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Docs", item: `${baseUrl}/docs` },
    ...(article
      ? [{ "@type": "ListItem", position: 3, name: article.title, item: `${baseUrl}/docs/${article.slug}` }]
      : [])
  ]
});

const docsIndexSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CrossCopy Documentation",
  itemListElement: docs.map((doc, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${baseUrl}/docs/${doc.slug}`,
    name: doc.title
  }))
};

const docsIndexHtml = `<!doctype html>
<html lang="en">
<head>
${commonHead(
  "Documentation",
  "CrossCopy documentation and guides for clipboard sharing, privacy, troubleshooting, and cross-platform text transfer workflows.",
  `${baseUrl}/docs`,
  ["crosscopy docs", "clipboard guides", "cross device text transfer"]
)}
<script type="application/ld+json">${JSON.stringify(breadcrumb(null))}</script>
<script type="application/ld+json">${JSON.stringify(docsIndexSchema)}</script>
</head>
<body>
  <main class="container">
    <p class="breadcrumbs"><a href="/">Home</a> / Docs</p>
    <h1>CrossCopy Documentation</h1>
    <p>Practical guides for copying text across devices quickly, safely, and without app installation.</p>
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

for (const article of docs) {
  const canonicalUrl = `${baseUrl}/docs/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.lastUpdated,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Person", name: "Sharoon Rafeek" },
    publisher: { "@type": "Organization", name: "CrossCopy", url: baseUrl }
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
${commonHead(article.title, article.description, canonicalUrl, article.keywords || [])}
<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
<script type="application/ld+json">${JSON.stringify(breadcrumb(article))}</script>
${article.faqs?.length ? `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>` : ""}
</head>
<body>
  <main class="container">
    <p class="breadcrumbs"><a href="/">Home</a> / <a href="/docs">Docs</a> / ${escapeHtml(article.title)}</p>
    <article>
      <h1>${escapeHtml(article.title)}</h1>
      <p>${escapeHtml(article.summary)}</p>
      <p class="muted">${escapeHtml(article.readingTime)} read · Published ${escapeHtml(article.publishedDate)} · Updated ${escapeHtml(article.lastUpdated)}</p>
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
}

console.log(`Generated static docs pages: ${docs.length + 1}`);
