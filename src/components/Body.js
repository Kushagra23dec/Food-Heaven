import React,{useEffect, useState} from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { restaurant_url } from "../assets/resources";
import Shimmer from "./Shimmer.js";

async function fetchData(setRestaurants){
    const response = await fetch(restaurant_url);
    const data = await response.json();
    console.log(data?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
     
}

const Body = () => {
    const [restaurants,setRestaurants] = useState([]);

    useEffect(
    ()=>{
       fetchData(setRestaurants);
    },
    []);



    return(restaurants.length === 0)?
   null
    :(
        <div className="flex flex-wrap grow justify-center mt-8 mx-3 " >

            {restaurants.map((restaurant)=>{return <Link key={restaurant.data.id} to={"/carddetail/"+restaurant.data.id} ><Card  {...restaurant.data} /></Link>  })}

        </div >
    )
}

export default Body;