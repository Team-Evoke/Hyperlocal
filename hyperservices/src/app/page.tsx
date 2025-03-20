"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">Feane</div>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-yellow-500">
            HOME
          </Link>
          <Link href="/card" className="hover:text-yellow-500">
            MENU
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            ABOUT
          </Link>
          <Link href="/book-table" className="hover:text-yellow-500">
            BOOK TABLE
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full">
            Order Online
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-[Great Vibes] mb-4">Fast Food Restaurant</h1>
          <p className="max-w-md mx-auto mb-6">
            Doloremque, iaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full">
            Order Now
          </button>
        </div>
        <div className="mt-8">
          <img
            src="https://placehold.co/600x400"
            alt="A delicious burger with fries on a wooden board"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex space-x-2 mt-4">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-white rounded-full"></span>
        </div>
      </main>
    </div>
  );
}
