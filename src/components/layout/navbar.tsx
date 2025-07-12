"use client"

import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Pixora Logo" 
                width={24} 
                height={24} 
                className="w-6 h-6 bg-white rounded-full" 
              />
              <span className="text-xl font-bold text-foreground">Pixora</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-200" />
            {/* <ShoppingBag className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-200" />
            <div className="flex items-center space-x-3">
              <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
                Sign In
              </button>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
                Sign Up
              </button>
            </div> */}
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-200" />
            {/* <ShoppingBag className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-200" /> */}
            <button
              onClick={toggleMobileMenu}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/10">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.title}
                </Link>
              ))}
            </div>

            {/* <div className="pt-4 border-t border-border/10 space-y-3">
              <button 
                className="w-full text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </button>
              <button 
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg text-base font-medium hover:bg-primary/90 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}