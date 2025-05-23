import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-6 pb-4">
      <div className="container mx-auto px-4">
        {/* Logo and social links */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 pb-6 border-b border-[#9CC31C]">
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
            <Link href="#" className="bg-[#9CC31C] text-[#003366] p-2 rounded-xl">
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-[#9CC31C] text-[#003366] p-2 rounded-xl">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-[#9CC31C] text-[#003366] p-2 rounded-xl">
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-[#9CC31C] text-[#003366] p-2 rounded-xl">
              <FaTwitter className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Footer links and Newsletter in same row */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 pb-6 border-b border-[#9CC31C]">
          <div className="flex flex-wrap justify-center text-sm mb-4 lg:mb-0">
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
          <div className="flex items-center w-full lg:w-auto">
            <div className="text-sm mr-4">Newsletter:</div>
            <div className="flex w-full max-w-md gap-2">
              <input 
                type="email" 
                placeholder="Email adresa" 
                className="flex-grow px-4 py-2 rounded bg-white text-black" 
              />
              <button className="bg-[#9CC31C] px-4 py-2 rounded text-[#003366]">
                Prijavite se
              </button>
            </div>
          </div>
        </div>

        {/* Payment methods and first copyright paragraph in same row */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">

          {/* First paragraph of copyright */}
          <div className="text-xs lg:max-w-2xl lg:text-left">
            Cena na sajtu su iskazana u dinarima sa uključenim porezom, a plaćanje se vrši isključivo u dinarima. Isporuka se vrši DAILY kurirskom službom na kućnu adresu ili lično prikupljanje narudžbine kupovinom preko sajta, za sve teritorije Republike Srbije sem na teritoriji opštine Užice. Isporuka se vrši od 24h do 72h od momenta potvrde prijema uplate.
          </div>

          {/* Payment methods */}
          <div className="mb-4 lg:mb-0">
            <div className="flex flex-wrap gap-2 pt-2">
              {['visa', 'master', 'intesa'].map((method) => (
                <div key={method} className="bg-white p-2 rounded">
                  <Image 
                    src={`/images/${method}.webp`} 
                    alt={method} 
                    width={40} 
                    height={25}
                    className="h-6 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          
          
        </div>

        {/* Final copyright */}
        <div className="text-xs lg:text-left">
          <p>© 2025 Turbo Servis | Sva prava zadržana. Powered by Creatixe Technologies</p>
        </div>
      </div>
    </footer>
  );
}