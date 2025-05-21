"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

// Mock products data
const products = Array(15).fill({
  id: "bmw-730d",
  name: "BMW 730d E38 193HP - REMONTOVAN",
  price: "70.800,00 RSD",
  image: "/images/turbo-product.webp",
  inWishlist: false,
  onSale: true,
  discount: "15%" // Added discount percentage
});

export default function FeaturedProducts() {
  const [productsState, setProductsState] = useState(products);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener("resize", checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  
  // Calculate how many products to show per page based on screen size
  const productsPerPage = isMobile ? 1 : 5;
  const pageCount = Math.ceil(productsState.length / productsPerPage);
  
  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };
  
  const toggleWishlist = (index: number) => {
    const newProductsState = [...productsState];
    newProductsState[index] = {
      ...newProductsState[index],
      inWishlist: !newProductsState[index].inWishlist
    };
    setProductsState(newProductsState);
  };
  
  // Get products for current page
  const displayedProducts = productsState.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {displayedProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-md shadow-md p-4 flex flex-col relative h-full">
            {/* Sale badge, discount, and wishlist in same row */}
            <div className="flex justify-between items-start mb-2">
              {product.onSale && (
                <div className="flex flex-col items-start">
                  <div className="bg-[#003366] text-white text-xs px-2 py-1 inline-block mb-1 rounded-sm">
                    Akcija
                  </div>
                  <div className="bg-[#9CC31C] text-white text-xs px-2 py-1 inline-block rounded-sm">
                    {product.discount}
                  </div>
                </div>
              )}
              
              {/* Wishlist button - now in the same row as Akcija */}
              <button
                onClick={() => toggleWishlist(index + currentPage * productsPerPage)}
              >
                <Heart
                  className={`h-5 w-5 ${
                    product.inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
            
            {/* Product image */}
            <div className="relative my-4">
              <Link href={`/proizvod/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </Link>
            </div>
            
            {/* Product info */}
            <Link
              href={`/proizvod/${product.id}`}
              className="text-sm font-medium mb-2 hover:text-[#003366] flex-grow"
            >
              {product.name}
            </Link>
            
            {/* Price */}
            <div className="mt-2">
              <span className="font-bold text-[#003366]">{product.price}</span>
            </div>
            
            {/* Add to cart - positioned in the bottom right */}
            <button className="bg-[#003366] text-white p-2 rounded-tl-md rounded-br-md hover:bg-opacity-90 absolute bottom-0 right-0">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      
      {/* Carousel dots */}
      {pageCount > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`w-2 h-2 rounded-full ${
                currentPage === index ? 'bg-[#9CC31C]' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}