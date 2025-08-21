import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FoodCard from "./Foodcard"
import SearchBtn from "./searchbtn";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const Filter=()=>{
    const FilteredRes=restaurants.filter((res)=>res.info.avgRating>4.5);
    setRestaurants(FilteredRes);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4702433&lng=81.84839099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await res.json();

        // Extract restaurant list from API
        const list =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setRestaurants(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex">
       <SearchBtn/>
        <button className="my-6 px-4 py-2 bg-orange-500 h-10 w-20  text-white rounded-lg hover:bg-orange-600" onClick={()=>{Filter()}}>Filter</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      
      {restaurants.length === 0 ? (
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-blue-100">
            <div ></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      ) : (
        restaurants.map((rest) => (
          <FoodCard
            key={rest.info.id}
            name={rest.info.name}
            price={rest.info.costForTwo}
            time={rest.info.sla?.deliveryTime + " mins"}
            avgRating={rest.info.avgRating}
            image={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              rest.info.cloudinaryImageId
            }
          />
        ))
      )}
    </div>
    </div>
    
  );
};
export default Body;