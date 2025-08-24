import React from "react";
import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [menuItem, setMenuItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetchRestaurantMenu()
  },[]);
    const fetchRestaurantMenu = async () => {
      try {
        const res = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.470502&lng=77.4822579&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const data = await res.json();
        const list = data?.data?.cards || [];
        setMenuItem(list);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  return { menuItem, loading, error };
};

export default useRestaurantMenu;