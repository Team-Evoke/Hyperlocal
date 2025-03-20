"use client";

import Link from "next/link";

export default function MenuPage() {
  const menuItems = [
    {
      title: "Big King",
      description:
        "The Big King sandwich is one of the major hamburger products sold by the international fast-food restaurant chain Burger King, and was part of its menu for more than twenty years. As of March 2019, it is sold in the United States under its 1997 Big King XL formulation.",
      image: "https://placehold.co/300x200",
      price: "$12",
    },
    {
      title: "Cheeseburger",
      description:
        "A cheeseburger is a burger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time. Cheeseburgers can include variations in structure, ingredients and composition.",
      image: "https://placehold.co/300x200",
      price: "$8",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-black text-white">
        <nav className="flex space-x-6">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/menu" className="text-yellow-500">Menu</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </nav>
        <div className="text-2xl font-bold">Our Menu</div>
        <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full">
          <Link href="/">Order Now</Link>
        </button>
      </header>

      {/* Menu Section */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Great Vibes, cursive" }}>
          Our Menu
        </h1>
        <div className="flex justify-center mb-8 space-x-4">
          <button className="px-4 py-2 bg-black text-white rounded-full">Hamburger</button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded-full">Drink</button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded-full">Pizza</button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-gray-900 text-white">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg">{item.price}</span>
                <button className="bg-yellow-500 text-white p-2 rounded-full">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-yellow-500 text-white rounded-full">
          <Link href="/">View More</Link>
        </button>
      </div>
    </div>
  );
}
