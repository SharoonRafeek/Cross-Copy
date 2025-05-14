import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonicalUrl, ogImage }) => {
    const siteTitle = title ? `${title} | CrossCopy` : 'CrossCopy - Cross Platform Clipboard Sharing';
    const siteDescription = description || 'CrossCopy is a cross platform clipboard sharing app. Effortlessly transfer text across all your devices with CrossCopy.';
    const siteUrl = canonicalUrl || 'https://crosscopy.xyz';
    const siteImage = ogImage || 'https://i.ibb.co/nCPZDgd/c.png';

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
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta name="keywords" content="clipboard, sharing, cross platform, text transfer, sync clipboard, text sharing, device sync" />
            <meta name="author" content="Sharoon Rafeek" />
            <meta name="language" content="English" />

            {/* Schema.org structured data for rich snippets */}
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "CrossCopy",
                    "url": "${siteUrl}",
                    "description": "${siteDescription}",
                    "applicationCategory": "UtilityApplication",
                    "operatingSystem": "All",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Sharoon Rafeek"
                    }
                }
            `}</script>
        </Helmet>
    );
};

export default SEO; 