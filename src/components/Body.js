import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurants from "../utils/useRestaurants";



const Body = () => {
    const restaurants = useRestaurants();

    return (restaurants.length === 0) ?
        <Shimmer />
        : (
            <div className="flex flex-wrap grow justify-center mt-8 mx-3 " >

                {restaurants.map(
                    (restaurant) => { return <Link key={restaurant.data.id} to={"/carddetail/" + restaurant.data.id} ><Card  {...restaurant.data} /> </Link> })
                }

            </div >
        )









}

export default Body;
