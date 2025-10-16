import React from "react";
import { MdContentPaste, MdShare, MdDevices } from "react-icons/md";

const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Paste Your Text",
            description: "Simply paste or type your text into the text area. Your content is ready to share instantly.",
            icon: MdContentPaste
        },
        {
            number: "2",
            title: "Share the Link",
            description: "Copy the unique URL generated for your session and open it on any other device.",
            icon: MdShare
        },
        {
            number: "3",
            title: "Access Anywhere",
            description: "Open the same link on your phone, tablet, or computer to access your shared text in real-time.",
            icon: MdDevices
        }
    ];

    return (
        <section id="how-it-works" className="w-full py-12 md:py-16">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    How It Works
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    CrossCopy makes clipboard sharing simple and effortless. Follow these three easy steps to share text across all your devices.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {steps.map((step) => {
                    const IconComponent = step.icon;
                    return (
                        <div
                            key={step.number}
                            className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/50 hover:border-cyan-600/50 transition-all duration-300"
                        >
                            <IconComponent className="text-4xl mb-4 text-cyan-500" />
                            <div className="text-3xl font-bold text-cyan-500 mb-3">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 text-center">
                <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 max-w-2xl">
                    <p className="text-sm text-gray-300">
                        💡 <strong>Pro Tip:</strong> Want a memorable link? Just type your custom path in the URL bar (e.g., crosscopy.xyz/yourname) and bookmark it for easy access across all devices.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
