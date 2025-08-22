const Shimmer = () => {
  return (
    <>
      {Array(8).fill("").map((_, i) => (
        <div
          key={i}
          className=" shadow-sm p-4 w-64 bg-gray-100 opacity-70 rounded-2xl"
        >
          {/* Blank image with same size as FoodCard image */}
          <div className="w-full h-40 bg-gray-200 opacity-60 rounded-4xl"></div>

          {/* Blank text placeholders */}
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-200 opacity-60 rounded-none w-3/4"></div>
            <div className="h-4 bg-gray-200 opacity-60 rounded-none w-1/2"></div>
            <div className="h-4 bg-gray-200 opacity-60 rounded-none w-2/3"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Shimmer;


