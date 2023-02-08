import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurants from "../utils/useRestaurants";


const handleSearch = (restaurant,searchTxt,setFilteredRestaurants)=>{


    if(searchTxt.length === 0 || searchTxt === " "){
        setFilteredRestaurants(restaurant);
        return;
    }else {
        const filteredData = restaurant.filter((restaurantName)=>{return restaurantName.data.name.toLowerCase().includes(searchTxt.toLowerCase()) })
        console.log(filteredData);
        setFilteredRestaurants(filteredData);
        
    }

}


const Body = () => {
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const restaurants = useRestaurants(setFilteredRestaurants);
    const [searchTxt,setSearchTxt] = useState("");

    return (filteredRestaurants?.length === 0) ?
        <div>

             <div className=" flex justify-center p-3 bg-gray-600 flex-wrap ">
                <input className="p-2 text-lg w-1/5 rounded-l-md focus:bg-amber-200" type="text" 
                value={searchTxt} placeholder="Restaurant" onChange={(e)=>{setSearchTxt(e.target.value)}} />
                <button className="text-lg font-semibold px-1 bg-amber-400 rounded-r-md" onClick={()=>{handleSearch(restaurants,searchTxt,setFilteredRestaurants)}}>Search</button>
                </div>
                
                <Shimmer />
        </div>
        : (
            <div className="grow">
             
                <div className=" flex justify-center p-3 bg-gray-600 flex-wrap ">
                <input className="p-2 text-lg w-1/2 rounded-l-md focus:bg-amber-200" type="text" 
                value={searchTxt} placeholder="Restaurant" onChange={(e)=>{setSearchTxt(e.target.value)}} />
                <button className="text-lg font-semibold px-1 bg-amber-400 rounded-r-md" onClick={()=>{handleSearch(restaurants,searchTxt,setFilteredRestaurants)}}>Search</button>
                </div>


            <div className="flex flex-wrap grow justify-center mt-8 mx-3 " >

                {filteredRestaurants?.map(
                    (filteredRestaurant) => { return <Link key={filteredRestaurant?.data?.id} to={"/carddetail/" + filteredRestaurant?.data?.id} ><Card  {...filteredRestaurant?.data} /> </Link> })
                }

            </div >
            </div>
        )

 
}

export default Body;
