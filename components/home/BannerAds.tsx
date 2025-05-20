import Image from "next/image";
import Link from "next/link";

export default function BannerAds() {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link href="/promocija/novo-turbo" className="block overflow-hidden rounded-lg shadow-md">
        <Image
          src="/images/turbo-product.webp"
          alt="New turbo products"
          width={600}
          height={300}
          className="w-full object-cover"
        />
      </Link>
      <Link href="/promocija/turbo-racing" className="block overflow-hidden rounded-lg shadow-md">
        <Image
          src="/images/turbo-product.webp"
          alt="Turbo racing"
          width={600}
          height={300}
          className="w-full object-cover"
        />
      </Link>
    </div>
  );
}