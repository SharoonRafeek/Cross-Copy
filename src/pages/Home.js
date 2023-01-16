import { HeadText } from "../components/HeadText";
import RouteInfo from "../components/RouteInfo";
import TextArea from "../components/TextArea";

const Home = (props) => {
  return (
    <div className="lg:ml-32 md:ml-16 lg:mr-32 md:mr-16 space-y-12">
      <HeadText />
      <div className="grid lg:grid-cols-2 lg:gap-x-72">
        <TextArea />
        <RouteInfo />
      </div>
    </div>
  );
};

export default Home;
