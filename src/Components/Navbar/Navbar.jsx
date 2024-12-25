import { Link } from 'react-router-dom';
import logo from '../../Static/primesphere_original.png';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
    const [isActive, setActive] = useState(false);

    return (
        <div className="flex flex-col sticky top-0 z-50">
            <div className="flex justify-between items-center py-3 px-5 md:px-24  bg-white shadow-md">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Primesphere Publication"
                        className="max-w-[150px] max-h-[50px] sm:max-w-[200px] sm:max-h-[70px]"
                    />
                </Link>
                <div className="hidden md:flex space-x-8 text-lg font-semibold">
                    <Link to="/services" className="hover:text-red-500">Services</Link>
                    <Link to="/Publications" className="hover:text-red-500">Publication</Link>
                    <Link to="/aboutus" className="hover:text-red-500">About Us</Link>
                    <Link to="/" className="hover:text-red-500">Contact Us</Link>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setActive(!isActive)}
                    aria-label="Toggle Menu"
                    aria-expanded={isActive}
                >
                    <IoReorderThreeOutline size={40} />
                </button>
            </div>
            {isActive && (
                <div className="flex flex-col items-center w-[100vw] h-[100vh] space-y-6 py-60 px-5 md:hidden bg-orange-300 bg-opacity-75 translate-1/2  shadow-md absolute font-extrabold text-4xl text-white" onClick={()=>{setActive(false)}}>
                    <Link to="/services" className="hover:text-orange-700">Services</Link>
                    <Link to="/Publications" className="hover:text-red-500">Publication</Link>
                    <Link to="/aboutus" className="hover:text-red-500">About Us</Link>
                    <Link to="/" className="hover:text-red-500">Contact Us</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
