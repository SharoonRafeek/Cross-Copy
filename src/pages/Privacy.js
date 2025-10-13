import React from "react";
import SEO from "../components/SEO";

const Privacy = () => {
    return (
        <>
            <SEO
                title="Privacy Policy - CrossCopy"
                description="Privacy Policy for CrossCopy - Learn how we handle your data"
                canonicalUrl="https://crosscopy.xyz/info/privacy"
            />
            <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl py-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">1. Information We Collect</h2>
                        <p>
                            CrossCopy is designed with privacy in mind. We temporarily store text content that you share through our service
                            in Firebase Realtime Database. This data is associated with a randomly generated route ID.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">2. How We Use Your Information</h2>
                        <p>
                            The text you share is used solely for the purpose of enabling clipboard sharing across your devices.
                            We do not analyze, sell, or share your content with third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">3. Data Storage and Security</h2>
                        <p>
                            Your shared text is stored in Firebase Realtime Database and is accessible to anyone who has the specific route URL.
                            We recommend not sharing sensitive information through this service. Data persists until you manually clear it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">4. Cookies and Analytics</h2>
                        <p>
                            We may use analytics services to understand how our service is used.
                            These services may collect anonymous usage data to help us improve CrossCopy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">5. Your Rights</h2>
                        <p>
                            You can clear your shared text at any time using the "Clear" button. Once cleared, the data is removed
                            from our database. You are in control of what you share and how long it remains available.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">6. Third-Party Services</h2>
                        <p>
                            CrossCopy uses Firebase (Google) for data storage. Please refer to Google's privacy policy for
                            information on how they handle data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">7. Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. Any changes will be posted on this page
                            with an updated revision date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-white">8. Contact</h2>
                        <p>
                            If you have questions about this privacy policy, please contact us through our{" "}
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

export default Privacy;
