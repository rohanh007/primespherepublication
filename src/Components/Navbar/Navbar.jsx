import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
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
                <div className="hidden md:flex space-x-8 font-semibold">
                    <Link to="/services" className="hover:text-red-500 text-lg">
                        Services
                    </Link>
                    <div className="relative group">
                        <button
                            className="hover:text-red-500 text-lg flex items-center"
                            onClick={() => setDropdownActive(!isDropdownActive)}
                        >
                            Publication
                            {/* <span className="ml-2">
                                {isDropdownActive ? <AiOutlineUp /> : <AiOutlineDown />}
                            </span> */}
                        </button>
                        {isDropdownActive && (
                            <div className="absolute top-full mt-2 w-48 bg-white shadow-md border rounded-md">
                                <Link
                                    to="/about-publication"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    About Publication
                                </Link>
                                <Link
                                    to="/journals"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Journals
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
                    <Link to="/aboutus" className="hover:text-red-500 text-lg">
                        About Us
                    </Link>
                    <Link to="/contactus" className="hover:text-red-500 text-lg">
                        Contact Us
                    </Link>
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
                <div className="fixed top-0 right-0 h-screen w-full custom:w-[70%] bg-white shadow-lg z-50 flex flex-col justify-start py-10 px-6 space-y-6 md:hidden font-semibold">
                    <Link to="/services" className="text-lg border-b-2 pb-2" onClick={() => setActive(false)}>
                        Services
                    </Link>
                    <div className="w-full">
                        <button
                            className="w-full flex justify-start items-center text-lg pb-2 border-b-2"
                            onClick={() => setDropdownActive(!isDropdownActive)}
                        >
                            Publication
                            <span className="ml-2">
                                {isDropdownActive ? <AiOutlineUp /> : <AiOutlineDown />}
                            </span>
                        </button>
                        {isDropdownActive && (
                            <div className="flex flex-col space-y-2 ml-4 text-sm">
                                <Link to="/about-publication" onClick={() => setActive(false)}>
                                    About Publication
                                </Link>
                                <Link to="/journals" onClick={() => setActive(false)}>
                                    Journals
                                </Link>
                                <Link to="/call-for-paper" onClick={() => setActive(false)}>
                                    Call For Paper
                                </Link>
                                <Link to="/privacy-policy" onClick={() => setActive(false)}>
                                    Privacy Policy
                                </Link>
                                <Link to="/refund-policy" onClick={() => setActive(false)}>
                                    Refund Policy
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/aboutus" className="text-lg border-b-2 pb-2" onClick={() => setActive(false)}>
                        About Us
                    </Link>
                    <Link to="/contactus" className="text-lg border-b-2 pb-2" onClick={() => setActive(false)}>
                        Contact Us
                    </Link>
                </div>
            )}

        </div>
    );
};

export default Navbar;
