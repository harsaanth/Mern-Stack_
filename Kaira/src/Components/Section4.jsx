// import React from 'react'
import './Section4.css'
import Large from '../assets/Large.jpg'
import Item1 from '../assets/Item1.jpg';
import Item2 from '../assets/Item2.jpg';
import Item3 from '../assets/Item3.jpg';
import Item4 from '../assets/Item4.jpg';
// import { LuArrowLeft } from "react-icons/lu";
// import { FiArrowRight } from "react-icons/fi"; 

const Section4 = () => {
  return (
    <>    
        <div className='flex jc ic w-auto h-200 mt-190 bg-gray-200'>
          <div className=' h-170 w-350 flex jc ic'>
            <div className='h-160 w-165 '>
              <img src={Large} alt="" className='h-full w-full'/>   
            </div>
            <div className=' h-160 w-165 bg-white'>
              <h1 className='mr-50 classic-winter-collection text-[44px] mt-30 ml-25 leading-tight'>CLASSIC WINTER <br />COLLECTION</h1>
              <p className='mr-25 para ml-25 mt-5 leading-relaxed text-gray text-[18px]'>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis <br />
                   purus, gravida orci, fringilla a. Ac sed eu fringilla odio <br /> 
                   mi. Consequat pharetra at magna imperdiet cursus  <br />
                    faucibus sit libero. Ultricies quam nunc, lorem sit lorem <br />
                    urna, pretium aliquam ut. In vel, quis donec dolor id in. <br /> 
                    Pulvinar commodo mollis diam sed facilisis at cursus <br /> 
                    imperdiet cursus ac faucibus sit faucibus sit libero.
                  </p>
                  <div className='ml-25 mt-10 bg-black w-45 h-10 text-white  jc ic cursor-pointer'>
                  <button className='ml-5 mt-2 cursor-pointer'> SHOP COLLECTION</button>
                  </div>
            </div>
          </div>
       </div>
            <div className='flex ic justify-center h-170 w-full'>
              <div className=' ic jc h-150 w-330  '>
                <div className='flex ic '>
                  <h1 className=' header text-3xl ml-6'>BEST SELLING ITEMS</h1>
                  <h2 className=' paratext-center ml-212 cursor-pointer'>VIEW ALL PRODUCTS</h2>
                </div>
                <div className='flex gap-10 jc ic text-[20px]'>
                <div className='h-110 w-72 mt-10'>
                  <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                        <img src={Item1} alt="" className='h-95 w-400  hover:scale-110 transition-transform duration-400'/>
                  </div>
                  {/* <img src={Item1} alt="" className='overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                  <h1>DARK FLOURISH ONE-PIECE</h1>
                  <h2>$50.00</h2> <div class="w-64 h-64 transition-all duration-300 hover:scale-95">
                  </div>
                </div>
                <div className='h-110 w-72 mt-10'>
                  <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                        <img src={Item2} alt="" className='h-95 w-400  hover:scale-110 transition-transform duration-400'/>
                  </div>
                  {/* <img src={Item2} alt="" className='overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                  <h1>BAGGY SHIRT</h1>
                  <h2>$50.00</h2>
                </div>
                <div className='h-110 w-72 mt-10'>
                  <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                        <img src={Item3} alt="" className='h-95 w-400  hover:scale-110 transition-transform duration-400'/>
                  </div>
                  {/* <img src={Item3} alt="" className='overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                  <h1>COTTON OFF-WHITE SHIRT</h1>
                  <h2>$65.00</h2>
                </div>
                <div className='h-110 w-72 mt-10'>
                  <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                        <img src={Item4} alt="" className='h-95 w-400  hover:scale-110 transition-transform duration-400'/>
                  </div>
                  {/* <img src={Item4} alt="" className='overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                  <h1>CROP SWEATER</h1>
                  <h2>$75.00</h2>
                </div>
                </div>
              </div>
            </div>     
    </>
  )
}

export default Section4
