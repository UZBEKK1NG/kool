import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
    return (
        <div className='h-[45vh] px-28 bg-[#2d3e50] border-blue-500 border-b'>
            <div className='py-10 flex justify-between'>

                <div className='w-[23%] text-white flex flex-col justify-between'>
                    <h1 className='text-xl font-semibold'>About Us</h1>
                    <p className='text-xs py-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, debitis recusandae.</p>
                    <div className='flex flex-col justify-between items-start gap-5'>
                        <button className='border border-white text-xl flex items-center gap-2 px-5 py-2 bg-[#2a80b9] text-white font-semibold'> <FaFacebookF /> FACEBOOK</button>
                        <button className='border border-white text-xl flex items-center gap-2 px-5 py-2 bg-[#2a80b9] text-white font-semibold'> <FaTwitter /> TWITTER</button>
                    </div>
                </div>

                <div className='w-[23%] text-white flex flex-col justify-between'>
                    <h1 className='text-xl font-semibold'>Why Choose Us?</h1>
                    <p className='text-xs'>Kool Store is free responsive eCommerce template provided by templatemo website. You can use this layout for any website.</p>
                    <p className='text-xs'>Tempore cum mollitia eveniet laboriosam corporis voluptas earum voluptate. Lorem ipsum dolor sit amet.</p>
                    <p className='text-xs'>Credit goes to Unsplash for all images.</p>
                </div>

                <div className='w-[20%] text-white flex flex-col'>
                    <h1 className='text-xl font-semibold pb-7'>Useful Links</h1>
                    <ul className='list-square text-xs pl-4'>
                        <li className='py-2'>Our Shop</li>
                        <li className='py-2'>Partners</li>
                        <li className='py-2'>Gift Cards</li>
                        <li className='py-2'>About Us</li>
                        <li className='py-2'>Help</li>
                    </ul>
                </div>

                <div className='w-[28%] text-white flex flex-col'>
                    <h1 className='text-xl font-semibold pb-8'>Our Newsletter</h1>
                    <div className='py-5 px-4 bg-[#2a80b9]'>
                        <p className='text-sm'>Sign up for our regular updates to know when new products are released.</p>
                        <div className='flex gap-1 mt-5'>
                            <input type="text" placeholder='Your Email Here' className='pl-3 h-9 text-black capitalize outline-none' />
                            <button className='text-md flex items-center px-4 h-9 bg-[#2d3e50] text-white font-semibold'>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact