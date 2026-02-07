import React from "react";
import SEO from "../../components/SEO";
import { docs } from "../../content/docs";

const DocsHome = () => {
  const baseUrl = "https://crosscopy.xyz";

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Docs",
        item: `${baseUrl}/docs`
      }
    ]
  };

  const itemList = {
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

  return (
    <>
      <SEO
        title="Documentation"
        description="CrossCopy documentation and guides for clipboard sharing, privacy, troubleshooting, and cross-platform text transfer workflows."
        canonicalUrl={`${baseUrl}/docs`}
        schema={[breadcrumbs, itemList]}
      />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 max-w-5xl py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">CrossCopy Documentation</h1>
        <p className="text-gray-300 mb-10">
          Practical guides for copying text across devices quickly, safely, and without app installation.
        </p>

        <section className="grid sm:grid-cols-2 gap-5" aria-label="Documentation articles">
          {docs.map((doc) => (
            <article key={doc.slug} className="border border-gray-700 rounded-lg p-5 bg-[#111827]">
              <h2 className="text-xl font-semibold mb-2">
                <a
                  href={`/docs/${doc.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  {doc.title}
                </a>
              </h2>
              <p className="text-gray-300 text-sm mb-4">{doc.summary}</p>
              <p className="text-gray-400 text-xs">
                {doc.readingTime} read · Updated {doc.lastUpdated}
              </p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default DocsHome;
