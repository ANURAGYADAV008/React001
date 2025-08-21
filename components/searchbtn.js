
const SearchBtn = () => {
  return (
   <div>
    {/*<input type="text" placeholder="Search Item" className="text-2xl my-6 ml-2.5 h-8.5 pl-2"></input>*/}
    <input
  type="text"
  placeholder="Search Item"
  className="border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded-lg p-2 ml-3"
/>
 <button className="my-6 mx-3 bg-orange-500 h-10 w-20 text-white rounded-lg hover:bg-orange-600">
       Search
     </button>
   </div>
  );
};

export default SearchBtn;
