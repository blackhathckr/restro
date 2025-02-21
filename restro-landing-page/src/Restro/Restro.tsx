import Contact from "./Contact";
import Featured from "./Featured";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Product from "./RestroApp";
import WhyChooseUs from "./WhyChooseUs";

const Restro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <Hero />
      <Featured />
      <WhyChooseUs />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
};
export default Restro;