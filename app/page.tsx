import Hero from '@/components/home/Hero'; 
import RecommendedCategories from '@/components/home/RecommendedCategories';
import BannerAds from '@/components/home/BannerAds';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandsShowcase from '@/components/home/BrandsShowcase';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      
      <div className="container mx-auto px-4 py-8">
        <Hero />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-lg font-medium mb-6">Za vas izdvajamo</h2>
        <RecommendedCategories />
      </div>
      
      <div className="w-full my-8">
        <BannerAds />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-lg font-medium mb-6">Možda će vas zanimati</h2>
        <h3 className="text-center text-xl font-bold mb-6 text-[#333333]">Preporučeni proizvodi</h3>
        <FeaturedProducts />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <p className="text-sm">Turbo Servis je ovlašćeni serviser i distributer</p>
          <h3 className="text-xl font-bold text-[#333333]">Najvećih svetskih proizvođača turbokompresora</h3>
        </div>
        <BrandsShowcase />
      </div>
    </main>
  );
}
