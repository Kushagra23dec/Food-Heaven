import React from "react";
import { CLOUDINARY_IMG_BASE_URL } from "../assets/resources";
import NO_IMAGE2 from "../assets/NO_IMAGE.png";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import {BiFoodTag} from "react-icons/bi"


const CartCard = ({ id,
    name,
    imageId,
    category,
    inStock,
    price,
    description,
    isVeg,
    restId }) => {

        const dispatch = useDispatch();

        const handleRemoveItem = (id)=>{
            dispatch(removeItem(id));
        }

    return (

        <div className="shadow-2xl p-2   bg-amber-50 my-2 mx-2 w-64  rounded-md h-fit">
       
            <img className="w-fit" src={(imageId) == undefined || (imageId) == "" ? NO_IMAGE2 : CLOUDINARY_IMG_BASE_URL + imageId} />
   
            <div className="ml-3 text-xl font-semibold">
                <h1 className="text-lg font-bold">{name}</h1>
     
                <div className="flex gap-4 mt-2 font-semibold text-gray-800">
                    <span>{(isVeg) ? <BiFoodTag className="text-green-600"/> : "Non-Veg"}</span>
                </div>

                <h1 className="text-sm   font-semibold text-gray-800">Rupees: ₹ {price / 100} </h1>

                <button className="bg-orange-400 px-2 rounded-md mt-2 font-bold text-black hover:bg-red-600"
                    onClick={() => {
                        handleRemoveItem(id)
                    }}>Remove</button>
            </div>
        </div>
    )
}


export default CartCard;