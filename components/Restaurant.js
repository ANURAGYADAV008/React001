import { useParams } from "react-router-dom";
import MenuHeader from "./Menu/MenuHeader";
import useRestaurantMenu from "../utils/useRestaurentmenu";

const RestaurantMenu = () => {
  const {id} = useParams(); // 👈 read restaurantId from URL
 const {menuItem, loading, error}=useRestaurantMenu(id)
  
  return (
    <div>
      <div>
        <MenuHeader menuItem={menuItem}/>
      </div>

      <div>
        {menuItem.map((item, index) => (
          <div key={index}>
           
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu