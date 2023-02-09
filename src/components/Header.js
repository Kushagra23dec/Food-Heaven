import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../assets/resources";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
    const online = useOnline();

    const cartItems = useSelector(store => store.cart.items);


    return (


        <div className="flex justify-between font-semibold  items-center flex-wrap bg-amber-200 shadow-md"  >

            <Link to="/">  <img className="w-20" src={LOGO_URL} alt="Food_Villa" /> </Link>
            <span className="pr-4 ">{online ? "" : "🔴 Offline"}</span>
            <ul className="flex flex-wrap">
                <Link to="/"> <li className="mx-2 my-1 text-xl">Home</li> </Link>
                <Link to="/about"> <li className="mx-2 my-1 text-xl">About-Us</li> </Link>
                <Link to="/contact"> <li className="mx-2 my-1 text-xl">Contact-Us</li> </Link>
                {/* <Link to="/github"> <li className="mx-2 my-1 text-xl">Github</li> </Link> */}
                <Link to="/cart"> <li className="mx-2 my-1 text-xl pr-4">Cart<span className="border-2 border-gray-800 ml-1 py-0 px-1  rounded-md">{cartItems.length}</span></li> </Link>
                <button className="bg-gray-800  text-white rounded-md p-1 hover:bg-gray-900">Dark</button>
                <button className="mx-2 mr-4 font-semibold bg-blue-600 rounded-md p-1 hover:bg-blue-500 text-white">Login</button>
            </ul>

        </div>

    )
}

export default Header;
