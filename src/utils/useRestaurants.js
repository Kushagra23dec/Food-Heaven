import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../assets/resources";

async function fetchData(setRestaurants) {
    const response = await fetch(RESTAURANT_URL);
    const data = await response.json();
    // console.log(data?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(data?.data?.cards[2]?.data?.data?.cards);

}

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(
        () => {
            fetchData(setRestaurants);
        },
        []);


    return restaurants;
}

export default useRestaurants;