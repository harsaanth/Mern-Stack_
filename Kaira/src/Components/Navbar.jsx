import "./Navbar.css";
import { FaSearch } from "react-icons/fa"; 
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const handleclick = () => {

  }
  return (
    <div className="flex justify-between px-[25px]">
      <div>
        <h1 className="text-lg mt-[8px] my-custom-style-brand w-30 md:text-[2rem] lg:text-[3rem]">
          KAIRA
            {/* <hr class="border-t mt-4 border-gray-300 absolute left-0 right-0" /> */}
        </h1>

      </div>

      <div className="flex text-[17px] justify-center ic gap-[80px]">
        <Link to={"/home"}>
          <h2 className=" text-gray-700 hover:text-black cursor-pointer ml-2">HOME</h2>
        </Link>

        <Link to={"/shop"}>
                <h2 className="text-gray-700 hover:text-black cursor-pointer">SHOP</h2>
        </Link>

        <Link to={"/blog"}>
                <h2 className="text-gray-700 hover:text-black cursor-pointer">BLOG</h2>
        </Link>
      <Link to={"/pages"}>
        <h2 className="text-gray-700 hover:text-black cursor-pointer">PAGES</h2>
      </Link>

        <Link to={"/blog"}>
        <h2 className="text-gray-700 hover:text-black cursor-pointer">BLOG</h2>
        </Link>

        <Link to={"/contact"}>
          <h2 className="text-gray-700 hover:text-black cursor-pointer mr-2 ">CONTACT</h2>
        </Link>
      </div>
      <div className="flex items-center justify-center text-gray-700 gap-8 jc ic font-normal  ">
        <h3 className="hover:text-black cursor-pointer ml-2">WISHLIST (0)</h3>
        <h3 className="hover:text-black cursor-pointer ml-2">CART (0)</h3>

        <Link to={"/search"}>
          <h1 className="mr-2 text-[30px] text-gray-400 cursor:pointer"><FaSearch />
          </h1>  
        </Link>
         
      </div>
    </div>
  );
};
export default Navbar;
