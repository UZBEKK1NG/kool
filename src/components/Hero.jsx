import React from 'react'
import HeroImgOne from '../images/gallery-image-1.jpg'
import featuredImgOne from '../images/featured/1.jpg'
import featuredImgTwo from '../images/featured/2.jpg'
import featuredImgThree from '../images/featured/3.jpg'
import featuredImgFour from '../images/featured/4.jpg'
import featuredImgFive from '../images/featured/5.jpg'
import featuredImgSix from '../images/featured/6.jpg'
import { FaAngleDown } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className='px-28 mt-16 pb-20 border-b'>
            <div className='flex justify-between'>
                <div className='w-72 border pb-5'>
                    <img src={HeroImgOne} alt="" className='w-full' />
                    <div className='leading-3 m-3 ml-5'>
                        <h1 className='text-lg font-semibold'>KOOL SHIRT</h1>
                        <span className='text-xs text-[#2a80b9]'>Partner Name</span>
                    </div>
                    <p className='font-semibold text-[#2a80b9] ml-5 mb-1'>$25.00</p>
                    <p className='text-[15px] ml-5'>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt asperiores tenetur deleniti labore!</p>
                </div>
                <div className='flex flex-col justify-between'>
                    <img src={featuredImgOne} alt="" />
                    <img src={featuredImgTwo} alt="" />
                </div>
                <div className='w-96 border'>
                    <img src={featuredImgSix} alt="" />
                    <div className='flex justify-between px-5 mt-5'>
                        <div className=''>
                            <h1 className='text-lg font-semibold'>NAME OF SHIRT</h1>
                            <span className='text-xs text-[#2a809b]'>Partner Name</span>
                            <p className='text-[#2a809b] font-bold pt-1'>$25.00</p>
                        </div>
                        <form action="#!" className='flex flex-col gap-2 justify-between w-[50%]'>
                            <div className='flex justify-between'>
                                <label htmlFor="info" className='text-sm'>Gender: </label>
                                <select name="gender" id="gender" className='cursor-pointer border text-gray-500 px-1 py-[0.5px]'>
                                    <option value="">- Select - <FaAngleDown /></option>
                                    <option value="">Female</option>
                                    <option value="">Male</option>
                                </select>
                            </div>
                            <div className='flex justify-between'>
                                <label htmlFor="info" className='text-sm'>Size: </label>
                                <select name="gender" id="gender" className=' cursor-pointer border text-gray-500 px-1 py-[0.5px]'>
                                    <option value="">- Select - <FaAngleDown /></option>
                                    <option value="">Small</option>
                                    <option value="">Medium</option>
                                    <option value="">Large</option>
                                    <option value="">X-Large</option>
                                </select>
                            </div>
                            <div className='flex justify-between'>
                                <label htmlFor="info" className='text-sm'>Color: </label>
                                <select name="gender" id="gender" className='cursor-pointer border text-gray-500 px-1 py-[0.5px]'>
                                    <option value="">- Select - <FaAngleDown /></option>
                                    <option value="">Blue</option>
                                    <option value="">Red</option>
                                    <option value="">Pink</option>
                                    <option value="">Black</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className='flex items-center cursor-pointer justify-center w-[60%] h-[29px] mx-auto bg-red-500 mt-5'>
                        <FaAngleDown className='text-xl text-white' />
                    </div>
                </div>
            </div>
            {/* dificult section  */}
            <div className='flex justify-between mt-7'>
                <img src={featuredImgThree} alt="" className='w-[31.5%]' />
                <img src={featuredImgFour} alt="" className='w-[31.5%]' />
                <img src={featuredImgFive} alt="" className='w-[31.8%] h-[80%]' />
            </div>
        </div>
    )
}

export default Hero