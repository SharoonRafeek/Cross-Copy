import React from 'react';
import { Helmet } from 'react-helmet-async';
import site from '../content/site.json';

export const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": site.name,
    "alternateName": "Cross Copy",
    "url": `${site.url}/`,
    "description": site.description,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any (web browser)",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "isAccessibleForFree": true,
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Real-time text sync between devices",
        "Works on Android, iOS, Windows, macOS and Linux",
        "QR code to open the same clipboard on another device",
        "Custom clipboard URLs",
        "No installation or sign-up"
    ],
    "screenshot": site.image,
    "author": {
        "@type": "Person",
        "name": site.author.name,
        "url": site.author.url
    }
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": site.name,
    "alternateName": "Cross Copy",
    "url": `${site.url}/`
};

const SEO = ({ title, description, canonicalUrl, ogImage, schema, robots, keywords }) => {
    const siteTitle = title ? `${title} | ${site.name}` : `${site.name} - ${site.tagline}`;
    const siteDescription = description || site.description;
    const siteImage = ogImage || site.image;
    const robotsContent = robots || 'index, follow, max-image-preview:large';
    const isIndexable = !robotsContent.includes('noindex');
    const canonical = isIndexable ? canonicalUrl : null;
    const schemaList = schema === undefined ? [appSchema] : [].concat(schema);

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="robots" content={robotsContent} />
            {canonical && <link rel="canonical" href={canonical} />}
            {keywords?.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

            <meta property="og:type" content="website" />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:site_name" content={site.name} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />
            <meta name="twitter:creator" content="@sharoon_rafeek" />

            {schemaList.map((entry, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(entry)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
