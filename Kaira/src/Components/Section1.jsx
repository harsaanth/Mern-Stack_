import './Section1.css'; 
import Image1 from '../assets/Image-1.jpg';
import Image2 from '../assets/Image-2.jpg';
import Image3 from '../assets/image-3.jpg';
import banner from '../assets/banner.jpg';
import { LuArrowLeft } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";

const Section1 = () => {
  return (
    <>
    <section className='m-45 mb-15 mt-15'>
            <h1 className='topic h-30 w-auto tc flex ic jc text-[75px]'>New Collections</h1>
            <p className=' para flex jc ic mt-5 mb-5 text-center text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut <br />
             dolorum consequuntur, adipisci repellat! Eveniet commodi voluptatem <br />
             voluptate, eum minima, in suscipit explicabo voluptatibus harum, quibusdam <br />
             ex repellat eaque!</p>
        
        <div className='flex gap-20 w-auto h-170 '>
            <div className='flex w-340 jc ic gap-15 '>

                <div className='mt-5 mb-5'>
                    <div className=" w-[400px] overflow-hidden transition-transform duration-400 hover:scale-95">
                        <img src={banner} alt="" className=" h-120 w-[420px] hover:scale-95 hover:scale-110 transition-transform duration-400 className='mt-3'"/>
                    </div>
                    <h1 className='mt-3 text-[20px]'>SOFT  LEATHER  JACKETS</h1>
                    <p className='para mt-3 text-[20px]'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. </p>
                    <h1 className='mt-3'>DISCOVER NOW</h1>  
                </div>

                <div className='mt-5 mb-5'>
                     <div className=" w-[400px] overflow-hidden transition-transform duration-400 hover:scale-95">
                        <img src={Image3} alt="" className=" h-120 w-[420px] hover:scale-95 hover:scale-110 transition-transform duration-400 className='mt-3'"/>
                    </div>
                    {/* <img src={Image3} alt="" className="h-120 w-[400px] shadow-[inset_0_0_10px_rgb(255,0,0)]" /> */}
                    <h1 className='mt-3 text-[20px]'>SOFT  LEATHER  JACKETS</h1>
                    <p className='para mt-3 text-[20px]'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. </p>  
                    <h1 className='mt-3'>DISCOVER NOW</h1>
                </div>

                <div className='mt-5 mb-5 '>.
                     <div className=" w-[400px] overflow-hidden transition-transform duration-400 hover:scale-95">
                        <img src={Image1} alt="" className=" h-120 w-[420px] hover:scale-95 hover:scale-110 transition-transform duration-400 className='mt-3'"/>
                    </div>
                    {/* <img src={Image1} alt="" className=" h-120 w-[400px] transition-transform duration-700 hover:scale-95 className='mt-3'" /> */}
                    <h1 className='mt-3 text-[20px]'>SOFT  LEATHER  JACKETS</h1>
                    <p className='para mt-3 text-[20px]'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. </p> 
                    <h1 className='mt-3'>DISCOVER NOW</h1> 
                </div>
            </div>
        </div>
        
    </section> 
    
    </>
  )
}

export default Section1;