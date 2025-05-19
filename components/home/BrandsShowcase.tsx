import Image from "next/image";

const brands = [
  "borgwarner", "holset", "melett", "ihi", "cojali", "epr", 
  "airwerks", "behr", "garrett", "mitsubishi"
];

export default function BrandsShowcase() {
  return (
    <div className="py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {brands.slice(0, 5).map((brand) => (
          <div 
            key={brand} 
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
          >
            <Image
              src={`/images/brand-${brand}.png`}
              alt={brand}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {brands.slice(5).map((brand) => (
          <div 
            key={brand} 
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
          >
            <Image
              src={`/images/brand-${brand}.png`}
              alt={brand}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}