import React, { useState, useEffect } from "react";
import FoodCard from "./Foodcard";
import SearchBtn from "./searchbtn";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // original full list
  const [restaurants, setRestaurants] = useState([]);       // filtered list

  // Filter by rating
  const Filter = () => {
    const FilteredRes = allRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setRestaurants(FilteredRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <div>
      <div className="flex">
        <SearchBtn
          restaurants={allRestaurants}   // pass original list here
          setRestaurants={setRestaurants} // update visible list
        />
        <button
          className="my-6 px-4 py-2 bg-orange-500 h-10 w-20 text-white rounded-lg hover:bg-orange-600"
          onClick={Filter}
        >
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {restaurants.length === 0 ? (
           <Shimmer/>
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




