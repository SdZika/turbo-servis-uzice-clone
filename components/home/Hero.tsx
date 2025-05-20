"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/images/hero-1.webp',
    title: 'BEZBEDNOST BEZ KOMPROMISA',
    subtitle: 'Kvalitet po najstrožijim standardima auto-industrije'
  },
  {
    image: '/images/hero-2.webp',
    title: 'BEZBEDNOST BEZ KOMPROMISA',
    subtitle: 'Kvalitet po najstrožijim standardima auto-industrije'
  },
  {
    image: '/images/hero-3.webp',
    title: 'BEZBEDNOST BEZ KOMPROMISA',
    subtitle: 'Kvalitet po najstrožijim standardima auto-industrije'
  }
];

const heroRight = {
  image: '/images/hero-4.webp',
  title: 'TURBO SERVIS',
  subtitle: 'Kvalitet po najstrožijim standardima auto-industrije'
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 my-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left section - Slider (2/3 width) */}
        <div className="lg:w-2/3">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                
                <div className="absolute inset-0 flex items-end">
                  <div className="p-4 lg:p-6 w-full">
                    <div className="max-w-md bg-white/80 p-4 lg:p-6 rounded-lg mb-4 ml-6">
                      <h1 className="text-xl lg:text-3xl font-bold text-[#003366] mb-2">{slide.title}</h1>
                      <p className="text-sm lg:text-base text-gray-700">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-[#9CC31C]' : 'bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right section - Form (1/3 width) */}
        <div className="lg:w-1/3">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={heroRight.image}
              alt={heroRight.title}
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 flex items-end justify-start">
              <div className="p-4 lg:p-6">
                <div className="bg-white/80 p-4 lg:p-6 rounded-lg mb-4 ml-6" style={{ width: '60%' }}>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-[#003366]">{heroRight.title}</h2>
                    <p className="text-sm text-gray-700">{heroRight.subtitle}</p>
                  </div>
                  
                <div className="space-y-2">
                  <div className="flex relative">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-sm bg-[#003366] text-[#9CC31C] text-sm appearance-none pr-10">
                      <option>Izaberite marku</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                      <svg className="w-4 h-4 text-[#9CC31C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex relative">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-sm bg-[#003366] text-[#9CC31C] text-sm appearance-none pr-10">
                      <option>Izaberite model</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                      <svg className="w-4 h-4 text-[#9CC31C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex relative">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-sm bg-[#003366] text-[#9CC31C] text-sm appearance-none pr-10">
                      <option>Izaberite tip</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                      <svg className="w-4 h-4 text-[#9CC31C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <button className="w-full bg-[#9CC31C] text-[#003366] py-2 px-4 rounded-sm hover:bg-opacity-90 transition-all text-sm">
                    Pretraži
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}