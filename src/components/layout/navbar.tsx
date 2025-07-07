"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
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
          <Image src={"/logo.png"} alt="logo" width={100} height={100} className="w-6 h-6 bg-white rounded-full mr-5" />
          <div className="flex space-x-4">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="text-xs"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <Search className="w-4 h-4" />
          <ShoppingBag className="w-4 h-4" />
          <div className="flex items-center justify-center space-x-4 text-xs cursor-pointer">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  )
}
