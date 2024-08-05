import React from 'react'
import imgOne from '../images/gallery-image-2.jpg'
import imgTwo from '../images/gallery-image-3.jpg'
import imgThree from '../images/gallery-image-4.jpg'
import imgFour from '../images/gallery-image-5.jpg'
const Products = () => {
    return (
        <div className='px-28 border-b'>
            <div className='pb-20'>
                <h1 className='text-4xl py-16 font-semibold'>New Products</h1>
                <div className='flex justify-between'>
                    <div>
                        <img src={imgOne} alt="" className='w-[265px] h-[260px] bg-center bg-cover' />
                        <h1 className='text-lg font-semibold mt-5'>NAME OF SHIRT</h1>
                        <span className='font-bold text-[#2a809a]'>$40.00</span>
                    </div>
                    <div>
                        <img src={imgTwo} alt="" className='w-[265px] h-[260px] bg-center bg-cover' />
                        <h1 className='text-lg font-semibold mt-5'>SPORT SHIRT</h1>
                        <span className='font-bold text-[#2a809a]'>$40.00</span>
                    </div>
                    <div>
                        <img src={imgThree} alt="" className='w-[265px] h-[260px] bg-center bg-cover' />
                        <h1 className='text-lg font-semibold mt-5'>ELEGANT SHIRT</h1>
                        <span className='font-bold text-[#2a809a]'>$60.00</span>
                    </div>
                    <div>
                        <img src={imgFour} alt="" className='w-[265px] h-[260px] bg-center bg-cover' />
                        <h1 className='text-lg font-semibold mt-5'>ANOTHER NEW SHIRT</h1>
                        <span className='font-bold text-[#2a809a]'>$80.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products