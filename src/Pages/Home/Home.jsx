import Navbar from "../Shared/Navbar/Navbar";
import About from "./About";
import Banner from "./Banner";
import OurProducts from "./OurProducts";
import OurService from "./OurService";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <OurService />
      <OurProducts />
    </div>
  );
};

export default Home;
