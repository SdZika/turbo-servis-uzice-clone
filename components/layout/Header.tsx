"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo.webp" 
              alt="Turbo Servis" 
              width={150} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden flex items-center"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#003366]" />
            ) : (
              <Menu className="h-6 w-6 text-[#003366]" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/proizvodi" className="text-[#003366] font-medium px-2 py-1 rounded hover:bg-gray-100">
              Proizvodi
            </Link>
            <Link href="/pocetna" className="text-[#003366] font-medium px-2 py-1 rounded hover:bg-gray-100">
              Početna
            </Link>
            <Link href="/tuning" className="text-[#003366] font-medium px-2 py-1 rounded hover:bg-gray-100">
              Tuning
            </Link>
            <Link href="/akcija" className="text-[#003366] font-medium px-2 py-1 rounded hover:bg-gray-100">
              Akcija
            </Link>
            <Link href="/onama" className="text-[#003366] font-medium px-2 py-1 rounded hover:bg-gray-100">
              O nama
            </Link>
            <Link href="/kontakt" className="text-[#003366] font-medium px-2 py-1 rounded hover:bg-gray-100">
              Kontakt
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Pretražite proizvode"
                className="pl-3 pr-10 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            <Link href="/lista-zelja" className="text-[#003366]">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="/korpa" className="relative text-[#003366]">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-[#9CC31C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/proizvodi" className="text-[#003366] font-medium">
                Proizvodi
              </Link>
              <Link href="/pocetna" className="text-[#003366] font-medium">
                Početna
              </Link>
              <Link href="/tuning" className="text-[#003366] font-medium">
                Tuning
              </Link>
              <Link href="/akcija" className="text-[#003366] font-medium">
                Akcija
              </Link>
              <Link href="/onama" className="text-[#003366] font-medium">
                O nama
              </Link>
              <Link href="/kontakt" className="text-[#003366] font-medium">
                Kontakt
              </Link>
              
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Pretražite proizvode"
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366]"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              
              <div className="flex space-x-4 pt-2">
                <Link href="/lista-zelja" className="text-[#003366] flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Lista želja
                </Link>
                <Link href="/korpa" className="text-[#003366] flex items-center">
                  <div className="relative">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    <span className="absolute -top-2 -right-2 bg-[#9CC31C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                  Korpa
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}