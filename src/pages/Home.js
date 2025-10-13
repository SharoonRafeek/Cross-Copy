import { HeadText } from "../components/HeadText";
import RouteInfo from "../components/RouteInfo";
import TextArea from "../components/TextArea";
import SEO from "../components/SEO";
import { useParams } from "react-router-dom";

const Home = () => {
  const { route } = useParams();
  const pageUrl = `https://crosscopy.xyz/${route}`;

  return (
    <>
      <SEO
        title="Cross Platform Clipboard Sharing"
        description="Share text across your devices instantly with CrossCopy. A simple, fast, and secure way to transfer clipboard content between your computers, phones, and tablets."
        canonicalUrl={pageUrl}
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="space-y-12">
          <HeadText />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <TextArea />
            <RouteInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
