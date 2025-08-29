const useFilterRestaurent=(menuItem)=>{

    const filteredItems = menuItem.filter(category => 
  category?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(
    cardObj => cardObj?.card?.card?.["@type"] ===
               "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
);

return {filteredItems};
    
}
export default useFilterRestaurent;