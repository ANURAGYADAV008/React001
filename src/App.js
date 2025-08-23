import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCart } from "lucide-react";
import Header from "../components/header.js";
import Body from "../components/Body.js";
import AboutUs from "../components/AboutUs.js";
import ContactUs from "../components/Contact.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Error from "../components/Error.js";
const Applayout = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Body/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
  },
  {
    path:"/about",
    element:<AboutUs/>
  },
  {
    path:"/contactus",
    element:<ContactUs/>
  },
  {

  }

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
