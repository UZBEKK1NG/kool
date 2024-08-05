import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (
        <div className=''>
            <div className='h-12 flex items-center justify-between text-[#2a80b9] px-28 border-b border-gray-300'>
                <div className='h-full flex'>
                    <button className='px-4 border-x'>Sign Up</button>
                    <button className='px-4 border-r'>Login In</button>
                </div>
                <div className='flex'>
                    <FaFacebookF className='text-5xl px-[1.2rem] cursor-pointer border-x' />
                    <FaDribbble className='text-5xl px-[1.1rem] cursor-pointer border-r' />
                    <FaTwitter className='text-5xl px-[1.1rem] cursor-pointer border-r' />
                    <FaLinkedinIn className='text-5xl px-[1.1rem] cursor-pointer border-r' />
                </div>
            </div>
            {/* //Navbar 1 finished */}

            <div className='w-full h-36 flex items-center justify-between px-28'>
                <div>
                    <h1 className='text-[#2a80b9] text-5xl font-semibold'>KOOL STORE</h1>
                </div>
                <div className='h-14 rounded-lg pl-10 flex items-center bg-[#2a80b9]'>
                    <ul className='flex items-center h-full gap-10 text-xl text-white'>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">Catalogs</a></li>
                        <li><a href="#!">FAQs</a></li>
                        <li><a href="#!">Policies</a></li>
                        <li><a href="#!">About</a></li>
                        <GiHamburgerMenu className='text-6xl px-3 h-full bg-slate-700 rounded-lg cursor-pointer' />
                    </ul>
                </div>
            </div>
            {/* //Navbar 2 finished */}

            <div className='h-16 flex items-center justify-between bg-[#2a80b9] text-white px-28'>
                <div className='h-full flex'>
                    <button className='px-8 text-lg font-semibold border-x border-[#55bbff]'>SHOP</button>
                    <button className='px-8 text-lg font-semibold border-r border-[#55bbff]'>DETAILS</button>
                    <button className='px-8 text-lg font-semibold border-r border-[#55bbff]'>CONTACT</button>
                </div>
                <div>
                    <p className='text-sm'>Free Shipping on any order above $50</p>
                </div>
            </div>
            {/* //Navbar 3 finished */}
        </div>
    )
}

export default Navbar