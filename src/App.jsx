// import React, { useState } from 'react'
// import Logo from './images/Logo.png'
// import shadow from './images/Shadow.png'
// import { FaFacebookF } from "react-icons/fa6";
// import { IoLogoTwitter } from "react-icons/io";
// import { FaYoutube } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import { watches, watchBg } from './Data'

// const App = () => {
//   const [watch, setWatch] = useState(0);
//   const [bgLinear, setBgLinear] = useState(watchBg[0]);
//   const [translation, setTranslation] = useState(0);

//   const right = () => {
//     setTranslation(-50);
//     setTimeout(() => {
//       if (watch === 0) {
//         setWatch(watches.length - 1);
//         setBgLinear(watchBg[watches.length - 1]);
//       } else {
//         setWatch(watch - 1);
//         setBgLinear(watchBg[watch - 1]);
//       }
//       setTranslation(0);
//     }, 500);
//   };

//   const left = () => {
//     setTranslation(50);
//     setTimeout(() => {
//       if (watch === watches.length - 1) {
//         setWatch(0);
//         setBgLinear(watchBg[0]);
//       } else {
//         setWatch(watch + 1);
//         setBgLinear(watchBg[watch + 1]);
//       }
//       setTranslation(0);
//     }, 500);
//   };

//   return (
//     <div className='w-screen h-screen font-sofia'>
//       <div className={`w-full h-full ${bgLinear} transition-colors duration-500 ease-in-out`}>
//         <nav className='w-full h-28 flex justify-between items-center px-40'>
//           <div>
//             <img src={Logo} alt="" className='w-[123px] cursor-pointer' />
//           </div>
//           <div className='flex gap-20 items-center'>
//             <ul className='text-lg flex gap-16'>
//               <li><a href="#!">Shop</a></li>
//               <li><a href="#!">Brand</a></li>
//               <li><a href="#!">Contact Us</a></li>
//             </ul>
//             <button className='px-8 py-3 rounded-full bg-black text-white hover:bg-white hover:text-black  duration-500 ease-in-out'>Sign Up</button>
//           </div>
//         </nav>

//         <div className='h-[80vh] flex'>
//           <div className='w-2/4 text-white px-24 flex flex-col justify-evenly ml-16'>
//             <div className=''>
//               <h1 className='text-5xl font-extrabold'>Exquisite Watches</h1>
//               <h2 className='text-3xl font-extrabold mt-3'>Choose Luxury, <span className='text-black'>Choose Us</span></h2>
//             </div>
//             <p className='text-lg font-poppins font-medium leading-8 w-[90%] text-black'>Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch</p>
//             <h1 className='font-poppins leading-7 text-5xl font-semibold'>$430.00</h1>
//             <div className='flex gap-5 mb-8'>
//               <FaFacebookF className='w-10 h-10 p-2 border rounded-full border-white cursor-pointer hover:bg-white hover:text-blue-600  duration-500 ease-in-out' />
//               <IoLogoTwitter className='w-10 h-10 p-2 border rounded-full border-white cursor-pointer hover:bg-white hover:text-sky-500 duration-500 ease-in-out' />
//               <FaYoutube className='w-10 h-10 p-2 border rounded-full border-white cursor-pointer hover:bg-white hover:text-red-600 duration-500 ease-in-out' />
//             </div>
//           </div>

//           <div className='w-[55%] relative flex flex-col items-center py-20 overflow-hidden mr-20'>
//             <img
//               src={watches[watch]} alt="" className='w-[360px] transition-transform duration-500 ease-in-out' style={{ transform: `translateX(${translation}%)` }} />
//             <img src={shadow} alt="" className=''/>
//             <FaChevronLeft onClick={right} className='w-12 h-12 p-3 absolute top-[43%] left-20 text-white border rounded-full border-white cursor-pointer hover:bg-white hover:text-black  duration-300 ease-in-out' />
//             <FaChevronRight onClick={left} className='w-12 h-12 p-3 absolute  top-[43%] right-20 text-white border rounded-full border-white cursor-pointer hover:bg-white hover:text-black  duration-300 ease-in-out' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App






// import React from 'react'

// const App = () => {
//   return (
//     <div className='bg-slate-900 w-screen h-screen flex items-center justify-center'>
//       <div className='w-[28%] h-[90vh] bg-[#F7F8FB] rounded-[39px] flex flex-col pt-40'>
//         <h1 className='text-5xl text-[#505050] font-bold mb-4 flex justify-end pr-5'>1,061</h1>
//         <div className='grid grid-cols-4 gap-4 pt-16  ml-9'>
//           <div className='w-16 h-16 rounded-full bg-[#D4D4D2] flex items-center justify-center'>
//             <span className='font-poppins text-[#1C1C1C] text-3xl'>AC</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#D4D4D2] flex items-center justify-center'>
//             <span className='font-poppins text-[#1C1C1C] text-3xl'>+/-</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#D4D4D2] flex items-center justify-center'>
//             <span className='font-poppins text-[#1C1C1C] text-3xl'>%</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#FF9500] flex items-center justify-center'>
//             <span className='font-poppins text-white text-3xl'>÷</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins text-[#D4D4D2] text-3xl'>7</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins  text-[#D4D4D2] text-3xl'>8</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins  text-[#D4D4D2] text-3xl'>9</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#FF9500] flex items-center justify-center'>
//             <span className='font-poppins text-white text-3xl'>X</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins  text-[#D4D4D2] text-3xl'>4</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins  text-[#D4D4D2] text-3xl'>5</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins  text-[#D4D4D2] text-3xl'>6</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#FF9500] flex items-center justify-center'>
//             <span className='font-poppins text-white text-3xl'>-</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins  text-[#D4D4D2] text-3xl'>1</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins  text-[#D4D4D2] text-3xl'>2</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center'>
//             <span className='font-poppins  text-[#D4D4D2] text-3xl'>3</span>
//           </div>
//           <div className='w-16 h-16 rounded-full bg-[#FF9500] flex items-center justify-center'>
//             <span className='font-poppins text-white text-3xl'>+</span>
//           </div>
//         </div>
//         <div className='flex items-center justify-around pl-5 mt-6'>
//           <span className='w-40 h-16 rounded-full  bg-[#505050] flex items-center justify-center font-poppins text-[#D2D4D4] text-3xl'>0</span>
//           <span className='w-16 h-16 rounded-full bg-[#505050] flex items-center justify-center font-poppins text-[#D4D4D2] text-3xl'>.</span>
//           <span className='w-16 h-16 rounded-full bg-[#FF9500] flex items-center justify-center font-poppins text-white text-3xl'>=</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import { MdOutlinePhoneIphone } from "react-icons/md";
// import { MdOutlineSettingsSuggest } from "react-icons/md";
// import { LiaFontSolid } from "react-icons/lia";
// import { FaHtml5 } from "react-icons/fa";
// import { CiLocationOn } from "react-icons/ci";
// import { FaPhoneAlt } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { TiSocialGooglePlus } from "react-icons/ti";
// import { FaLinkedinIn } from "react-icons/fa";
// import img1 from './images/profile1.jpg'
// import img2 from './images/profile2.jpg'
// import img3 from './images/profile3.jpg'
// import img4 from './images/profile4.jpg'
// const App = () => {
//   return (
//     <div className=''>
//       <div className='h-[100vh] bg-gradient-to-r from-[#FF512F] to-[#DD2476] flex flex-col items-center justify-center text-center gap-10 px-24'>
//         <h1 className='text-white text-7xl font-semibold cmt-5'>Com<span className='text-black'>in</span>g</h1>
//         <p className='text-white text-xl'>HELLO, OUR WEBSITE IS UNDER CONSTRUCTION. WE ARE CURRENTLY WORKING ON IT. STAY TUNED! THANK YOU FOR VISITING TEMPLATEMO</p>
//         <div className='flex h-[11vh] gap-5 mt-5'>
//           <div className='flex flex-col justify-between border-r-[1px] px-8'>
//             <h1 className='text-4xl font-bold text-white'>365</h1>
//             <p className='text-white text-xl'>Days</p>
//           </div>
//           <div className='flex flex-col justify-between border-r-[1px] px-8'>
//             <h1 className='text-4xl font-bold text-white'>24</h1>
//             <p className='text-white text-xl'>Hours</p>
//           </div>
//           <div className='flex flex-col justify-between border-r-[1px] px-8'>
//             <h1 className='text-4xl font-bold text-white'>59</h1>
//             <p className='text-white text-xl'>Minutes</p>
//           </div>
//           <div className='flex flex-col justify-between px-5 mr-5'>
//             <h1 className='text-4xl font-bold text-white'>59</h1>
//             <p className='text-white text-xl'>seconds</p>
//           </div>
//         </div>
//         <div className='flex items-center justify-center mt-5'>
//           <input type="text" placeholder='Your Email' className='w-full h-12 pl-4 pr-48' />
//           <button className='h-12 px-10 text-white bg-lime-500'>SUBSCRIBE</button>
//         </div>
//       </div>

//       <div className='w-full h-[60vh] px-24 text-center pt-20'>
//         <h1 className='text-4xl font-bold tracking-widest text-[#7AD03A]'>FEATURES</h1>
//         <div className='flex h-[100%] mt-10'>
//           <div className='w-[25%] h-[50%] text-center flex flex-col items-center justify-evenly mt-16'>
//             <MdOutlinePhoneIphone className='text-2xl w-[60px] h-[60px] border-[1.5px] p-3 rounded-full border-[#7AD03A] text-[#7AD03A]' />
//             <h1 className='text-xl font-semibold'>FULLY RESPONSIVE</h1>
//             <p className='text-[14px]'>Lorem ipsum dolor sit consectetur ang elit doloribus magni incidunt fugit assumenda atque.</p>
//           </div>
//           <div className='w-[25%] h-[50%] text-center flex flex-col items-center justify-evenly mt-16'>
//             <MdOutlineSettingsSuggest className='text-2xl w-[60px] h-[60px] border-[1.5px] p-3 rounded-full border-[#7AD03A] text-[#7AD03A]' />
//             <h1 className='text-xl font-semibold'>BOOTSTRAP 3.3.4</h1>
//             <p className='text-[14px]'>Lorem ipsum dolor sit consectetur ang elit doloribus magni incidunt fugit assumenda atque.</p>
//           </div>
//           <div className='w-[25%] h-[50%] text-center flex flex-col items-center justify-evenly mt-16'>
//             <LiaFontSolid className='text-2xl w-[60px] h-[60px] border-[1.5px] p-3 rounded-full border-[#7AD03A] text-[#7AD03A]' />
//             <h1 className='text-xl font-semibold'>GOOGLE FONTS</h1>
//             <p className='text-[14px]'>Lorem ipsum dolor sit consectetur ang elit doloribus magni incidunt fugit assumenda atque.</p>
//           </div>
//           <div className='w-[25%] h-[50%] text-center flex flex-col items-center justify-evenly mt-16'>
//             <FaHtml5 className='text-2xl w-[60px] h-[60px] border-[1.5px] p-3 rounded-full border-[#7AD03A] text-[#7AD03A]' />
//             <h1 className='text-xl font-semibold'>HTML5 & CSS3</h1>
//             <p className='text-[14px]'>Lorem ipsum dolor sit consectetur ang elit doloribus magni incidunt fugit assumenda atque.</p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto my-16">
//         <h2 className="text-center text-5xl font-bold text-[#7AD03A] mb-20">WE ARE GROWING</h2>
//         <div className="flex">
//           <div className="flex items-center gap-3 ml-[100px]">
//             <img src={img1} alt="Tracy" className="rounded-full w-[100px] h-[100px]" />
//             <div><h3 className="text-lg font-semibold">TRACY</h3>
//               <p className="text-sm text-[#7AD03A] font-bold">Designer</p>
//               <p className="text-gray-600 text-[13px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 ml-[100px] p-10">
//             <img src={img2} alt="Mary" className="rounded-full w-[100px] h-[100px]" />
//             <div className="">
//               <h3 className="text-lg font-semibold">MARY</h3>
//               <p className="text-sm text-[#7AD03A] font-bold">Developer</p>
//               <p className="text-gray-600 text-[13px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//             </div>
//           </div>
//         </div>
//         <hr className='absolute w-[75%] h-[1px] ml-[140px]' />
//         <hr className='absolute w-[25%] h-[1px] left-[40%] rotate-90' />
//         <div className='flex mt-10 '>
//           <div className="flex items-center gap-3 ml-[100px]">
//             <img src={img3} alt="Mary" className="rounded-full  w-[100px] h-[100px]" />
//             <div className="">
//               <h3 className="text-lg font-semibold">Julia</h3>
//               <p className="text-sm text-[#7AD03A] font-bold">Director</p>
//               <p className="text-gray-600 text-[13px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//             </div>
//           </div>
//           <div className="flex items-center justify-between gap-3 ml-[100px]">
//             <img src={img4} alt="Mary" className="rounded-full  w-[100px] h-[100px]" />
//             <div className="">
//               <h3 className="text-lg font-semibold">Linda</h3>
//               <p className="text-sm text-green-500 font-bold">Manager</p>
//               <p className="text-gray-600 text-[13px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//             </div>
//           </div>
//         </div>

//       </div>

//       <div className='w-full h-[90vh] bg-gradient-to-r from-gray-700 to-gray-300 pt-80px mt-40'>
//         <h2 className='flex juustify-center text-5xl font-bold text-[#7AD03A] ml-[520px] mb-[80px] pt-[60px]'>STAY CONNECTED</h2>
//         <div className='flex pb-[100px] justify-center gap-10'>
//           <div className='mt-50px'>
//             <input type="text" className="border-b border-gray-200 w-[500px] bg-transparent placeholder:text-xl mb-12" placeholder='Name' /><br />
//             <input type="text" className="border-b border-gray-200 w-[500px] bg-transparent placeholder:text-xl mb-12" placeholder='Email' /><br />
//             <input type="text" className="border-b border-gray-200 w-[500px] bg-transparent placeholder:text-xl mb-12" placeholder='Subject' /><br />
//             <textarea name="" id="" className='border-b border-gray-200 w-[500px] bg-transparent placeholder:text-xl mb-12' placeholder='Message' ></textarea><br />
//             <button className='border border-white py-[10px] px-[197px] text-white'>Send Message</button>
//           </div>
//           <div className=''>
//             <div className='flex my-10 items-start'>
//               <CiMail className='border border-gray-300 text-xl w-[50px] h-[50px] p-3  text-white mt-[-20px]' />
//               <em className='text-white ml-10'>hello@company.com</em>
//             </div>
//             <div className='flex my-10 items-center'>
//               <FaPhoneAlt className='border border-gray-300 w-[50px] h-[50px] p-3  text-lg text-white ' />
//               <em className='text-white ml-10'>010-020-0340, 090-080-0760</em>
//             </div>
//             <div className='flex my-10 items-center'>
//               <CiLocationOn className='border border-gray-300 w-[50px] h-[50px] text-xl p-3  text-white ' />
//               <em className='text-white ml-10'>220 Another Roadside, Birdeye View, GO 54321</em>
//             </div>
//           </div>

//         </div>
//       </div>
//       <footer className='w-full flex pl-52 h-[10vh] items-center'>
//         <div className='flex items-center'>
//           <p>Copyright &:copy 2084 Your Company Name | Design: <a href='#!' className='text-blue-600'>templatemo</a></p>
//           <FaFacebookF className='text-sm ml-5' />
//           <FaTwitter className='text-sm ml-5' />
//           <TiSocialGooglePlus className='text-sm ml-5' />
//           <FaLinkedinIn className='text-sm ml-5' />
//         </div>
//       </footer>



//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Carusel from './components/Carusel'
import Footer from './components/Footer'
import NewFuture from './components/NewFuture'
import Contact from './components/Contact'
const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Products />
            <NewFuture />
            <Carusel />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
