"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/images/hero-1.jpg',
    title: 'BEZBEDNOST BEZ KOMPROMISA',
    subtitle: 'Kvalitet po najstrožijim standardima auto-industrije'
  },
  {
    image: '/images/hero-2.jpg',
    title: 'TURBO SERVIS',
    subtitle: 'Pronađite vaše vozilo'
  }
];

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
    <div className="relative w-full h-[400px] md:h-[500px]">
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
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg bg-white/80 p-6 rounded-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">{slide.title}</h1>
                <p className="text-sm md:text-base text-gray-700 mb-4">{slide.subtitle}</p>
                
                {index === 1 && (
                  <div className="space-y-2">
                    <div className="flex">
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                        <option>Izaberite marku</option>
                      </select>
                    </div>
                    <div className="flex">
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                        <option>Izaberite model</option>
                      </select>
                    </div>
                    <div className="flex">
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                        <option>Izaberite tip</option>
                      </select>
                    </div>
                    <button className="w-full bg-[#9CC31C] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                      Pretraži
                    </button>
                  </div>
                )}
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
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-[#9CC31C]' : 'bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}