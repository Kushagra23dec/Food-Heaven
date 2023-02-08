import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../assets/resources";

async function fetchData(setRestaurants,setFilteredRestaurants) {
    const response = await fetch(RESTAURANT_URL);
    const data = await response.json();
    // console.log(data?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);

}

const useRestaurants = (setFilteredRestaurants) => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(
        () => {
            fetchData(setRestaurants,setFilteredRestaurants);
        },
        []);


    return restaurants;
}

export default useRestaurants;