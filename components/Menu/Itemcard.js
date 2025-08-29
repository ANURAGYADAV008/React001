const ItemCards = ({ itemCards }) => {
  console.log(itemCards); // Now directly the array
  return (
    <div className="space-y-6">
      {itemCards?.map((item, idx) => {
        const info = item?.card?.info;
        return (
          <div
            key={idx}
            className="flex justify-between items-start gap-4 border-b pb-4"
          >
            {/* Left side */}
            <div className="flex-1">
              <h3 className="text-base font-semibold">{info?.name}</h3>
              <p className="text-gray-700 font-medium">
                ₹{(info?.price || info?.defaultPrice) / 100}
              </p>
              {item.card.info.description}
              <p>

              </p>
            </div>

            {/* Right side */}
            <div className="relative w-28 h-24">
              <img
                src={`https://media-assets.swiggy.com/${info?.imageId}`}
                alt={info?.name}
                className="w-full h-full object-cover rounded-xl shadow"
              />
              <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white text-green-600 px-3 py-1 text-sm font-medium rounded-md shadow-md hover:bg-green-100">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCards;

