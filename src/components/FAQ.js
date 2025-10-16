import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I share text between my devices?",
            answer: "Simply paste your text into the text area, and it will be instantly available on any device that opens the same URL. You can share the link or scan the QR code to access your text from your phone, tablet, or computer."
        },
        {
            question: "Is my data secure and private?",
            answer: "Yes! CrossCopy uses secure Firebase Realtime Database for temporary text storage. Your data is transmitted securely, and we don't store any personal information. For sensitive data, we recommend using custom URLs and clearing your text after sharing."
        },
        {
            question: "Do I need to install anything?",
            answer: "No installation required! CrossCopy is a web-based application that works directly in your browser. Just visit the website, paste your text, and share the link. It works on all devices with a web browser - Android, iOS, Windows, Mac, and Linux."
        },
        {
            question: "Can I use a custom URL for my clipboard?",
            answer: "Absolutely! Just type your desired custom path in the browser's address bar (e.g., crosscopy.xyz/myname) and bookmark it. This creates your personal clipboard space that you can easily remember and access from any device."
        },
        {
            question: "How long is my text stored?",
            answer: "Your text is stored in Firebase Realtime Database and persists even after closing the browser. The data remains available until you manually clear it or change the content. However, we don't guarantee permanent storage, so for important data, we recommend saving it to a secure location."
        },
        {
            question: "Is CrossCopy free to use?",
            answer: "Yes! CrossCopy is completely free with no hidden charges, subscriptions, or premium tiers. We believe in keeping clipboard sharing simple and accessible to everyone."
        },
        {
            question: "What are the limitations?",
            answer: "CrossCopy is designed for text sharing. While there's no strict character limit for typical use cases, it's optimized for clipboard-sized content. For very large documents, consider using dedicated file transfer services."
        },
        {
            question: "Does it work offline?",
            answer: "CrossCopy requires an internet connection to sync text between devices. Both the sending and receiving devices need to be online to share and access the clipboard content in real-time."
        }
    ];

    // Structured data for FAQ schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <section id="faq" className="w-full py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base">
                            Everything you need to know about CrossCopy
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-gray-800/70 transition-colors duration-200"
                                    aria-expanded={openIndex === index}
                                >
                                    <h3 className="font-semibold text-base md:text-lg pr-4">
                                        {faq.question}
                                    </h3>
                                    <span
                                        className={`text-2xl text-cyan-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-45' : ''
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                >
                                    <div className="px-6 pb-4 text-gray-300 text-sm md:text-base leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
