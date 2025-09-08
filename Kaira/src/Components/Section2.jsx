import React from 'react';
import Bag from '../assets/Bag.svg';
import "./Section2.css";
import IMage1 from "../assets/IMage1.jpg"
import IMage2 from "../assets/IMage2.jpg"
import IMage3 from "../assets/IMage3.jpg"
import { motion } from "framer-motion";
import { LuArrowLeft } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";

const Section2 = () => {
  return (
    <>
        <div className='flex h-110 w-auto bg-white jc ic '>
            <div className='h-70 w-82 justify-items-center cursor-pointer'>
                <svg className='mt-5' xmlns="http://www.w3.org/2000/svg " height="100px" viewBox="0 -960 960 960" width="50px" fill="#434343"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>
                <h1 className='Book_An_Appointment text-[28px]  mt-[-10px] mx-auto'>Book An Appointment</h1>
                <p className='text-center mt-5 text-gray-400 text-[18px]'>At imperdiet dui accumsan sit amet <br /> nulla risus est ultricies quis.</p>
            </div>
            <div className='h-70 w-82 justify-items-center cursor-pointer'>
                <svg className='mt-5' xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="50px" fill="#434343"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm-160 80h-80v440h80v-440Zm400 440v-440H320v440h320Zm80-440v440h80v-440h-80ZM480-420Z"/></svg>
                <h1 className='Book_An_Appointment text-[28px]  mt-[-10px] mx-auto'>Book An Appointment</h1>
                <p className='text-center mt-5 text-gray-400 text-[18px]'>At imperdiet dui accumsan sit amet <br /> nulla risus est ultricies quis.</p>
            </div>
            <div className='h-70 w-82 justify-items-center cursor-pointer'>
                <svg className='mt-5' xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="50px" fill="#434343"><path d="M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"/></svg>
                <h1 className='Book_An_Appointment text-[28px]  mt-[-10px] mx-auto'>Book An Appointment</h1>
                <p className='text-center mt-5 text-gray-400 text-[18px]'>At imperdiet dui accumsan sit amet <br /> nulla risus est ultricies quis.</p>
            </div>
            <div className='h-70 w-82 justify-items-center cursor-pointer'>
                <svg className='mt-5' xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="50px" fill="#434343"><path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/></svg>
                <h1 className='Book_An_Appointment text-[28px]  mt-[-10px] mx-auto'>Book An Appointment</h1>
                <p className='text-center mt-5 text-gray-400 text-[18px]'>At imperdiet dui accumsan sit amet <br /> nulla risus est ultricies quis.</p>
            </div>
        </div>

        {/* IMAGE SECTION */}
        <div className=''>
            <div className='flex justify-center gap-8 bg-white h-150'>
                <div>
                    <div className=" w-[420px] overflow-hidden transition-transform duration-400 hover:scale-95">
                        <img src={IMage1} alt="" className='h-auto w-[420px] transition-transform duration-400 hover:scale-110'/>
                    </div>
                    <div className='w-40'>
                        <h1 className=' para p-2 cursor-pointer'>SHOP FOR MEN</h1>
                    </div>
                </div>

                <div >
                    <div className=" w-[420px] overflow-hidden transition-transform duration-400 hover:scale-95">
                       <img src={IMage2} alt="" className='h-auto w-[420px] transition-transform duration-400 hover:scale-110'/>
                    </div>
                    <div className='w-40'>     
                        <h1 className=' para p-2 cursor-pointer'>SHOP FOR WOMEN</h1>
                    </div>
                </div>

                {/* <div className=''>
                    <img src={IMage3} alt="" className='h-auto w-[420px] transition-transform duration-500 hover:scale-90'/>
                    <div className='w-50'>
                        <h1 className=' para p-2 cursor-pointer'>SHOP ACCESSORIES</h1>
                    </div>
                </div> */}

        <div className="">
        {/* Outer wrapper shrinks */}
        <div className=" w-[420px] overflow-hidden transition-transform duration-400 hover:scale-95">
            {/* Image has its own hover zoom */}
            <img
            src={IMage3}
            alt=""
            className="h-auto w-full transition-transform duration-400 hover:scale-110"
            />
        </div>

        {/* Text stays normal */}
        <div className="w-50">
            <h1 className="para p-2 cursor-pointer">SHOP ACCESSORIES</h1>
        </div>
        </div>




            </div>
        </div>
                {/* <button className=" w-24 h-24 flex items-center justify-center rounded-full  text-gray-300 text-[36px] hover:text-gray-500 bg-gray-100 shadow-md transition absolute left-10 absolute top-420">
                <LuArrowLeft />


            </button>
                <button className=" w-24 h-24 flex items-center justify-center rounded-full  text-gray-300 text-[36px] hover:text-gray-500 bg-gray-100 shadow-md transition absolute right-10 absolute top-425">
                <FiArrowRight />

            </button> */}
        
    </>
  )
}
export default Section2;