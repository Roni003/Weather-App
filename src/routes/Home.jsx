import "./Home.css";
import TopSection from "../components/TopSection";
import MidSection from "../components/MidSection";
import Blurred from "../components/Blurred";

const Home = () => {
  return (
    <div className="home">
      <TopSection />
      <MidSection />
      <Blurred />
    </div>
  );
};

export default Home;
