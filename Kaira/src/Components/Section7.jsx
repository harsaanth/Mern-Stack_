import React from 'react'
import './Section7.css'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import { LuArrowLeft } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";

const Section7 = () => {
  return (

    <>
    
    <div className='section7 flex jc ic h-180 w-full'>
        <div >
                <div className='flex jc ic w-330'>
                    <h1 className='header h-10 w-70 text-[28px]'>YOU MAY ALSO LIKE</h1>
                    <h2 className='para h-6 w-40 ml-214 cursor-pointer'>VIEW ALL PRODUCTS</h2>
                </div>

            {/* {IMAGE SECTION} */}

        
            <div  className='flex jc ic h-130 w-full gap-12 bg-white-100 '>
                <div className='h-100 w-72 mb-14'>
                    <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                        <img src={photo1} alt="" className='h-95 w-400 hover:scale-95 hover:scale-110 transition-transform duration-400'/>
                    </div>
                    {/* <img src={photo1} alt="" className='w-full h-full overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                    <h1  className='header mt-4 text-[20px] '>BAGGY SHIRT</h1>
                    <p className='text-[20px]'>$55</p>
                </div>
                <div className='h-100 w-72 mb-14'>
                    <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                        <img src={photo2} alt="" className='h-95 w-400 hover:scale-95 hover:scale-110 transition-transform duration-400'/>
                    </div>
                    {/* <img src={photo2} alt="" className='w-full h-full overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                    <h2 className='header mt-4 text-[20px]'>COTTON OFF-WHITE SHIRT</h2>
                    <p className='text-[20px]'>$65</p>
                </div>
                <div className='h-100 w-72 mb-14'>
                    <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                        <img src={photo3} alt="" className='h-95 w-400 hover:scale-95 hover:scale-110 transition-transform duration-400'/>
                    </div>
                    {/* <img src={photo3} alt="" className='w-full h-full overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                    <h3 className='header mt-4 text-[20px]'>HANDMADE CROP SWEATER</h3>
                    <p className='text-[20px]'>$100</p>
                </div>
                <div className='h-100 w-72 mb-14'>
                    <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                        <img src={photo4 } alt="" className='h-95 w-400 hover:scale-95 hover:scale-110 transition-transform duration-400'/>
                    </div>
                    {/* <img src={photo4} alt="" className='w-full h-full overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                    <h4 className='header mt-4 text-[20px]'>HANDMADE CROP SWEATER</h4>
                    <p className='text-[20px]'>$85</p>
                </div>
            </div>
        </div>
    </div>
    
{/* 
    <button className=" w-24 h-24 flex items-center justify-center rounded-full bg-gray-50 text-gray-300 text-[36px] hover:text-gray-500 bg-gray-100 shadow-md transition absolute right-10 absolute top-1500">
           <FiArrowRight />
       </button>
       
       <button className=" w-24 h-24 flex items-center justify-center rounded-full bg-
           off text-gray-300 text-[36px] hover:text-gray-500 bg-#F1F1F0 shadow-md transition absolute left-10 absolute top-1500">
           <LuArrowLeft />
       </button> */}
    </>

    
  )
}

export default Section7