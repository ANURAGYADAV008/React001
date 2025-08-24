import { useState,useEffect } from "react";
const useRestaurant=()=>{
    const [allRestaurants, setAllRestaurants] = useState([]); // original full list
    const [restaurants, setRestaurants] = useState([]);       // filtered list

    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.470502&lng=77.4822579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await res.json();

        // Extract restaurant list from API
        const list =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setAllRestaurants(list); // keep original
        setRestaurants(list);    // show initially
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
        fetchData();

    },[])

    return {restaurants,setRestaurants,allRestaurants,setAllRestaurants}
}
export default useRestaurant;