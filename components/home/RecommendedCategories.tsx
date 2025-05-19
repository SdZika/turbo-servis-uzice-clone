import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { 
    title: 'DPF FILTERI', 
    image: '/images/dpf-filter.png', 
    link: '/kategorija/dpf-filteri' 
  },
  { 
    title: 'PUMPE ZA VODU', 
    image: '/images/water-pump.png', 
    link: '/kategorija/pumpe-za-vodu' 
  },
  { 
    title: 'TUNING', 
    image: '/images/tuning.png', 
    link: '/kategorija/tuning' 
  },
  { 
    title: 'TURBOKOMPRESORI', 
    image: '/images/turbocharger.png', 
    link: '/kategorija/turbokompresori' 
  }
];

export default function RecommendedCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={category.link}
          className="bg-[#9CC31C] rounded-md overflow-hidden relative h-[150px] hover:bg-opacity-90 transition-all"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={category.image}
              alt={category.title}
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
          </div>
          <div className="absolute bottom-0 w-full bg-[#003366] text-white text-center py-2">
            {category.title}
          </div>
        </Link>
      ))}
    </div>
  );
}