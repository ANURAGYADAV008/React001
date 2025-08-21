import { ShoppingCart } from "lucide-react";
const Header = () => {
  return (
    <header className=" sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <img
          src="https://img.freepik.com/premium-vector/food-delivery-online-concept-vector_1162942-1594.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Logo"
          className="h-14 w-14 rounded-full object-cover"
        />
        <span className="text-2xl font-bold text-amber-500">Foodie🍔</span>
      </div>
      <nav>
        <ul className="flex gap-8 text-lg font-medium text-gray-700 mx-10">
          <li className="hover:text-amber-500 cursor-pointer">Home</li>
          <li className="hover:text-amber-500 cursor-pointer">About Us</li>
          <li className="hover:text-amber-500 cursor-pointer">Contact Us</li>
          <li className="hover:text-amber-500 cursor-pointer">Menu</li>
          <li className="hover:text-amber-500 cursor-pointer">
            <ShoppingCart size={32} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
