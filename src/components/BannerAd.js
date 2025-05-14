import React, { useEffect, useState, useRef } from "react";

const BannerAd = () => {
    const [adError, setAdError] = useState(false);
    const adContainerRef = useRef(null);

    useEffect(() => {
        // Only initialize ads on larger screens
        if (window.innerWidth < 1024) {
            return; // Don't initialize ads on small screens
        }

        // Function to initialize ads
        const initializeAds = () => {
            try {
                if (window.adsbygoogle && adContainerRef.current) {
                    // Push the ad to adsbygoogle
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                    return true;
                }
                return false;
            } catch (error) {
                console.error('AdSense initialization error:', error);
                return false;
            }
        };

        // Try to initialize right away
        const initialized = initializeAds();

        // If not initialized, retry after a delay
        if (!initialized) {
            const timer = setTimeout(() => {
                if (!initializeAds()) {
                    setAdError(true);
                }
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    // Don't render anything on small screens (less than lg breakpoint in Tailwind)
    return (
        <div className="fixed right-6 top-24 w-36 h-120 rounded shadow-lg border border-gray-200 flex flex-col items-center z-10 overflow-hidden hidden lg:flex">
            <p className="text-sm text-gray-500 font-medium mb-2 mt-2">Advertisement</p>

            {adError ? (
                <div className="flex items-center justify-center flex-col h-full w-full p-2">
                    <p className="text-xs text-gray-400 text-center">Ad could not be loaded</p>
                    <p className="text-xs text-gray-400 text-center mt-2">Please disable ad blocker</p>
                </div>
            ) : (
                <div ref={adContainerRef} className="w-full flex-1 overflow-hidden">
                    <ins className="adsbygoogle"
                        style={{ display: 'block', width: '100%', height: '100%' }}
                        data-ad-client="ca-pub-8769687258621854"
                        data-ad-slot="1609439995"
                        data-ad-format="vertical"
                        data-full-width-responsive="false">
                    </ins>
                </div>
            )}
        </div>
    );
};

export default BannerAd; 