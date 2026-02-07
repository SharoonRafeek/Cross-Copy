import { HeadText } from "../components/HeadText";
import RouteInfo from "../components/RouteInfo";
import TextArea from "../components/TextArea";
import SEO from "../components/SEO";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import { useParams } from "react-router-dom";
import { docs } from "../content/docs";

const Home = () => {
  const { route } = useParams();
  const pageUrl = `https://crosscopy.xyz/${route}`;
  const featuredDocs = docs.slice(0, 4);

  return (
    <>
      <SEO
        title="Cross Platform Clipboard Sharing"
        description="Share text across your devices instantly with CrossCopy. A simple, fast, and secure way to transfer clipboard content between your computers, phones, and tablets."
        canonicalUrl={pageUrl}
        robots="noindex, follow, max-image-preview:large"
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="space-y-12">
          <HeadText />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <TextArea />
            <RouteInfo />
          </div>
          <HowItWorks />
          <Features />
          <FAQ />
          <section aria-label="Popular documentation guides">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">Popular Guides</h2>
              <a
                href="/docs"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm md:text-base"
              >
                View all docs
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredDocs.map((doc) => (
                <a
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="border border-gray-700 rounded-lg p-4 bg-[#111827] hover:border-cyan-500 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-cyan-400 mb-1">{doc.title}</h3>
                  <p className="text-sm text-gray-300">{doc.summary}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
