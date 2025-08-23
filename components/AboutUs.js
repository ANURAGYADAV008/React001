import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-orange-500 mb-4">About Foodie</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-10">
        Welcome to <span className="font-semibold text-orange-600">Foodie</span>, 
        your go-to food delivery app. We connect hungry customers with their favorite restaurants, 
        bringing delicious meals right to their doorsteps.
      </p>

      {/* Mission / Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">🍽️ Our Mission</h2>
          <p className="text-gray-600">
            At Foodie, our mission is simple – to make food delivery fast, easy, 
            and enjoyable. We believe everyone deserves access to their favorite meals 
            without the hassle of long waits or complicated processes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">🚀 Our Vision</h2>
          <p className="text-gray-600">
            We aim to become the most loved food delivery app by combining technology, 
            convenience, and customer satisfaction. With Foodie, food is always just a tap away.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Why Choose Foodie?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">⚡ Fast Delivery</h3>
            <p className="text-gray-600">Get your food delivered hot and fresh in record time.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🥗 Wide Variety</h3>
            <p className="text-gray-600">Choose from hundreds of restaurants and cuisines.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">💳 Easy Payments</h3>
            <p className="text-gray-600">Pay seamlessly with multiple secure payment options.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
