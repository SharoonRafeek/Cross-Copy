import React from "react";
import { MdFlashOn, MdLock, MdLanguage, MdRocket, MdMyLocation, MdStars } from "react-icons/md";

const Features = () => {
    const features = [
        {
            icon: MdFlashOn,
            title: "Instant Sync",
            description: "Real-time text synchronization across all your devices. No delays, no waiting - your clipboard updates instantly."
        },
        {
            icon: MdLock,
            title: "Secure Transfer",
            description: "Your text is transmitted securely with Firebase. We prioritize your privacy and don't store personal information."
        },
        {
            icon: MdLanguage,
            title: "Cross-Platform",
            description: "Works seamlessly on Android, iOS, Windows, Mac, and Linux. Any device with a browser can access your clipboard."
        },
        {
            icon: MdRocket,
            title: "No Installation",
            description: "Pure web-based solution. No apps to download, no extensions to install. Just open your browser and start sharing."
        },
        {
            icon: MdMyLocation,
            title: "Custom URLs",
            description: "Create memorable links like crosscopy.xyz/myname for easy access. Bookmark your personal clipboard space."
        },
        {
            icon: MdStars,
            title: "100% Free",
            description: "Completely free forever. No subscriptions, no hidden fees, no premium tiers. Full features for everyone."
        }
    ];

    return (
        <section id="features" className="w-full py-12 md:py-16">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Why Choose CrossCopy?
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    The simplest way to share clipboard content across all your devices. No apps, no accounts, no hassle.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div
                            key={index}
                            className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/50 hover:border-cyan-600/50 transition-all duration-300"
                        >
                            <IconComponent className="text-4xl mb-4 text-cyan-500" />
                            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
