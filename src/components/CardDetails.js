import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_IMG_BASE_URL } from "../assets/resources";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer.js";
import useMenu from "../utils/useMenu";



const handleSearch = (menu, searchMenu, setFilteredMenu) => {
 

    if (searchMenu.trim().length === 0  ) {
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

    return (filteredMenu?.length === 0) ?
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

                <div className="flex  p-5 text-gray-800  flex-wrap">



                    <div className="flex flex-col gap-2 w-1/5 flex-wrap ">
                        <div className="sticky top-1 ">
                            {/* <div className="  "> */}
                            <img className="w-fit" src={CLOUDINARY_IMG_BASE_URL + menu?.cloudinaryImageId} />
                            {/* </div> */}
                            <div className=" font-semibold ">
                                <h1 className="font-bold text-4xl text-gray-800">{menu?.name}</h1>
                                <h1 className="font-semibold text-xl text-gray-800">{menu?.cuisines.join(", ")} </h1>
                                <h1 className="text-lg">{menu?.area}, {menu?.city}</h1>
                                <h1 className="text-lg">{menu?.avgRating}⭐</h1>
                                <h1 className="text-lg">{menu?.isVeg ? "Veg🥦" : "Non-Veg🥩"}</h1>

                                {/* <button className="bg-orange-500 px-2 py-1 text-xl rounded-md hover:bg-orange-400">Order</button> */}
                            </div>
                        </div>
                    </div>
                    {/* Menu Container... */}
                    <div className="flex  w-4/5 ">
                        <div className="flex flex-wrap justify-center">
                            {filteredMenu?.map((dishId) => { return <MenuCard key={menu?.menu?.items[dishId]?.id} item={menu?.menu?.items[dishId]} /> })}
                        </div>
                    </div>


                </div>
            </div>
        )
}

export default CardDetails;