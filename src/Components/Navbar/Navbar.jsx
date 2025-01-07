import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isActive, setActive] = useState(false); 
    const [isDropdownActive, setDropdownActive] = useState(false); 
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const linkClasses = "block px-4 py-2 hover:bg-red-200";
    const mobileLinkClasses = "text-lg border-b-2 pb-2 border-b-red-500 hover:text-red-500";

    
    const DropdownMenu = ({ isOpen, onClose }) => (
        isOpen && (
            <div
                ref={dropdownRef}
                className="absolute top-full mt-2 w-48 bg-white shadow-md border rounded-md z-50"
                role="menu"
            >
                <Link to="/about-publication" className={linkClasses} onClick={onClose}>
                    About Publication
                </Link>
                <Link to="/journals" className={linkClasses} onClick={onClose}>
                    Journals
                </Link>
                <Link to="/call-for-paper" className={linkClasses} onClick={onClose}>
                    Call For Paper
                </Link>
                <Link to="/privacy-policy" className={linkClasses} onClick={onClose}>
                    Privacy Policy
                </Link>
                <Link to="/refund-policy" className={linkClasses} onClick={onClose}>
                    Refund Policy
                </Link>
            </div>
        )
    );

    return (
        <div className="w-full flex flex-col fixed top-0 z-50">
            {/* Navbar Header */}
            <div className="flex justify-between items-center py-2 px-5 md:px-24 bg-white shadow-md">
                <Link to="/">
                    <img
                        src="/primespherepublication/primesphere_original.png"
                        alt="Primesphere Publication"
                        className="max-w-[130px] max-h-[50px] sm:max-w-[200px] sm:max-h-[70px]"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 font-semibold">
                    <Link to="/services" className="hover:text-red-500 text-lg">
                        Services
                    </Link>
                    <div className="relative group">
                        <button
                            className="hover:text-red-500 text-lg flex items-center"
                            onClick={() => setDropdownActive(!isDropdownActive)}
                            aria-expanded={isDropdownActive}
                            aria-controls="dropdown-menu"
                        >
                            Publication
                            <span className="ml-2">
                                {isDropdownActive ? <AiOutlineUp /> : <AiOutlineDown />}
                            </span>
                        </button>
                        <DropdownMenu
                            isOpen={isDropdownActive}
                            onClose={() => setDropdownActive(false)}
                        />
                    </div>
                    <Link to="/aboutus" className="hover:text-red-500 text-lg">
                        About Us
                    </Link>
                    <Link to="/contactus" className="hover:text-red-500 text-lg">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setActive(!isActive)}
                    aria-label="Toggle Menu"
                    aria-expanded={isActive}
                >
                    <IoReorderThreeOutline size={40} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isActive && (
                <div className="fixed top-0 right-0 h-screen w-full custom:w-[70%] bg-white shadow-lg z-50 flex flex-col justify-start py-10 px-6 space-y-6 md:hidden font-semibold">
                    <Link
                        to="/services"
                        className={mobileLinkClasses}
                        onClick={() => setActive(false)}
                    >
                        Services
                    </Link>
                    <div className="w-full">
                        <button
                            className="w-full flex justify-start items-center text-lg pb-2 border-b-2 border-b-red-500 hover:text-red-500"
                            onClick={() => setDropdownActive(!isDropdownActive)}
                            aria-expanded={isDropdownActive}
                        >
                            Publication
                            <span className="ml-2">
                                {isDropdownActive ? <AiOutlineUp /> : <AiOutlineDown />}
                            </span>
                        </button>
                        {isDropdownActive && (
                            <div className="flex flex-col space-y-2 ml-4 text-base pt-4">
                                <Link
                                    to="/about-publication"
                                    className="hover:text-red-500"
                                    onClick={() => setActive(false)}
                                >
                                    About Publication
                                </Link>
                                <Link
                                    to="/journals"
                                    className="hover:text-red-500"
                                    onClick={() => setActive(false)}
                                >
                                    Journals
                                </Link>
                                <Link
                                    to="/call-for-paper"
                                    className="hover:text-red-500"
                                    onClick={() => setActive(false)}
                                >
                                    Call For Paper
                                </Link>
                                <Link
                                    to="/privacy-policy"
                                    className="hover:text-red-500"
                                    onClick={() => setActive(false)}
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    to="/refund-policy"
                                    className="hover:text-red-500"
                                    onClick={() => setActive(false)}
                                >
                                    Refund Policy
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/aboutus"
                        className={mobileLinkClasses}
                        onClick={() => setActive(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contactus"
                        className={mobileLinkClasses}
                        onClick={() => setActive(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
