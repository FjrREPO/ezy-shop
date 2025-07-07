"use client"

import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Electronics",
    href: "/categories/electronics",
  },
  {
    title: "Fashion",
    href: "/categories/mens-fashion",
  },
  {
    title: "Home & Living",
    href: "/categories/home-living",
  },
  {
    title: "Sports & Outdoor",
    href: "/categories/sports-outdoor",
  },
  {
    title: "Office & School Supplies",
    href: "/categories/office-school",
  }
];

export function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-background/80 px-5 sm:px-20">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-5">
          <Link href="/" className="flex items-center">
            <Image src={"/logo.png"} alt="Pixora Logo" width={100} height={100} className="w-6 h-6 bg-white rounded-full mr-5" />
            <span className="text-xl font-bold">Pixora</span>
          </Link>
          <div className="flex space-x-4">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="text-xs hover:text-primary transition-colors"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <Search className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
          <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
          <div className="flex items-center justify-center space-x-4 text-xs">
            <button className="hover:text-primary transition-colors">Sign In</button>
            <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md hover:bg-primary/90 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
