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
      <div className="w-full flex flex-col items-center justify-center space-y-8 mt-8 lg:mt-0">
        <div className="text-center space-y-6">
          <h3 className="text-xl md:text-2xl">
            Go to{" "}
            <a
              href={location.pathname}
              className="bg-cyan-600 px-2 py-1 hover:bg-cyan-500 transition-colors duration-200 break-all"
            >
              {url}
            </a>
          </h3>
          <p className="text-lg md:text-xl text-gray-300">Or scan the QR code</p>
        </div>
        <div className="flex flex-col items-center gap-6 bg-white p-6 rounded-lg shadow-xl">
          <QRCode value={url} size={200} level="H" />
        </div>
      </div>
    </>
  );
};

export default RouteInfo;
