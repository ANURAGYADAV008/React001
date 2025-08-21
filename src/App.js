import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCart } from "lucide-react";
import Header from "../components/header.js";
import Body from "../components/Body.js";
const Applayout = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
