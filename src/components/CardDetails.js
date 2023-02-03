import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cloudinary_img_base_url, menu_url } from "../assets/resources";

async function fetchMenu(setMenu,id){
    const res = await fetch(menu_url+id);
    const data = await res.json();
    console.log(Object.values(data)[1]);
    setMenu(Object.values(data)[1]);
}

const CardDetails = () => {
    const {id} = useParams();

    const [menu,setMenu] = useState([]);


    useEffect(()=>{
        fetchMenu(setMenu,id);
    },[]);

    return(menu.length === 0)?
    null 
    :(
        <div className="flex grow p-5">
           <div className="w-1/3 ">
           <img className="w-fit" src={cloudinary_img_base_url+menu.cloudinaryImageId}  />
           </div>
            <div className=" rounded-md w-full pl-8 font-semibold text-gray-800">
           <h1 className="font-bold text-3xl text-gray-800">{menu.name}</h1>
           <h1 className="font-semibold text-gray-800">{menu.cuisines.join(", ")} </h1> 
           <h1>{menu.area}, {menu.city}</h1>
           <h1>{menu.avgRating}⭐</h1>
           <h1>{menu.isVeg?"Veg🥦":"Non-Veg🥩"}</h1>
           <h1>{menu.costForTwoMsg}</h1>
           <button className="bg-orange-500 px-2 py-1 text-xl rounded-md hover:bg-orange-400">Order</button>

            </div>
        </div>
    )
}

export default CardDetails;