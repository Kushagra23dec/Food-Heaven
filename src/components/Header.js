import React from "react";
import {Link} from "react-router-dom";
import { logo_url } from "../assets/resources";

const Header = ()=>{
    return(
        <div className="flex justify-between font-semibold items-center flex-wrap bg-amber-200 shadow-md"  >

<Link to="/">  <img className="w-20" src={logo_url} alt="Food_Villa" /> </Link>
            <ul className="flex flex-wrap">
               <Link to="/"> <li className="mx-2 my-1 text-xl">Home</li> </Link>
               <Link to="/about"> <li className="mx-2 my-1 text-xl">About-Us</li> </Link>
                <Link to="/contact"> <li className="mx-2 my-1 text-xl">Contact-Us</li> </Link>
                <Link to="/cart"> <li className="mx-2 my-1 text-xl">Cart</li> </Link>
                <Link to="/github"> <li className="mx-2 my-1 text-xl">Github</li> </Link>
                <button className="bg-gray-800  text-white rounded-md p-1 hover:bg-gray-900">Dark</button>
                <button className="mx-2 mr-4 font-semibold bg-blue-600 rounded-md p-1 hover:bg-blue-500 text-white">Login</button> 
            </ul>

        </div>
    )
}

export default Header;
