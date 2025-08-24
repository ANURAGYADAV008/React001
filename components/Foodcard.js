import { Link } from "react-router-dom";

const FoodCard = ({ id, name, price, image, time, avgRating }) => {
  return (
    <div className="w-[280px] bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all my-6 cursor-pointer">
        <img
          src={image}
          alt={name}
          className="h-40 w-full object-cover"
        />

      <div className="pl-2 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-lg font-bold text-amber-500">{price}</p>
        <p className="text-sm text-gray-500">⏱ {time}</p>
        <p className="text-sm text-yellow-500">⭐ {avgRating}</p>
      </div>
    </div>
  );
  
};

export default FoodCard;
