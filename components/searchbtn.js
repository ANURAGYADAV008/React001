import { useState } from "react";

const SearchBtn = ({ restaurants, setRestaurants }) => {
  const [text, setText] = useState(""); // start with empty string
  console.log("Rerender")

  const SearchFood = () => {
    const SearchItem = restaurants.filter((item) =>
      item.info.name.toLowerCase().includes(text.toLowerCase()) // case-insensitive search
    );
    setRestaurants(SearchItem);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 ml-3"
      />
      <button
        className="my-6 mx-3 bg-orange-500 h-10 w-20 text-white rounded-lg hover:bg-orange-600"
        onClick={SearchFood}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBtn;
