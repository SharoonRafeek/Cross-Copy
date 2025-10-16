import React from "react";

const UseCases = () => {
    const useCases = [
        {
            emoji: "💼",
            title: "Remote Work",
            description: "Quickly share meeting notes, links, or code snippets between your work laptop and personal devices."
        },
        {
            emoji: "📱",
            title: "Phone to Computer",
            description: "Copy text from your phone and instantly access it on your computer without cables or email."
        },
        {
            emoji: "👨‍💻",
            title: "Development",
            description: "Transfer API keys, configuration snippets, or test data across development environments."
        },
        {
            emoji: "📝",
            title: "Content Creation",
            description: "Draft content on one device and edit on another. Perfect for bloggers and writers."
        },
        {
            emoji: "🎓",
            title: "Students",
            description: "Share study notes, research links, or assignments between your phone, tablet, and laptop."
        },
        {
            emoji: "🏠",
            title: "Smart Home",
            description: "Send commands, URLs, or settings to different devices in your smart home setup."
        }
    ];

    return (
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-gray-900/0 to-gray-900/30 rounded-lg">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Perfect for Every Scenario
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    From professionals to students, CrossCopy simplifies text sharing for everyone
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                    <div
                        key={index}
                        className="bg-gray-800/40 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                    >
                        <div className="text-5xl mb-4">{useCase.emoji}</div>
                        <h3 className="text-lg font-semibold mb-2 text-white">
                            {useCase.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {useCase.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-400 text-sm">
                    ...and countless other scenarios where you need quick text transfer between devices
                </p>
            </div>
        </section>
    );
};

export default UseCases;
