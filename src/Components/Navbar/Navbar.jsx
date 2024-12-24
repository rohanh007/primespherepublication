import { Link } from 'react-router-dom';
import logo from '../../Static/primesphere_original.png';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from 'react';
const Navbar = () => {
    const [isActive, setActive] = useState(false);
    console.log(isActive);
    return (
        <div className='shadow shadow-md '>
            <div className="flex flex-row justify-between items-center border py-2">
                <Link to='/'>
                    <div className="w-auto h-auto mx-auto relative left-3 sm:left-24">
                        <img src={logo} alt="primesphere publication" className='max-w-[150px] max-h-[50px]  sm:max-w-[200px] sm:max-h-[70px]' />
                    </div>
                </Link>
                <div className=" hidden md:flex flex-row gap-14 text-lg font-semibold relative right-3 md:right-24">
                    <Link to='/services'>Services</Link>
                    <Link to='/Publications'>Publication</Link>
                    <Link to='/aboutus'>About Us</Link>
                    <Link to='/'>Contact Us</Link>
                </div>
                <div className='flex md:hidden relative right-3 ' onClick={() => setActive(!isActive)}>
                    <IoReorderThreeOutline size={30} />
                </div>

            </div>
            <div className=''>
                {
                    isActive && (
                        <div className=" flex flex-col justify-start  md:hidden w-full text-base font-semibold flex flex-col gap-2 justify-start pl-9 py-3">
                            <Link to='/services'>Services</Link>
                            <Link to='/Publications'>Publication</Link>
                            <Link to='/aboutus'>About Us</Link>
                            <Link to='/'>Contact Us</Link>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Navbar;