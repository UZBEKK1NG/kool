import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import imgTm1 from '../images/tm-170x80-1.jpg'
import imgTm2 from '../images/tm-170x80-2.jpg'
const Carusel = () => {
    return (
        <div className='px-24 mt-20 bg-[#428bca] text-white py-5 flex items-center justify-between'>
            <FaChevronLeft className='cursor-pointer'/>
            <img src={imgTm1} alt="" />
            <img src={imgTm2} alt="" />
            <img src={imgTm1} alt="" />
            <img src={imgTm2} alt="" />
            <img src={imgTm1} alt="" />
            <img src={imgTm2} alt="" />
            <FaChevronRight className='cursor-pointer'/>
        </div>
    )
}

export default Carusel