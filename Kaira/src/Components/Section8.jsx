import React from 'react'
import './Section8.css'
import object1 from '../assets/object1.jpg'
import object2 from '../assets/object2.jpg'
import object3 from '../assets/object3.jpg'


const Section8 = () => {
  return (
    <div className='flex jc ic bg-white w-full h-170'>
        <div className='bg-white  h-150 w-340'>
            <div className='flex ic  gap-240'>
                <h1 className='header text-center text-[25px] ml-5 h-10 w-60'>READ BLOG POSTS </h1>
                <h2 className='para text-right h-5 w-18 cursor-pointer'>VIEW ALL</h2>
            </div>
            <div className='flex jc ic h-125 m-5'>
                <div className=' h-125 w-110'>
                    <img src={object1} alt="" />
                    <p  className='para text-[19px] mt-5'> FASHION/ JULY 11, 2022</p>
                    <h1 className='header text-[24px] mt-4'>HOW TO LOOK OUTSTANDING IN PASTOL</h1>
                    <p className='para text-[19px] mt-5'>Dignissim lacus,turpis ut suspendisse vel <br />
                     tellus.Turpis purus,gravida orci,fringilla...</p>
                </div>
                <div className=' h-125 w-110'>
                    <img src={object2} alt="" />
                    <p  className='para text-[19px] mt-5'> FASHION/ JULY 11, 2022</p>
                    <h2 className='header text-[24px] mt-4'>TOP 10 FASHION TREND FOR <br />
                     SUMMER</h2>
                    <p className='para text-[19px] mt-5'>Turpis purus, gravida orci, fringilla dignissim lacus, <br />
                     turpis ut suspendisse vel tellus...</p>
                </div>
                <div className=' h-125 w-110'>
                    <img src={object3} alt="" />
                    <p  className='para text-[19px] mt-5'> FASHION/ JULY 11, 2022</p>
                    <h3 className='header text-[24px] mt-4'>CRAZY FASHION WITH UNIQUE <br />
                     MOMENT</h3>
                     <p  className='para text-[19px] mt-5'> Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...</p>
                </div>
            </div>
        </div>
        {/* <div className='marquee'>
            Apple
        </div> */}
 
    </div>
  )
}

export default Section8