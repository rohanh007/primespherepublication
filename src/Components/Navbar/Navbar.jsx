import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const [isDropdownActive, setDropdownActive] = useState(false);

    return (
        <div className="w-full flex flex-col fixed top-0 z-50">
            <div className="flex justify-between items-center py-2 px-5 md:px-24 bg-white shadow-md">
                <Link to="/">
                    <img
                        src="/primesphere_original.png"
                        alt="Primesphere Publication"
                        className="max-w-[130px] max-h-[50px] sm:max-w-[200px] sm:max-h-[70px]"
                    />
                </Link>
                <div className="hidden md:flex space-x-8  font-semibold">
                    <Link to="/services" className="hover:text-red-500 text-lg">Services</Link>
                    <div
                        className="relative group"
                        onMouseEnter={() => setDropdownActive(true)}
                        onMouseLeave={() => setDropdownActive(false)}
                    >
                        <Link
                            to="#"
                            onMouseEnter={() => setDropdownActive(true)}
                            className="hover:text-red-500 text-lg flex items-center"
                        >
                            Publication
                        </Link>
                        {isDropdownActive && (
                            <div className="absolute top-full mt-2 w-48 bg-white shadow-md border rounded-md">
                                <Link
                                    to="/about-publication"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    About Publication
                                </Link>
                                <Link
                                    to="/journallist"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Journals
                                </Link>
                                <Link
                                    to="/submit-articles"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Submit Articles
                                </Link>
                                <Link
                                    to="/call-for-paper"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Call For Paper
                                </Link>
                                <Link
                                    to="/privacy-policy"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    to="/refund-policy"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Refund Policy
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/aboutus" className="hover:text-red-500 text-lg">About Us</Link>
                    <Link to="/contactus" className="hover:text-red-500 text-lg">Contact Us</Link>
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
                <div
                    className="flex flex-col items-center w-full h-screen space-y-6 py-60 px-5 md:hidden bg-orange-300 bg-opacity-75 absolute font-extrabold text-4xl text-white"
                    onClick={() => setActive(false)}
                >
                    <Link to="/services" className="hover:text-orange-700">Services</Link>
                    <Link to="#" className="hover:text-red-500">Publication</Link>
                    <Link to="/aboutus" className="hover:text-red-500">About Us</Link>
                    <Link to="/contactus" className="hover:text-red-500">Contact Us</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
