import React from "react";
import { CLOUDINARY_IMG_BASE_URL } from "../assets/resources.js";
import NO_IMAGE2 from "../assets/NO_IMAGE.png";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";






const MenuCard = (items) => {

    const dispatch = useDispatch();

    const  handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    
    const { id,
        name,
        cloudinaryImageId,
        category,
        inStock,
        price,
        description,
        isVeg,
        restId } = items.item;

    return (
        <div className="p-2 m-2 shadow-md bg-yellow-50  w-60 rounded-md">
            {/* <div className="w-1/3 border border-black"> */}
            <img className="w-fit" src={(cloudinaryImageId) == undefined || (cloudinaryImageId) == "" ? NO_IMAGE2 : CLOUDINARY_IMG_BASE_URL + cloudinaryImageId} />
            {/* </div> */}
            <div className="ml-3 text-xl font-semibold">
                <h1 className="font-bold  text-2xl text-gray-900">{name}</h1>
                <h1>{category}</h1>
                {/* <h1>{description}</h1> */}
                <div className="flex gap-4 mt-2 font-semibold">
                    <span>Only {inStock} left !!</span>
                    <span>{(isVeg) ? "Veg" : "Non-Veg"}</span>
                </div>
                <h1 className="font-bold text-xl">Rupees: ₹ {price / 100} </h1>

                <button className="bg-green-400 px-2 rounded-md mt-2 font-bold text-black hover:bg-orange-400"
                    onClick={() => {
                        handleAddItem(items.item)
                    }}>Add to Cart</button>
            </div>
        </div>
    )
}

export default MenuCard;