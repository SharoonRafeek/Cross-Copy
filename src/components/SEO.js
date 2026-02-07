import React from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULT_KEYWORDS = [
    "clipboard sharing",
    "cross platform clipboard",
    "text sharing between devices",
    "sync clipboard across devices",
    "universal clipboard",
    "clipboard manager",
    "share text online",
    "copy paste between devices",
    "multi device clipboard",
    "instant text sharing",
    "online clipboard",
    "web clipboard",
    "cloud clipboard",
    "clipboard sync",
    "text transfer tool",
    "share clipboard content",
    "device clipboard sync",
    "free clipboard tool",
    "browser clipboard",
    "real-time text sync"
];

const SEO = ({ title, description, canonicalUrl, ogImage, schema, robots, keywords }) => {
    const siteTitle = title ? `${title} | CrossCopy` : 'CrossCopy - Cross Platform Clipboard Sharing';
    const siteDescription = description || 'CrossCopy is a cross platform clipboard sharing app. Effortlessly transfer text across all your devices with CrossCopy.';
    const siteUrl = canonicalUrl || 'https://crosscopy.xyz';
    const siteImage = ogImage || 'https://i.ibb.co/nCPZDgd/c.png';
    const robotsContent = robots || 'index, follow, max-image-preview:large';
    const keywordContent = Array.isArray(keywords) && keywords.length > 0 ? keywords.join(', ') : DEFAULT_KEYWORDS.join(', ');

    const appSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "CrossCopy",
        "alternateName": "Cross Copy",
        "url": siteUrl,
        "description": siteDescription,
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": "Real-time text synchronization, Cross-platform support, QR code sharing, Custom URL creation, No installation required, Secure data transfer",
        "screenshot": siteImage,
        "author": {
            "@type": "Person",
            "name": "Sharoon Rafeek",
            "url": "https://sharoonrafeek.com"
        }
    };

    const schemaList = schema
        ? (Array.isArray(schema) ? schema : [schema])
        : [appSchema];

    return (
        <Helmet>
            {/* Basic meta tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <link rel="canonical" href={siteUrl} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            <meta charSet="utf-8" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:site_name" content="CrossCopy" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />
            <meta name="twitter:creator" content="@sharoon_rafeek" />

            {/* Additional SEO tags */}
            <meta name="robots" content={robotsContent} />
            <meta name="keywords" content={keywordContent} />
            <meta name="author" content="Sharoon Rafeek" />
            <meta name="language" content="English" />

            {schemaList.map((entry, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(entry)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO; 
