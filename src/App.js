
import ReactDOM from "react-dom/client";
import { ShoppingCart } from "lucide-react";
import Header from "../components/header.js";
import Body from "../components/Body.js";
import ContactUs from "../components/Contact.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "../components/Restaurant.js";
//import Grocery from "../components/Grocery.js";
import Error from "../components/Error.js";
import { lazy ,Suspense} from "react";
import Shimmer from "../components/Shimmer.js";



const Grocery=lazy(()=>import("../components/Grocery.js"));
const AboutUs=lazy(()=>import("../components/AboutUs.js"));
const Applayout = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      }
      ,
      {
    path:"/about",
    element:<Suspense fallback={<Shimmer/>}><AboutUs/></Suspense>
  },
  {
    path:"/contactus",
    element:<ContactUs/>
  },
  {
    path:"/restaurants/:id",
    element:<RestaurantMenu/>
  },
  {
    path:"grocery",
    element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
  }

    ]}

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
