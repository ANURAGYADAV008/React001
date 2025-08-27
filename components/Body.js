import FoodCard from "./Foodcard";
import SearchBtn from "./searchbtn";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRestaurant from "../utils/useRestaurent.js";
import OfflineScreen from "./offlinescreen.js";


const Body = () => {
  const {restaurants,setRestaurants,allRestaurants,setAllRestaurants}=useRestaurant();
  const status=useOnlineStatus();///hooks return boolean value

  // Filter by rating
  const Filter = () => {
    const FilteredRes = allRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setRestaurants(FilteredRes);
  };
  {
  return status==true?(
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
            <Link to={"/restaurants/"+rest.info.id}  key={rest.info.id} >
              
            <FoodCard
              name={rest.info.name}
              price={rest.info.costForTwo}
              time={rest.info.sla?.deliveryTime + " mins"}
              avgRating={rest.info.avgRating}
              image={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                rest.info.cloudinaryImageId
              }
            />
            </Link>
          ))
        )}
      </div>
    </div>
  ):(
    <OfflineScreen/>
  )
}

}

export default Body;

