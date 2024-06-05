import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeatureProducts from "../components/FeatureProducts";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categorys />
      <div className="py-[45px]">
        <FeatureProducts />
      </div>
    </div>
  );
};

export default Home;
