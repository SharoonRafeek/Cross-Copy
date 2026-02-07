import React from "react";
import { Navigate, useParams } from "react-router-dom";
import SEO from "../../components/SEO";
import { docs, docsBySlug } from "../../content/docs";

const DocArticle = () => {
  const { slug } = useParams();
  const article = docsBySlug[slug];

  if (!article) {
    return <Navigate to="/docs" replace />;
  }

  const baseUrl = "https://crosscopy.xyz";
  const canonicalUrl = `${baseUrl}/docs/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.lastUpdated,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Person",
      name: "Sharoon Rafeek"
    },
    publisher: {
      "@type": "Organization",
      name: "CrossCopy",
      url: baseUrl
    }
  };

  const breadcrumbSchema = {
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
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl
      }
    ]
  };

  const faqSchema = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    : null;

  const relatedDocs = docs
    .filter((doc) => doc.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        canonicalUrl={canonicalUrl}
        schema={faqSchema ? [articleSchema, breadcrumbSchema, faqSchema] : [articleSchema, breadcrumbSchema]}
        keywords={article.keywords}
      />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl py-8">
        <p className="text-sm text-gray-400 mb-5">
          <a href="/docs" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
            Documentation
          </a>{" "}
          / {article.title}
        </p>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{article.title}</h1>
            <p className="text-gray-300 mb-3">{article.summary}</p>
            <p className="text-sm text-gray-400">
              {article.readingTime} read · Published {article.publishedDate} · Updated {article.lastUpdated}
            </p>
          </header>

          <div className="space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
                <div className="space-y-3 text-gray-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        {article.faqs?.length ? (
          <section className="mt-12" aria-label="Frequently asked questions">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {article.faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12" aria-label="Related documentation">
          <h2 className="text-2xl font-semibold mb-4">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedDocs.map((doc) => (
              <a
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="border border-gray-700 rounded-lg p-4 bg-[#111827] hover:border-cyan-500 transition-colors duration-200"
              >
                <h3 className="text-base font-semibold mb-1 text-cyan-400">{doc.title}</h3>
                <p className="text-sm text-gray-300">{doc.summary}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default DocArticle;
