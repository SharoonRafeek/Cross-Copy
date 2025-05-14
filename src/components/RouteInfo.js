import React from "react";
import { useLocation } from "react-router-dom";
import QRCode from "qrcode.react";
import { Helmet } from "react-helmet-async";

const RouteInfo = () => {
  const location = useLocation();
  const url = "https://crosscopy.xyz" + location.pathname;

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CrossCopy",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "CrossCopy is a cross platform clipboard sharing app to effortlessly transfer text across all your devices."
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="text-xl text-center space-y-14 lg:pt-0 pt-10">
        <h3>
          Go to{" "}
          <a href={location.pathname} className="bg-cyan-600">
            {url}
          </a>
        </h3>
        <h3>Or scan</h3>
        <div className="flex flex-col items-center gap-5">
          <QRCode value={url} />
          <a href="https://www.buymeacoffee.com/SharoonRafeek" target="_blank" rel="noopener noreferrer">
            <img className="w-[150px]" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy me a coffee" />
          </a>
        </div>
      </div>
    </>
  );
};

export default RouteInfo;
