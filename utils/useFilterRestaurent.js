const useFilterRestaurent = (menuItem = []) => {
  // Step 1: Go inside menuItem[4]
  const regularCards = menuItem[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Step 2: Extract only ItemCategory
  const categories = regularCards
    .map(c => c?.card?.card)
    .filter(c => c?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return { categories };
};

export default useFilterRestaurent;
