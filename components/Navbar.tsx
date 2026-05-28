"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const itemNav = [
  { name: "home", path: "/", placeholder: "Home" },
  { name: "products", path: "/products", placeholder: "Products" },
  { name: "watchlist", path: "/watchlist", placeholder: "Watchlist" },
  { name: "categories", path: "/categories", placeholder: "Categories" },
  { name: "create_product", path: "/products/create", placeholder: "Create" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex px-3 py-4 justify-between items-center md:px-14">
        <h1 className="text-4xl text-gray-800 font-bold md:text-6xl">
          BiD<span className="text-orange-800">IT</span>
        </h1>
        <div className="flex flex-row gap-4 items-center">
          <div className="hidden md:flex items-center">
            <Link href="/login" className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md font-bold">
              Login
            </Link>
            <Link href="/signup" className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md font-bold">
              Sign Up
            </Link>
          </div>
          <div className="flex flex-row gap-2 items-center bg-amber-800 text-gray-100 px-4 py-2 rounded hover:bg-amber-900">
            <ShoppingCart />
            <p className="text-gray-100 md:text-2xl">$100.00</p>
          </div>
        </div>
      </header>

      <nav className="flex flex-row justify-between">
        <div className="hidden w-full items-center md:flex flex-row bg-gray-800 px-14">
          {itemNav.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-white text-lg px-8 py-5 hover:bg-amber-800"
            >
              {item.placeholder}
            </Link>
          ))}
        </div>
        <div className="bg-gray-800 w-full flex flex-row justify-end gap-4 lg:w-[20%] border-gray-600 px-5 text-gray-400 items-center">
          <input
            type="search"
            placeholder="Search a product"
            className="bg-transparent p-3 text-gray-400 placeholder:text-gray-500 focus:outline-none"
          />
          <Search />
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="text-gray-400" /> : <Menu className="text-gray-400" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col bg-gray-800 md:hidden">
          {itemNav.map((item) => (
            <Link
              key={item.name}
              href={'/'}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg px-8 py-4 hover:bg-amber-800 border-gray-700"
            >
              {item.placeholder}
            </Link>
          ))}
          <div className="flex gap-4 px-8 py-4">
            <Link href="/login" className="text-gray-300 font-bold hover:text-white">Login</Link>
            <Link href="/signup" className="text-gray-300 font-bold hover:text-white">Sign Up</Link>
          </div>
        </div>
      )}
    </>
  );
}