import { useParams } from "react-router-dom";
import { useState } from "react";
import MenuHeader from "./Menu/MenuHeader";
import useRestaurantMenu from "../utils/useRestaurentmenu";
import useFilterRestaurent from "../utils/useFilterRestaurent";
import RestaurentCategeory from "./Menu/RestaurentCategeory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { menuItem , loading, error } = useRestaurantMenu(id);
  const {categories =[]} = useFilterRestaurent(menuItem);
  console.log("ONE")
  console.log(categories);

  return (
    <div className="max-w-3xl mx-auto p-4">
  <MenuHeader menuItem={menuItem} />

  <div className="mt-6 space-y-4">
    {categories.map((categeory, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-2xs overflow-hidden p-2 text-1xl "
      >
        <RestaurentCategeory categeory={categeory} />
      </div>
    ))}
  </div>
</div>

)
      
};

export default RestaurantMenu;
