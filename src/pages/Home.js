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
      <div className="lg:ml-24 md:ml-12 lg:mr-48 md:mr-24 space-y-12">
        <HeadText />
        <div className="grid lg:grid-cols-2 lg:gap-x-48">
          <TextArea />
          <RouteInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
