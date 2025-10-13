import React from "react";
import SEO from "../components/SEO";

const Terms = () => {
    return (
        <>
            <SEO
                title="Terms of Service - CrossCopy"
                description="Terms of Service for CrossCopy"
                canonicalUrl="https://crosscopy.xyz/info/terms"
            />
            <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl py-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using CrossCopy, you accept and agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">2. Description of Service</h2>
                        <p>
                            CrossCopy is a free clipboard sharing service that allows you to share text across your devices
                            using a unique URL. The service is provided "as is" without any warranties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">3. User Responsibilities</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>You are responsible for the content you share through CrossCopy</li>
                            <li>Do not share sensitive, confidential, or illegal content</li>
                            <li>Do not use the service to harm, harass, or violate the rights of others</li>
                            <li>Keep your unique URLs private if you want your content to remain private</li>
                            <li>Do not attempt to access content that doesn't belong to you</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">4. Content and Security</h2>
                        <p>
                            CrossCopy URLs are not encrypted or password-protected. Anyone with the URL can access the content.
                            We strongly recommend not sharing passwords, financial information, or other sensitive data through this service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">5. Service Availability</h2>
                        <p>
                            We strive to keep CrossCopy available at all times, but we do not guarantee uninterrupted access.
                            The service may be unavailable due to maintenance, technical issues, or other factors beyond our control.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">6. Limitation of Liability</h2>
                        <p>
                            CrossCopy and its creators are not liable for any damages, losses, or issues arising from your use
                            of the service. This includes but is not limited to data loss, unauthorized access to your shared content,
                            or any other consequences of using the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">7. Prohibited Uses</h2>
                        <p>You may not use CrossCopy to:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Share illegal, harmful, or malicious content</li>
                            <li>Violate any laws or regulations</li>
                            <li>Infringe on intellectual property rights</li>
                            <li>Spam, abuse, or overload the service</li>
                            <li>Attempt to hack, disrupt, or damage the service</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">8. Data Retention</h2>
                        <p>
                            Shared content remains accessible until you clear it manually. We reserve the right to remove
                            content that violates these terms or for any other reason at our discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">9. Changes to Terms</h2>
                        <p>
                            We may modify these terms at any time. Continued use of CrossCopy after changes constitutes
                            acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">10. Contact</h2>
                        <p>
                            For questions or concerns about these terms, please contact us through our{" "}
                            <a
                                href="https://forms.gle/1oNLNijHKj4dz6XdA"
                                className="text-cyan-500 hover:text-cyan-400"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                feedback form
                            </a>.
                        </p>
                    </section>

                    <p className="text-sm text-gray-400 mt-8">
                        Last updated: October 13, 2025
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/"
                        className="text-cyan-500 hover:text-cyan-400 transition-colors duration-200"
                    >
                        ← Back to CrossCopy
                    </a>
                </div>
            </div>
        </>
    );
};

export default Terms;
