import useState from 'react';
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
// import { FaCcVisa } from "react-icons/fa";
// import { FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='flex jc ic h-100 w-full '>
        <div className='h-70 w-80 bg-[#f1f1f0]'>
            <h1 className='header text-4xl ml-2 bg-[#f1f1f0]'>KAIRA</h1>
            <p className='para mt-5 ml-2 text-[18px]'>Gravida massa volutpat aenean odio. <br />
             Amet, turpis erat nullam fringilla <br />
              elementum diam in. Nisi, purus vitae, <br />
               ultrices nunc. Sit ac sit suscipit <br />
                hendrerit.</p>
                <div className='flex text-3xl gap-5 mt-7'>
                <div className='icon1'>
                    <BsFacebook /> 
                </div>
                <div className='icon2'>
                    <LuTwitter />   
                </div>
                <div className='icon3'>
                    <FiYoutube />
                </div>
                <div className='icon4'>
                    <ImPinterest2 />
                </div>
                <div className='icon5'>
                    <FaInstagram />
                </div>
                </div>
        </div>
        <div className='h-70 w-80'>
            <h2 className='header text-2xl ml-2'>QUICK LINKS</h2>
            <h2 className='mt-7 para ml-2 cursor-pointer'>HOME</h2>
            <h2 className='para ml-2 cursor-pointer'>ABOUT</h2>
            <h2 className='para ml-2 cursor-pointer'>SERVICES</h2>
            <h2 className='para ml-2 cursor-pointer'>SINGLE ITEM</h2>
            <h2 className='para ml-2 cursor-pointer'>CONTACT</h2>
        </div>
        <div className='h-70 w-80 '>
            <h3 className='header text-2xl ml-2'>HELP & INFO</h3>
            <h3 className='mt-7 ml-2 cursor-pointer'>TRACK YOUR ORDERS</h3>
            <h3 className='ml-2 cursor-pointer'>RETURNS + EXCHANGE</h3>
            <h3 className='ml-2 cursor-pointer'>SHIPPING + DELIVERY</h3>
            <h3 className='ml-2 cursor-pointer'>CONTACT US</h3>
            <h3 className='ml-2 cursor-pointer'>FIND US EASY</h3>
            <h3 className='ml-2 cursor-pointer'>FAQS</h3>
        </div>
        <div className=' h-70 w-80 text-2xl'>
            <h4 className=' header ml-2'>CONTACT US</h4>
            <p className=' para text-[20px] mt-7 ml-2'>Do you have any questions or <br />
             suggestions?</p>
             <h4 className='text-[18px] ml-2 cursor-pointer'>Contact@yourcompany.com</h4>
             <h4 className='para text-[18px] mt-4 ml-2'>Do you need support? Give us a call.</h4>
             <h4 className='header cursor-pointer'>+43 720 11 52 78</h4>
        </div>
    </div>
    
    </> 
  )
}
export default Footer