import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel";
import AboutUsPreview from "./AboutUsPreview";
import ServicesPreview from "./ServicesPreview";
import ContactUs from "../Contactus/Contactus";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="w-full h-auto relative scrollbar-hide">
      {/* <Navbar/> */}
      <div className="flex flex-col gap-3 w-[80%] sm:w-[50%] absolute z-20 custom:top-[6%] top-[3%] lg:top-[12%]  left-[7%]">
        <div className="border-l-8 border-l-red-500 pl-5 py-3">
          <h1 className="text-2xl custom:text-4xl font-bold font-serif text-white">Prime Sphere Publication Services</h1>
        </div>
        <p className="text-white text-base font-sans custom:text-lg tracking-wide">Prime Sphere Publication specializes in publishing articles in scholarly journals and conference proceedings. Their goal is to publish high-quality articles that make significant contributions to their respective fields.</p>
        <div className="">
          <Link to='/contactus' className="border  border-white max-w-[200px] py-3 flex justify-center mt-3 text-white font-semibold font-sans">Contact Us</Link>
        </div>
      </div>
      <div className="w-full h-screen relative z-10">
        <Carousel />
      </div>

      {/* about us preview */}
      <AboutUsPreview />
      {/* Our services preview */}
      <ServicesPreview />
      <div className="w-full pb-10 md:px-16">
      <ContactUs/>
      </div>
    

      {/* <Ourservices/> */}
    </div>

  )
}
export default Home;