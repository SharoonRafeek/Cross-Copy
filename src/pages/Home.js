import Button from "../components/Button";
import { HeadText } from "../components/HeadText";
import TextArea from "../components/TextArea";

const Home = () => {
  return <div className="lg:ml-32 md:ml-16 ">
    <HeadText />
    <TextArea />
    <Button name="Copy." />
  </div>
};

export default Home;
