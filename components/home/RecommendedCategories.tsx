import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { 
    title: 'DPF FILTERI', 
    image: '/images/dpf-filter.webp', 
    link: '/kategorija/dpf-filteri' 
  },
  { 
    title: 'PUMPE ZA VODU', 
    image: '/images/water-pump.webp', 
    link: '/kategorija/pumpe-za-vodu' 
  },
  { 
    title: 'TUNING', 
    image: '/images/tuning.webp', 
    link: '/kategorija/tuning' 
  },
  { 
    title: 'TURBOKOMPRESORI', 
    image: '/images/turbocharger.webp', 
    link: '/kategorija/turbokompresori' 
  }
];

export default function RecommendedCategories() {

  return (
    <div className="container mx-auto px-4 my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="bg-[#9CC31C] rounded-md overflow-hidden relative h-56 hover:opacity-90 transition-all"
          >
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Image
                src={category.image}
                alt={category.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-2 right-2 text-white font-bold text-lg text-right">
              {category.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}