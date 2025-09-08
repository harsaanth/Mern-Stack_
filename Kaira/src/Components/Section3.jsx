import './Section3.css'
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import { LuArrowLeft } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";

const Section3 = () => {
  return (
    <>
    <div className='flex h-173 w- absolute left-0 right-0 ic jc'>
      <div >

        <div className='flex'>
          <h1 className='our-new-arrivals ml-5 text-[30px]'>OUR NEW ARRIVALS </h1>
          <h2 className=' flex ml-215 jc ic'>VIEW ALL PRODUCTS</h2>
        </div>

        <div className=' flex h-130 w-330 gap-8 ic jc'>
            <div className='h-115 w-74'>
              <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                <img src={product1} alt="" className='h-95 w-400 hover:scale-95 hover:scale-110 transition-transform duration-400'/>
              </div>
              <div className=''>
                <h1 className='text-[20px]'>DARK FLOURISH ONEPIECE</h1>
                <h2 className='text-[20px]'>$95.00</h2>
              </div>
            </div>

            <div className='h-115 w-74 '>
              <div  className='text-[20px]'>
                <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                <img src={product2} alt="" className='h-95 w-400 hover:scale-95 hover:scale-110 transition-transform duration-400'/>
              </div>
                {/* <img src={product2} alt="" className='h-95 w-400 overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                <h1>BAGGY SHIRT</h1>
                <h2>$55.00</h2>
              </div>
            </div>
            <div className='h-115 w-74 '>
              <div  className='text-[20px]'>
              <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                <img src={product3} alt="" className='h-95 w-400 hover:scale-95 hover:scale-110 transition-transform duration-400'/>
              </div>
                {/* <img src={product3} alt="" className='h-95 w-400 overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                <h1>COTTON OFF-WHITE SHIRT</h1>
              </div>

            </div>
            <div className='h-115 w-74 '>
              <div  className='text-[20px]'>
              <div className='overflow-hidden transition-transform duration-400 hover:scale-95'>
                <img src={product4} alt="" className='h-95 w-400 hover:scale-95 hover:scale-110 transition-transform duration-400'/>
              </div>
                {/* <img src={product4} alt="" className='h-95 w-400 overflow-hidden transition-all duration-500 hover:scale-90'/> */}
                <h1>CROP SWEATER</h1>
                <h2>$65.00</h2>
              </div>
            </div>
        </div>
      </div>
    </div>
    
       {/* <button className=" w-24 h-24 flex items-center justify-center rounded-full bg-#F1F1F0 text-gray-300 text-[36px] hover:text-gray-500 bg-gray-100 shadow-md transition absolute right-10 absolute top-580">
           <FiArrowRight />
       </button>
       
       <button className=" w-24 h-24 flex items-center justify-center rounded-full bg-
           off text-gray-300 text-[36px] hover:text-gray-500 bg-#F1F1F0 shadow-md transition absolute left-10 absolute top-580">
           <LuArrowLeft />
       </button> */}
    
    </>
  )
}

export default Section3