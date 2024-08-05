import React from 'react'
import imgOne from '../images/products/1.jpg'
import imgTwo from '../images/products/2.jpg'
import imgThree from '../images/products/3.jpg'
import imgFour from '../images/products/4.jpg'
import { FaHeart } from "react-icons/fa";
const NewFuture = () => {
    return (
        <div className='px-28 border-b'>
            <div className='w-full pb-24'>
                <h1 className='text-4xl py-16 font-semibold'>Vote For Future Products</h1>
                <div className='w-full flex justify-between'>
                    <div className='w-[270px]'>
                        <img src={imgOne} alt="" />
                        <div className='leading-[2px] my-4'>
                            <h1 className='text-lg font-medium'>NAME OF SHIRT</h1>
                            <span className='text-sm text-[#428bca]'>By: Catherine</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-[40%] h-[2.5vh] bg-[#428bca]'></div>
                            <h1 className='text-sm text-[#428bca]'>4</h1>
                            <FaHeart className='text-[#428bca]' />
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <div className='w-[60%] h-[2.5vh] bg-red-500'></div>
                            <h1 className='text-sm text-red-600'>6</h1>
                            <FaHeart className='text-red-600' />
                        </div>
                    </div>
                    <div className='w-[270px]'>
                        <img src={imgTwo} alt="" />
                        <div className='leading-[2px] my-4'>
                            <h1 className='text-lg font-medium'>NAME OF SHIRT</h1>
                            <span className='text-sm text-[#428bca]'>By: Rebecca</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-[40%] h-[2.5vh] bg-[#428bca]'></div>
                            <h1 className='text-sm text-[#428bca]'>4</h1>
                            <FaHeart className='text-[#428bca]' />
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <div className='w-[60%] h-[2.5vh] bg-red-500'></div>
                            <h1 className='text-sm text-red-600'>6</h1>
                            <FaHeart className='text-red-600' />
                        </div>
                    </div>
                    <div className='w-[270px]'>
                        <img src={imgThree} alt="" />
                        <div className='leading-[2px] my-4'>
                            <h1 className='text-lg font-medium'>NAME OF SHIRT</h1>
                            <span className='text-sm text-[#428bca]'>By: Catherine</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-[40%] h-[2.5vh] bg-[#428bca]'></div>
                            <h1 className='text-sm text-[#428bca]'>4</h1>
                            <FaHeart className='text-[#428bca]' />
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <div className='w-[60%] h-[2.5vh] bg-red-500'></div>
                            <h1 className='text-sm text-red-600'>6</h1>
                            <FaHeart className='text-red-600' />
                        </div>
                    </div>
                    <div className='w-[270px]'>
                        <img src={imgFour} alt="" />
                        <div className='leading-[2px] my-4'>
                            <h1 className='text-lg font-medium'>NAME OF SHIRT</h1>
                            <span className='text-sm text-[#428bca]'>By: Rebecca</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-[40%] h-[2.5vh] bg-[#428bca]'></div>
                            <h1 className='text-sm text-[#428bca]'>4</h1>
                            <FaHeart className='text-[#428bca]' />
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <div className='w-[60%] h-[2.5vh] bg-red-500'></div>
                            <h1 className='text-sm text-red-600'>6</h1>
                            <FaHeart className='text-red-600' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewFuture