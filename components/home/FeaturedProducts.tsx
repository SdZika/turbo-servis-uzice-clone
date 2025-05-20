"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

// Mock products data
const products = Array(5).fill({
  id: "bmw-730d",
  name: "BMW 730d E38 193HP - REMONTOVAN",
  price: "70.800,00 RSD",
  image: "/images/turbo-product.webp",
  inWishlist: false,
  onSale: true
});

export default function FeaturedProducts() {
  const [productsState, setProductsState] = useState(products);

  const toggleWishlist = (index: number) => {
    const newProductsState = [...productsState];
    newProductsState[index] = {
      ...newProductsState[index],
      inWishlist: !newProductsState[index].inWishlist
    };
    setProductsState(newProductsState);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {productsState.map((product, index) => (
        <div key={index} className="bg-white rounded shadow-md p-4 flex flex-col">
          {/* Sale badge */}
          {product.onSale && (
            <div className="bg-[#003366] text-white text-xs px-2 py-1 inline-block self-start mb-2">
              Akcija
            </div>
          )}
          
          {/* Product image */}
          <div className="relative mb-4">
            <Link href={`/proizvod/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto"
              />
            </Link>
            
            {/* Wishlist button */}
            <button 
              className="absolute top-2 right-2"
              onClick={() => toggleWishlist(index)}
            >
              <Heart 
                className={`h-5 w-5 ${
                  product.inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'
                }`} 
              />
            </button>
          </div>
          
          {/* Product info */}
          <Link 
            href={`/proizvod/${product.id}`}
            className="text-sm font-medium mb-2 hover:text-[#003366] flex-grow"
          >
            {product.name}
          </Link>
          
          {/* Price and add to cart */}
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-[#003366]">{product.price}</span>
            <button className="bg-[#003366] text-white p-2 rounded-md hover:bg-opacity-90">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}