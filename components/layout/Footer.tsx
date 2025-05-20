import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-10 pb-4">
      <div className="container mx-auto px-4">
        {/* Logo and social links */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="mb-4 lg:mb-0">
            <Image 
              src="/images/logo-white.webp" 
              alt="Turbo Servis" 
              width={150} 
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="bg-[#9CC31C] p-2 rounded-full">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-[#9CC31C] p-2 rounded-full">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-[#9CC31C] p-2 rounded-full">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-[#9CC31C] p-2 rounded-full">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap justify-center text-sm mb-8">
          <Link href="/uslovi-koriscenja" className="mx-2 mb-2 hover:underline">
            Uslovi korišćenja
          </Link>
          <span className="mx-2 mb-2">|</span>
          <Link href="/reklamacije" className="mx-2 mb-2 hover:underline">
            Reklamacije
          </Link>
          <span className="mx-2 mb-2">|</span>
          <Link href="/pravo-odustajanja" className="mx-2 mb-2 hover:underline">
            Pravo na odustajanja
          </Link>
          <span className="mx-2 mb-2">|</span>
          <Link href="/zamena-artikla" className="mx-2 mb-2 hover:underline">
            Zamena artikla
          </Link>
          <span className="mx-2 mb-2">|</span>
          <Link href="/kako-kupiti" className="mx-2 mb-2 hover:underline">
            Kako kupiti
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row justify-center items-center mb-8">
          <div className="text-sm mr-4 mb-4 lg:mb-0">Newsletter:</div>
          <div className="flex w-full max-w-md">
            <input 
              type="email" 
              placeholder="Email adresa" 
              className="flex-grow px-4 py-2 rounded-l text-black" 
            />
            <button className="bg-[#9CC31C] px-4 py-2 rounded-r">
              Prijavite se
            </button>
          </div>
        </div>

        {/* Payment methods */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {['visa', 'mastercard', 'bank'].map((method) => (
              <div key={method} className="bg-white p-2 rounded">
                <Image 
                  src={`/images/payment-${method}.png`} 
                  alt={method} 
                  width={40} 
                  height={25}
                  className="h-6 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center">
          <p className="mb-4">
            Cena na sajtu su iskazana u dinarima sa uključenim porezom, a plaćanje se vrši isključivo u dinarima. Isporuka se vrši DAILY kurirskom službom na kućnu adresu ili lično prikupljanje narudžbine kupovinom preko sajta, za sve teritorije Republike Srbije sem na teritoriji opštine Užice. Isporuka se vrši od 24h do 72h od momenta potvrde prijema uplate.
          </p>
          <p>© 2025 Turbo Servis | Sva prava zadržana. Powered by Creatixe Technologies</p>
        </div>
      </div>
    </footer>
  );
}
