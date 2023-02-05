import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_IMG_BASE_URL, MENU_URL } from "../assets/resources";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer.js";


async function fetchMenu(setMenu, id) {
    const res = await fetch(MENU_URL + id);
    const data = await res.json();
    // console.log(Object.values(data)[1]);
    setMenu(Object.values(data)[1]);
}

const CardDetails = () => {
    const { id } = useParams();

    const [menu, setMenu] = useState([]);


    useEffect(() => {
        fetchMenu(setMenu, id);
    }, []);

    return (menu.length === 0) ?
        <Shimmer />
        : (
            <div className="flex grow p-5 text-gray-800  flex-wrap">
                <div className="flex flex-col gap-2 w-1/5 flex-wrap ">
                    <div className="sticky top-1 ">
                        {/* <div className="  "> */}
                        <img className="w-fit" src={CLOUDINARY_IMG_BASE_URL + menu.cloudinaryImageId} />
                        {/* </div> */}
                        <div className=" font-semibold ">
                            <h1 className="font-bold text-4xl text-gray-800">{menu.name}</h1>
                            <h1 className="font-semibold text-xl text-gray-800">{menu.cuisines.join(", ")} </h1>
                            <h1 className="text-lg">{menu.area}, {menu.city}</h1>
                            <h1 className="text-lg">{menu.avgRating}⭐</h1>
                            <h1 className="text-lg">{menu.isVeg ? "Veg🥦" : "Non-Veg🥩"}</h1>

                            {/* <button className="bg-orange-500 px-2 py-1 text-xl rounded-md hover:bg-orange-400">Order</button> */}
                        </div>
                    </div>
                </div>
                {/* Menu Container... */}
                <div className="flex  w-4/5 ">
                    <h1 className="font-bold ml-2 text-3xl ">Menu</h1>

                    <div className="flex flex-wrap justify-center">
                        {Object.keys(menu.menu.items).map((dish) => { return <MenuCard key={menu.menu.items[dish].id} {...menu.menu.items[dish]} /> })}
                    </div>
                </div>


            </div>
        )
}

export default CardDetails;