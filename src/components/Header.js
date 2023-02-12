import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../assets/resources";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
    const online = useOnline();
    const [isHam, setIsHam] = useState(false);
    const cartItems = useSelector(store => store.cart.items);

    const handleHam = () => {
        setIsHam(ham => !ham);
    }

    return (

        <div>

            <div className="flex justify-between font-semibold  items-center bg-amber-200 shadow-md"  >

                <Link to="/">  <img className="w-20" src={LOGO_URL} alt="Food_Villa" /> </Link>
                <span className="pr-4 ">{online ? "" : "🔴 Offline"}</span>

                <img className="w-10 lg:hidden block mr-8 " onClick={() => { handleHam() }} alt="ham" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSJSgwiENM8c4PfERDxlWD2uPdxt2N-MpnA&usqp=CAU" />




                <div className="lg:block hidden">
                    <ul className="flex justify-between text-base ">
                        <Link to="/"> <li className="mx-2 my-1 hover:text-blue-700 hover:underline ">Home</li> </Link>
                        <Link to="/about"> <li className="mx-2 my-1 hover:text-blue-700 hover:underline">About-Us</li> </Link>
                        <Link to="/contact"> <li className="mx-2 my-1 hover:text-blue-700 hover:underline">Contact-Us</li> </Link>
                        {/* <Link to="/github"> <li className="mx-2 my-1 text-xl">Github</li> </Link> */}
                        <Link to="/cart"> <li className="mx-2 my-1  pr-4 ">Cart<span className="border-2 border-gray-800 ml-1 py-0 px-1  rounded-md">{cartItems.length}</span></li> </Link>
                        <button className="bg-gray-800  text-white rounded-md p-1 hover:bg-gray-900">Dark</button>
                        <button className="mx-2 mr-4 font-semibold bg-blue-600 rounded-md p-1 hover:bg-blue-500 text-white">Login</button>
                    </ul>
                </div>

            </div>

            {isHam &&

                <div className="lg:hidden block bg-amber-100 pl-10">
                    <ul className=" text-base w-full ">
                        <Link to="/"> <li className="mx-2 my-1 py-1  hover:text-blue-700 hover:underline ">Home</li> </Link>
                        <Link to="/about"> <li className="mx-2 my-1 py-1 hover:text-blue-700 hover:underline">About-Us</li> </Link>
                        <Link to="/contact"> <li className="mx-2 my-1 py-1 hover:text-blue-700 hover:underline">Contact-Us</li> </Link>
                        {/* <Link to="/github"> <li className="mx-2 my-1 text-xl">Github</li> </Link> */}
                        <Link to="/cart"> <li className="mx-2 my-1  px-2  py-1">Cart<span className="border-2 border-gray-800 ml-1 py-0 px-1  rounded-md">{cartItems.length}</span></li> </Link>
                        <button className="bg-gray-800  text-white rounded-md p-1 hover:bg-gray-900">Dark</button>
                        <button className="mx-2 mr-4 font-semibold bg-blue-600 rounded-md p-1 hover:bg-blue-500 text-white">Login</button>
                    </ul>
                </div>
            }



        </div>

    )
}

export default Header;
