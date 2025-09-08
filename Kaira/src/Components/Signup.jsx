import React from 'react'
import "./Signup.css"

import object1 from '../assets/object1.jpg'
import object2 from '../assets/object2.jpg'
import object3 from '../assets/object3.jpg'
// import product1 from '../assets/product1.jpg'
// import product2 from '../assets/product2.jpg'
// import product3 from '../assets/product3.jpg'


const Signup = () => {
  return (
    <>
        <div className=' h-110 w-full ic jc '>
            <div className='flex ml-40 ic jc h-full w-340'>
                <div className=' jc h-80 w-220'>
                    <h1 className='header text-[45px] h-15 text-center w-220 mt-18'>SIGN UP FOR OUR NEWSLETTER</h1>
                    <div className='jc mt-10 rounded-lg space-y-[20px]'>
                        <input className='para text-[25px] h-15 bg-white px-[20px] text-[#8f8f8f] rounded-lg w-full focus:outline-[6px] outline-[rgb(0,0,0,0.1)] focus:transition-all focus:delay-[1000ms] not-focus:transition-all not-focus:delay-[1000ms] not-focus:outline-0'  placeholder='Your Email Address' /> 

                        <button className='bg-[#212529] text-white py-[15px] w-full cursor-pointer'>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex text-center  w-full'>
            <div><img src={object1} alt="" className='h-70 w-70'/></div>
            <div><img src={object2} alt="" className='h-70 w-70'/></div>
            <div><img src={object3} alt="" className='h-70 w-70'/></div>
            <div><img src={object1} alt="" className='h-70 w-70'/></div>
            <div><img src={object2} alt="" className='h-70 w-70'/></div>
            <div><img src={object3} alt="" className='h-70 w-70'/></div>
        </div>
        <div className='relative flex ic jc '>
            <h1 className=' flex ic jc h-9 w-65 absolute bottom-[-25px]  text-white bg-gray-800 cursor-pointer'>Follow us on Instagram</h1>
        </div>
    </>
  )
}

export default Signup