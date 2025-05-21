import Image from "next/image";

export default function BrandsShowcase() {
  return (
    <div className="w-full">
      <Image
        src="/images/distribucija.webp" // Replace with your actual image
        alt="Brands Showcase"
        width={1200}   // Set based on actual image dimensions
        height={170}   // Set based on actual image dimensions
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
