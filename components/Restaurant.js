import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuHeader from "./Menu/MenuHeader";

const RestaurantMenu = () => {
  const {id} = useParams(); // 👈 read restaurantId from URL
  const [menuItem, setMenuItem] = useState([]);

  const fetchRestaurantMenu = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.470502&lng=77.4822579&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await res.json();
      console.log(data);
      const list =
        data?.data?.cards|| [];
      setMenuItem(list);
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  
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