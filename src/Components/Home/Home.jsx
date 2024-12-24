import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel";

const Home = () => {
    return (
        <div className="w-full h-screen relative ">
        <div className="flex flex-col gap-3 w-[50%] absolute z-20 top-[30%] left-[7%]">
            <div className="border-l-[6px] border-l-red-500 pl-5 py-3">
              <h1 className="text-4xl font-bold text-red-500">Prime Sphere Publication Services</h1>
            </div>
            <p className="text-red-300">Prime Sphere Publication specializes in publishing articles in scholarly journals and conference proceedings. Their goal is to publish high-quality articles that make significant contributions to their respective fields.</p>
            <div className="border border-red-400 max-w-[200px] py-3 flex justify-center">
                <Link to='/' className="text-red-500 font-semibold">Contact Us</Link>
            </div>
        </div>
        <div className="w-full h-screen relative z-10">
          <Carousel />
        </div>
      </div>
      
    )
}
export default Home;