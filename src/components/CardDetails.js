import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_IMG_BASE_URL } from "../assets/resources";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer.js";
import useMenu from "../utils/useMenu";



const handleSearch = (menu, searchMenu, setFilteredMenu) => {


    if (searchMenu.trim().length === 0) {
        const filteredIdx = Object.keys(menu.menu.items).map((dish) => { return dish });
        setFilteredMenu(filteredIdx);
        return;
    } else {
        const filteredData = Object.keys(menu.menu.items).filter((eachMenu) => { return menu.menu.items[eachMenu].name.toLowerCase().includes(searchMenu.toLowerCase().trim()) })

        setFilteredMenu(filteredData);

    }

}




const CardDetails = () => {
    const { id } = useParams();
    const [searchMenu, setSearchMenu] = useState("");
    const [filteredMenu, setFilteredMenu] = useState([]);
    const menu = useMenu(id, setFilteredMenu);

    return (menu?.length === 0) ?
        <div className="grow">
            <div className=" flex justify-center p-3 bg-gray-600 flex-wrap shadow-md ">
                <input className="p-2 text-lg w-1/2 rounded-l-md focus:bg-amber-200" type="text"
                    value={searchMenu} placeholder="Dish Name" onChange={(e) => { setSearchMenu(e.target.value) }} />
                <button className="text-lg font-semibold px-1 bg-amber-400 rounded-r-md" onClick={() => { handleSearch(menu, searchMenu, setFilteredMenu) }}>Search</button>
            </div>
            <Shimmer />
        </div>

        : (
            <div className="grow">

                <div className=" flex justify-center p-3 bg-gray-600 flex-wrap shadow-md ">
                    <input className="p-2 text-lg w-1/2 rounded-l-md focus:bg-amber-200" type="text"
                        value={searchMenu} placeholder="Dish Name" onChange={(e) => { setSearchMenu(e.target.value) }} />
                    <button className="text-lg font-semibold px-1 bg-amber-400 rounded-r-md" onClick={() => { handleSearch(menu, searchMenu, setFilteredMenu) }}>Search</button>
                </div>


                {/* Restaurant Card & Menu Container */}
                <div className=" p-5 text-gray-800  flex-wrap">

                    {/* Restaurant Card */}
                    <div className=" bg-gray-500 flex rounded-lg flex-wrap shadow-xl mb-4">

                        {/* <div className="  "> */}
                        <img className="lg:w-1/4 sm:w-1/3 md:w-1/4 mr-4 rounded-lg " src={CLOUDINARY_IMG_BASE_URL + menu[0]?.card?.card?.info?.cloudinaryImageId} />
                        {/* </div> */}
                        <div className=" font-semibold ">
                            <h1 className="font-bold text-4xl text-white">{menu[0]?.card?.card?.info?.name}</h1>
                            <h1 className="font-semibold text-xl text-white">{menu[0]?.card?.card?.info?.cuisines?.join(", ")} </h1>
                            <h1 className="text-lg text-white">{menu[0]?.card?.card?.info?.area}, {menu[0]?.card?.card?.info?.city}</h1>
                            <h1 className="text-lg text-white">{menu[0]?.card?.card?.info?.avgRating}⭐</h1>
                            {/* <h1 className="text-lg text-white">{menu[0]?.card?.card?.info?.isVeg ? "Veg🥦" : "Non-Veg🥩"}</h1> */}

                            {/* <button className="bg-orange-500 px-2 py-1 text-xl rounded-md hover:bg-orange-400">Order</button> */}
                        </div>

                    </div>


                    {/* Menu Container... */}

                    <div className="flex flex-wrap justify-center ">
                        {menu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((dishId) => { return <MenuCard key={dishId?.card?.info?.id} item={dishId?.card?.info} /> })}
                    </div>


                </div>

                {/* Restaurant Card and Menu Container Ending */}



            </div>
        )
}

export default CardDetails;